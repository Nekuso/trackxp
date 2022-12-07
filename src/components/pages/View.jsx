import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { StyledView } from "../../styles/View.styled";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import QRCode from "qrcode";
import NotFound from "../../img/NotFound.gif";
import Loading from "../../img/Loading.gif";
import ViewSingle from "../ViewSingle";
import { AnimatePresence, motion } from "framer-motion";
import notification from "../../sound/notification.mp3";
import useSound from 'use-sound';

const View = () => {
  const [order, setOrder] = useState(null);
  const [orderRawId, setOrderRawId] = useState();
  const [queryOrder, setQueryOrder] = useState([]);
  const { orderId } = useParams();
  const [qrCode, setQrCode] = useState("");
  const qrLink = `https://nekuso.github.io/trackxp/?#/${orderId}`;
  const [found, setFound] = useState(false);
  const [updateNotification, setUpdateNotification] = useState(false);

  const [play] = useSound(notification);
  const handleUpdateNotifcation = () => {
    setUpdateNotification(true);
    play();

    setTimeout(() => {
      setUpdateNotification(false);
    }, 3500);
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
      try {
        const orderRef = query(
          collection(db, "orders"),
          where("orderId", "==", parseInt(orderId))
        );
        const orderSnap = await getDocs(orderRef);
        orderSnap.forEach((doc) => {
          setOrder(doc.data());
          setOrderRawId(doc.id);
        });
      } catch (error) {
        console.log(error);
      }
    };

    return () => {
      fetchOrder();
      GenerateQRCode();
    };
  }, [orderId, queryOrder]);

  useEffect(() => {
    setTimeout(() => {
      setFound(true);
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
      },
    },
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 0.7,
        duration: 1,
      },
    },
    visible2: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 0.9,
        duration: 1,
      },
    },
  };
  const notificationVariants = {
    hidden: {
      opacity: 0,
      y: "-50vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        type: "spring",
        stiffness: 70,
      },
    },
    exit: {
      opacity: 0,
      y: "-50vh",
      transition: {
        delay: 0.2,
        duration: 1,
        type: "spring",
        stiffness: 70,
      },
    },
  };

  return (
    <motion.div
      variants={viewVariants}
      initial="initialHidden"
      animate="initialVisible"
      exit="initialHidden"
    >
      <StyledView>
        <AnimatePresence>
          
          {updateNotification && (
            <div className="notification">
              <motion.div
                className="notification__content"
                variants={notificationVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <i className="bx bx-check"></i>
                <p>Order Updated Successfully!</p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          {!found ? (
            <motion.div key={`${found}`} className="loading__container">
              <motion.div
                className="loading__content"
                variants={viewVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.img
                  src={Loading}
                  alt=""
                  loading="lazy"
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
                >
                  Searching for your underwear...
                </motion.h2>
              </motion.div>
            </motion.div>
          ) : found && order !== null ? (
            <ViewSingle
              order={order}
              qrCode={qrCode}
              qrLink={qrLink}
              handleUpdateNotifcation={handleUpdateNotifcation}
              orderRawId={orderRawId}
              db={db}
              queryOrder={queryOrder}
            />
          ) : (
            <div className="not__found__container">
              <div className="not__found__content">
                <motion.img
                  src={NotFound}
                  alt=""
                  loading="lazy"
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
                >
                  Order Not Found
                </motion.h2>
                <motion.div
                  variants={viewVariants}
                  initial="hidden"
                  animate="visible2"
                  exit="hidden"
                >
                  <Link to="/" className="home__link">
                    ← Go Back!
                  </Link>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </StyledView>
    </motion.div>
  );
};

export default View;
