import React, { useState } from 'react'
import {StyledDashboard} from "../styles/Dashboard.styled";
import {collection, query, where, getDocs, doc, getDoc, onSnapshot} from "firebase/firestore"
import Widget from './Widget';
import Featured from './Featured';
import Chart from './Chart';
import AddModal from './AddModal';
import { db } from "../firebase";
import { useEffect } from 'react';
import SetTargetModal from './SetTargetModal';
import {AnimatePresence, motion} from "framer-motion";

function Dashbooard({handleAddNotification, handleTargetNotification}) {
  const [queryData, setQueryData] = useState([]);
  const [queryTarget, setQueryTarget] = useState([]);
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

  const [isAddModal, setIsAddModal] = useState(false);
  const [isSetTargetModal, setIsSetTargetModal] = useState(false);

  const handleAddModal = () => {
    setIsAddModal(!isAddModal);
  }
  const handleSetTargetModal = () => {
    setIsSetTargetModal(!isSetTargetModal);
  }

  const handleEarnings = () => {
    let totalEarnings = 0;
    let totalEarningsDiff = 0;
    earningsData.forEach((item) => {
      if (item.payment === "Paid") {
        totalEarnings += item.total;
      }
    }
    );
    earningsDataDiff.forEach((item) => {
      if (item.payment === "Paid") {
        totalEarningsDiff += item.total;
      }
    }
    );
    setEarnings(totalEarnings);
    setEarningsDiff(
      Math.floor(((totalEarnings - totalEarningsDiff) / totalEarningsDiff) * 
        100)
    );

    let todaysTotal = 0;
    todaysEarningsData.forEach((item) => {
      if (item.payment === "Paid") {
        todaysTotal += item.total;
      }
    });
    setTodaysEarnings(todaysTotal);
  }

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

    return () => {
      unsub();
      unsub2();
    };
    
  },[])

  useEffect(() => {
    const fetchData = async () => {
      // Initial to get month
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
      const current = new Date();
      const dateCreated = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
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
        Math.floor(((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
          100)
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

  }, [amount,target,queryData,queryTarget]);

  const dashboardVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible1: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    visible2: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    visible3: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    exit1: {
      opacity: 0,
      y: 10,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    exit2: {
      opacity: 0,
      y: 10,
      transition: {
        delay: 0.4,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    exit3: {
      opacity: 0,
      y: 10,  
      transition: {
        delay: 0.6,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <StyledDashboard>
      <AnimatePresence>
        {isAddModal ? <AddModal handleAddModal={handleAddModal} handleAddNotification={handleAddNotification} /> : null}
        {isSetTargetModal ? <SetTargetModal handleSetTargetModal={handleSetTargetModal} handleTargetNotification={handleTargetNotification}/>
        : null}
      </AnimatePresence>
      
      <motion.div className="dashboard__header"
        variants={dashboardVariants}
        initial="hidden"
        animate="visible1"
        exit="exit1"
      >
        <h1 className="page__title">Dashboard</h1>
        <button onClick={handleAddModal} className="new__button">New Order</button>
      </motion.div>
      <motion.div className="widgets"
        variants={dashboardVariants}
        initial="hidden"
        animate="visible2"
        exit="exit2"
      >
        <Widget 
          type="orders" 
          className="widget1"  
          data={data} 
          diff={diff} 
          earnings={earnings} 
          earningsDiff={earningsDiff} 
          amount={amount}
        />
        <Widget 
          type="earnings" 
          className="widget2" 
          data={data} 
          diff={diff} 
          earnings={earnings} 
          earningsDiff={earningsDiff} 
          amount={amount}
        />
        <Widget 
          type="balance" 
          className="widget3" 
          data={data} 
          diff={diff} 
          earnings={earnings} 
          earningsDiff={earningsDiff} 
          amount={amount}
        />
      </motion.div>

      <motion.div className="charts"
        variants={dashboardVariants}
        initial="hidden"
        animate="visible3"
        exit="exit3"
      >
        <Featured todaysEarnings={todaysEarnings} handleSetTargetModal={handleSetTargetModal} target={target}/>
        <Chart/>
      </motion.div>
    </StyledDashboard>
  )
}

export default Dashbooard