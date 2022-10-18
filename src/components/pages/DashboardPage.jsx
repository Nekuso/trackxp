import React, {useState} from 'react';
import {StyledDashboardPage} from '../../styles/DashboardPage.styled';

function DashboardPage() {
    // const [navActive, setNavActive] = useState("nav__links");
    const [btnActive, setBtnActive] = useState("nav__hamburger");
    const [btnHam, setBtnHam] = useState(false);
    const [darkActive, setDarkActive] = useState("bx bx-moon");

    const navToggle = () => {
        // navActive === "nav__links" ? setNavActive("nav__links nav__active")
        // : setNavActive("nav__links");

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
                    <a href="/"><h2>TrackXP</h2></a>
                    <button onClick={darkToggle}>
                        <i className={darkActive}></i>
                    </button>
                </div>

                <div className="dashboard__side">
                
                </div>

                <div className="dashboard__main">

                </div>
            </div>
        </div>
    </StyledDashboardPage>
  )
}

export default DashboardPage