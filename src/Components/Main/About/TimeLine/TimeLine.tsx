

import React from "react";
import { Timeline } from "./TimeLineConf";

import SSC from '../../../../assets/SSCMarks.pdf'
import HSC from '../../../../assets/HSCMarks.pdf'


export default function TimelineDemo() {

    const data = [

        {
            title: "Skills 📝",
            content: (
                <div 
                // data-aos="fade-down" style={{ overflow: 'hidden' }}
                data-aos="fade-left"  style={{ overflow: 'hidden' }}

                >
                    <p className="text-neutral-400 dark:text-neutral-400 text-xs md:text-lg  mb-4">
                        Here are some of the core skills and tools I use in my web development projects:
                    </p>
                    <div className="mb-8 ">
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
                <div className="flex flex-col items-start space-y-4"
                data-aos="fade-left"  style={{ overflow: 'hidden' }}>

                    <p className="text-neutral-400 dark:text-neutral-400 text-xs md:text-lg ">
                        Currently pursuing 3rd year of Bachelor's in Computer Science, At Dr. Babasaheb Ambedkar Marathwada University Aurangabad .
                        focusing on web development and programming.
                    </p>



                    <a
                        href="https://carprnterz-com-coders-projects-268005cc.vercel.app/"

                        target="_blank"
                        className="text-blue-500 text-xs md:text-lg font-medium hover:derline"
                    >
                        View Project
                    </a>


                </div>
            ),
        },
        {
            title: "2022 - HSC 📖",
            content: (
                <div className="flex flex-col items-start space-y-4"
                data-aos="fade-left"  style={{ overflow: 'hidden' }}

                >
                    <p className="text-neutral-400 dark:text-neutral-400 text-xs md:text-lg ">
                        Completed Higher Secondary Education (HSC) with 69% marks, with a focus on Mathematics and Computer Science.
                    </p>

                    <div className="mb-8  overflow-x-auto">
                        <table className="min-w-full text-left border-collapse text-xs md:text-lg">
                            <thead>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <th className="py-2 px-2 md:px-4">Subject</th>
                                    <th className="py-2 px-2 md:px-4">Marks Obtained</th>
                                    <th className="py-2 px-2 md:px-4">Total Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2 px-2 md:px-4">✅ English</td>
                                    <td className="py-2 px-2 md:px-4">61</td>
                                    <td className="py-2 px-2 md:px-4">100</td>
                                </tr>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2 px-2 md:px-4">✅ HINDI</td>
                                    <td className="py-2 px-2 md:px-4">70</td>
                                    <td className="py-2 px-2 md:px-4">100</td>
                                </tr>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2 px-2 md:px-4">✅ MATHEMATICS & STATISTICS</td>
                                    <td className="py-2 px-2 md:px-4">68 </td>
                                    <td className="py-2 px-2 md:px-4">100</td>
                                </tr>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2 px-2 md:px-4">✅ PHYSICS</td>
                                    <td className="py-2 px-2 md:px-4">70 </td>
                                    <td className="py-2 px-2 md:px-4">100</td>
                                </tr>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2 px-2 md:px-4">✅ CHEMISTRY</td>
                                    <td className="py-2 px-2 md:px-4">75</td>
                                    <td className="py-2 px-2 md:px-4">100</td>
                                </tr>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2 px-2 md:px-4">✅ BIOLOGY</td>
                                    <td className="py-2 px-2 md:px-4">70</td>
                                    <td className="py-2 px-2 md:px-4">100</td>
                                </tr>
                                <br />
                                <tr className="text-neutral-400 dark:text-neutral-400 border ">
                                    {/* <td className="py-2 px-2 md:px-4">✅ PERCENTAGE </td> */}
                                    <td className="py-2 px-2 md:px-4">✅ PERCENTAGE </td>

                                    <td className="py-2 px-2 md:px-4">69.00%</td>

                                    <td className="py-2 px-2 md:px-4">PASS</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>



                    <a
                        href={HSC}

                        target="_blank"
                        className="text-blue-500 text-xs md:text-lg font-medium hover:derline"
                    >
                        View Project
                    </a>
                </div>
            ),
        },
        {
            title: "2020 - SSC 📚",
            content: (
                <div className="flex flex-col items-start space-y-4"
                    data-aos="fade-left"  style={{ overflow: 'hidden' }}
                >

                    <p className="text-neutral-400 dark:text-neutral-400 text-xs md:text-lg ">
                        Completed Secondary School Certificate (SSC) with 74% marks, excelling in science and mathematics.
                    </p>

                    <div className="mb-8  overflow-x-auto">
                        <table className="min-w-full text-left border-collapse text-xs md:text-lg">
                            <thead>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <th className="py-2 px-2 md:px-4">Subject</th>
                                    <th className="py-2 px-2 md:px-4">Marks Obtained</th>
                                    <th className="py-2 px-2 md:px-4">Total Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2 px-2 md:px-4">✅ MARATHI</td>
                                    <td className="py-2 px-2 md:px-4">81</td>
                                    <td className="py-2 px-2 md:px-4">100</td>
                                </tr>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2 px-2 md:px-4">✅ HINDI</td>
                                    <td className="py-2 px-2 md:px-4">72</td>
                                    <td className="py-2 px-2 md:px-4">100</td>
                                </tr>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2 px-2 md:px-4">✅ ENGLISH</td>
                                    <td className="py-2 px-2 md:px-4">67</td>
                                    <td className="py-2 px-2 md:px-4">100</td>
                                </tr>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2 px-2 md:px-4">✅ MATHEMATICS</td>
                                    <td className="py-2 px-2 md:px-4">46</td>
                                    <td className="py-2 px-2 md:px-4">100</td>
                                </tr>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2 px-2 md:px-4">✅  SCIENCE & TECHNOLOGY</td>
                                    <td className="py-2 px-2 md:px-4">74</td>
                                    <td className="py-2 px-2 md:px-4">100</td>
                                </tr>
                                <tr className="text-neutral-400 dark:text-neutral-400 border-b">
                                    <td className="py-2 px-2 md:px-4">✅ SOCIAL SCIENCES</td>
                                    <td className="py-2 px-2 md:px-4">77</td>
                                    <td className="py-2 px-2 md:px-4">100</td>
                                </tr>
                                <br />
                                <tr className="text-neutral-400 dark:text-neutral-400 border ">
                                    {/* <td className="py-2 px-2 md:px-4">✅ PERCENTAGE </td> */}
                                    <td className="py-2 px-2 md:px-4">✅ PERCENTAGE </td>

                                    <td className="py-2 px-2 md:px-4">74.00%</td>

                                    <td className="py-2 px-2 md:px-4">PASS</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <a
                        href={SSC}
                        target="_blank"
                        className="text-blue-500 text-xs md:text-lg font-medium hover:derline"
                    >
                        View Project
                    </a>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full ">
            <Timeline data={data} />
        </div>
    );
}
