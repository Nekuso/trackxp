import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/pages/Homepage/Homepage';
import {GlobalStyle} from './styles/Global';


function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Homepage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
