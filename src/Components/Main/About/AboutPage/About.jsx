


import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Resume from '../../../../assets/Resume.pdf';
import ProfilePic from '../../../../assets/ProfileImg.jpg';
import { FaArrowUp } from "react-icons/fa";
import ShareButton from './SocialTimeLine';
import FlipWordsDemo from './TextAnim/flip';
import TimelineDemo from '../TimeLine/TimeLine';
import AnimatedModalDemo from '../ShortInfo/ShortInfo'
// import { ShimmerCircularImage } from "react-shimmer-effects";

// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

import InfiniteMovingCardsDemo from '../../Project/ProjectCards'

const About = () => {

  useEffect(() => {

    AOS.init({ duration: 1000 }); // Duration is optional

  }, []);

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (

    <>

      <div className="relative w-full px-4 mx-auto sm:px-6 lg:px-8 md:pb-20 " data-aos="fade-up" style={{ overflow: 'hidden' }}>
        <div className="relative flex flex-col w-full md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col items-center justify-center w-full text-slate-400 md:items-start">
            <FlipWordsDemo />
          </div>
        </div>
      </div>

      <div className="relative px-2 md:py-10 sm:px-6 lg:px-8 ">

        <div className="grid grid-cols-1 pb-8 mx-auto max-w-7xl lg:grid-cols-2 gap-y-6 lg:gap-x-8">
          {/* Profile Picture and Share Button */}

          <motion.div
            className="flex flex-col items-center lg:items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >



            <div className="relative flex items-center justify-center">
              {/* Skeleton loader while the image is loading */}
              {!isImageLoaded && (
                <div className="absolute w-64 h-64 mb-4 bg-gray-200 rounded-full lg:w-94 lg:h-94 animate-pulse" />
              )}

              {/* Profile Image */}
              {ProfilePic && (
                <img
                  src={ProfilePic}
                  alt="Profile"
                  className={` -mt-14 w-64 h-64 mb-4 rounded-full object-cover lg:w-94 lg:h-94 transition-transform duration-500 ease-in-out ${isImageLoaded ? 'scale-100 hover:scale-110' : 'scale-0'
                    }`}
                  data-aos="fade-up"
                  onLoad={() => setIsImageLoaded(true)}
                  onError={() => setIsImageLoaded(false)}  // fallback if image fails to load
                />
              )}

              {/* Fallback in case image doesn't load */}
              {!isImageLoaded && !ProfilePic && (
                <div className="absolute flex items-center justify-center w-64 h-64 mb-4 text-white bg-red-200 rounded-full lg:w-94 lg:h-94">
                  Image not available
                </div>
              )}
            </div>



            <p className='py-4 text-2xl font-extrabold text-gray-500'> Mangesh Pagare 😇 </p>


            <div className="mt-2 " data-aos="fade-left" style={{ overflow: 'hidden' }}>
              <ShareButton />
            </div>

          </motion.div>

          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            data-aos="fade-up" style={{ overflow: 'hidden' }}
          >

            <div className='text-center '>
              <h2 className="mb-8 text-3xl font-extrabold text-blue-500 sm:text-4xl">
                About Me
              </h2>

              <p className="mt-2 text-lg text-center text-gray-500 lg:text-center">
                "As a fresher web developer, I'm eager to bring creativity and technical expertise together to build engaging, user-friendly web applications. My goal is to grow and contribute to projects that prioritize innovation and user satisfaction."
              </p>
              <div className="flex justify-center mt-4 mb-20">
                <a
                  href={Resume}
                  target='_blank'
                  className="inline-block px-2 py-3 mr-2 text-sm font-medium text-center text-white transition duration-300 rounded-md"
                >
                  <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Resume
                  </button>
                </a>

                <div className='mt-1'>
                  <AnimatedModalDemo />
                </div>

              </div>
            </div>


          </motion.div>

        </div>


        <div className="mt-12 " data-aos="fade-up" style={{ overflow: 'hidden' }}>
          <TimelineDemo />
        </div>

        <div>
          <InfiniteMovingCardsDemo />
        </div>

        <div className="flex justify-center mb-20 ">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center p-2 text-white transition duration-300 transform bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-110 hover:rotate-12"
          >
            <FaArrowUp className="text-xl animate-bounce" />
          </button>
        </div>

      </div>

    </>
  );
};

export default About;
