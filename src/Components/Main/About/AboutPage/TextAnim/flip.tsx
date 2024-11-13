
import React from "react";
import { FlipWords } from "./flip-words";

export default function FlipWordsDemo() {

  const words = ["Student", "Web Developer", "Front-end Developer"];

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 mt-20 mb-20 space-y-5 h-60 md:mt-48">
      <div className="text-start">
        <h5 className="mb-4 text-3xl font-bold md:text-5xl lg:text-6xl">
          I'm a{" "}
          <span className="relative inline-block text-transparent transition-all duration-500 ease-in-out bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-purple-600 hover:via-pink-500 hover:to-red-500">
            <FlipWords words={words} />
          </span>
        </h5>
        <p className="mt-4 text-lg text-start md:text-xl lg:text-xl">
          With Less Expetation = More Satisfaction
        </p>
      </div>
    </div>
  );
}