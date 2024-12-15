

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Components/Header/Navber';

import Home from './Components/Main/Home/Home';
import About from './Components/Main/About/AboutPage/About';
import Projects from './Components/Main/Project/Projects';
import Contact from './Components/Main/Cantact/Contact';
import Preloader from './PreLoader';
import { SkeletonTheme } from 'react-loading-skeleton';


// const pageVariants = {
//   initial: {
//     opacity: 0,
//     y: 50,
//     scale: 0.9,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.7,
//       ease: [0.43, 0.13, 0.23, 0.96],
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: -50,
//     scale: 0.95,
//     transition: {
//       duration: 0.5,
//       ease: 'easeInOut',
//     },
//   },
// };


const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};


function AnimatedRoutes() {
  const { pathname } = useLocation();
  const location = useLocation();  // You need this for the `Routes` key

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (

    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Projects />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </SkeletonTheme>
  );
}

function Routing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);

  }, []);

  return (

    <div className="container w-full min-h-screen overflow-hidden font-bold text-white">
      <main className="relative text-white">
        <div className="container relative">
          <AnimatePresence mode="wait">

            {loading ? (
              <Preloader />
            ) : (
              <Router>
                <Navbar />
                <AnimatedRoutes />
              </Router>
            )}
          </AnimatePresence>

        </div>
      </main>
    </div>
  );
}

export default Routing;
