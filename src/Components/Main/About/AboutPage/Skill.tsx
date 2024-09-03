// "use client";
// import React, { useState } from "react";
// import { MultiStepLoader as Loader } from "./SkillCompCof";
// import { IconSquareRoundedX } from "@tabler/icons-react";

// const loadingStates = [
//   {
//     text: "Buying a condo",
//   },
//   {
//     text: "Travelling in a flight",
//   },
//   {
//     text: "Meeting Tyler Durden",
//   },
//   {
//     text: "He makes soap",
//   },
//   {
//     text: "We goto a bar",
//   },
//   {
//     text: "Start a fight",
//   },
//   {
//     text: "We like it",
//   },
//   {
//     text: "Welcome to F**** C***",
//   },
// ];

// export default function MultiStepLoaderDemo() {
//   const [loading, setLoading] = useState(false);
//   return (
//     <div className="w-full h-[60vh] flex items-center justify-center">
//       {/* Core Loader Modal */}
//       <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

//       {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
//       <button
//         onClick={() => setLoading(true)}
//         className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-white mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
//         style={{
//           boxShadow:
//             "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
//         }}
//       >
//         Click to load
//       </button>

//       {loading && (
//         <button
//           className="fixed top-4 right-4 text-black dark:text-white z-[120]"
//           onClick={() => setLoading(false)}
//         >
//           <IconSquareRoundedX className="h-10 w-10" />
//         </button>
//       )}
//     </div>
//   );
// }




"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./SkillCompCof";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "HTML , CSS , JS ",
  },
  {
    text: "React.js , Tilwindcss, BootStrap",
  },
  {
    text: "MySql, Git , GitHub",
  },
  {
    text: "Figma, Canva , PhotoShop",
  },
  {
    text: "Explore New libries",
  },
  {
    text: "Responsive and Eye Capture UI",

  },
  {
    text: "I like to Explore UI / UX Designs",
  },
  {
    text: "Thank You !",
  },
];


export default function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <button
        onClick={() => setLoading(true)}
        className="bg-gradient-to-r from-blue-800 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white mx-auto text-sm md:text-base transition-all duration-300 ease-in-out font-medium h-10 rounded-lg px-8 flex items-center justify-center shadow-lg"
      >
        My Skills

      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 text-gray-200 dark:text-gray-300 hover:text-gray-400 dark:hover:text-red-400 transition-colors duration-300 ease-in-out z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
