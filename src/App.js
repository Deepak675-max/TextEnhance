import React, { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Noticebar from './components/Noticebar';
import Textform from './components/Textform';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [notice, setNotice] = useState(null);
  const showAlert = (message, typ) => {
    setNotice({
      msg: message,
      type: typ
    })
    setTimeout(() => {
      setNotice(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#410F44';
      showAlert("dark mode has been enbled", "Success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enbled", "Success")
    }
  }
  const toggleTitleHome = () => {
    document.title = "Enhance text - Home"
  }
  const toggleTitleAbout = () => {
    document.title = "Enhance text - About"
  }

  return (

    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} toggleTitleHome={toggleTitleHome} toggleTitleAbout={toggleTitleAbout} />
        <Noticebar notice={notice} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<Textform showAlert={showAlert} mode={mode} />} />
        </Routes>
      </Router>

    </>

  );
}

export default App;