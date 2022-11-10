import React, { useEffect, useState } from 'react';
import { StyledSinglePage } from '../styles/SinglePage.styled';
import qrcode from "../img/qrcode.png";
import {dataRows} from ".././dataTableSource";
import { useParams } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const SingleOrder = () => {

    const { orderid } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        // LISTEN (REALTIME)
        const unsub = onSnapshot(
          collection(db, "orders",),
          (snapShot) => {
            let list = [];
            snapShot.docs.forEach((doc) => {
              list.push({ id: doc.id, ...doc.data() });
            });
            setData(list);
          },
          (error) => {
            console.log(error);
          }
        );
    
        return () => {
          unsub();
        };
      }, [data]);

    return (
        <StyledSinglePage>
            <div className="single__page__section">
                <div className="order__cycle__container">  
                    <div className="order__cycle__item">
                        <i className='bx bx-badge-check' ></i>
                        <div className="order__cycle__title">
                            <p className="cycle__title">Completed</p>
                            <p className="cycle__stamp">11/3/2022 (1:15 AM)</p>
                        </div>
                    </div>
                    <div className="order__cycle__item">
                        <i className='bx bxs-package' ></i>
                        <div className="order__cycle__title">
                            <p className="cycle__title">Ready for pickup </p>
                            <p className="cycle__stamp">11/3/2022 (12:55 AM)</p>
                        </div>
                    </div>
                    <div className="order__cycle__item">
                        <i className='bx bxs-washer' ></i>
                        <div className="order__cycle__title">
                            <p className="cycle__title">Processing</p>
                            <p className="cycle__stamp">11/3/2022 (12:15 AM)</p>
                        </div>
                    </div>
                    <div className="order__cycle__item">
                        <i className='bx bx-receipt'></i>
                        <div className="order__cycle__title">
                            <p className="cycle__title">Created</p>
                            <p className="cycle__stamp">11/3/2022 (12:15 AM)</p>
                        </div>
                    </div>
                </div>
                <div className="order__info__container">
                    <div className="order__info">
                        <img src={qrcode} alt="qrcode" />
                        <div className="order__title">
                            <h2 className="order__id">ORDER ID: NXX{dataRows[0].id}</h2>
                            <p href="/">trackXp.dev/order/NXX{dataRows[0].id}</p>
                        </div>
                        <div className="order__desc">
                            <div className="left">
                                <div className="item__desc">
                                    <p className="item__title">Order Date</p>
                                    <p>{dataRows[0].date}</p>
                                </div>
                                <div className="item__desc">
                                    <p className="item__title">Name</p>
                                    <p>{dataRows[0].firstName + " " + dataRows[0].lastName}</p>
                                </div>
                                <div className="item__desc">
                                    <p className="item__title">Payment</p>
                                    <p>{dataRows[0].isPaid}</p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="item__desc">
                                    <p className="item__title">Contact No.</p>
                                    <p>{dataRows[0].contact}</p>
                                </div>
                                <div className="item__desc">
                                    <p className="item__title">Price</p>
                                    <p>P {dataRows[0].amount}</p>
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
                            {dataRows[0].particulars.map((item, index) => (
                                <tr key={index}>
                                    <td className="particular__align">{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity * item.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td className="particular__align grand__total" colSpan="3">Grand Total</td>
                                <td className="grand__total">{dataRows[0].amount}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </StyledSinglePage>
    );
}

export default SingleOrder;
