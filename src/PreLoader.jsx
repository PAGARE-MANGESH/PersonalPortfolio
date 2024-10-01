

import React, { useEffect, useState } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    // Simulate loading for a few seconds
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000); // Adjust the time as needed
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null; // Hide the loader once loading is complete

    return (
        <div className="flex flex-col items-center justify-center h-screen transition-all duration-500 ease-in-out">
            <div className="w-32 h-32 mb-4 transition-transform duration-700 ease-in-out border-t-4 border-blue-500 rounded-full animate-spin hover:scale-110 hover:border-blue-700"></div>
            <p className="mt-2 text-xl font-semibold text-blue-500 transition-colors duration-500 ease-in-out opacity-0 animate-fadeIn hover:text-blue-700">
                Loading...
            </p>
        </div>
    );
}

