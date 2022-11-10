import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledWidget } from '../styles/Widget.styled';
import {collection, query, where, getDocs,} from "firebase/firestore";
import { db } from "../firebase";


const Widget = ({type}) => {
  const [amount, setAmount] = useState(0);
  const [diff, setDiff] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [earningsDiff, setEarningsDiff] = useState(0);

  const [earningsData, setEarningsData] = useState([]);
  const [earningsDataDiff, setEarningsDataDiff] = useState([]);
  let data;

  switch (type) {
    case 'orders':
      data = {
        query: "orders",
        title: "ORDERS",
        isMoney: false,
        linkDescription: "View all orders →",
        link: "orders",
        icon: "bx bxs-package",
        backgroundColor: "#415ebe", 
      };
    break;
      
    case 'earnings':
      data = {
        query: "earnings",
        title: "EARNINGS",
        isMoney: false,
        currency: "P",
        linkDescription: "View all earnings →",
        link: "orders",
        icon: "bx bx-money",
        backgroundColor: "#41be7f", 
      };
    break;
      
      case 'balance':
        data = {
        query: "earnings",
        title: "BALANCE",
        isMoney: false,
        currency: "P",
        linkDescription: "View balance →",
        link: "orders",
        icon: "bx bxs-wallet-alt",
        backgroundColor: "#be4141", 
      };
    break;
    default:
    break;
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
        ((totalEarnings - totalEarningsDiff) / totalEarningsDiff) * 100
      );
  }

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
  
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

      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);

      
      setAmount(lastMonthData.docs.length);
      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
          100
      );

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

        //     const lastEarnings = query(
        //     collection(db, "orders"),
        //     where("timeStamp", "<=", today), 
        //     where("timeStamp", ">", lastMonth)
        //   );
        
        //   const prevEarnings = query(
        //     collection(db, "orders"),
        //     where("timeStamp", "<=", lastMonth),
        //     where("timeStamp", ">", prevMonth) 
        //   );
        
        //   const unsub = onSnapshot(lastEarnings,(snapshot) => {
        //     let list = [];
        //     snapshot.docs.forEach((doc) => {
        //       list.push({ id: doc.id, ...doc.data() });
        //     });
        //     setEarningsData(list);
        //   });
        
        //   const unsub2 = onSnapshot(prevEarnings,(snapshot) => {
        //     let list = [];
        //     snapshot.docs.forEach((doc) => {
        //       list.push({ id: doc.id, ...doc.data() });
        //     });
        //     setEarningsDataDiff(list);
        //   });
        
        //   let totalEarnings = 0;
        //   let totalEarningsDiff = 0;
        //   earningsData.forEach((item) => {
        //     if (item.payment === "Paid") {
        //       totalEarnings += item.total;
        //     }
        //   }
        //   );
        //   earningsDataDiff.forEach((item) => {
        //     if (item.payment === "Paid") {
        //       totalEarningsDiff += item.total;
        //     }
        //   }
        //   );
        //   setEarnings(totalEarnings);
        //   setEarningsDiff(
        //     ((totalEarnings - totalEarningsDiff) / totalEarningsDiff) * 100
        //   );
      
        //   return () => {
        //     unsub();
        //     unsub2();
        //   }

    };
    fetchData();
    handleEarnings();
  }, [amount]);

  return (
    <StyledWidget>
        <div className="top">
          <h3 className="top__title">{data.title}</h3>
          <div className={`percentage ${data.query === "orders" && (diff < 0 ? "negative" : "positive")} ${data.query === "earnings" && ( earningsDiff < 0 ? "negative" : "positive")}`}>
            {data.query === "orders" && (diff < 0 ? <i className='bx bxs-down-arrow'></i> : <i className='bx bxs-up-arrow'></i>)}
            {data.query === "earnings" && (earningsDiff < 0 ? (<i className='bx bxs-down-arrow'></i>) : (<i className='bx bxs-up-arrow'></i>))}
            {/* {data.query === "earnings" && earningsDiff !== 0 ? <i className='bx bxs-down-arrow'></i> : <i className='bx bxs-up-arrow'></i>}} */}
            <p>
              {data.query === "orders" ? diff : earningsDiff} %
            </p>
          </div>
        </div>
        <div className="middle"><h1>{data.currency} {data.query === "orders" ? amount : earnings}</h1></div>
        <div className="bottom" >
          <Link to={`${data.link}`} className="widget__link">{data.linkDescription}</Link>
          <div className="icon" style={{background: `${data.backgroundColor}`}}><i className={data.icon}></i></div>
        </div>
    </StyledWidget>
  )
}

export default Widget;
