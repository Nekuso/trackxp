import React, { useEffect, useState } from 'react';
import {StyledFeatured} from '../styles/Featured.styled';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Featured({todaysEarnings, handleSetTargetModal, target}) {

    const [isOpen, setIsOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [diff, setDiff] = useState(0);


    useEffect(() =>{
        let percentage = Math.floor((todaysEarnings / target) * 100);
        setProgress(
            percentage > 100 ? 100 : percentage
        );
    
        setDiff( target - todaysEarnings);
    
    },[todaysEarnings,target]);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }
    const handleOpen2 = () => {
        setIsOpen(false);
    }


  return (
    <StyledFeatured>
        <div className="top">
            <h1 className="title">Featured</h1>
            <i className='bx bx-dots-horizontal-rounded' onClick={handleOpen} onMouseLeave={handleOpen2}>
                <div className={`round__container ${isOpen ? "open" : "closed"}`}>
                    <div className="update__target" onClick={()=> {handleSetTargetModal()}}>
                        <i className='bx bxs-edit'></i>
                        <p>Update Today's Target</p>
                    </div>
                </div>
            </i>
        </div>
        <div className="bottom">
            <div className="featured__chart">
                <CircularProgressbar value={progress} text={`${progress}%`} strokeWidth={10}
                styles={buildStyles({
                    textSize: "1rem",
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
                        <div className="result__amount">
                            P {target}
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__title">Difference</div>
                    <div className={`item__result ${diff <= target ? "negative" : "positive"}`}>
                        {diff < target ? (<i className='bx bxs-down-arrow'></i>) : (<i className='bx bxs-up-arrow ' ></i>) }
                        <div className="result__amount">
                            P {diff}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </StyledFeatured>
  )
}

export default Featured