


import React from 'react';
import { Link } from 'react-router-dom';
import svg from '../../../assets/girl.svg';

function HomeConf() {
  return (
    <div className="grid items-center h-auto grid-cols-1 gap-12 px-6 mt-20 md:grid-cols-2 lg:h-auto lg:gap-20 md:mt-0">
      {/* Image Section */}
      <div className="relative flex items-center justify-center order-2 h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem] md:order-1">
        <img
          src={svg}
          alt="Portfolio Image"
          className="object-cover w-full h-full rounded-lg shadow-lg md:w-auto md:h-auto lg:h-full hover:shadow-xl"
        />
      </div>

      {/* Text Section */}
      <div className="left-0 z-10 order-1 text-start md:order-2">
        <h1 className="mt-6 mb-3 text-lg text-blue-500 transition-all duration-300 dark:text-blue-200 sm:text-xl md:text-2xl lg:text-3xl">
          Hello 👋
        </h1>
        <p className="transition-all duration-300 text-slate-400 text-md md:text-lg lg:text-xl">
          Welcome To
        </p>
        <h1 className="text-3xl font-bold text-blue-600 transition-transform duration-300 transform md:text-4xl lg:text-6xl hover:text-blue-500">
          My Portfolio
        </h1>

        <Link to="/about">
          <div className="container flex items-start justify-start mt-4 md:mt-10">
            <div className="relative group">
              <button
                className="relative inline-block w-full h-12 p-px font-semibold text-white transition-transform duration-300 ease-in-out bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 hover:scale-105 active:scale-95"
              >
                <span
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[4px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                ></span>

                <span className="relative z-10 block px-8 py-2 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-1">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      About Me 😇
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomeConf;
