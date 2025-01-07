"use client";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";

import { cn } from "../../../utils/cn";
// import Link from "next/link";

export const FloatingNav = ({
    navItems,
    className
}) => {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(false);

    const location = useLocation();

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current - scrollYProgress.getPrevious();

            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });


    const ScollTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 1000);

    }



    return (
        (
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{
                        opacity: 1,
                        y: -100,
                    }}
                    animate={{
                        y: visible ? 0 : -100,
                        opacity: visible ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className={cn(
                        // "flex max-w-fit fixed top-20 inset-x-0 mx-auto border border-blue-500 dark:border-white/[0.2] rounded-full dark:bg-black bg-white/80 backdrop-blur-lg transition-all shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 z-0",
                        "flex max-w-fit fixed top-20 inset-x-0 mx-auto border border-blue-500 dark:border-white/[0.2] rounded-full dark:bg-black bg-white/80 backdrop-blur-lg transition-all duration-300 ease-in-out delay-150 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 opacity-0 hover:opacity-100",
                        className
                    )}>
                    {navItems.map((navItem, idx) => (
                        <Link
                            key={`link=${idx}`}
                            to={navItem.path}
                            onClick={() => ScollTop()}
                            element={navItem.element}
                            className={cn(
                                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-800 dark:hover:text-neutral-300 hover:text-neutral-500",
                                location.pathname === navItem.path
                                    ? "text-blue-500 dark:text-blue-400" // Active link color
                                    : "text-neutral-800 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
                            )}>
                            <span
                                className={`block sm:hidden mx-4 ${location.pathname === navItem.path
                                    ? "text-blue-500 sm:text-blue-500 border-b border-blue-500"
                                    : "text-neutral-800 "
                                    }`}
                            >
                                {navItem.icon}
                            </span>
                            <span className="hidden mx-8 text-sm sm:block">{navItem.name}</span>
                        </Link>
                    ))}

                    <Link to="/contact">
                        <button
                            onClick={() => ScollTop()}
                            className={`border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full ${location.pathname === "/contact"
                                ? "text-blue-500 border-b border-blue-500"
                                : "text-neutral-800"
                                }`}
                        >
                            <span>Talk With Me</span>
                            <span className="absolute inset-x-0 w-1/2 h-px mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                        </button>
                    </Link>


                </motion.div>
            </AnimatePresence>)
    );
};
