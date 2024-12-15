
"use client";
import React from "react";
import { SparklesCore } from "./SparklesConf";
import HomeConf from '../HomeConf';

export default function SparklesPreview() {
    return (
        <div className="relative flex w-full  h-screen flex-col items-center justify-center w-full h-[40rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] overflow-hidden bg-black rounded-md transition-all duration-500 ease-in-out transform mt-2">
            <div className="absolute inset-0 w-full h-auto" >
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            <div className="relative p-4 z-1 ">
                <HomeConf />
            </div>
        </div>
    );
}
