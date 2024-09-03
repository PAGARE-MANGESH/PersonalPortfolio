"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ShortInfoConf";

// import Image from "next/image";

import { motion } from "framer-motion";
// import { Link } from 'react-router-dom';

import Img1 from '../../../../assets/Img1.jpg'



export default function AnimatedModalDemo() {
  const images = [
    Img1
   ];
  return (
    (<div className=" mt-4 items-center justify-center">
      <Modal>
        <ModalTrigger
          className="bg-black border dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span
            className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            My Info
          </span>
          <div
            className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✌
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="mx-10">
            <h4
              className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">

              <span
                className="px-4 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Mangesh Pagare 😇
              </span>{" "}

            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden">
                  <img
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0" />
                </motion.div>
              ))}
            </div>
            <div
              className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                {/* <PlaneIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" /> */}

                <span className="pl-1 text-neutral-700 dark:text-neutral-300 text-sm">
                  👨‍🎓 Pursuing 3rd year in BCS
                </span>
              </div>
              <div className="flex items-center justify-center">
                {/* <ElevatorIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" /> */}

                <span className="pl-1 text-neutral-700 dark:text-neutral-300 text-sm">
                  🙆‍♂️ Age :- 19
                </span>
              </div>
              <div className="flex items-center justify-center">
                {/* <VacationIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" /> */}

                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  ❤ Webdeveloper
                </span>
              </div>
              <div className="flex  items-center justify-center">
                {/* <FoodIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" /> */}
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  ✔ Music / Codding
                </span>
              </div>
              <div className="flex items-center justify-center">
                {/* <MicIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" /> */}
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  😇 Exploar New Things

                </span>
              </div>
              <div className="flex items-center justify-center">
                {/* <ParachuteIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" /> */}
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  👍 Learning New Things
                </span>
              </div>
            </div>
          </ModalContent>

          <ModalFooter>
            {/* <button
                className="cursor-pointer bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Back
              </button> */}
            <p > Thank You ❤</p>
          </ModalFooter>

        </ModalBody>
      </Modal>
    </div>)

  );
}
