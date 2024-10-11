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
import { Link } from 'react-router-dom';
import svg from '../../../assets/girl.svg'

function HomeConf() {
  return (

    <div className="grid items-center h-auto grid-cols-1 gap-8 p-6 mt-20 md:mt-0 md:grid-cols-1 lg:grid-cols-2 md:h-auto lg:h-96">
      {/* Image Section */}
      <div className="relative flex items-center justify-center order-2 md:order-1">
        <img
          src={svg}
          alt="Portfolio Image"
          className="object-cover w-full h-auto rounded-lg shadow-lg hover:shadow-xl md:w-full lg:w-full"
        />
      </div>

      {/* Text Section */}
      {/* <div className="left-0 z-10 order-1 text-left md:-mt-10 md:order-2">
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
          <button className="mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            About
          </button>
        </Link>
      </div> */}



      <div className="left-0 z-10 order-1 text-left md:-mt-10 md:order-2">
        <h1 className="mt-6 mb-3 text-lg text-blue-500 transition-all duration-300 dark:text-blue-200 sm:text-xl md:text-2xl lg:text-3xl">
          Hello 👋
        </h1>
        <p className="transition-all duration-300 text-slate-400 text-md md:text-lg lg:text-xl">
          Welcome To
        </p>
        <h1 className="text-3xl font-bold text-blue-600 transition-transform duration-300 transform md:text-4xl lg:text-6xl hover:text-blue-500">
          My Portfolio
        </h1>

        {/* Social Buttons with Interactive Background Colors */}
        <div className="flex my-8 space-x-4 ">
          <a
            href="https://www.linkedin.com/in/mangesh-pagare-41a5b826a/"
            title='linkedin'
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-110"
          >
            <i className="text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.286c-.967 0-1.75-.785-1.75-1.75s.783-1.75 1.75-1.75c.966 0 1.75.785 1.75 1.75s-.784 1.75-1.75 1.75zm13.5 10.286h-3v-4.719c0-1.136-.021-2.597-1.581-2.597-1.581 0-1.823 1.236-1.823 2.516v4.8h-3v-9h2.884v1.231h.041c.4-.761 1.378-1.562 2.835-1.562 3.031 0 3.59 1.994 3.59 4.588v5.743z" />
              </svg>
            </i>
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 bg-pink-500 rounded-full hover:bg-pink-600 hover:scale-110"
          >
            <i className="text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-3.182 0-3.584.012-4.849.07-1.366.062-2.584.335-3.608 1.358-.998.997-1.272 2.22-1.333 3.608-.058 1.265-.07 1.667-.07 4.848s.012 3.583.07 4.849c.061 1.388.335 2.611 1.333 3.608.998.998 2.22 1.272 3.608 1.333 1.265.058 1.667.07 4.849.07s3.583-.012 4.849-.07c1.388-.061 2.611-.335 3.608-1.333.998-.997 1.272-2.22 1.333-3.608.058-1.265.07-1.667.07-4.849s-.012-3.583-.07-4.849c-.061-1.388-.335-2.611-1.333-3.608-.997-.998-2.22-1.272-3.608-1.333-1.265-.058-1.667-.07-4.849-.07zm0 5.838c3.407 0 6.162 2.754 6.162 6.162 0 3.407-2.754 6.162-6.162 6.162-3.407 0-6.162-2.754-6.162-6.162 0-3.407 2.754-6.162 6.162-6.162zm0 1.623c-2.516 0-4.539 2.022-4.539 4.539s2.022 4.539 4.539 4.539c2.516 0 4.539-2.022 4.539-4.539s-2.022-4.539-4.539-4.539zm7.295-1.077c-.796 0-1.443.647-1.443 1.443 0 .796.647 1.443 1.443 1.443.796 0 1.443-.647 1.443-1.443 0-.796-.647-1.443-1.443-1.443zm-.295 12.501c-1.057 0-2.12.004-3.183.004-.308 0-.616.012-.924.012s-.616-.012-.924-.012c-1.063 0-2.126-.004-3.183-.004s-2.12.004-3.183.004c-.308 0-.616-.012-.924-.012s-.616.012-.924.012c-1.063 0-2.126-.004-3.183-.004v-3.183c0-1.056.004-2.12.004-3.183 0-.308.012-.616.012-.924s-.012-.616-.012-.924c0-1.063-.004-2.126-.004-3.183v-3.183c1.057 0 2.12-.004 3.183-.004s2.12.004 3.183.004c.308 0 .616-.012.924-.012s.616.012.924.012c1.063 0 2.126.004 3.183.004s2.12-.004 3.183-.004v3.183c0 1.057-.004 2.12-.004 3.183 0 .308-.012.616-.012.924s.012.616.012.924c0 1.063.004 2.126.004 3.183v3.183z" />
              </svg>
            </i>
          </a>

          <a
            href="https://github.com/PAGARE-MANGESH"
            title='github'
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 bg-gray-800 rounded-full hover:bg-gray-900 hover:scale-110"
          >
            <i className="text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.758-1.333-1.758-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.236 1.839 1.236 1.07 1.834 2.809 1.304 3.495.998.108-.775.419-1.304.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.221-.124-.303-.536-1.521.116-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.982-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.291-1.552 3.298-1.23 3.298-1.23.653 1.655.241 2.873.118 3.176.77.839 1.236 1.911 1.236 3.221 0 4.61-2.807 5.625-5.478 5.921.43.37.823 1.102.823 2.222v3.293c0 .322.218.694.824.576 4.765-1.586 8.199-6.082 8.199-11.384 0-6.627-5.373-12-12-12z" />
              </svg>
            </i>
          </a>
        </div>

        <Link to="/about">
          <button className="mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            About
          </button>
        </Link>
      </div>

    </div>



  );
}

export default HomeConf;
