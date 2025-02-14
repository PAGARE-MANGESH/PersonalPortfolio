
import React from "react";
import Rounting from '../../Routing'

export default function DotBackgroundDemo() {

    return (

        (<div
            className="h-full w-full  bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2]">
            <div
                className="relative inset-0  flex items-center justify-center   [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <Rounting />

        </div>)

    );
}
