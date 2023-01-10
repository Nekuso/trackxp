import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
import { doc, onSnapshot } from "firebase/firestore";
import RatingModal from "./RatingModal";


const ViewSingle = ({
  order,
  qrCode,
  qrLink,
  handleUpdateNotifcation,
  orderRawId,
  db,
  toggle,
  setToggle
}) => {
  const [snapOrder, setSnapOrder] = useState(null);

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
        duration: 1,
      },
    },
  };

  const [orderRating, setOrderRating] = useState(order.orderRating.rating);
  const [cycleStatusCollection, setCycleStatusCollection] = useState(
    order.cycleStatusCollection
  );

  useEffect(() => {
    orderRating === 0 && cycleStatusCollection.length === 4
      ? setIsRatingOpen(true)
      : setIsRatingOpen(false); 
  }, [order,orderRating, cycleStatusCollection]);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "orders", orderRawId),
      (snapShot) => {
        setSnapOrder(snapShot.data());
        handleUpdateNotifcation();
        setOrderRating(snapShot.data().orderRating.rating);
        setCycleStatusCollection(snapShot.data().cycleStatusCollection);
        orderRating === 0 && cycleStatusCollection.length === 4
          ? setIsRatingOpen(true)
          : setIsRatingOpen(false);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  const [isRatingOpen, setIsRatingOpen] = useState(false);


  const handleIsRatingOpen = () => {
    setIsRatingOpen(false);
  };
  

  return (
    <>
      <motion.div
        className="single__page__section"
        variants={viewVariants}
        initial="initialHidden"
        animate="initialVisible"
        exit="initialHidden"
      >
        <AnimatePresence>
          {isRatingOpen ? (
            <RatingModal
              handleIsRatingOpen={handleIsRatingOpen}
              orderRawId={orderRawId}
              order={order}
              toggle={toggle}
              setToggle={setToggle}
            />
          ) : null}
        </AnimatePresence>
        <div className="update__controls">
          <Link to="/" className="home__link">
            <i className="bx bxs-analyse"></i>
            <h2>
              Track<mark>XP</mark>
            </h2>
          </Link>
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
                key={index + 1}
                variants={container}
                initial="hiddenV"
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.8 + index * 0.2,
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
            <div style={{ textAlign: "center", width: "100%", fontWeight: "bold" }}>
              Loading
            </div>
          )}
        </motion.div>
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
                  <p>P {order.total.toFixed(2)}</p>
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
              {order.particularsData ? (
                order.particularsData.map((item, index) => (
                  <tr key={index + 1}>
                    <td className="particular__align">{item.name}</td>
                    <td>{item.quantity}</td>
                    <td><CountUp duration={0} end={item.price} decimals={2} /></td>
                    <td><CountUp duration={0} end={item.itemTotal} decimals={2} /></td>
                  </tr>
                ))
              ) : (
                <tr style={{ textAlign: "center", width: "100%" }}>
                  <td>{"Loading"}</td>
                </tr>
              )}

              <tr>
                <td className="particular__align grand__total" colSpan="3">
                  Grand Total
                </td>
                <td className="grand__total">
                  P <CountUp duration={1} end={order.total} decimals={2} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </>
  );
};

export default ViewSingle;
