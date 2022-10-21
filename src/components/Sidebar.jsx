import React from 'react'
import { Link } from 'react-router-dom'
import { StyledSidebar } from '../styles/Sidebar.styled'

function Sidebar() {
  return (
    <StyledSidebar className="sidebar__container">
      <ul className="sidebar__links">
        <li>
            <Link className="link" to="/Dashboard">
              <i className='bx bxs-dashboard'></i>
                Dashboard
            </Link>
        </li>
        <li>
            <Link className="link" to="/Dashboard">
              <i className='bx bxs-receipt' ></i>
              Orders
            </Link>
        </li>
        <li>
            <Link className="link" to="/Dashboard">
              <i className='bx bxs-badge-check' ></i>
              Completed
            </Link>
        </li>
        <li>
            <Link className="link" to="/Dashboard">
              <i className='bx bx-money'></i>
              Paid
            </Link>
        </li>
        <li>
            <Link className="link" to="/Dashboard">
              <i className='bx bx-money-withdraw' ></i>
              Unpaid
            </Link>
        </li>
    </ul>
    </StyledSidebar>
  )
}

export default Sidebar