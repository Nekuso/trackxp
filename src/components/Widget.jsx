import React from 'react'
import { Link } from 'react-router-dom';
import { StyledWidget } from '../styles/Widget.styled'

const Widget = ({type}) => {
  let data;

  //temporary
  const balance = 100;
  const diff = 100;

  switch (type) {
    case 'orders':
      data = {
        title: "ORDERS",
        isMoney: false,
        linkDescription: "View all orders →",
        link: "orders",
        icon: "bx bxs-package",
        backgroundColor: "#415ebe", 
      };
    break;
      
    case 'earnings':
      data = {
        title: "EARNINGS",
        isMoney: false,
        currency: "PHP",
        linkDescription: "View all earnings →",
        link: "orders",
        icon: "bx bx-money",
        backgroundColor: "#41be7f", 
      };
    break;
      
      case 'balance':
        data = {
          title: "BALANCE",
          isMoney: false,
          currency: "PHP",
        linkDescription: "View balance →",
        link: "orders",
        icon: "bx bxs-wallet-alt",
        backgroundColor: "#be4141", 
      };
    break;
    default:
    break;
  }

  return (
    <StyledWidget>
        <div className="top">
          <h3 className="top__title">{data.title}</h3>
          <div className="percentage positive">
            <i className='bx bxs-up-arrow'></i>
            <p>+20%</p>
          </div>
        </div>
        <div className="middle"><h1>{data.currency} {diff}</h1></div>
        <div className="bottom" >
          <Link to={`${data.link}`} className="widget__link">{data.linkDescription}</Link>
          <div className="icon" style={{background: `${data.backgroundColor}`}}><i className={data.icon}></i></div>
        </div>
    </StyledWidget>
  )
}

export default Widget;
