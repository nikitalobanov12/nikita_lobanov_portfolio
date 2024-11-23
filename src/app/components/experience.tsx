import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: "Application Support Intern",
      company: "Seaspan Ship Management Ltd.",
      location: "Vancouver",
      description: `Provided support for a variety of critical software applications integrated into the company, ensuring 
      that systems were optimized for maximum performance and reliability. Learned about how applications are integrated 
      into complex businesses, as well as how those processes could be improved.`,
    },
    {
      title: "Cook",
      company: "The Victor",
      location: "Vancouver",
      description: `Developed strong teamwork, multitasking, and communication skills while working in a high-pressure 
      kitchen environment. Successfully managed multiple responsibilities, ensuring quality and consistency under tight 
      deadlines. Gained valuable experience in organization, problem-solving, and collaboration.`,
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold leading-relaxed text-neutral-100">Work Experience</h2>
      <div className="mt-6 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border border-neutral-700 rounded-lg p-6 bg-neutral-800 shadow-md">
            <h3 className="text-xl font-semibold text-neutral-100">{exp.title}</h3>
            <p className="text-neutral-400 text-lg">
              {exp.company}, {exp.location}
            </p>
            <p className="text-neutral-300 mt-4">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
