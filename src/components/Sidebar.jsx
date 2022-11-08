import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { StyledSidebar } from '../styles/Sidebar.styled'

function Sidebar() {

  const {dispatch} = useContext(AuthContext)

  return (
    <StyledSidebar className="sidebar__container">
      <ul className="sidebar__links">
        <Link to="trackxp/" className="home__logo"><h2>Track<mark>XP</mark></h2></Link>
        <h4>Menu</h4>
        <li>
            <Link className="link" to="Home">
              <i className='bx bxs-dashboard'></i>
                Dashboard
            </Link>
        </li>
        <li>
            <Link className="link" to="Home/Orders">
              <i className='bx bxs-receipt' ></i>
              Orders
            </Link>
        </li>
    </ul>

    <div className="other__container">
      <div className="other__link" href="/">
        <i className='bx bxs-moon'></i>
        Dark Mode
      </div>
      <Link className="other__link" to="trackxp/Login" onClick={() => dispatch({type: "LOGOUT"})}>
        <i className='bx bx-log-out'></i>
        Logout
      </Link>
    </div>
    </StyledSidebar>
  )
}

export default Sidebar