// import React from 'react'

// function HomeConf() {
//   return (
//     <div>
//          <div className="left-0 z-10 w-auto mb-10 ml-4 text-left h-96">
//           <h1 className="mt-6 mb-3 text-blue-500 dark:text-blue-200 text-md sm:text-xl md:text-2xl lg:text-2xl">
//             Hello
//           </h1>
//           <p className="text-slate-400">Well Come To</p>
//           <h1 className="text-3xl font-bold ~text-blue-500 md:text-4xl lg:text-6xl">My Portfolio</h1>
//         </div>
//     </div>
//   )
// }

// export default HomeConf





import React from 'react';
import svg from '../../../assets/girl.svg'

function HomeConf() {
  return (

    <div className="grid items-center h-auto grid-cols-1 gap-8 p-6 mt-20 md:mt-0 md:grid-cols-1 lg:grid-cols-2 md:h-auto lg:h-96">
      {/* Image Section */}
      <div className="relative flex items-center justify-center order-2 md:order-1">
        <img
          src={svg}
          alt="Portfolio Image"
          className="object-cover w-full h-auto transition-transform duration-300 transform rounded-lg shadow-lg hover:shadow-xl hover:scale-105 md:w-full lg:w-full"
        />
      </div>

      {/* Text Section */}
      <div className="left-0 z-10 order-1 text-left md:-mt-10 md:order-2">
        <h1 className="mt-6 mb-3 text-lg text-blue-500 transition-all duration-300 dark:text-blue-200 sm:text-xl md:text-2xl lg:text-3xl">
          Hello
        </h1>
        <p className="transition-all duration-300 text-slate-400 text-md md:text-lg lg:text-xl">
          Welcome To
        </p>
        <h1 className="text-3xl font-bold text-blue-600 transition-transform duration-300 transform md:text-4xl lg:text-6xl hover:text-blue-500">
          My Portfolio
        </h1>
        <button className=" mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Resume
        </button>
      </div>
    </div>



  );
}

export default HomeConf;
