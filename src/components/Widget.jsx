import React from 'react'
import { Link } from 'react-router-dom';
import { StyledWidget } from '../styles/Widget.styled'

function Widget() {
  return (
    <StyledWidget>
        <div className="top">
          <h3 className="top__title">Orders</h3>
          <div className="percentage">
            <i className='bx bxs-up-arrow'></i>
            <p>+20%</p>
          </div>
        </div>
        <div className="middle"><h1>100</h1></div>
        <div className="bottom">
          <Link to="/home" className="widget__link">see all users</Link>
          <div className="icon"><i class='bx bxs-package'></i></div>
        </div>
    </StyledWidget>
  )
}

export default Widget;
