
import React, { useEffect } from 'react';
import AOS from 'aos';

import ProjectTimelineDemo from './TimeLine/ProjectTimeLine'
import InfiniteMovingCardsDemo from './ProjectCards'
import { FaArrowUp } from "react-icons/fa";

function Projects() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Duration is optional
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div data-aos="fade-down" style={{ overflow: 'hidden' }} className='px-4'>
            <ProjectTimelineDemo />
            <InfiniteMovingCardsDemo />
            <div className="flex justify-center  m-20">
                <button
                    onClick={scrollToTop}
                    className="flex items-center justify-center p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition duration-300 transform hover:scale-110 hover:rotate-12"
                >
                    <FaArrowUp className="text-xl animate-bounce" />
                </button>
            </div>
        </div>
    )
}

export default Projects
