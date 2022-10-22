import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './components/pages/DashboardPage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import {GlobalStyle} from './styles/Global';


function App() {

  const currentUser = false;

  const RequireAuth = ({children}) => {
    return currentUser ? children : (<Navigate to="/login" />);
  }

  return (
    <BrowserRouter>
      <GlobalStyle/>

      <div className="content">
        <Routes>
          <Route path="/">
            <Route index element={<HomePage/>} />
            <Route path="Login" element={<LoginPage/>}/>
            <Route path="Signup" element={<SignupPage/>}/>
            <Route path="Home/*">
              <Route index element={<RequireAuth><DashboardPage/></RequireAuth>}/>
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
