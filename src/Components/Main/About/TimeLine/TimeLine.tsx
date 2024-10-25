

import React from "react";
import { Timeline } from "./TimeLineConf";

import HSC from '../../../../assets/HSCMarks.pdf';
import SSC from '../../../../assets/SSCMarks.pdf';

import BharatIntern from '../../../../assets/BharatIntern.pdf';
import CodeSoft from '../../../../assets/CodeSoft.pdf';



export default function TimelineDemo() {

    const data = [
        {
            title: "Experience / Achievements 📝",
            content: (
                <div data-aos="fade-left" style={{ overflow: 'hidden' }}>
                    <p className="mb-4 text-xs text-neutral-400 dark:text-neutral-400 md:text-lg">
                        I've completed some virtual internships. Here they are:
                    </p>
                    <div className="mb-8 overflow-x-auto">
                        <table className="w-full text-sm text-left border-collapse md:text-base">
                            <thead>
                                <tr className="border-b border-neutral-300 text-neutral-400 dark:text-neutral-300">
                                    <th className="px-4 py-3">Organization</th>
                                    <th className="px-4 py-3">Period</th>
                                    <th className="px-4 py-3">Certificate</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="transition-all border-b border-neutral-300 hover:bg-neutral-800 ">
                                    <td className="px-4 py-3">✅ Bharat Intern</td>
                                    <td className="px-0 py-3">10-Oct-2023 to 10-Nov-2023</td>
                                    <a href={BharatIntern} target="_blank" className="hover:text-blue-500">
                                        <td className="px-4 py-3" > View </td>
                                    </a>

                                </tr>
                                <tr className="transition-all border-b border-neutral-300 hover:bg-neutral-800">
                                    <td className="px-4 py-3">✅ Code Soft</td>
                                    <td className="px-0 py-3">25-Feb-2024 to 25-Mar-2024</td>
                                    <a href={CodeSoft} target="_blank" className="hover:text-blue-500">
                                        <td className="px-4 py-3"> View </td>
                                    </a>


                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ),
        },
        {
            title: "Skills 📝",
            content: (
                <div
                    // data-aos="fade-down" style={{ overflow: 'hidden' }}
                    data-aos="fade-left" style={{ overflow: 'hidden' }}

                >
                    <p className="mb-4 text-xs text-neutral-400 dark:text-neutral-400 md:text-lg">
                        Here are some of the core skills and tools I use in my web development projects:
                    </p>
                    <div className="mb-8 ">
                        <table className="w-full text-xs text-left border-collapse md:text-lg">
                            <thead>
                                <tr className="border-b text-neutral-400 dark:text-neutral-400">
                                    <th className="py-2">Category  </th>
                                    <th className="py-2">Skills  </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b text-neutral-400 hover:bg-neutral-800 dark:text-neutral-400">
                                    <td className="py-2 ">✅Frontend :- </td>
                                    <td className="py-2 ">HTML, CSS, JavaScript</td>
                                </tr>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="py-2"> ✅Framework /  Libery :- </td>
                                    <td className="py-2"> React.js, Tailwind CSS, Bootstrap</td>
                                </tr>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="py-2">✅Backend :- </td>
                                    <td className="py-2">MySQL</td>
                                </tr>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="py-2">✅Version Control :- </td>
                                    <td className="py-2">Git, GitHub</td>
                                </tr>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="py-2">✅Design Tools :- </td>
                                    <td className="py-2">Figma, Canva, Photoshop</td>
                                </tr>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
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
                    data-aos="fade-left" style={{ overflow: 'hidden' }}>

                    <p className="text-xs text-neutral-400 dark:text-neutral-400 md:text-lg ">
                        Currently pursuing 3rd year of Bachelor's in Computer Science, At Dr. Babasaheb Ambedkar Marathwada University Aurangabad .
                        focusing on web development and programming.
                    </p>



                    <a
                        href="https://carprnterz-com-coders-projects-268005cc.vercel.app/"

                        target="_blank"
                        className="text-xs font-medium text-blue-500 md:text-lg hover:derline"
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
                    data-aos="fade-left" style={{ overflow: 'hidden' }}

                >
                    <p className="text-xs text-neutral-400 dark:text-neutral-400 md:text-lg ">
                        Completed Higher Secondary Education (HSC) with 69% marks, with a focus on Mathematics and Computer Science.
                    </p>

                    <div className="mb-8 overflow-x-auto">
                        <table className="min-w-full text-xs text-left border-collapse md:text-lg">
                            <thead>
                                <tr className="border-b text-neutral-400 dark:text-neutral-400">
                                    <th className="px-2 py-2 md:px-4">Subject</th>
                                    <th className="px-2 py-2 md:px-4">Marks Obtained</th>
                                    <th className="px-2 py-2 md:px-4">Total Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="px-2 py-2 md:px-4">✅ English</td>
                                    <td className="px-2 py-2 md:px-4">61</td>
                                    <td className="px-2 py-2 md:px-4">100</td>
                                </tr>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="px-2 py-2 md:px-4">✅ HINDI</td>
                                    <td className="px-2 py-2 md:px-4">70</td>
                                    <td className="px-2 py-2 md:px-4">100</td>
                                </tr>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="px-2 py-2 md:px-4">✅ MATHEMATICS & STATISTICS</td>
                                    <td className="px-2 py-2 md:px-4">68 </td>
                                    <td className="px-2 py-2 md:px-4">100</td>
                                </tr>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="px-2 py-2 md:px-4">✅ PHYSICS</td>
                                    <td className="px-2 py-2 md:px-4">70 </td>
                                    <td className="px-2 py-2 md:px-4">100</td>
                                </tr>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="px-2 py-2 md:px-4">✅ CHEMISTRY</td>
                                    <td className="px-2 py-2 md:px-4">75</td>
                                    <td className="px-2 py-2 md:px-4">100</td>
                                </tr>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="px-2 py-2 md:px-4">✅ BIOLOGY</td>
                                    <td className="px-2 py-2 md:px-4">70</td>
                                    <td className="px-2 py-2 md:px-4">100</td>
                                </tr>
                                <br />
                                <tr className="border hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400 ">
                                    {/* <td className="px-2 py-2 md:px-4">✅ PERCENTAGE </td> */}
                                    <td className="px-2 py-2 md:px-4">✅ PERCENTAGE </td>

                                    <td className="px-2 py-2 md:px-4">69.00%</td>

                                    <td className="px-2 py-2 md:px-4">PASS</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>



                    <a
                        href={HSC}

                        target="_blank"
                        className="text-xs font-medium text-blue-500 md:text-lg hover:derline"
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
                    data-aos="fade-left" style={{ overflow: 'hidden' }}
                >

                    <p className="text-xs text-neutral-400 dark:text-neutral-400 md:text-lg ">
                        Completed Secondary School Certificate (SSC) with 74% marks, excelling in science and mathematics.
                    </p>

                    <div className="mb-8 overflow-x-auto">
                        <table className="min-w-full text-xs text-left border-collapse md:text-lg">
                            <thead>
                                <tr className="border-b text-neutral-400 dark:text-neutral-400">
                                    <th className="px-2 py-2 md:px-4">Subject</th>
                                    <th className="px-2 py-2 md:px-4">Marks Obtained</th>
                                    <th className="px-2 py-2 md:px-4">Total Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="px-2 py-2 md:px-4">✅ MARATHI</td>
                                    <td className="px-2 py-2 md:px-4">81</td>
                                    <td className="px-2 py-2 md:px-4">100</td>
                                </tr>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="px-2 py-2 md:px-4">✅ HINDI</td>
                                    <td className="px-2 py-2 md:px-4">72</td>
                                    <td className="px-2 py-2 md:px-4">100</td>
                                </tr>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="px-2 py-2 md:px-4">✅ ENGLISH</td>
                                    <td className="px-2 py-2 md:px-4">67</td>
                                    <td className="px-2 py-2 md:px-4">100</td>
                                </tr>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="px-2 py-2 md:px-4">✅ MATHEMATICS</td>
                                    <td className="px-2 py-2 md:px-4">46</td>
                                    <td className="px-2 py-2 md:px-4">100</td>
                                </tr>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="px-2 py-2 md:px-4">✅  SCIENCE & TECHNOLOGY</td>
                                    <td className="px-2 py-2 md:px-4">74</td>
                                    <td className="px-2 py-2 md:px-4">100</td>
                                </tr>
                                <tr className="border-b hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400">
                                    <td className="px-2 py-2 md:px-4">✅ SOCIAL SCIENCES</td>
                                    <td className="px-2 py-2 md:px-4">77</td>
                                    <td className="px-2 py-2 md:px-4">100</td>
                                </tr>
                                <br />
                                <tr className="border hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400 ">
                                    {/* <td className="px-2 py-2 md:px-4">✅ PERCENTAGE </td> */}
                                    <td className="px-2 py-2 md:px-4">✅ PERCENTAGE </td>

                                    <td className="px-2 py-2 md:px-4">74.00%</td>

                                    <td className="px-2 py-2 md:px-4">PASS</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <a
                        href={SSC}
                        target="_blank"
                        className="text-xs font-medium text-blue-500 md:text-lg hover:derline"
                    >
                        View Project
                    </a>
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
