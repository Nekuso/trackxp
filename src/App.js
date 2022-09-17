import React from 'react';
import { Router } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {


  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
    </Router>
  );
}

export default App;
