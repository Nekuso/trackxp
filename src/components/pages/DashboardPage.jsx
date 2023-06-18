import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { StyledDashboardPage } from "../../styles/DashboardPage.styled";
import Sidebar from "../Sidebar";
import Main from "../Main";
import { AnimatePresence, motion } from "framer-motion";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";
import { INITIAL_STATE } from "../../context/AuthContext";

function DashboardPage() {
  const [navActive, setNavActive] = useState("hamburger__content");
  const [wrapperActive, setWrapperActive] = useState("hamburger__wrapper");
  const [btnActive, setBtnActive] = useState("nav__hamburger");
  const [btnHam, setBtnHam] = useState(false);
  const [darkActive, setDarkActive] = useState("bx bx-moon");

  const [queryData, setQueryData] = useState([]);
  const [queryTarget, setQueryTarget] = useState([]);
  const [queryUsers, setQueryUsers] = useState([]);
  const [amount, setAmount] = useState(0);
  const [diff, setDiff] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [earningsDiff, setEarningsDiff] = useState(0);
  const [todaysEarnings, setTodaysEarnings] = useState(0);

  const [earningsData, setEarningsData] = useState([]);
  const [earningsDataDiff, setEarningsDataDiff] = useState([]);
  const [todaysEarningsData, setTodaysEarningsData] = useState([]);
  const [target, setTarget] = useState(5000);
  let data;
  const [currentLocal, setCurrentLocal] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [currentUser, setCurrentUser] = useState(currentLocal);
  const [currentId, setCurrentId] = useState(
    currentLocal ? currentLocal.id : null
  );

  const navToggle = () => {
    navActive === "hamburger__content"
      ? setNavActive("hamburger__content nav__active")
      : setNavActive("hamburger__content");

    wrapperActive === "hamburger__wrapper"
      ? setWrapperActive("hamburger__wrapper wrapper__active")
      : setWrapperActive("hamburger__wrapper");

    btnActive === "nav__hamburger"
      ? setBtnActive("nav__hamburger is-active")
      : setBtnActive("nav__hamburger");

    btnHam === false ? setBtnHam(true) : setBtnHam(false);
  };
  const { dispatch } = useContext(AuthContext);

  const [addNotification, setAddNotification] = useState(false);
  const [targetNotification, setTargetNotification] = useState(false);
  const [updateNotification, setUpdateNotification] = useState(false);
  const [cycleNotification, setCycleNotification] = useState(false);
  const [deleteNotification, setDeleteNotification] = useState(false);
  const handleAddNotification = () => {
    setAddNotification(true);

    setTimeout(() => {
      setAddNotification(false);
    }, 3500);
  };
  const handleTargetNotification = () => {
    setTargetNotification(true);

    setTimeout(() => {
      setTargetNotification(false);
    }, 3500);
  };
  const handleUpdateNotifcation = () => {
    setUpdateNotification(true);

    setTimeout(() => {
      setUpdateNotification(false);
    }, 3500);
  };
  const handleCycleNotification = () => {
    setCycleNotification(true);

    setTimeout(() => {
      setCycleNotification(false);
    }, 3500);
  };
  const handleDeleteNotification = () => {
    setDeleteNotification(true);

    setTimeout(() => {
      setDeleteNotification(false);
    }, 3500);
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

  const handleEarnings = () => {
    let totalEarnings = 0;
    let totalEarningsDiff = 0;
    earningsData.forEach((item) => {
      if (item.payment === "Paid") {
        totalEarnings += item.total;
      }
    });
    earningsDataDiff.forEach((item) => {
      if (item.payment === "Paid") {
        totalEarningsDiff += item.total;
      }
    });
    setEarnings(totalEarnings);
    setEarningsDiff(
      Math.floor(
        ((totalEarnings - totalEarningsDiff) / totalEarningsDiff) * 100
      )
    );

    let todaysTotal = 0;
    todaysEarningsData.forEach((item) => {
      if (item.payment === "Paid") {
        todaysTotal += item.total;
      }
    });
    setTodaysEarnings(todaysTotal);
  };

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "orders"),
      (snapShot) => {
        let item = [];
        snapShot.docs.forEach((doc) => {
          item.push({ id: doc.id, ...doc.data() });
        });
        setQueryData(item);
      },
      (error) => {
        console.log(error);
      }
    );

    const unsub2 = onSnapshot(
      collection(db, "analytics"),
      (snapShot) => {
        let item = [];
        snapShot.docs.forEach((doc) => {
          item.push({ id: doc.id, ...doc.data() });
        });
        setQueryTarget(item);
      },
      (error) => {
        console.log(error);
      }
    );
    const unsub3 = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let item = [];
        snapShot.docs.forEach((doc) => {
          item.push({ id: doc.id, ...doc.data() });
        });
        setQueryUsers(item);

        if (currentId) {
          const user = item.find((user) => user.id === currentId);
          if (user) {
            setCurrentUser(user);
            localStorage.setItem("user", JSON.stringify(user));
          } else {
            setCurrentUser(null);
            localStorage.removeItem("user");
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
      unsub2();
      unsub3();
    };
  }, [INITIAL_STATE, currentUser, currentId]);

  useEffect(() => {
    const fetchData = async () => {
      // Initial to get month
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
      const current = new Date();
      const dateCreated = `${
        current.getMonth() + 1
      }/${current.getDate()}/${current.getFullYear()}`;

      // Initialize conditional query from firestore
      const lastMonthQuery = query(
        collection(db, "orders"),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthQuery = query(
        collection(db, "orders"),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );
      const todayQuery = query(
        collection(db, "orders"),
        where("dateCreated", "==", dateCreated)
      );

      // Today's Target
      const todaysTarget = doc(db, "analytics", "targets");
      const docSnap = await getDoc(todaysTarget);
      if (docSnap.exists()) {
        setTarget(docSnap.data().target);
      } else {
        console.log("No such document!");
      }

      // Get data from firestore
      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);
      const todayData = await getDocs(todayQuery);

      // Set data from firestore Data Dates
      setAmount(lastMonthData.docs.length);
      setDiff(
        Math.floor(
          ((lastMonthData.docs.length - prevMonthData.docs.length) /
            prevMonthData.docs.length) *
            100
        )
      );

      // Populate data from firestore
      let list = [];
      lastMonthData.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setEarningsData(list);

      let list2 = [];
      prevMonthData.docs.forEach((doc) => {
        list2.push({ id: doc.id, ...doc.data() });
      });
      setEarningsDataDiff(list2);

      const list3 = [];
      todayData.docs.forEach((doc) => {
        list3.push({ id: doc.id, ...doc.data() });
      });
      setTodaysEarningsData(list3);

      handleEarnings();
    };

    // Call functions
    fetchData();
  }, [amount, target, queryData, queryTarget]);

  return (
    <StyledDashboardPage>
      <div className="dashboard__section">
        <AnimatePresence>
          {addNotification && (
            <div className="notification">
              <motion.div
                className="notification__content"
                variants={notificationVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <i className="bx bx-check"></i>
                <p>Order has been added successfully</p>
              </motion.div>
            </div>
          )}
          {targetNotification && (
            <div className="notification">
              <motion.div
                className="notification__content"
                variants={notificationVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <i className="bx bx-check"></i>
                <p>Target Updated Successfully!</p>
              </motion.div>
            </div>
          )}
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
          {cycleNotification && (
            <div className="notification">
              <motion.div
                className="notification__content"
                variants={notificationVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <i className="bx bx-check"></i>
                <p>Cycle Updated!</p>
              </motion.div>
            </div>
          )}
          {deleteNotification && (
            <div className="notification">
              <motion.div
                className="notification__content red"
                variants={notificationVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <i className="bx bx-check"></i>
                <p>Order deleted Successfully</p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="dashboard__wrapper">
          <div className="dashboard__nav">
            <button className={btnActive} onClick={navToggle}>
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={wrapperActive} onClick={navToggle} />
            <div className={navActive}>
              <div className="close__container">
                <button className="close__btn" onClick={navToggle}>
                  <i className="bx bxs-chevron-left"></i>
                </button>
              </div>
              <div className="side__content">
                <ul className="hamburger__links">
                  <li>
                    <Link className="link" onClick={navToggle} to="">
                      <i className="bx bxs-dashboard"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="link" onClick={navToggle} to="Orders">
                      <i className="bx bxs-receipt"></i>
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link className="link" onClick={navToggle} to="Analytics">
                      <i className="bx bxs-objects-horizontal-left"></i>
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link className="link" onClick={navToggle} to="Inventory">
                      <i className="bx bxs-package"></i>
                      Inventory
                    </Link>
                  </li>
                  <li>
                    <Link className="link" onClick={navToggle} to="Reports">
                      <i className="bx bxs-report"></i>
                      Reports
                    </Link>
                  </li>
                </ul>

                <div className="other__container">
                  <Link
                    className="other__link"
                    to="/Login"
                    onClick={() => dispatch({ type: "LOGOUT" })}
                  >
                    <i className="bx bx-log-out"></i>
                    Logout
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/" className="home__logo">
              <h2>
                Track<mark>XP</mark>
              </h2>
            </Link>
            <button>
              <i className={darkActive}></i>
            </button>
          </div>
          <div className="dashboard__main">
            <Sidebar currentUser={currentUser} />
            <Main
              handleAddNotification={handleAddNotification}
              handleTargetNotification={handleTargetNotification}
              handleUpdateNotifcation={handleUpdateNotifcation}
              handleCycleNotification={handleCycleNotification}
              handleDeleteNotification={handleDeleteNotification}
              data={data}
              diff={diff}
              earnings={earnings}
              earningsDiff={earningsDiff}
              amount={amount}
              target={target}
              todaysEarnings={todaysEarnings}
              queryData={queryData}
              setQueryData={setQueryData}
              queryUsers={queryUsers}
              setQueryUsers={setQueryUsers}
              currentUser={currentUser}
            />
          </div>
        </div>
      </div>
    </StyledDashboardPage>
  );
}

export default DashboardPage;
