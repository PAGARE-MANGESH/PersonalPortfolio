



import React, { useEffect } from 'react';

import AOS from 'aos';

import 'aos/dist/aos.css';

import { ProjectTimeline } from "./ProjectTimeLineConf";

import Project1 from "../../../../assets/Portfolio.jpg"
import Project1Dark from "../../../../assets/PortfolioDark.jpg"

import Project2 from "../../../../assets/Ecomm.jpg"
import Project2Dark from "../../../../assets/EcommDark.jpg"

import Project3 from "../../../../assets/Carpe.jpg"
import Project3Dark from "../../../../assets/CarPenterzDark.jpg"






export default function ProjectTimelineDemo() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Duration is optional
    }, []);


    const data = [


        {
            title: "Project 3: Carpenterz E-commerce Platform 🛒",
            content: (
                <div className="flex flex-col items-start space-y-4" data-aos="fade-left">
                    <p className="text-xs text-neutral-400 dark:text-neutral-400 md:text-lg ">
                        A blogging platform where users can write, edit, and share their blogs with the community.
                    </p>


                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={Project3}
                            alt="Portfolio project"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full transition-transform transform hover:scale-105 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src={Project3Dark}
                            alt="Portfolio project"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full transition-transform transform hover:scale-105 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>



                    {/* <div className="grid grid-cols-2 gap-4">
                        <img
                            src={Project3}
                            alt="Portfolio project"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full transition-transform transform hover:scale-105 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src={Project3Dark}
                            alt="Portfolio project"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full transition-transform transform hover:scale-105 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div> */}


                    <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-400 md:text-lg">
                        <strong>Technologies:</strong> REACT, TILWIND CSS , JAVASCRIPT
                    </p>
                    <a
                        href="https://carprnterz-com-coders-projects-268005cc.vercel.app/"

                        target="_blank"
                        className="text-xs font-medium text-blue-500 md:text-lg hover:derline"

                    >
                        View Project
                    </a>
                </div>
            ),
        },

        {
            title: "Project 2: E-commerce Platform 🛒",
            content: (
                <div className="flex flex-col items-start space-y-4" data-aos="fade-left">
                    <p className="text-xs text-neutral-400 dark:text-neutral-400 md:text-lg ">
                        An e-commerce platform where users can browse products, add to cart, and make purchases.
                    </p>


                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={Project2}
                            alt="Portfolio project"
                            width={500}
                            height={500}
                            className=" rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full transition-transform transform hover:scale-105 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src={Project2Dark}
                            alt="Portfolio project"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full transition-transform transform hover:scale-105 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>


                    <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-400 md:text-lg">
                        <strong>Technologies:</strong> REACT, TILWIND CSS , JAVASCRIPT
                    </p>
                    <a
                        href="https://head-phones-lovat.vercel.app/"

                        target="_blank"
                        className="font-medium text-blue-500 text-md hover:underline"
                    >
                        View Project
                    </a>
                </div>
            ),
        },


        {
            title: "Project 1: Portfolio Website 🌐",
            content: (
                <div className="flex flex-col items-start space-y-4" data-aos="fade-left">
                    <p className="text-xs text-neutral-400 dark:text-neutral-400 md:text-lg ">
                        A personal portfolio website showcasing my web development projects and skills.
                    </p>



                    <div className="grid grid-cols-2 gap-4">


                        <img
                            src={Project1}
                            alt="Portfolio project"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full transition-transform transform hover:scale-105 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />



                        <img
                            src={Project1Dark}
                            alt="Portfolio project"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full transition-transform transform hover:scale-105 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>


                    <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-400 md:text-lg">
                        <strong>Technologies:</strong> HTML, CSS, JAVASCRIPT , BOOTSTAP
                    </p>
                    <a
                        href="https://pagare-mangesh.github.io/FirstPortfolio/"
                        target="_blank"
                        className="font-medium text-blue-500 text-md hover:underline"
                    >
                        View Project
                    </a>
                </div>
            ),
        },

    ];
    return (
        <div className="w-full">
            <ProjectTimeline data={data} />
        </div>
    );
}
