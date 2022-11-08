import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from  "../../context/AuthContext"
import {StyledDashboardPage} from '../../styles/DashboardPage.styled';
import Sidebar from '../Sidebar';
import Main from '../Main';

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

    const {dispatch} = useContext(AuthContext)


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
                            <li>
                                <i className='bx bxs-dashboard'></i>
                                <Link className="link" onClick={navToggle} to="">Dashboard</Link>
                            </li>
                            <li>
                                <i className='bx bxs-receipt' ></i>
                                <Link className="link" onClick={navToggle} to="Orders">Orders</Link>
                            </li>
                        </ul>

                        <div className="other__container">
                            <a className="other__link" href="/">
                                <i className='bx bx-question-mark'></i>
                                FAQ
                            </a>
                            <Link className="other__link" to="/Login" onClick={() => dispatch({type: "LOGOUT"})}>
                                <i className='bx bx-log-out'></i>
                                Logout
                            </Link>
                        </div>
                    </div>

                    <Link to="/" className="home__logo"><h2>Track<mark>XP</mark></h2></Link>
                    <button onClick={darkToggle}>
                        <i className={darkActive}></i>
                    </button>
                </div>

                <div className="dashboard__main">
                    <Sidebar/>
                    <Main/>
                </div>
            </div>
        </div>
    </StyledDashboardPage>
  )
}

export default DashboardPage;