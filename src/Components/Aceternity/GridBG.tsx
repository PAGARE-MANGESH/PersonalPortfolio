

"use client";
import React from "react";
import AllCompo from "../../Routing";

import { Boxes } from "./BoxerBG";
// import DashBord from '../../DashBord'


export function BackgroundBoxesDemo() {
  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 w-full h-full  cursor-pointer z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"></div>

      <Boxes />
      <AllCompo />

      {/* <DashBord /> */}
    </div>

  );
}
