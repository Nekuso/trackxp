import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import {GlobalStyle} from './styles/Global';


function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>

      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="/Signup" element={<SignupPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
