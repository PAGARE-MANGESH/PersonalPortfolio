

import React from "react";
import { Timeline } from "./TimeLineConf";

export default function TimelineDemo() {

    const data = [

        {
            title: "Skills 📝",
            content: (
                <div>
                    <p className="text-neutral-400 dark:text-neutral-400 text-xs md:text-lg font-normal mb-4">
                        Here are some of the core skills and tools I use in my web development projects:
                    </p>
                    <div className="mb-8">
                        <table className="w-full text-left border-collapse text-xs md:text-lg">
                            <thead>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <th className="py-2">Category  </th>
                                    <th className="py-2">Skills  </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2">✅Frontend :- </td>
                                    <td className="py-2">HTML, CSS, JavaScript</td>
                                </tr>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2"> ✅Framework /  Libery :- </td>
                                    <td className="py-2"> React.js, Tailwind CSS, Bootstrap</td>
                                </tr>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2">✅Backend :- </td>
                                    <td className="py-2">MySQL</td>
                                </tr>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2">✅Version Control :- </td>
                                    <td className="py-2">Git, GitHub</td>
                                </tr>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2">✅Design Tools :- </td>
                                    <td className="py-2">Figma, Canva, Photoshop</td>
                                </tr>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2">✅Video Editing :- </td>
                                    <td className="py-2">Wondershare Filmora</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ),
        },
        {
            title: "2024 - 3rd Year 👨‍🎓",
            content: (
                <div className="flex flex-col items-start space-y-4">
                    <p className="text-neutral-400 dark:text-neutral-400 text-xs md:text-lg font-normal">
                        Currently pursuing 3rd year of Bachelor's in Computer Science, At Dr. Babasaheb Ambedkar Marathwada University Aurangabad .
                        focusing on web development and programming.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="Web development project"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform transform hover:scale-105 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="JavaScript project"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform transform hover:scale-105 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022 - HSC 📖",
            content: (
                <div className="flex flex-col items-start space-y-4">
                    <p className="text-neutral-400 dark:text-neutral-400 text-xs md:text-lg font-normal">
                        Completed Higher Secondary Education (HSC) with 69% marks, with a focus on Mathematics and Computer Science.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="Web development project"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform transform hover:scale-105 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="JavaScript project"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform transform hover:scale-105 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2020 - SSC 📚",
            content: (
                <div className="flex flex-col items-start space-y-4">
                    <p className="text-neutral-400 dark:text-neutral-400 text-xs md:text-lg font-normal">
                        Completed Secondary School Certificate (SSC) with 74% marks, excelling in science and mathematics.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="Web development project"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform transform hover:scale-105 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="JavaScript project"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform transform hover:scale-105 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
