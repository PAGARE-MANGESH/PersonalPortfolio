


"use client";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Model from "../../Model";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SparklesCore } from "./HomePageCof";


export default function SparklesPreview() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Duration is optional
  }, []);


  return (

    <div className="relative flex flex-col items-center justify-center w-full h-auto mt-20 mb-10">

      <div className="relative flex flex-col items-center w-full px-4 mt-1 lg:px-8" data-aos="fade-up">

        {/* Left side - Text */}
        <div className="absolute left-0 z-10 w-auto mt-8 ml-4 text-left">
          <h1 className="mt-6 mb-3 text-blue-500 dark:text-blue-200 text-md sm:text-xl md:text-2xl lg:text-2xl">
            Hello
          </h1>
          <p className="text-slate-400">Well Come To</p>
          <h1 className="text-3xl font-bold text-blue-500 md:text-4xl lg:text-6xl">My Portfolio</h1>

          <div className="flex flex-col mt-6 mb-10 space-y-4 md:flex-row md:space-x-10 md:mb-20 md:space-y-0">
            <Link to="/about">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                About
              </button>
            </Link>
          </div>
        </div>

        {/* Right side - Model */}
        <div className="relative flex justify-center float-right w-full mt-60 md:mt-0 z-1 ">
          <Model className="w-full h-auto max-w-none" />
        </div>

      </div>

      {/* Sparkles and Gradients section */}
      
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

    </div>

  );
}
