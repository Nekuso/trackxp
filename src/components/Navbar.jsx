import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { StyledNavbar } from '../styles/Navbar.styled'

function Navbar() {

  const [navActive, setNavActive] = useState("nav__links");
  const [btnActive, setBtnActive] = useState("nav__hamburger");
  const [btnHam, setBtnHam] = useState(false);

  const navToggle = () => {
    navActive === "nav__links" ? setNavActive("nav__links nav__active")
    : setNavActive("nav__links");

    btnActive === "nav__hamburger" ? setBtnActive("nav__hamburger is-active")
    : setBtnActive("nav__hamburger");

    btnHam === false ? setBtnHam(true) : setBtnHam(false);
  }

  return (

    <StyledNavbar>
        <a href="/"><h2>TrackXP</h2></a>

        <ul
        className={navActive}
        >
          <li><Link to="/Login" className='Link' onClick={navToggle }>Login</Link></li>
          <li><Link to="/Signup" className='Link Signup' onClick={navToggle }>Signup</Link></li>
        </ul>

        <button style={{
            position: btnHam ? "fixed" : "relative",
            top: btnHam ? 25 : 0,
            right: btnHam ? 25 : 0}} onClick={navToggle} className={btnActive}
            >
            <span></span>
            <span></span>
            <span></span>
        </button>

    </StyledNavbar>
  )
}

export default Navbar;