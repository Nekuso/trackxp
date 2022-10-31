import React from 'react';
import { StyledSinglePage } from '../styles/SinglePage.styled';
import qrcode from "../img/qrcode.png";

const SingleOrder = () => {

    return (
        <StyledSinglePage>
            <div className="single__page__section">
                <div className="order__info">
                    <img src={qrcode} alt="qrcode" />
                    <div className="order__title">
                        <h2 className="order__id">ORDER ID: NXX9000000001</h2>
                        <a href="/">trackXp.dev/order/NXX9000000001</a>
                    </div>
                    <div className="order__desc">
                        <div className="left">
                            <div className="item__desc">
                                <p className="item__title">Order Date</p>
                                <p>2022-19-28</p>
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
                                <p>P 210</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order__table">
                </div>
                <div className="order__cycle">  
                </div>
            </div>
        </StyledSinglePage>
    );
}

export default SingleOrder;
