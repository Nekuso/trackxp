import React, { useEffect, useState } from 'react';
import {StyledFeatured} from '../styles/Featured.styled';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Featured({todaysEarnings}) {

    const [isOpen, setIsOpen] = useState(false);
    const [target, setTarget] = useState(5000);
    const [progress, setProgress] = useState(0);

    useEffect(() =>{
        let percentage = Math.floor((todaysEarnings / target) * 100);
        setProgress(
            percentage > 100 ? 100 : percentage
        );
    
    },[todaysEarnings]);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }


  return (
    <StyledFeatured>
        <div className="top">
            <h1 className="title">Featured</h1>
            <i className='bx bx-dots-horizontal-rounded' onClick={handleOpen}>
                <div className={`round__container ${isOpen ? "open" : "closed"}`}>
                    <div className="top">
                        <h1>Todays Target</h1>
                        <h3>{target}</h3>
                    </div>
                    <div className="bottom">
                    </div>
                </div>
            </i>
        </div>
        <div className="bottom">
            <div className="featured__chart">
                <CircularProgressbar value={progress} text={`${progress}%`} strokeWidth={10}
                styles={buildStyles({
                    textColor: "#000000",
                    pathColor: "#5773db",
                  })}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">P {todaysEarnings}</p>
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

export default Featured