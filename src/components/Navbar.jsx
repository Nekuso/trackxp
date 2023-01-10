import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { StyledNavbar } from '../styles/Navbar.styled'
import {motion} from "framer-motion";

function Navbar({isLogin}) {

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

  const { currentUser } = useContext(AuthContext);

  return (

    <StyledNavbar>
        <Link to="/" className="home__link">
          <i className='bx bxs-analyse'></i>
          <h2>Track<mark>XP</mark></h2>
        </Link>
        
        <ul
        className={navActive}
        >
          {
            currentUser ? 
            <div className="dash__nav__container">
              <motion.a href="https://github.com/Nekuso/trackxp" className="github__link" rel="noopener noreferrer" target="_blank"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.5 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
              ><i className='bx bxl-github'></i></motion.a>
              <Link to="Home" className="nav__dash__button">Dashboard</Link>
            </div>
            : isLogin ? "":<><li><Link to="/Login" className='Link' onClick={navToggle }>Login</Link></li>
            {/* <li><Link to="/Signup" className='Link Signup' onClick={navToggle }>Signup</Link></li> */}
            </>
          }
          
        </ul>

        <button style={{
            position: btnHam ? "fixed" : "relative",
            top: btnHam ? 25 : 0,
            right: btnHam ? 25 : 0}} 
            onClick={navToggle} 
            className={btnActive}
            >
            <span></span>
            <span></span>
            <span></span>
        </button>

    </StyledNavbar>
  )
}

export default Navbar;