


import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaBars, FaTimes, FaMoon, FaSun, FaGithub } from 'react-icons/fa';

export default function Navbar() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Duration is optional
  }, []);


  const [isOpen, setIsOpen] = useState(false); // Start with the menu closed
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    closeMenu();
  }, [location]);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

  }, [isOpen]);


  return (

    <nav className="fixed top-0 z-50 w-full p-4 rounded-lg shadow-lg cursor-pointer drop-blur-lg">

      <div className="container flex items-center justify-between mx-auto">
        <div className="text-lg font-bold text-blue-500 " data-aos="fade-down" style={{ overflow: 'hidden' }}>
          Mangesh
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-gray-200 transition-transform duration-300 dark:text-gray-100" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-200 transition-transform duration-300 dark:text-gray-100" />
            )}
          </button>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={closeMenu}
          ></div>
        )}

        <ul
          className={`flex flex-col  md:translate-x-1 md:flex-row justify-center bg-gray-800 md:bg-transparent text-center md:space-x-8 items-center fixed md:static top-0 left-0 h-screen w-1/2 md:w-auto md:h-auto transform  mr-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
        >
          {['/', '/about', '/projects', '/contact'].map((path, index) => (

            <li key={index} className="mt-10 md:mt-0" data-aos="fade-down" style={{ overflow: 'hidden' }}>
              <Link
                to={path}
                className={`block text-lg md:text-base font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 ${location.pathname === path ? 'font-semibold text-blue-500' : 'text-gray-500'
                  }`}
                onClick={closeMenu}
              >

                {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}

              </Link>
            </li>
          ))}

        </ul>

        {/* <a
          href={}
          className={`block text-lg md:text-base font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 ${location.pathname === path ? 'font-semibold text-blue-500' : 'text-gray-500'}`}
        >

          <button className="ml-4">
            gitHub
          </button>
        </a> */}







      </div>

    </nav>
  );
}






