


// import React from 'react';
// import { motion } from 'framer-motion';
// import ProfilePic from '../../../../assets/profile.png';
// import ShareButton from './SocialTimeLine';
// import TwoColumnTable from './AboutTabel';
// import FlipWordsDemo from '../../../Aceternity/TextAnim/flip';


// const About = () => {
//   return (
//     <>

//       <div className="relative w-full mx-auto pt-16 p-4 pb-20">
//         <div className="relative flex flex-col md:flex-row md:justify-between md:items-center p-4 w-full">
//           <div className="flex flex-col justify-center items-center md:items-start w-full">
//             <FlipWordsDemo />
//           </div>
//         </div>
//       </div>

//       <div className="relative py-16 px-4 sm:px-6 lg:px-8 mt-20">
//         <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 ">
//           {/* Profile Picture and Share Button */}
//           <motion.div
//             className="flex flex-col items-center "
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <img
//               src={ProfilePic}
//               alt="Profile"
//               className="rounded-full w-48 h-48 object-cover md:mr-60 lg:w-64 lg:h-64 mb-4"
//             />
//             <div className="mt-4 md:mr-60">
//               <ShareButton />
//             </div>
//           </motion.div>

//           {/* About and Details Section */}
//           {/* <motion.div
//           className="lg:ml-10 md:ml-60"
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl font-extrabold text-gray-300 sm:text-4xl">
//             About Me
//           </h2>
//           <p className="mt-4 text-lg text-gray-500 hover:text-gray-300">
//             "As a fresher web developer, I'm eager to bring creativity and technical expertise together to build engaging, user-friendly web applications. My goal is to grow and contribute to projects that prioritize innovation and user satisfaction."
//           </p>

//         </motion.div> */}

//           <motion.div
//             className="lg:ml-10 md:ml-60"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl font-extrabold text-gray-300 sm:text-4xl">
//               About Me
//             </h2>
//             <p className="mt-4 text-lg text-gray-500 hover:text-gray-300">
//               "As a fresher web developer, I'm eager to bring creativity and technical expertise together to build engaging, user-friendly web applications. My goal is to grow and contribute to projects that prioritize innovation and user satisfaction."
//             </p>

//             <div className="mt-8 flex space-x-4">
//               <a
//                 href="/resume.pdf" // Update with your resume file path
//                 download
//                 className="inline-block px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 transition duration-300"
//               >
//                 Download Resume
//               </a>
//               <a
//                 href="#contact" // Update with your contact section ID
//                 className="inline-block px-6 py-3 bg-gray-700 text-white text-sm font-medium rounded-md hover:bg-gray-600 transition duration-300"
//               >
//                 Contact Me
//               </a>
//             </div>
//           </motion.div>



//         </div>
//         <TwoColumnTable />
//       </div>
//     </>

//   );
// };

// export default About;













import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Resume from '../../../../assets/Resume.pdf';
import ProfilePic from '../../../../assets/ProfileImg.jpg';

import ShareButton from './SocialTimeLine';
// import TwoColumnTable from './AboutTabel';
import FlipWordsDemo from './TextAnim/flip';
import TimelineDemo from '../TimeLine/TimeLine';

const About = () => {
  return (
    <>

      <div className="relative w-full mx-auto  px-4 sm:px-6 lg:px-8 pb-20 -top-20">
        <div className="relative flex flex-col md:flex-row md:justify-between md:items-center w-full">
          <div className="flex flex-col text-slate-400 justify-center items-center md:items-start w-full">
            <FlipWordsDemo />
          </div>
        </div>
      </div>


      <div className="relative py-10 px-4 sm:px-6 lg:px-8 -top-60">
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
            />
            <div className="mt-2">
              <ShareButton />
            </div>
          </motion.div>

          {/* About and Details Section */}

          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-blue-500 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-2 text-lg text-gray-500 hover:text-gray-300 text-center lg:text-left">
              "As a fresher web developer, I'm eager to bring creativity and technical expertise together to build engaging, user-friendly web applications. My goal is to grow and contribute to projects that prioritize innovation and user satisfaction."
            </p>

            <div className="mt-6   md:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <a
                href={Resume} // Update with your resume file path
                terget='_blank'
                download
                className="inline-block px-2 py-3 mr-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 transition duration-300 text-center"
              >
                Download Resume
              </a>

              {/* 
              <a
                href="#contact" // Update with your contact section ID
                className="inline-block px-6 py-3 bg-gray-700 text-white text-sm font-medium rounded-md hover:bg-gray-600 transition duration-300 text-center"
              >
                Contact Me
              </a> 
              */}

              <Link to="/contact">
                <button
                  className="inline-block px-6 py-3 bg-gray-700 text-white text-sm font-medium rounded-md hover:bg-gray-600 transition duration-300 text-center">
                  Contact
                </button>
              </Link>
            </div>
          </motion.div>

        </div>

        <div className="mt-12">

          {/* <TwoColumnTable /> */}

          <TimelineDemo />

        </div>
      </div>

    </>
  );
};

export default About;




