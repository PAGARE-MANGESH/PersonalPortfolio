
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
      <SparklesPreview />

      <div className='-mb-2 md:-mb-20' >
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stop-color="#0693e3"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,0 C 239.5,111 479,222 719,222 C 959,222 1199.5,111 1440,0 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
      </div>

      <h2 className='p-4 -mt-2 -mb-4 text-center text-blue-500 md:text-2xl md:-mt-42'>  I am fully capable of accomplishing this 😎 </h2>

      <CanvasRevealEffectDemo />

      <div className="flex justify-center mb-20 " >
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center p-2 text-white transition duration-300 transform bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-110 hover:rotate-12"
        >
          <FaArrowUp className="text-xl animate-bounce" />
        </button>
      </div>

    </>
  )
}

export default Home





