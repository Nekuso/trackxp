import {React,useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { StyledView } from '../../styles/View.styled';
import { collection, onSnapshot, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import QRCode from 'qrcode';
import NotFound from "../../img/NotFound.gif";

const View = () => {
  const [order, setOrder] = useState(null);
  const [queryOrder, setQueryOrder] = useState([]);
  const { orderId } = useParams();
  const [qrCode, setQrCode] = useState("");
  const qrLink =`https://nekuso.github.io/trackxp/?#/${orderId}`;


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

  return (
    <StyledView>
      {order ? 
      <div className="single__page__section">
          <div className="update__controls">
            <Link to="/" className="home__link">
                <i className='bx bxs-analyse'></i>
                <h2>Track<mark>XP</mark></h2>
            </Link>
          </div>
          <div className="order__cycle__container">
              {order.cycleStatusCollection ? order.cycleStatusCollection.map((item, index) => (
                  <div className="order__cycle__item" key={index}>
                      <i className={`bx ${item.icon}`}></i>
                      <div className="order__cycle__title">
                          <p className="cycle__title">{item.name}</p>
                          <p className="cycle__stamp">{item.timeStamp}</p>
                      </div>
                  </div>
              )): <div style={{textAlign: 'center', width: '100%', fontWeight: "bold"}}>Loading</div>}
          </div>
          <div className="order__info__container">
              <div className="order__info">
                  <img src={qrCode} alt="qrcode" />
                  <div className="order__title">
                      <h2 className="order__id">ORDER ID: {order.orderId}</h2>
                      <p href={qrLink}>nekuso.github.io/trackxp/?#/{order.orderId}</p>
                  </div>
                  <div className="order__desc">
                      <div className="left">
                          <div className="item__desc">
                              <p className="item__title">Order Date</p>
                              <p>{order.dateCreated}</p>
                          </div>
                          <div className="item__desc">
                              <p className="item__title">Name</p>
                              <p>{order.firstName + " " + order.lastName}</p>
                          </div>
                          <div className="item__desc">
                              <p className="item__title">Payment</p>
                              <p>{order.payment}</p>
                          </div>
                      </div>
                      <div className="right">
                          <div className="item__desc">
                              <p className="item__title">Contact No.</p>
                              <p>{order.contact}</p>
                          </div>
                          <div className="item__desc">
                              <p className="item__title">Price</p>
                              <p>P {order.total}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="order__table__container">
              <table className="order__table">
                  <thead>
                      <tr className="header">
                          <th className="particular__align">Particulars</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Total</th>
                      </tr>   
                  </thead>
                  <tbody>
                      {order.particularsData ? order.particularsData.map((item, index) => (
                          <tr key={index}>
                              <td className="particular__align">{item.name}</td>
                              <td>{item.quantity}</td>
                              <td>{item.price}</td>
                              <td>{item.itemTotal}</td>
                          </tr>
                      )) : <tr style={{textAlign: 'center', width: '100%'}}><td>{"Loading"}</td></tr>}

                      <tr>
                          <td className="particular__align grand__total" colSpan="3">Grand Total</td>
                          <td className="grand__total">{order.total}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div> : 
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