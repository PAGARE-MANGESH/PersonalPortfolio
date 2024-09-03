// "use client";
// import { TextGenerateEffect } from "./GenerateText";
// const words = `I’m a passionate
//  web developer with experience in creating 
//  responsive and interactive web applications
//   using React, Tailwind CSS, and JavaScript.
//       My focus is on building seamless user experiences 
//   with clean and efficient code.   
// `;


// export default function TextGenerateEffectDemo() {
//   return <TextGenerateEffect words={words} />;
// }



"use client";
import { TextGenerateEffect } from "./GenerateText";


const content = {
  paragraph1: `I’m a passionate web developer with experience in creating 
  responsive and interactive web applications using React, Tailwind CSS, and JavaScript. 
  My focus is on building seamless user experiences with clean and efficient code.`,

  Education: [
    `Bachelor’s Degree in Computer Science, XYZ University (2022)`,
    `Certification in Full-Stack Web Development, ABC Institute (2021)`
  ],

  Skills: [
    `JavaScript, TypeScript`,
    `React, Next.js`,
    `HTML5, CSS3, Tailwind CSS`,
    `Version Control (Git, GitHub)`,
    `Responsive Design, Cross-Browser Compatibility`
  ],

  paragraph4: `I thrive in dynamic environments where innovation is encouraged, and I am always looking for opportunities to grow both professionally and personally. 
  I’m excited to be part of projects that challenge me to push the boundaries of web development and design.`,

  paragraph5: `With a keen eye for detail and a passion for creating polished, high-quality web experiences, 
  I’m eager to bring my skills to the table and contribute to meaningful projects that make a difference.`

};

export default function TextGenerateEffectDemo() {
  return (

    <div>

      <TextGenerateEffect words={content.paragraph1} />
      <div className="mt-6">
        <h3 className="text-xl font-bold text-gray-800">Education</h3>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {content.Education.map((edu, index) => (
            <li key={`edu-${index}`}>
              <TextGenerateEffect words={edu} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold text-gray-800">Skills</h3>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {content.Skills.map((skill, index) => (
            <li key={`skill-${index}`}>
              <TextGenerateEffect words={skill} />
            </li>
          ))}
        </ul>
      </div>

      <TextGenerateEffect words={content.paragraph4} />
      <TextGenerateEffect words={content.paragraph5} />

    </div>

  );
}
