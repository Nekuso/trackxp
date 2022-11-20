import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { StyledSidebar } from '../styles/Sidebar.styled'

function Sidebar() {

  const {dispatch} = useContext(AuthContext)

  return (
    <StyledSidebar className="sidebar__container">
      <div className="top__side navigation">
          <Link to="/" className="home__logo">
            <i className='bx bxs-analyse'></i>
            <h2>Track<mark>XP</mark></h2>
          </Link>
          <h4>Menu</h4>
        <ul className="sidebar__links">
          <Link className="li list" to="">
              <i className='bx bxs-dashboard'></i>
              <div className="link title">
                Dashboard
              </div>
          </Link>
          <Link className="li list" to="Orders">
              <i className='bx bxs-package' ></i>
              <div className="link title">
                Orders
              </div>
          </Link>
        </ul>
      </div>

    <div className="other__container">
      <div className="other__link" href="/">
        <i className='bx bxs-moon'></i>
      </div>
      <Link className="other__link" to="/Login" onClick={() => dispatch({type: "LOGOUT"})}>
        <i className='bx bx-log-out'></i>
        <div className="link">
          Logout
        </div>
      </Link>
    </div>
    </StyledSidebar>
  )
}

export default Sidebar