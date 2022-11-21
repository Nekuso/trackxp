import {React,useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { StyledView } from '../../styles/View.styled';
import { collection, onSnapshot, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import QRCode from 'qrcode';
import NotFound from "../../img/NotFound.gif";
import Loading from "../../img/Loading.gif";
import ViewSingle from '../ViewSingle';

const View = () => {
  const [order, setOrder] = useState(null);
  const [queryOrder, setQueryOrder] = useState([]);
  const { orderId } = useParams();
  const [qrCode, setQrCode] = useState("");
  const qrLink =`https://nekuso.github.io/trackxp/?#/${orderId}`;
  const [found,setFound] = useState(false)


    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, "orders"),
            (snapShot) => {
                let item = [];
                snapShot.docs.forEach((doc) => {
                item.push({ id: doc.id, ...doc.data() });
                });
                setQueryOrder(item);
            },
            (error) => {
                console.log(error);
            }
        );
        return () => {
            unsub();
            setTimeout(() => {
                setFound(true)
            }, 4000);
        };
    }, []);

  // Generates QR Code
  const GenerateQRCode = () => {
    QRCode.toDataURL(qrLink, (err, url) => {
        if (err) throw err
        setQrCode(url);
    })
  }
  
  useEffect(() => {
      //get order by orders id
      const fetchOrder = async () => {
        try {
          const orderRef = query( collection(db, "orders"), where("orderId", "==", parseInt(orderId)));
          const orderSnap = await getDocs(orderRef);
          orderSnap.forEach((doc) => {
            setOrder(doc.data());
          })
        }
        catch (error) {
          console.log(error);
        }
      }
      
      return () => {
        fetchOrder();
        GenerateQRCode();
      };
  }, [orderId, queryOrder]);

  return (
    <StyledView>
        {!found ?
            <div className="loading__container">
                <div className="loading__content">
                    <img src={Loading} alt="" />
                    <h2>Searching for your underwear...</h2>
                </div>
            </div>: 
            found && order !== null ?
            <ViewSingle order={order} qrCode={qrCode} qrLink={qrLink}/> : 
            <div className="not__found__container">
                <div className="not__found__content">
                    <img src={NotFound} alt="" />
                    <h2>Order Not Found</h2>
                    <Link to="/" className="home__link">
                        Go Back!
                    </Link>
                </div>
            </div>
        }
    </StyledView>
  )
}

export default View