"use client";
import React from "react";
import { ContainerScroll } from "./ParallaxConf";

import img from '../../../../assets/linear.webp'

import FlipWordsDemo from '../AboutPage/TextAnim/flip'

// import img from "next/img";

export default function HeroScrollDemo() {
    return (
        (<div className="flex flex-col -mt-20 overflow-hidden">

            <ContainerScroll
                titleComponent={

                    <>
                        <div>
                            <FlipWordsDemo />
                        </div>
                    </>

                }>
                <img
                    src={img}
                    alt="hero"
                    height={100}
                    width={1000}
                    className="object-contain h-full mx-auto rounded-2xl"
                    draggable={false} />
            </ContainerScroll>

        </div>)
    );
}
