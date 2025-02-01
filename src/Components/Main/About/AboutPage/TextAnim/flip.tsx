
import React from "react";
import { FlipWords } from "./flip-words";

export default function FlipWordsDemo() {

  const words = ["Student", "Web Developer", "Front-end Developer"];

  return (
    <div className="flex flex-col items-center justify-center w-full px-2 mt-4 space-y-5 md:mt-10 h-60 ">
      <div className="text-center">
        <h5 className="mb-4  tracking-wider text-blue-500 text-3xl md:text-5xl uppercase">
          I'm a{" "}
          <span className="relative inline-block font-bold text-blue-500">
            <FlipWords words={words} />
          </span>
        </h5>
        <p className="mt-4 text-lg text-center md:text-xl lg:text-xl">
          With Less Expetation = More Satisfaction
        </p>
      </div>
    </div>
  );
}