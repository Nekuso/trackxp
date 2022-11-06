import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { StyledMain } from '../styles/Main.styled'
import Completed from './Completed'
import Dashboard from './Dashboard'
import Orders from './Orders'
import Paid from './Paid'
import SingleOrder from './SingleOrder'
import Unpaid from './Unpaid'

function Main() {
  return (
   <StyledMain className='main__container'>
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="Orders">
        <Route index element={<Orders />} />
        <Route path=":orderId" element={<SingleOrder/>}/>
      </Route>
    </Routes>
   </StyledMain>
  )
}

export default Main