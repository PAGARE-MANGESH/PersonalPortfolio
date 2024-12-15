
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Resume from '../../../../assets/Resume.pdf';
import ProfilePic from '../../../../assets/ProfileImg.jpg';
import { FaArrowUp } from "react-icons/fa";
// import FlipWordsDemo from './TextAnim/flip';
import TimelineDemo from '../TimeLine/TimeLine';
import InfiniteMovingCardsDemo from '../../Project/ProjectCards'

import ImgSwape from './ImgCarousel'


import HeroScrollDemo from '../Parallx/Parallax'


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
          <div className="flex flex-col items-center justify-center w-full text-slate-400 md:items-start ">
            {/* <FlipWordsDemo /> */}
            <HeroScrollDemo />
          </div>
        </div>
      </div>

      <div className="relative px-2 mt-20 md:py-10 sm:px-6 lg:px-8 ">

        <div className="grid grid-cols-1 pb-8 mx-auto max-w-7xl lg:grid-cols-2 gap-y-6 lg:gap-x-8">

          {/* Profile Picture and Share Button */}

          <motion.div
            className="flex flex-col items-center my-0 lg:items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="relative flex items-center justify-center mt-10 md:-mt-4">

              {ProfilePic && (

                // <img
                //   src={ProfilePic}
                //   alt="Profile"
                //   id='AboutImg'
                //   loading='lazy'
                //   className={` -mt-14 w-64 h-64 mb-4 rounded-full object-cover lg:w-94 lg:h-94 transition-transform duration-500 ease-in-out ${isImageLoaded ? 'scale-100 hover:scale-110' : 'scale-0'
                //     }`}
                //   // data-aos="fade-up"
                //   onLoad={() => setIsImageLoaded(true)}
                // />

                <ImgSwape />

              )}

            </div>


            <p className='py-4 text-2xl font-extrabold text-blue-500 text-pretty text-start' data-aos="fade-up"> Mangesh Pagare 😇 </p>

            <div className="flex my-4 space-x-1 md:my-4 " >
              <ul class="example-2">
                <li class="icon-content">
                  <a
                    href="https://www.linkedin.com/in/mangesh-pagare-41a5b826a/"
                    target="_blank"

                    aria-label="LinkedIn"
                    data-social="linkedin"
                  >
                    <div class="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                      xml:space="preserve"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div class="tooltip">LinkedIn</div>
                </li>
                <li class="icon-content">
                  <a
                    href="https://github.com/PAGARE-MANGESH"
                    target="_blank"

                    aria-label="GitHub" data-social="github">
                    <div class="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-github"
                      viewBox="0 0 16 16"
                      xml:space="preserve"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div class="tooltip">GitHub</div>
                </li>
                <li class="icon-content">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    aria-label="Instagram"
                    data-social="instagram"
                  >
                    <div class="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                      xml:space="preserve"
                    >
                      <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div class="tooltip">Instagram</div>
                </li>
              </ul>
            </div>

          </motion.div>

          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            data-aos="fade-up"
          >

            <div className='mt-16 capitalize md:-mt-20 text-start text-pretty ' data-aos="fade-left">

              <h2 className="p-4 mb-8 text-3xl font-extrabold text-blue-500 md:-mt-28 sm:text-4xl">
                About Me
              </h2>

              <p className="p-4 mt-2 text-lg text-gray-400 text-start lg:text-start">
                "I’m a passionate web developer with a strong foundation in creating responsive and interactive websites. With a focus on clean, efficient code and user-friendly design, I aim to bring innovative ideas to life. I'm eager to learn and grow while contributing to projects that enhance user experiences and deliver impactful solutions."
              </p>

              <div className="flex justify-start mx-4 mt-4">
                <a
                  href={Resume}
                  target='_blank'
                  className="inline-block px-2 py-3 text-sm font-medium text-center text-white transition duration-300 rounded-md"
                >
                  <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Resume
                  </button>
                </a>
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
