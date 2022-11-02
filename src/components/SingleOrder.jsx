import React from 'react';
import { StyledSinglePage } from '../styles/SinglePage.styled';
import qrcode from "../img/qrcode.png";

const SingleOrder = () => {

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
                            <h2 className="order__id">ORDER ID: NXX9000000001</h2>
                            <p href="/">trackXp.dev/order/NXX9000000001</p>
                        </div>
                        <div className="order__desc">
                            <div className="left">
                                <div className="item__desc">
                                    <p className="item__title">Order Date</p>
                                    <p>10-28-2022</p>
                                </div>
                                <div className="item__desc">
                                    <p className="item__title">Name</p>
                                    <p>Sargine Pinili</p>
                                </div>
                                <div className="item__desc">
                                    <p className="item__title">Payment</p>
                                    <p>Pending</p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="item__desc">
                                    <p className="item__title">Contact No.</p>
                                    <p>09123456789</p>
                                </div>
                                <div className="item__desc">
                                    <p className="item__title">Price</p>
                                    <p>P90</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order__table__container">
                    <table className="order__table">
                        <tr className="header">
                            <th className="particular__align">Particulars</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td className="particular__align">Wash Loads</td>
                            <td>1</td>
                            <td>70</td>
                            <td>70</td>
                        </tr>
                        <tr>
                            <td className="particular__align">Dry Loads</td>
                            <td>0</td>
                            <td>70</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className="particular__align">Ariel</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className="particular__align">Breeze</td>
                            <td>0</td>
                            <td>9</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className="particular__align">Downy</td>
                            <td>0</td>
                            <td>8</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className="particular__align">Surf</td>
                            <td>0</td>
                            <td>8</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className="particular__align">Color Safe Sachet</td>
                            <td>0</td>
                            <td>10</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className="particular__align">Color Safe Bottle</td>
                            <td>0</td>
                            <td>10</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className="particular__align">Plastic Bag</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className="particular__align">Drop-off (Folding)</td>
                            <td>1</td>
                            <td>20</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td className="particular__align">Other</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className="particular__align grand__total" colspan="3">Grand Total</td>
                            <td className="grand__total">90</td>
                        </tr>
                    </table>
                </div>
                
            </div>
        </StyledSinglePage>
    );
}

export default SingleOrder;
