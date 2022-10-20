import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {StyledDashboardPage} from '../../styles/DashboardPage.styled';

function DashboardPage() {
    const [navActive, setNavActive] = useState("hamburger__content");
    const [wrapperActive, setWrapperActive] = useState("hamburger__wrapper");
    const [btnActive, setBtnActive] = useState("nav__hamburger");
    const [btnHam, setBtnHam] = useState(false);
    const [darkActive, setDarkActive] = useState("bx bx-moon");

    const navToggle = () => {
        navActive === "hamburger__content" ? setNavActive("hamburger__content nav__active")
        : setNavActive("hamburger__content");

        wrapperActive === "hamburger__wrapper" ? setWrapperActive("hamburger__wrapper wrapper__active") : setWrapperActive("hamburger__wrapper");

        btnActive === "nav__hamburger" ? setBtnActive("nav__hamburger is-active")
        : setBtnActive("nav__hamburger");

        btnHam === false ? setBtnHam(true) : setBtnHam(false);
    }

    const darkToggle = () => {
        darkActive === "bx bx-moon" ? setDarkActive("bx bx-sun")
        : setDarkActive("bx bx-moon");
    }


  return (

    <StyledDashboardPage>
        <div className="dashboard__section">
            <div className="dashboard__wrapper">
                <div className="dashboard__nav">
                    <button className={btnActive} onClick={navToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={wrapperActive} onClick={navToggle}/>
                    <div className={navActive}>
                        <ul className="hamburger__links">
                            <li><Link onClick={navToggle} to="/Dashboard">Dashboard</Link></li>
                            <li><Link onClick={navToggle} to="/Dashboard">Orders</Link></li>
                            <li><Link onClick={navToggle} to="/Dashboard">Completed</Link></li>
                            <li><Link onClick={navToggle} to="/Dashboard">Paid</Link></li>
                            <li><Link onClick={navToggle} to="/Dashboard">Unpaid</Link></li>
                        </ul>
                    </div>

                    <a href="/" className="home__logo"><h2>TrackXP</h2></a>
                    <button onClick={darkToggle}>
                        <i className={darkActive}></i>
                    </button>
                </div>

                <div className="dashboard__main">

                </div>
            </div>
        </div>
    </StyledDashboardPage>
  )
}

export default DashboardPage