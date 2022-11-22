import {React,useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { StyledView } from '../../styles/View.styled';
import { collection, onSnapshot, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import QRCode from 'qrcode';
import NotFound from "../../img/NotFound.gif";
import Loading from "../../img/Loading.gif";
import ViewSingle from '../ViewSingle';
import {AnimatePresence, motion} from "framer-motion"

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

  useEffect(() => {
    setTimeout(()=> {
      setFound(true)
    }, 4000);
  }, [order]);

  const viewVariants = {
    initialHidden: {
      opacity: 0,
    },
    initialVisible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      }
    },
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.5,
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 0.7,
        duration: 1,
      }
    },
    visible2: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: .9,
        duration: 1,
      }
    }
  }

  return (
    <motion.div
      variants={viewVariants}
      initial="initialHidden"
      animate="initialVisible"
      exit="initialHidden"
    >
      <StyledView>
        <AnimatePresence exitBeforeEnter>
          {!found ? <motion.div 
          key={`${found}`}
          className="loading__container">
                <motion.div className="loading__content"
                  variants={viewVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <motion.img src={Loading} alt="" 
                    variants={viewVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  />
                  <motion.h2
                    variants={viewVariants}
                    initial="hidden"
                    animate="visible2"
                    exit="hidden"
                  >Searching for your underwear...</motion.h2>
                </motion.div>
            </motion.div> :
            found && order !== null ?
              <ViewSingle order={order} qrCode={qrCode} qrLink={qrLink}/> :
            <div className="not__found__container">
              <div className="not__found__content">
                <motion.img src={NotFound} alt="" 
                  variants={viewVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                />
                <motion.h2
                  variants={viewVariants}
                  initial="hidden"
                  animate="visible2"
                  exit="hidden"
                >Order Not Found</motion.h2>
                <motion.div
                  variants={viewVariants}
                  initial="hidden"
                  animate="visible2"
                  exit="hidden"
                >
                  <Link to="/" className="home__link">
                    Go Back! →
                  </Link>
                </motion.div>
              </div>
            </div>
          }
        </AnimatePresence>
      </StyledView>
    </motion.div>
  )
}

export default View