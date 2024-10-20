

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ProjectTimeline } from './ProjectTimeLineConf';
import Project1 from '../../../../assets/Portfolio.jpg';
import Project1Dark from '../../../../assets/PortfolioDark.jpg';
import Project2 from '../../../../assets/Ecomm.jpg';
import Project2Dark from '../../../../assets/EcommDark.jpg';
import Project3 from '../../../../assets/Carpe.jpg';
import Project3Dark from '../../../../assets/CarPenterzDark.jpg';
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
            title: 'Project 3: Carpenterz E-commerce Platform 🛒',
            content: (
                <div className="flex flex-col items-start space-y-4" data-aos="fade-left">
                    <p className="text-xs text-neutral-400 dark:text-neutral-400 md:text-lg ">
                        A blogging platform where users can write, edit, and share their blogs with the community.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {loading ? (
                            <Skeleton className="w-40 h-96" />
                        ) : (
                            <div className="w-full h-20 md:h-44 lg:h-60">
                                <img
                                    src={Project3}
                                    alt="Portfolio project"
                                    width={500}
                                    height={500}
                                    className="object-contain w-full h-20 transition-transform transform rounded-lg shadow-lg md:h-44 lg:h-60 hover:scale-105"
                                    onLoad={handleImageLoad}
                                />
                            </div>
                        )}
                        {loading ? (
                            <Skeleton className="w-40 h-96" />
                        ) : (
                            <div className="w-full h-20 md:h-44 lg:h-60">
                                <img
                                    src={Project3Dark}
                                    alt="Portfolio project"
                                    width={500}
                                    height={500}
                                    className="object-contain w-full h-20 transition-transform transform rounded-lg shadow-lg md:h-44 lg:h-60 hover:scale-105"
                                    onLoad={handleImageLoad}
                                />
                            </div>
                        )}
                    </div>
                    <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-400 md:text-lg">
                        <strong>Technologies:</strong> REACT, TAILWIND CSS, JAVASCRIPT
                    </p>
                    <a
                        href="https://carprnterz-com-coders-projects-268005cc.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-blue-500 md:text-lg hover:underline"
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
                    <p className="text-xs text-neutral-400 dark:text-neutral-400 md:text-lg ">
                        An e-commerce platform where users can browse products, add to cart, and make purchases.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {loading ? (
                            <Skeleton className="w-40 h-96" />
                        ) : (
                            <img
                                src={Project2}
                                alt="Portfolio project"
                                width={500}
                                height={500}
                                className="object-contain w-full h-20 transition-transform transform rounded-lg shadow-lg md:h-44 lg:h-60 hover:scale-105"
                                onLoad={handleImageLoad}
                            />
                        )}
                        {loading ? (
                            <Skeleton className="w-40 h-96" />
                        ) : (
                            <img
                                src={Project2Dark}
                                alt="Portfolio project"
                                width={500}
                                height={500}
                                className="object-contain w-full h-20 transition-transform transform rounded-lg shadow-lg md:h-44 lg:h-60 hover:scale-105"
                                onLoad={handleImageLoad}
                            />
                        )}
                    </div>
                    <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-400 md:text-lg">
                        <strong>Technologies:</strong> REACT, TAILWIND CSS, JAVASCRIPT
                    </p>
                    <a
                        href="https://head-phones-lovat.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-500 text-md hover:underline"
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
                    <p className="text-xs text-neutral-400 dark:text-neutral-400 md:text-lg ">
                        A personal portfolio website showcasing my web development projects and skills.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {loading ? (
                            <Skeleton className="w-40 h-96" />
                        ) : (
                            <img
                                src={Project1}
                                alt="Portfolio project"
                                width={500}
                                height={500}
                                className="object-contain w-full h-20 transition-transform transform rounded-lg shadow-lg md:h-44 lg:h-60 hover:scale-105"
                                onLoad={handleImageLoad}
                            />
                        )}
                        {loading ? (
                            <Skeleton className="w-40 h-96" />
                        ) : (
                            <img
                                src={Project1Dark}
                                alt="Portfolio project"
                                width={500}
                                height={500}
                                className="object-contain w-full h-20 transition-transform transform rounded-lg shadow-lg md:h-44 lg:h-60 hover:scale-105"
                                onLoad={handleImageLoad}
                            />
                        )}
                    </div>
                    <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-400 md:text-lg">
                        <strong>Technologies:</strong> HTML, CSS, JAVASCRIPT, BOOTSTRAP
                    </p>
                    <a
                        href="https://pagare-mangesh.github.io/FirstPortfolio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-500 text-md hover:underline"
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
