


import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import svg from '../../../assets/girl.svg';



function HomeConf() {


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

  return (
    <>


      {/* <div className="grid items-center h-auto grid-cols-1 gap-12 px-6 mt-12 md:grid-cols-1 lg:h-auto lg:gap-10 md:mt-10 ">

        <div className="relative flex items-center justify-center order-2 h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem] md:order-0">
          <img
            src={svg}
            alt="Portfolio Image"
            className="object-cover w-full h-full rounded-lg shadow-lg md:blur-sm md:w-auto md:h-auto lg:h-full hover:shadow-xl"
          />

        </div>


  
        <motion.div
          className="z-10 order-2 text-center md:absolute md:order-1 ld:order-1 "
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h1 className="mt-6 mb-3 text-lg font-medium text-slate-500 dark:text-blue-200 sm:text-xl md:text-2xl lg:text-3xl">
            Welcome 👋
          </h1>

          <motion.h1
            className="text-4xl font-extrabold text-transparent transition-transform duration-300 transform bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 md:text-4xl lg:text-7xl hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            My Professional Portfolio
          </motion.h1>

          <motion.p
            className="mt-3 text-lg text-slate-400 md:mt-5 md:text-xl lg:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Discover Projects, Skills, and Experience
          </motion.p>

          <Link to="/about">
            <motion.div
              className="container flex items-center justify-center mt-6 md:mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative group">
                <button
                  className="relative inline-block w-full h-12 p-px font-semibold text-white transition-transform duration-300 ease-in-out bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900"
                >
                  <span
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[4px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  ></span>

                  <span className="relative z-10 block px-8 py-2 rounded-xl bg-gray-950">
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1">
                        Learn More About Me
                      </span>
                      <svg
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </motion.div>
          </Link>
        </motion.div>

      </div> */}


      <div className="grid items-center gap-12 px-6 mt-12 md:grid-cols-2 lg:gap-16 md:mt-10 lg:mt-16">
        {/* Image Section */}
        <div className="relative flex items-center justify-center h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem]">
          <img
            src={svg}
            alt="Portfolio Image"
            className="object-cover w-full h-full transition-transform duration-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
          />
        </div>

        {/* Text Content Section */}
        <motion.div
          className="z-10 flex flex-col items-center text-center"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h1 className="mt-6 mb-3 text-lg font-medium text-slate-500 dark:text-blue-200 sm:text-xl md:text-2xl lg:text-3xl">
            Welcome 👋
          </h1>

          <motion.h1
            className="text-4xl font-extrabold text-transparent transition-transform duration-300 transform bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 md:text-5xl lg:text-7xl hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            My Professional Portfolio
          </motion.h1>

          <motion.p
            className="mt-3 text-lg text-slate-400 md:mt-5 md:text-xl lg:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Discover Projects, Skills, and Experience
          </motion.p>

          <Link to="/about">
            <motion.div
              className="flex justify-center mt-6 md:mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="relative px-8 py-3 text-lg font-semibold text-white transition-transform duration-300 ease-in-out bg-gray-800 shadow-lg rounded-xl group hover:scale-105"
              >
                <span
                  className="absolute inset-0 w-full h-full opacity-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rounded-xl group-hover:opacity-100 group-hover:animate-pulse"
                ></span>
                <span className="relative z-10 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    Learn More About Me
                  </span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
            </motion.div>
          </Link>
        </motion.div>
      </div>

    </>
  );
}

export default HomeConf;
