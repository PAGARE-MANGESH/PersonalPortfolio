

"use client";
import React, { useEffect, useState } from "react";
import Model from "../../Model";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SparklesCore } from "./HomePageCof";
import { FaArrowUp } from "react-icons/fa";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SparklesPreview() {

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });  // Duration is optional
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (

    <div className="relative flex flex-col items-center justify-center w-full h-auto mb-10 -mt-40 md:mt-60">

      <div className="relative flex flex-col items-center w-full px-4 mt-1 lg:px-8" data-aos="fade-up">
        <div className="relative flex justify-center float-right w-full mt-60 md:mt-0 z-1 " onLoad={() => setIsImageLoaded(true)}>
          {!isImageLoaded && <Skeleton className="w-full h-full" />}
          <Model className="w-full h-auto max-w-none" />
        </div>
      </div>

      <div className="relative w-full h-auto px-1 mt-28 sm:px-1 md:px-10 lg:px-8">
        {/* Gradients */}
        <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-[90%] blur-sm" />
        <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-[90%]" />
        <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-[50%] blur-sm" />
        <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-[50%]" />

        {/* SparklesCore */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-auto max-w-[60rem] sm:max-w-[70rem] lg:max-w-[80rem] mx-auto"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="flex justify-center m-20">
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center p-2 text-white transition duration-300 transform bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-110 hover:rotate-12"
        >
          <FaArrowUp className="text-xl animate-bounce" />
        </button>
      </div>

    </div>

  );
}
