import React from 'react';
import {StyledFeatured} from '../styles/Featured.styled';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function featured() {
  return (
    <StyledFeatured>
        <div className="top">
            <h1 className="title">Featured</h1>
            <i className='bx bx-dots-vertical-rounded'></i>
        </div>
        <div className="bottom">
            <div className="featured__chart">
                <CircularProgressbar value={6} text={`${66}%`} strokeWidth={10}
                styles={buildStyles({
                    textColor: "#000000",
                    pathColor: "#5773db",
                  })}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">PHP 4,000</p>
            <p className="desc">
                Previous transaction processing. Last payments may not be included.
            </p>

            <div className="summary">
                <div className="item">
                    <div className="item__title">Target</div>
                    <div className="item__result positive">
                        <i className='bx bxs-up-arrow'></i>
                        <div className="result__amount">
                            P 24.5k
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__title">Target</div>
                    <div className="item__result positive">
                        <i className='bx bxs-up-arrow'></i>
                        <div className="result__amount">
                            P 24.5k
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__title">Target</div>
                    <div className="item__result positive">
                        <i className='bx bxs-up-arrow '></i>
                        <div className="result__amount">
                            P 24.5k
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </StyledFeatured>
  )
}

export default featured