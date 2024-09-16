


"use client";
import { SparklesCore } from "./HomePageCof";
import { Link } from "react-router-dom";
import React,{useEffect} from "react";
import Model from "../../Model";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function SparklesPreview() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Duration is optional
    }, []);



    return (
        <div className="h-auto w-full flex flex-col items-center justify-center mt-20 mb-10">

            <div className="grid grid-cols-1 md:grid-cols-1 mt-1 gap-0 items-end w-full px-1 sm:px-2 md:px-2 lg:px-1 relative" data-aos="fade-up">

                <div className=" w-full text-center md:text-left md:absolute relative z-10 md:pl-10" >

                    <h1 className="text-blue-500 mt-6 mb-3 dark:text-blue-200 text-md sm:text-xl md:text-2xl lg:text-2xl">
                        Hello
                    </h1>
                    <p className="text-slate-400">  Well Come To </p>
                    <h1 className="text-3xl  md:text-4xl lg:text-6xl font-bold text-blue-500">
                        My Portfolio
                    </h1>
                    <div className="flex flex-col md:flex-row md:space-x-10 mt-6 mb-10 md:mb-20 space-y-4 md:space-y-0">
                        <Link to="/about">
                            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                About
                            </button>
                        </Link>
                    </div>
                </div>

                <div className=" flex justify-center relative z-1  md:ml-40 " >
                    <Model className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[900px] h-auto" />
                </div>
            </div>

            <div className="w-full h-auto relative mt-28 px-1 sm:px-1 md:px-10 lg:px-8 ">
                {/* Gradients */}
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-[90%] blur-sm" />
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-[90%]" />
                <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-[50%] blur-sm" />
                <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-[50%]" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-auto max-w-[60rem] sm:max-w-[70rem] lg:max-w-[80rem] mx-auto"
                    particleColor="#FFFFFF"
                />

                {/* Radial Gradient */}

                {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}

            </div>

        </div >
    );
}
