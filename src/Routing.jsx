


// import React from 'react';
// import Navbar from './Components/Header/Navber';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import Home from './Components/Main/Home/Home'
// import About from './Components/Main/About/AboutPage/About'
// import Projects from './Components/Main/Project/Projects'
// import Contact from './Components/Main/Cantact/Contact'

// function Rounting() {
//   return (
//     <div className='container min-h-screen w-full bg-black text-white font-bold'>

//       <main className='text-white relative'>
//         <div className='container relative'>
//           <Router>
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </Router>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Rounting;




// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import Navbar from './Components/Header/Navber';

// import Home from './Components/Main/Home/Home';
// import About from './Components/Main/About/AboutPage/About';
// import Projects from './Components/Main/Project/Projects';
// import Contact from './Components/Main/Cantact/Contact';
// import Preloader from './PreLoader';

// const pageVariants = {
//   initial: {
//     opacity: 0,
//     y: 50,
//     scale: 0.9,  // Add slight scaling effect on entry
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     scale: 1,  // Return to normal size
//     transition: {
//       duration: 0.7,  // Slower for smoother effect
//       ease: [0.43, 0.13, 0.23, 0.96],  // Custom easing for a smoother curve
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: -50,
//     scale: 0.95,  // Scale down slightly when exiting
//     transition: {
//       duration: 0.5,  // Shorter exit duration
//       ease: 'easeInOut',  // Smooth exit
//     },
//   },
// };

// function AnimatedRoutes() {


//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);

//   }, []);


//   // const location = useLocation();

//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);


//   return (
//     <AnimatePresence mode="wait">

//       <Routes location={location} key={location.pathname}>
//         <Route
//           path="/"
//           element={
//             <motion.div
//               variants={pageVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//             >
//               <Home />
//             </motion.div>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <motion.div
//               variants={pageVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//             >
//               <About />
//             </motion.div>
//           }
//         />
//         <Route
//           path="/projects"
//           element={
//             <motion.div
//               variants={pageVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//             >
//               <Projects />
//             </motion.div>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <motion.div
//               variants={pageVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//             >
//               <Contact />
//             </motion.div>
//           }
//         />
//       </Routes>

//     </AnimatePresence>

//   );
// }

// function Rounting() {
//   return (
//     <div className="container min-h-screen w-full bg-black text-white font-bold overflow-hidden">
//       <main className="text-white relative">
//         <div className="container relative">
//           <div>
//             {loading ? (
//               <Preloader />
//             ) : (
//               <Router>
//                 <Navbar />
//                 <AnimatedRoutes />
//               </Router>
//             )}
//           </div>

//         </div>
//       </main>
//     </div>
//   );
// }

// export default Rounting;












import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Components/Header/Navber';

import Home from './Components/Main/Home/Home';
import About from './Components/Main/About/AboutPage/About';
import Projects from './Components/Main/Project/Projects';
import Contact from './Components/Main/Cantact/Contact';
import Preloader from './PreLoader';

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
      ease: 'easeInOut',
    },
  },
};

function AnimatedRoutes() {
  const { pathname } = useLocation();
  const location = useLocation(); // You need this for the `Routes` key

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
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
    <div className="container min-h-screen w-full bg-black text-white font-bold overflow-hidden">
      <main className="text-white relative">
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
