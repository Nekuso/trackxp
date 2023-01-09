import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from  "../../context/AuthContext"
import {StyledDashboardPage} from '../../styles/DashboardPage.styled';
import Sidebar from '../Sidebar';
import Main from '../Main';
import {AnimatePresence, motion} from 'framer-motion';

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

    const [addNotification, setAddNotification] = useState(false);
    const [targetNotification, setTargetNotification] = useState(false);
    const [updateNotification, setUpdateNotification] = useState(false);
    const [cycleNotification, setCycleNotification] = useState(false);
    const [deleteNotification, setDeleteNotification] = useState(false);
    const handleAddNotification = () => {
        setAddNotification(true);

        setTimeout(() => {
            setAddNotification(false);
        }
        , 3500);
    }
    const handleTargetNotification = () => {
        setTargetNotification(true);

        setTimeout(() => {
            setTargetNotification(false);
        }
        , 3500);
    }
    const handleUpdateNotifcation = () => {
        setUpdateNotification(true);

        setTimeout(() => {
            setUpdateNotification(false);
        }
        , 3500);
    }
    const handleCycleNotification = () => {
        setCycleNotification(true);

        setTimeout(() => {
            setCycleNotification(false);
        }
        , 3500);
    }
    const handleDeleteNotification = () => {
        setDeleteNotification(true);

        setTimeout(() => {
            setDeleteNotification(false);
        }
        , 3500);
    }

    const notificationVariants = {
        hidden: {
            opacity: 0,
            y: "-50vh",
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: .2,
                duration: 1,
                type: "spring",
                stiffness: 70,
            }
        },
        exit: {
            opacity: 0,
            y: "-50vh",
            transition: {
                delay: .2,
                duration: 1,
                type: "spring",
                stiffness: 70,
            }
        }
    }

  return (
    <StyledDashboardPage>
        <div className="dashboard__section">
            <AnimatePresence>
                {addNotification && <div className="notification">
                    <motion.div className="notification__content"
                        variants={notificationVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <i className='bx bx-check'></i>
                        <p>Order has been added successfully</p>
                    </motion.div>
                </div>}
                {targetNotification && <div className="notification">
                    <motion.div className="notification__content"
                        variants={notificationVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <i className='bx bx-check'></i>
                        <p>Target Updated Successfully!</p>
                    </motion.div>
                </div>}
                {updateNotification && <div className="notification">
                    <motion.div className="notification__content"
                        variants={notificationVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <i className='bx bx-check'></i>
                        <p>Order Updated Successfully!</p>
                    </motion.div>
                </div>}
                {cycleNotification && <div className="notification">
                    <motion.div className="notification__content"
                        variants={notificationVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <i className='bx bx-check'></i>
                        <p>Cycle Updated!</p>
                    </motion.div>
                </div>}
                {deleteNotification && <div className="notification">
                    <motion.div className="notification__content red"
                        variants={notificationVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <i className='bx bx-check'></i>
                        <p>Order deleted Successfully</p>
                    </motion.div>
                </div>}
            </AnimatePresence>
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
                            <li>
                                <i className='bx bxs-objects-horizontal-left' ></i>
                                <Link className="link" onClick={navToggle} to="Analytics">Analytics</Link>
                            </li>
                        </ul>

                        <div className="other__container">
                            {/* <a className="other__link" href="/">
                                <i className='bx bx-question-mark'></i>
                                FAQ
                            </a> */}
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
                    <Main 
                        handleAddNotification={handleAddNotification} 
                        handleTargetNotification={handleTargetNotification}
                        handleUpdateNotifcation={handleUpdateNotifcation}
                        handleCycleNotification={handleCycleNotification}
                        handleDeleteNotification={handleDeleteNotification}
                    />
                </div>
            </div>
        </div>
    </StyledDashboardPage>
  )
}

export default DashboardPage;