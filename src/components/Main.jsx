import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { StyledMain } from '../styles/Main.styled';
import Dashboard from './Dashboard';
import Orders from './Orders';
import SingleOrder from './SingleOrder';
import Float1 from "../img/Float1.png";
import Float2 from "../img/Float2.png";
import Float3 from "../img/Float3.png";
import Float4 from "../img/Float4.png";
import Float5 from "../img/Float5.png";
import Float6 from "../img/Float6.png";
import Float7 from "../img/Float7.png";


function Main({handleAddNotification, handleTargetNotification, handleUpdateNotifcation, handleCycleNotification, handleDeleteNotification}) {
  
  return (
    
   <StyledMain className='main__container'>
    <img className="set1 float" src={Float5} alt="" />
    <img className="set2 float" src={Float2} alt="" />
    <img className="set3 float" src={Float1} alt="" />
    <img className="set4 float" src={Float4} alt="" />
    <img className="set5 float" src={Float3} alt="" />
    <img className="set6 float" src={Float6} alt="" />
    <img className="set7 float" src={Float7} alt="" />
    <Routes>
      <Route path="" element={
        <Dashboard 
          handleAddNotification={handleAddNotification} 
          handleTargetNotification={handleTargetNotification}
          />} 
        />
      <Route path="Orders">
        <Route index element={
          <Orders 
            handleAddNotification={handleAddNotification} 
            handleUpdateNotifcation={handleUpdateNotifcation}
            handleDeleteNotification={handleDeleteNotification}
            />} 
          />
        <Route path=":orderId" element={
          <SingleOrder 
            handleUpdateNotifcation={handleUpdateNotifcation}
            handleCycleNotification={handleCycleNotification}
          />
        }/>
      </Route>
    </Routes>
   </StyledMain>
  )
}

export default Main