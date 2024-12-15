

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
        </>
    );
}

