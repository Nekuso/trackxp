import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { StyledMain } from '../styles/Main.styled'
import Completed from './Completed'
import Dashboard from './Dashboard'
import Orders from './Orders'
import Paid from './Paid'
import Unpaid from './Unpaid'

function Main() {
  return (
   <StyledMain className='main__container'>
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="Orders" element={<Orders/>} />
      <Route path="Completed" element={<Completed/>} />
      <Route path="Paid" element={<Paid/>} />
      <Route path="Unpaid" element={<Unpaid/>} />
    </Routes>
   </StyledMain>
  )
}

export default Main