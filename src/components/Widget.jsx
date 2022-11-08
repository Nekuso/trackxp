import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledWidget } from '../styles/Widget.styled';
import {collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";


const Widget = ({type}) => {
  const [amount, setAmount] = useState(0);
  const [diff, setDiff] = useState(0);
  let data;

  switch (type) {
    case 'orders':
      data = {
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
      
    };
    fetchData();
  }, []);


  return (
    <StyledWidget>
        <div className="top">
          <h3 className="top__title">{data.title}</h3>
          <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
            {diff < 0 ? <i className='bx bxs-down-arrow'></i> : <i className='bx bxs-up-arrow'></i> }
            <p>
              {diff} %
            </p>
          </div>
        </div>
        <div className="middle"><h1>{data.currency} {amount}</h1></div>
        <div className="bottom" >
          <Link to={`${data.link}`} className="widget__link">{data.linkDescription}</Link>
          <div className="icon" style={{background: `${data.backgroundColor}`}}><i className={data.icon}></i></div>
        </div>
    </StyledWidget>
  )
}

export default Widget;
