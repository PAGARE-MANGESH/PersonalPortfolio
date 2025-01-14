
import React from 'react'

import { FaArrowUp } from "react-icons/fa";
import SparklesPreview from './HomeAni/Sparkles'
import CanvasRevealEffectDemo from './Cards/Cards'




function Home() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <>

      <div className="flex items-center justify-center w-full h-full ">
        <SparklesPreview />
      </div>

      <h2 className='p-4  mt-8 -mb-4 text-center text-blue-500 md:text-2xl md:-mt-42 '>  I am fully capable of accomplishing this 😎 </h2>

      <CanvasRevealEffectDemo />

      <div className="flex justify-center my-10 mb-40   " >
        <button
          onClick={scrollToTop}
          className="  flex items-center justify-center p-2 text-white transition duration-300 transform bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-110 hover:rotate-12"
        >
          <FaArrowUp className="text-xl animate-bounce " />
        </button>
      </div>

    </>
  )
}

export default Home





