import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const ViewSingle = ({order,qrCode,qrLink}) => {

    const viewVariants = {
        initialHidden: {
          opacity: 0,
        },
        initialVisible: {
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 1,
          }
        }
    }


  return (
    <>
    <motion.div className="single__page__section"
        variants={viewVariants}
        initial="initialHidden"
        animate="initialVisible"
        exit="initialHidden"
    >
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
                    <td className="grand__total"><CountUp duration={1} end={order.total}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </motion.div> 
    </>
  )
}

export default ViewSingle