"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";


import AOS from 'aos';

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const ProjectTimeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);


    useEffect(() => {
        AOS.init({ duration: 1000 }); // Duration is optional
    }, []);


    return (

        <div
            className="w-full pt-20 font-sans md:px-10"
            ref={containerRef}
        >
            <div className="py-10 mx-auto max-w-7xl md:px-10 lg:px-10" data-aos="fade-up">
                <h2 className="max-w-4xl mb-4 text-3xl md:text-4xl text-blue-500 animate-bounce">
                    My Projects Journey 😇
                </h2>
                <p className="max-w-sm text-md text-neutral-400 dark:text-neutral-300 md:text-base">
                    I&apos;ve been working on Projects form the past 2 years. Here&apos;s
                    all  about of my project journey.
                </p>
            </div>

            <div ref={ref} className="relative pb-20 mx-auto max-w-7xl">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
                          
                            <div className="absolute flex items-center justify-center w-10 h-10 rounded-full left-3 md:left-3 bg-black border border-white shadow-[0_4px_10px_rgba(59,130,246,0.6),0_6px_20px_rgba(147,51,234,0.6)]">
                                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-white shadow-[0_2px_6px_rgba(147,51,234,0.5)]" />
                            </div>


                            <h3 className="hidden text-xl font-bold text-blue-500 md:block md:pl-20 md:text-3xl dark:text-blue-500 ">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative w-full pl-20 pr-4 md:pl-4">
                            <h3 className="block mb-4 text-2xl font-bold text-left md:hidden text-blue-500 dark:text-blue-500">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>

        </div>
    );
};
