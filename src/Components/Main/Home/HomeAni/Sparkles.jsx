"use client";
import React from "react";
import { SparklesCore } from "./SparklesConf";

import HomeConf from '../HomeConf'
import About from '../../About/AboutPage/About'


export default function SparklesPreview() {
    return (
        (<div
            className="relative flex flex-col items-center justify-center w-full h-[40rem] overflow-hidden bg-black rounded-md">
            <div className="absolute inset-0 w-full h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF" />
            </div>

            {/* <h1
                className="relative z-20 text-3xl font-bold text-center text-white md:text-7xl lg:text-6xl">
                Build great products
            </h1> */}

            <div>
                <HomeConf />
            </div>


        </div>)
    );
}
