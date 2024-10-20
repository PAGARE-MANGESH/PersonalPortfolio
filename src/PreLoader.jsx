

import React, { useEffect, useState } from 'react';
// import '../src/index.css'


export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 10000);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
    

        <>
            <div id="div1" className="flex translate-y-48 md:-mb-24">
                <div id="l" className="m-8">
                    <div className="pupil">
                        <div className="p5">
                            <div className="pupl2">
                                <div className="pupil3"></div>
                                <div className="pupil4"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="m" className="m-8">
                    <div className="pupil">
                        <div className="p5">
                            <div className="pupl2">
                                <div className="pupil3"></div>
                                <div className="pupil4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-screen transition-all duration-500 ease-in-out">
                <div className="w-32 h-32 mb-4 transition-transform duration-700 ease-in-out border-b-4 border-blue-500 rounded-full animate-spin hover:scale-110 hover:border-blue-700"></div>
                <p className="mt-2 text-xl font-semibold text-blue-500 transition-colors duration-500 ease-in-out opacity-0 animate-fadeIn hover:text-blue-700">
                    Loading...
                </p>
            </div>

        </>
    );
}

