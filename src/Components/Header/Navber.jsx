


import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar() {
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

    <nav className="w-full cursor-pointer fixed top-0 p-4 shadow-lg z-50 backdrop-blur-lg  rounded-lg">

      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-500 text-lg font-bold dark:text-gray-100">My Portfolio</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <FaTimes className="h-6 w-6 text-gray-200 dark:text-gray-100 transition-transform duration-300" />
            ) : (
              <FaBars className="h-6 w-6 text-gray-200 dark:text-gray-100 transition-transform duration-300" />
            )}
          </button>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMenu}
          ></div>
        )}

        <ul
          className={`flex flex-col  md:translate-x-1 md:flex-row justify-center bg-gray-800 md:bg-transparent text-center md:space-x-8 items-center fixed md:static top-0 left-0 h-screen w-1/2 md:w-auto md:h-auto transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
        >
          {['/', '/about', '/projects', '/contact'].map((path, index) => (

            <li key={index} className="md:mt-0 mt-10">
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

        <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode" className="ml-4">
          {darkMode ? (
            <FaSun className="h-6 w-6 text-gray-800 dark:text-yellow-400 transition-transform duration-300" />
          ) : (
            <FaMoon className="h-6 w-6 text-gray-200 dark:text-gray-100 transition-transform duration-300" />
          )}
        </button>

      </div>

    </nav>
  );
}






