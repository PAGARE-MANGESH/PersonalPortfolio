

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ProjectTimeline } from './ProjectTimeLineConf';



import Project1 from '../../../../assets/Portfolio.webp';
import Project1Dark from '../../../../assets/PortfolioDark.webp';
import Project2 from '../../../../assets/Ecomm.webp';
import Project2Dark from '../../../../assets/EcommDark.webp';
import Project3 from '../../../../assets/Carpe.webp';
import Project3Dark from '../../../../assets/CarPenterzDark.webp';
import Project4 from '../../../../assets/Project4.webp'
import Project4Dark from '../../../../assets/Project4Dark.webp'



import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

export default function ProjectTimelineDemo() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const handleImageLoad = () => {
        setLoading(false);
    };


    const data = [
        {
            title: 'Project 4: Task Management App 📝',
            content: (
                <div className="flex flex-col items-start space-y-4" data-aos="fade-left">
                    <p className="text-md text-neutral-400 dark:text-neutral-400 md:text-lg">
                        I developed this project during my virtual internship at Zidio Development. I handled the entire front end, while my teammate worked on the backend.
                        I implemented authentication features, including login, signup, forgot password, and reset password. Additionally,
                        I integrated dark and light mode for an improved user experience.
                        The app features a clean and interactive UI, allowing users to track their state and dra

                    </p>
                    <div className="grid grid-cols-2 gap-4 animate-pulse ">
                        {loading ? (
                            <Skeleton className="w-full h-44 lg:h-60" />
                        ) : (
                            <div className="w-full h-44 lg:h-60 ">
                                <img
                                    src={Project4Dark}
                                    alt="Portfolio project"
                                    className="object-contain w-full transition-transform transform rounded-lg shadow-lg h-44 lg:h-60 hover:scale-105"
                                    onLoad={handleImageLoad}
                                />
                            </div>
                        )}
                        {loading ? (
                            <Skeleton className="w-full h-44 lg:h-60" />
                        ) : (
                            <div className="w-full h-44 lg:h-60">
                                <img
                                    src={Project4}
                                    alt="Portfolio project"
                                    className="object-contain w-full transition-transform transform rounded-lg shadow-lg h-44 lg:h-60 hover:scale-105"
                                    onLoad={handleImageLoad}
                                />
                            </div>
                        )}
                    </div>
                    <p className="mt-4 text-md text-neutral-400 dark:text-neutral-400 md:text-lg">
                        <strong>Technologies:</strong> REACT, TAILWIND CSS, JAVASCRIPT, Aceternity UI, MangoDB
                    </p>
                    <a
                        href="https://zidio-task-management-one.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md font-medium text-blue-500 md:text-lg hover:underline animate-bounce"
                    >
                        View Project
                    </a>
                </div>
            ),
        },
        {
            title: 'Project 3: Carpenterz E-commerce Platform 🛒',
            content: (
                <div className="flex flex-col items-start space-y-4" data-aos="fade-left">
                    <p className="text-md text-neutral-400 dark:text-neutral-400 md:text-lg">
                        An e-commerce platform where users can browse products, add them to their cart, and make purchases.
                        It also supports two languages: English and Marathi.

                    </p>
                    <div className="grid grid-cols-2 gap-4 animate-pulse ">
                        {loading ? (
                            <Skeleton className="w-full h-44 lg:h-60" />
                        ) : (
                            <div className="w-full h-44 lg:h-60 ">
                                <img
                                    src={Project3}
                                    alt="Portfolio project"
                                    className="object-contain w-full transition-transform transform rounded-lg shadow-lg h-44 lg:h-60 hover:scale-105"
                                    onLoad={handleImageLoad}
                                />
                            </div>
                        )}
                        {loading ? (
                            <Skeleton className="w-full h-44 lg:h-60" />
                        ) : (
                            <div className="w-full h-44 lg:h-60">
                                <img
                                    src={Project3Dark}
                                    alt="Portfolio project"
                                    className="object-contain w-full transition-transform transform rounded-lg shadow-lg h-44 lg:h-60 hover:scale-105"
                                    onLoad={handleImageLoad}
                                />
                            </div>
                        )}
                    </div>
                    <p className="mt-4 text-md text-neutral-400 dark:text-neutral-400 md:text-lg">
                        <strong>Technologies:</strong> REACT, TAILWIND CSS, JAVASCRIPT
                    </p>
                    <a
                        href="https://carprnterz-com-coders-projects-268005cc.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md font-medium text-blue-500 md:text-lg hover:underline animate-bounce"
                    >
                        View Project
                    </a>
                </div>
            ),
        },
        {
            title: 'Project 2: E-commerce Platform 🛒',
            content: (
                <div className="flex flex-col items-start space-y-4" data-aos="fade-left">
                    <p className="text-md text-neutral-400 dark:text-neutral-400 md:text-lg">
                        An e-commerce platform where users can browse products, add to cart, and make purchases.
                    </p>
                    <div className="grid grid-cols-2 gap-4 animate-pulse ">
                        {loading ? (
                            <Skeleton className="w-full h-44 lg:h-60" />
                        ) : (
                            <img
                                src={Project2}
                                alt="Portfolio project"
                                className="object-contain w-full transition-transform transform rounded-lg shadow-lg h-44 lg:h-60 hover:scale-105"
                                onLoad={handleImageLoad}
                            />
                        )}
                        {loading ? (
                            <Skeleton className="w-full h-44 lg:h-60" />
                        ) : (
                            <img
                                src={Project2Dark}
                                alt="Portfolio project"
                                className="object-contain w-full transition-transform transform rounded-lg shadow-lg h-44 lg:h-60 hover:scale-105"
                                onLoad={handleImageLoad}
                            />
                        )}
                    </div>
                    <p className="mt-4 text-md text-neutral-400 dark:text-neutral-400 md:text-lg">
                        <strong>Technologies:</strong> REACT, TAILWIND CSS, JAVASCRIPT
                    </p>
                    <a
                        href="https://e-comm-ruddy.vercel.app/shopping"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-500 text-md hover:underline animate-bounce"
                    >
                        View Project
                    </a>
                </div>
            ),
        },
        {
            title: 'Project 1: Portfolio Website 🌐',
            content: (
                <div className="flex flex-col items-start space-y-4" data-aos="fade-left">
                    <p className="text-md text-neutral-400 dark:text-neutral-400 md:text-lg">
                        A personal portfolio website showcasing my web development projects and skills.
                    </p>
                    <div className="grid grid-cols-2 gap-4 animate-pulse ">
                        {loading ? (
                            <Skeleton className="w-full h-44 lg:h-60" />
                        ) : (
                            <img
                                src={Project1}
                                alt="Portfolio project"
                                className="object-contain w-full transition-transform transform rounded-lg shadow-lg h-44 lg:h-60 hover:scale-105"
                                onLoad={handleImageLoad}
                            />
                        )}
                        {loading ? (
                            <Skeleton className="w-full h-44 lg:h-60" />
                        ) : (
                            <img
                                src={Project1Dark}
                                alt="Portfolio project"
                                className="object-contain w-full transition-transform transform rounded-lg shadow-lg h-44 lg:h-60 hover:scale-105"
                                onLoad={handleImageLoad}
                            />
                        )}
                    </div>
                    <p className="mt-4 text-md text-neutral-400 dark:text-neutral-400 md:text-lg">
                        <strong>Technologies:</strong> HTML, CSS, JAVASCRIPT, BOOTSTRAP

                    </p>
                    <a
                        href="https://pagare-mangesh.github.io/FirstPortfolio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-500 text-md hover:underline animate-bounce"
                    >
                        View Project
                    </a>
                </div>
            ),
        },

    ];

    return (
        <div className="w-full h-auto overflow-hidden">
            <ProjectTimeline data={data} />
        </div>
    );
}
