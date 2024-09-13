


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Resume from '../../../../assets/Resume.pdf';
import ProfilePic from '../../../../assets/ProfileImg.jpg';
import { FaArrowUp } from "react-icons/fa";
import ShareButton from './SocialTimeLine';
import FlipWordsDemo from './TextAnim/flip';
import TimelineDemo from '../TimeLine/TimeLine';
// import Counter from '../Try';

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Duration is optional
  }, []);



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (

    <>

      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 md:pb-20 " data-aos="fade-up" style={{ overflow: 'hidden' }}>
        <div className="relative flex flex-col md:flex-row md:justify-between md:items-center w-full">
          <div className="flex flex-col text-slate-400 justify-center items-center md:items-start w-full">
            <FlipWordsDemo />
          </div>
        </div>
      </div>

      <div className="relative md:py-10 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-8">
          {/* Profile Picture and Share Button */}
          <motion.div
            className="flex flex-col items-center lg:items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={ProfilePic}
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover lg:w-94 lg:h-94 mb-4"
              data-aos="fade-up" style={{ overflow: 'hidden' }}
            />
            <div className="mt-2 " data-aos="fade-left" style={{ overflow: 'hidden' }}>
              <ShareButton />
            </div>
          </motion.div>

          {/* About and Details Section */}
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            data-aos="fade-up" style={{ overflow: 'hidden' }}
          >
            <h2 className="text-3xl mb-8 font-extrabold text-blue-500 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-2 text-lg text-gray-500 hover:text-gray-300 text-center lg:text-left">
              "As a fresher web developer, I'm eager to bring creativity and technical expertise together to build engaging, user-friendly web applications. My goal is to grow and contribute to projects that prioritize innovation and user satisfaction."
            </p>


            <div className="flex space-x-10 mt-6 mb-20">
              <a
                href={Resume}
                target='_blank'
                className="inline-block px-2 py-3 mr-2  text-white text-sm font-medium rounded-md transition duration-300 text-center"
              >
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  Resume
                </button>
              </a>

            </div>


          </motion.div>

        </div>

        <div className="mt-12 mb-20" data-aos="fade-up" style={{ overflow: 'hidden' }}>
          <TimelineDemo />
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center m-0">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition duration-300 transform hover:scale-110 hover:rotate-12"
          >
            <FaArrowUp className="text-xl animate-bounce" />
          </button>
        </div>

      </div>

    </>
  );
};

export default About;
