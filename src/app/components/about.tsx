import React from 'react';
import { FaReact, FaNodeJs, FaToolbox, FaJs, FaPython, FaCode, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss,  SiPrisma, SiFirebase, SiMongodb, SiGit, SiNpm, SiCsharp } from 'react-icons/si';

export default function About() {
  const skills = [
    {
      category: "Front-End",
      icon: <FaCss3Alt className="text-blue-400" />,
      skills: [
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      ],
    },
   
    {
      category: "Programming Languages",
      icon: <FaCode className="text-yellow-400" />,
      skills: [
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "C#", icon: <SiCsharp className="text-purple-500" /> },
      ],
    },
    {
      category: "Back-End",
      icon: <FaNodeJs className="text-green-500" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Prisma", icon: <SiPrisma className="text-blue-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      ],
    },
    {
      category: "Tools",
      icon: <FaToolbox className="text-gray-400" />,
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-500" /> },
        { name: "npm", icon: <SiNpm className="text-red-500" /> },
      ],
    },
  ];

  return (
    <>
      <section>
        <h2 className="text-2xl font-semibold leading-relaxed text-neutral-100">About</h2>
        <p className="md:text-lg mt-4">
          Currently enrolled in the{" "}
          <a
            href="https://www.bcit.ca/programs/full-stack-web-development-diploma-full-time-7540dipma/"
            className="text-blue-400 hover:text-blue-600 transition-all"
          >
            Full-Stack Web Development Program
          </a>{" "}
          at BCIT
          <br />
          <br />
          Completed the{" "}
          <a
            href="https://www.coursera.org/professional-certificates/meta-front-end-developer"
            className="text-blue-400 hover:text-blue-600 transition-all"
          >
            Meta Front-End Developer Certificate
          </a>{" "}
          building strong foundations in responsive design, JavaScript, and React.
          <br />
          <br />
          Actively seeking opportunities to grow as a developer, contribute to innovative projects, and further enhance my
          technical skillset.
        </p>
      </section>
      <section>
        <h3 className="text-xl font-semibold mt-8 text-neutral-100">Technical Skills</h3>
        <ul className=" grid grid-cols-2 gap-8 mt-8 ">
          {skills.map((skillCategory, index) => (
            <li key={index} className="flex items-start space-x-4">
              <div className="text-3xl">{skillCategory.icon}</div>
              <div>
                <strong className="text-neutral-100">{skillCategory.category}:</strong>
                <ul className="mt-1 space-y-1 text-neutral-300">
                  {skillCategory.skills.map((skill, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      {skill.icon && <span className="text-xl">{skill.icon}</span>}
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
