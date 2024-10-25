
// "use client";
// import React from "react";
// import {
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalFooter,
//   ModalTrigger,
// } from "./ShortInfoConf";

// import Img1 from '../../../../assets/Img1.jpg'

// import { motion } from "framer-motion";

// export default function AnimatedModalDemo() {
//   const images = [
//     Img1,
//   ];
//   return (
//     (
//       <div className="flex items-center justify-center ">
//         <Modal>

//           <ModalTrigger
//             className="flex justify-center text-blue-500 bg-black dark:bg-white dark:text-black group/modal-btn">
//             <span
//               className="text-center ">
//               <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//                 More Info 😇
//               </button>
//             </span>

//             {/* <div
//               className="absolute inset-0 z-20 flex items-center justify-center text-blue-500 transition duration-500 -translate-x-40 group-hover/modal-btn:translate-x-0">
//               <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//                 ✌
//               </button>

//             </div> */}

//           </ModalTrigger>

//           <ModalBody>
//             <ModalContent>
//               <h4
//                 className="mb-8 text-lg font-bold text-center md:text-2xl text-neutral-300 dark:text-neutral-100">

//                 <span
//                   className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
//                   Mangesh 😇
//                 </span>{" "}

//               </h4>

//               <div className="flex items-center justify-center">
//                 {images.map((image, idx) => (
//                   <motion.div
//                     key={"images" + idx}
//                     style={{
//                       rotate: Math.random() * 20 - 10,
//                     }}
//                     whileHover={{
//                       scale: 1.1,
//                       rotate: 0,
//                       zIndex: 100,
//                     }}
//                     whileTap={{
//                       scale: 1.1,
//                       rotate: 0,
//                       zIndex: 100,
//                     }}
//                     className="flex-shrink-0 p-1 mt-4 -mr-4 overflow-hidden bg-white border rounded-xl dark:bg-neutral-800 dark:border-neutral-700 border-neutral-100">
//                     <img
//                       src={image}
//                       alt="bali images"
//                       width="500"
//                       height="500"
//                       className="flex-shrink-0 object-cover w-20 h-20 rounded-lg md:h-40 md:w-40" />
//                   </motion.div>
//                 ))}
//               </div
//               >

//               <div
//                 className="flex flex-wrap items-start justify-start max-w-sm py-10 mx-auto gap-x-4 gap-y-6">
//                 <div className="flex items-center justify-center">
//                   👨
//                   <span className="text-md text-neutral-300 dark:text-neutral-300">
//                     Web Developer
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-center">
//                   😊
//                   <span className="text-md text-neutral-300 dark:text-neutral-300">
//                     19 Age
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-center">
//                   ✔
//                   <span className="text-md text-neutral-300 dark:text-neutral-300">
//                     Learn New Things
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-center">
//                   <span className="text-md text-neutral-300 dark:text-neutral-300">
//                     Good food everyday
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-center">
//                   🎶
//                   <span className="text-md text-neutral-300 dark:text-neutral-300">
//                     Music + Coding
//                   </span>
//                 </div>
//               </div>

//             </ModalContent>

//           </ModalBody>

//         </Modal>
//       </div>
//     )
//   )
// }



"use client";
import React, { useState } from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "./ShortInfoConf";
import Img1 from '../../../../assets/ProfileImg.jpg';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function AnimatedModalDemo() {

  const [isImageLoaded, setIsImageLoaded] = useState(false);


  return (

    <div className="flex items-center justify-center">

      <Modal>

        <ModalTrigger className="flex justify-center w-full text-blue-500 bg-black dark:bg-white dark:text-black group/modal-btn">
          <span className="text-center">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              More Info 😇
            </button>
          </span>
        </ModalTrigger>


        <ModalBody className='m-2'>
          <ModalContent>
            <h4 className="mb-8 text-lg font-bold text-center md:text-2xl text-neutrl-500 dark:text-neutral-100">
              <span className="px-4 py-4 border border-gray-200 rounded-md dark:border-neutral-700">
                Mangesh 😇
              </span>
            </h4>

            <div className="flex items-center justify-center" onLoad={() => setIsImageLoaded(true)}>
              {/* {!isImageLoaded && <Skeleton className="w-full h-full" />} */}

              <img
                src={Img1}
                alt="bali images"
                width="500"
                height="500"
                className="flex-shrink-0 object-contain w-40 rounded-lg h-46 md:h-40 md:w-40"
              />

            </div>



            <div className="flex flex-wrap items-start justify-start max-w-sm py-10 mx-auto gap-x-4 gap-y-6">
              <div className="flex items-center justify-center">
                👨
                <span className="text-md text-neutral-300 dark:text-neutral-300">Web Developer</span>
              </div>
              <div className="flex items-center justify-center">
                👨‍🎓
                <span className="text-md text-neutral-300 dark:text-neutral-300">Pursuing BCS 3rd Year</span>
              </div>

              <div className="flex items-center justify-center">
                😎
                <span className="text-md text-neutral-300 dark:text-neutral-300">Age 19 </span>
              </div>

              <div className="flex items-center justify-center">
                🎶
                <span className="text-md text-neutral-300 dark:text-neutral-300">Music + Coding</span>
              </div>
              <div className="flex items-center justify-center">
                ✔
                <span className="text-md text-neutral-300 dark:text-neutral-300">Learn New Things</span>
              </div>
              <div className="flex items-center justify-center">
                🥗
                <span className="text-md text-neutral-300 dark:text-neutral-300">Good food everyday</span>
              </div>
            </div>

          </ModalContent>
        </ModalBody>






      </Modal>

    </div>
  );
}
