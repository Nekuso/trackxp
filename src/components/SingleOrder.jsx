import React, { useEffect, useState, useRef } from "react";
import { StyledSinglePage } from "../styles/SinglePage.styled";
import { useParams } from "react-router-dom";
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import QRCode from "qrcode";
import { EditModal } from "./EditModal";
import UpdateButton from "./UpdateButton";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useReactToPrint } from "react-to-print";
import { StyledPrintOrderInfo, StyledPrint } from "../styles/printOrderInfo";

const SingleOrder = ({ handleUpdateNotifcation, handleCycleNotification }) => {
  const [order, setOrder] = useState([]);
  const [queryOrder, setQueryOrder] = useState([]);
  const { orderId } = useParams();
  const [docId, setDocId] = useState("");
  const [qrCode, setQrCode] = useState("");
  const qrLink = `https://nekuso.github.io/trackxp/?#/${orderId}`;
  const [isEditModal, setIsEditModal] = useState(false);
  const [cycleCollectionCount, setCycleCollectionCount] = useState(0);

  let componentRef = useRef();

  const handleEditModal = () => {
    setIsEditModal(!isEditModal);
  };

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
      if (err) throw err;
      setQrCode(url);
    });
  };

  useEffect(() => {
    //get order by orders id
    const fetchOrder = async () => {
      const orderRef = query(
        collection(db, "orders"),
        where("orderId", "==", parseInt(orderId))
      );
      const orderSnap = await getDocs(orderRef);
      orderSnap.forEach((doc) => {
        setOrder(doc.data());
        setDocId(doc.id);
        setCycleCollectionCount(doc.data().cycleStatusCollection.length);
      });
    };

    return () => {
      fetchOrder();
      GenerateQRCode();
    };
  }, [orderId, queryOrder]);

  const container = {
    hiddenV: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 5,
        type: "spring",
        stiffness: 90,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const viewVariants = {
    initialHidden: {
      opacity: 0,
    },
    initialVisible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.6,
      },
    },
    hiddenV: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
    pageStyle: `
            @page {
                size: Roll Paper 80 x 297mm;
                margin: auto 20mm;
            }
        `,
  });

  return (
    <StyledSinglePage>
      <motion.div
        className="single__page__section"
        variants={viewVariants}
        initial="initialHidden"
        animate="initialVisible"
        exit="initialHidden"
      >
        <AnimatePresence>
          {isEditModal ? (
            <EditModal
              handleEditModal={handleEditModal}
              order={order}
              docId={docId}
              handleUpdateNotifcation={handleUpdateNotifcation}
            />
          ) : null}
        </AnimatePresence>
        <div className="update__controls">
          <h2 className="title">Order Status</h2>
          <div className="buttons">
            <UpdateButton
              order={order}
              docId={docId}
              cycleCollectionCount={cycleCollectionCount}
              handleCycleNotification={handleCycleNotification}
            />
            <div className="button" onClick={handleEditModal}>
              <i className="bx bxs-edit"></i>
              <p>Edit Order</p>
            </div>
            <div className="button" onClick={handlePrint}>
              <i className="bx bxs-printer"></i>
              <p>Print Receipt</p>
            </div>
          </div>
        </div>
        <motion.div
          className="order__cycle__container"
          variants={container}
          initial="hiddenV"
          animate="visible"
          whileHover={{ scale: 1.05 }}
        >
          {order.cycleStatusCollection ? (
            order.cycleStatusCollection.map((item, index) => (
              <motion.div
                className="order__cycle__item"
                key={index}
                variants={container}
                initial="hiddenV"
                layout
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.5 + index * 0.2,
                    duration: 5,
                    type: "spring",
                    stiffness: 90,
                    when: "beforeChildren",
                    staggerChildren: 0.3,
                  },
                }}
              >
                <i className={`bx ${item.icon}`}></i>
                <div className="order__cycle__title">
                  <p className="cycle__title">{item.name}</p>
                  <p className="cycle__stamp">{item.timeStamp}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <div
              style={{ textAlign: "center", width: "100%", fontWeight: "bold" }}
            >
              Loading
            </div>
          )}
        </motion.div>
        <StyledPrintOrderInfo
          className="order__info__container"
          ref={componentRef}
        >
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
                  <p>
                    P <CountUp duration={1} end={order.total} decimals={2} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </StyledPrintOrderInfo>
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
              {order.particularsData ? (
                order.particularsData.map((item, index) => (
                  <tr key={index}>
                    <td className="particular__align">{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <CountUp duration={0} end={item.price} decimals={2} />
                    </td>
                    <td>
                      <CountUp duration={0} end={item.itemTotal} decimals={2} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr style={{ textAlign: "center", width: "100%" }}>
                  <td>{"Loading"}</td>
                </tr>
              )}

              <tr>
                <td className="particular__align grand__total" colSpan="2">
                  Grand Total
                </td>
                <td className="grand__total" colSpan="2">
                  P <CountUp duration={1} end={order.total} decimals={2} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="order__review__container">REVIEW</div>
      </motion.div>
    </StyledSinglePage>
  );
};

export default SingleOrder;
