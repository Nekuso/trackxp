import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { StyledMain } from '../styles/Main.styled'
import Dashboard from './Dashboard'
import Orders from './Orders'
import SingleOrder from './SingleOrder'

function Main({handleAddNotification, handleTargetNotification, handleUpdateNotifcation, handleCycleNotification, handleDeleteNotification}) {
  return (
    
   <StyledMain className='main__container'>
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