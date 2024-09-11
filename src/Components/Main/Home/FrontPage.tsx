// "use client";

// // import { motion } from 'framer-motion';
// import React, { useEffect } from 'react';
// import { Link, useLocation } from "react-router-dom";
// import AOS from 'aos';


// import 'aos/dist/aos.css';
// import Model from "../Model";

// import { TypewriterEffectSmooth } from "./FrontPageCof";


// export default function FrontPage() {

//     const { pathname } = useLocation();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [pathname]);


//     useEffect(() => {
//         AOS.init({ duration: 1000 }); // Duration is optional
//     }, []);


//     const words = [
//         {
//             text: "I'm",
//         },
//         {
//             text: "A Passinate",
//             className: "text-blue-500 dark:text-blue-500",
//         },
//         {
//             text: "Front-End",
//             // className: "text-blue-500 dark:text-blue-500",
//         },
//         {
//             text: "Web Developer",
//             className: "text-blue-500 dark:text-blue-500",
//         }
//     ];
//     return (


//         <div className="flex flex-col items-center justify-center h-screen-80 pt-20" >
//             <Model />
//             <h1 className="text-blue-500 mt-10 mb-5 dark:text-neutral-200 text-md sm:text-xl md:text-2xl lg:text-3xl">
//                 Hello 👋
//             </h1>
//             <p className="text-slate-400 dark:text-neutral-200 text-sm sm:text-base md:text-md mb-4">
//                 Well Come To My Portfolio
//             </p>

//             <TypewriterEffectSmooth words={words} />

//             {/* <div className="flex space-x-10 mt-6 mb-20">

//                 <Link to="/about">
//                     <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//                         About
//                     </button>
//                 </Link>

//                 <Link to="/contact" className="w-full" data-aos="fade-up">
//                     <button className="w-full h-12 rounded-xl bg-white text-black border border-black text-sm hover:bg-black hover:text-white transition-colors px-6">
//                         Contact
//                     </button>
//                 </Link>
//             </div> */}


//             <div className="flex space-x-10 mt-6 mb-20">
//                 <Link to="/about">
//                     <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//                         About
//                     </button>
//                 </Link>

//                 <Link to="/contact" className="w-full" data-aos="fade-up">
//                     <button className="w-full h-12 rounded-xl bg-white text-black border border-black text-sm hover:bg-black hover:text-white transition-colors px-6">
//                         Contact
//                     </button>
//                 </Link>
//             </div>


//         </div>




//     );
// }













// import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import AOS from 'aos';

import 'aos/dist/aos.css';
import Model from "../Model";
import { TypewriterEffectSmooth } from "./FrontPageCof";


export default function FrontPage() {

    const { pathname } = useLocation();

    // Scroll to top when the pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Initialize AOS animations
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const words = [
        {
            text: "I'm",
        },
        {
            text: "A Passionate",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "Front-End",
        },
        {
            text: "Web Developer",
            className: "text-blue-500 dark:text-blue-500",
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center h-screen-80 pt-20 " >
            <Model />
            <h1 className="text-blue-500 mt-10 mb-5 dark:text-neutral-200 text-md sm:text-xl md:text-2xl lg:text-3xl">
                Hello 👋
            </h1>
            <p className="text-slate-400 dark:text-neutral-200 text-sm sm:text-base md:text-md mb-4">
                Welcome To My Portfolio
            </p>

            <TypewriterEffectSmooth words={words} />

            <div className="flex space-x-10 mt-6 mb-20">
                <Link to="/about">
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        About
                    </button>
                </Link>

                <Link to="/contact" className="w-full" data-aos="fade-up">
                    <button className="w-full h-12 rounded-xl bg-white text-black border border-black text-sm hover:bg-black hover:text-white transition-colors px-6">
                        Contact
                    </button>
                </Link>
            </div>
        </div>




    );
}
