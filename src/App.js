import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
    <Router>
    
    
      <Navbar />
        <Routes>
          <Route path = '/' exact element={<Home/>} />
          <Route path = '/resume' element = {<Resume/>} />
          <Route path = '/projects' element = {<Projects/>} />
          <Route path = '/sign-up' element = {<SignUp/>} />
        </Routes>


    </Router> 
    </>
  );
}

export default App;
