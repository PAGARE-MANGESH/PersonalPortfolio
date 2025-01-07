"use client";
import React from "react";
import { FloatingNav } from "./FloatingNavCof";
import { motion } from 'framer-motion';

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";


// All Pages Here  

import Home from "../../Main/Home/Home";
import About from "../../Main/About/AboutPage/About";
import Projects from "../../Main/Project/Projects";
import ContactPage from "../../Main/Cantact/Contact";


export default function FloatingNavDemo() {


    const pageVariants = {
        initial: {
            opacity: 0,
            y: 50,
            scale: 0.9,
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.43, 0.13, 0.23, 0.96],
            },
        },
        exit: {
            opacity: 0,
            y: -50,
            scale: 0.95,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };

    const navItems = [
        {
            name: "Home",
            path: "/",
            element: (
                <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <Home />
                </motion.div>
            ),
            icon: <IconHome className="w-6 h-6 " />,
        },
        {
            name: "About",
            path: "/about",
            element: (
                <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <About />
                </motion.div>
            ),
            icon: <IconUser className="w-6 h-6" />,
        },
        {
            name: "Projects",
            path: "/projects",
            element: (
                <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <Projects />
                </motion.div>
            ),
            icon: (
                <IconMessage className="w-6 h-6 " />
            ),
        },
    ];

    return (
        (

            <div className="relative w-full">

                <FloatingNav navItems={navItems} />

            </div>)
    );
}
