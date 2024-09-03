// import React from "react";
// import { FlipWords } from "./flip-words";

// export default function FlipWordsDemo() {
//   const words = ["better", "cute", "beautiful", "modern"];

//   return (
//     <div className="h-[20rem] font-bold top-0 flex justify-center items-center px-4">
//       <div className="text-4xl mx-auto font-normal text-neutral-400">
//         Build
//         <FlipWords words={words} /> <br />
//         websites with Aceternity UI
//       </div>
//     </div>
//   );
// }








import React from "react";
import { FlipWords } from "./flip-words";

export default function FlipWordsDemo() {
  const words = ["Mangesh", "Student", "Web Developer", "UI/UX Designer"];

  return (
    <div className="h-60 w-full mt-48 mb-28 flex flex-col justify-center items-center px-4 space-y-5">
      <div className="text-center">
        <h5 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          I'm{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-purple-600 hover:via-pink-500 hover:to-red-500 transition-all duration-500 ease-in-out">
            <FlipWords words={words} />
          </span>
        </h5>
        <p className="text-lg md:text-xl lg:text-xl mt-4">
          With Less Expetation = More Satisfaction
        </p>
      </div>
    </div>
  );
}
