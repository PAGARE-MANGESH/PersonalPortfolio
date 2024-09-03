


import React from 'react';
import Navbar from './Components/Header/Navber';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './Components/Main/Home/Home'
import About from './Components/Main/About/AboutPage/About'
import Projects from './Components/Main/Project/Projects'
import Contact from './Components/Main/Cantact/Contact'

function Rounting() {
  return (
    <div className='container min-h-screen w-full bg-black text-white font-bold'>

      <main className='text-white relative'>
        <div className='container relative'>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </div>
      </main>
    </div>
  );
}

export default Rounting;
