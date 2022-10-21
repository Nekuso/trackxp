import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { StyledMain } from '../styles/Main.styled'
import Dashboard from './Dashboard'
import Orders from './Orders'

function Main() {
  return (
   <StyledMain className='main__container'>
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="Orders" element={<Orders/>} />
    </Routes>
   </StyledMain>
  )
}

export default Main