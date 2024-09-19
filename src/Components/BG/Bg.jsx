


import React from "react";
import Rounting from '../../Routing'


export default function DotBackgroundDemo() {

    return (

        (<div
            className="h-full w-full dark:bg-white bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2] flex items-center justify-center">
            <div
                className="absolute inset-0  flex items-center justify-center dark:bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <Rounting />

        </div>)

    );
}
