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
        <h4>Menu</h4>
        <li>
            <Link className="link" to="/Home">
              <i className='bx bxs-dashboard'></i>
                Dashboard
            </Link>
        </li>
        <li>
            <Link className="link" to="/Home/Orders">
              <i className='bx bxs-receipt' ></i>
              Orders
            </Link>
        </li>
        <li>
            <Link className="link" to="/Home/Completed">
              <i className='bx bxs-badge-check' ></i>
              Completed
            </Link>
        </li>
        <li>
            <Link className="link" to="/Home/Paid">
              <i className='bx bx-money'></i>
              Paid
            </Link>
        </li>
        <li>
            <Link className="link" to="/Home/Unpaid">
              <i className='bx bx-money-withdraw' ></i>
              Unpaid
            </Link>
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
    </StyledSidebar>
  )
}

export default Sidebar