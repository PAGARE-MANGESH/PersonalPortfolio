import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialButtons = () => {
    return (

        <div className="flex space-x-4">
            <a
                href="https://www.linkedin.com/in/mangesh-pagare-41a5b826a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <div className="p-4 bg-gray-200 rounded-full transition-transform transform group-hover:scale-110 hover:bg-blue-500">
                    <FaLinkedin className="text-gray-700 group-hover:text-white" size={24} />
                </div>
            </a>
            <a
                href="https://github.com/PAGARE-MANGESH"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <div className="p-4 bg-gray-200 rounded-full transition-transform transform group-hover:scale-110 hover:bg-gray-800">
                    <FaGithub className="text-gray-700 group-hover:text-white" size={24} />
                </div>
            </a>
        </div>
    );
};

export default SocialButtons;
