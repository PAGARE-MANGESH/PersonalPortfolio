
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import LogoImg from '../../assets/ProfileImg.jpg';

import 'react-loading-skeleton/dist/skeleton.css';
import { motion, useScroll, useSpring } from "framer-motion";

import FloatingNavDemo from './FloatingNavbar/FloatingNav';

export default function Navbar() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });



  return (

    <nav className="fixed top-0 z-20 w-full p-2 transition-all duration-300 ease-in-out border-b-2 border-blue-500 rounded-lg shadow-lg cursor-pointer hover:border-b-4 backdrop-blur-xl">
      <div className="container grid items-center grid-cols-3 gap-6">

        {/* Left side (Logo) */}
        <div className="flex items-center p-2 space-x-2 text-lg font-bold text-blue-500" data-aos="fade-down">
          <img src={LogoImg} alt="Logo" className="w-10 h-10" />
          {/* <h2 className="text-center text-2xl font-extrabold text-transparent transition-transform duration-300 transform bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400">Mangesh</h2> */}

          <h2 className="text-center text-2xl font-extrabold text-transparent transition-transform duration-300 transform bg-clip-text bg-gradient-to-b from-blue-500 via-white to-blue-400 animate-pulse ">
            Mangesh
          </h2>


        </div>

        {/* Middle (FloatingNavDemo) */}
        <div className="flex justify-center">
          <FloatingNavDemo />
        </div>

        {/* Right side (Social Media Icon) */}
        <div className="flex items-center justify-end mr-2 space-x-4">
          <a href="https://github.com/PAGARE-MANGESH" target="_blank" rel="noopener noreferrer" title='Github' className="text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.807 1.305 3.495.997.108-.776.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.125-.303-.535-1.524.115-3.176 0 0 1.01-.322 3.3 1.23.96-.267 1.985-.399 3.005-.404 1.02.005 2.045.137 3.005.404 2.29-1.552 3.3-1.23 3.3-1.23.65 1.653.24 2.874.115 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.815 1.102.815 2.22 0 1.605-.015 2.895-.015 3.286 0 .32.22.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>

        {/* Progress Bar */}
        <motion.div style={{ scaleX }} className="progress-bar" />
      </div>
    </nav>
  );
}
