import React from 'react';
import { Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import {GlobalStyle} from './styles/Global';


function App() {

  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
    </Router>
  );
}

export default App;
