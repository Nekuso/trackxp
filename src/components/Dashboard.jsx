import React, { useState } from 'react'
import {StyledDashboard} from "../styles/Dashboard.styled";
import {collection, query, where, getDocs, onSnapshot,} from "firebase/firestore"
import Widget from './Widget';
import Featured from './Featured';
import Chart from './Chart';
import AddModal from './AddModal';
import { db } from "../firebase";
import { useEffect } from 'react';


function Dashbooard() {
  const [amount, setAmount] = useState(0);
  const [diff, setDiff] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [earningsDiff, setEarningsDiff] = useState(0);
  const [todaysEarnings, setTodaysEarnings] = useState(0);

  const [earningsData, setEarningsData] = useState([]);
  const [earningsDataDiff, setEarningsDataDiff] = useState([]);
  const [todaysEarningsData, setTodaysEarningsData] = useState([]);
  let data;


  const [isAddModal, setIsAddModal] = useState(false);

  const handleAddModal = () => {
    setIsAddModal(!isAddModal);
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

    };

    // Call functions
    fetchData();
    handleEarnings();

    // Listen to changes in firestore
    const unsub = onSnapshot(collection(db, "orders"), (snapshot) => {
      data = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setEarningsData(data);
      console.log(data);
    }
    );

    return () => unsub();
    
  }, [amount]);

  return (
    <StyledDashboard>
      {isAddModal ? <AddModal handleAddModal={handleAddModal} /> : null}
      <div className="dashboard__header">
        <h1 className="page__title">Dashboard🚀</h1>
        <button onClick={handleAddModal} className="new__button">New Order</button>
      </div>
      <div className="widgets">
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
      </div>

      <div className="charts">
        <Featured todaysEarnings={todaysEarnings}/>
        <Chart/>
      </div>
    </StyledDashboard>
  )
}

export default Dashbooard