import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

export default function About(){
  const stack = {
    nextJS: {
      name: "Next.js",
      icon: <Image src="/nextjs.svg" alt="Next.js Logo" width={32} height={32} />,
    },
    tailwind: {
      name: "Tailwind",
      icon: <Image src="/tailwind.svg" alt="Tailwind CSS Logo" width={32} height={32} />,
    },
    prisma: {
      name: "Prisma",
      icon: <Image src="/prisma.svg" alt="Prisma Logo" width={32} height={32} />,
    },
    typescript: {
      name: "TypeScript",
      icon: <Image src="/typescript.svg" alt="TypeScript Logo" width={32} height={32} />,
    },
    tRPC: {
      name: "tRPC",
      icon: <Image src="/trpc.svg" alt="tRPC Logo" width={32} height={32} />,
    },
    firebase: {
      name: "Firebase",
      icon: <Image src="/firebase.svg" alt="Firebase Logo" width={32} height={32} />,
    }
  };

  return (
    <>
      <section>
        <h2 className="text-2xl font-semibold leading-relaxed text-neutral-100">About</h2>
        <p className="md:text-lg mt-4">
          Currently enrolled in the <Link href={"https://www.bcit.ca/programs/full-stack-web-development-diploma-full-time-7540dipma/"} className='text-blue-400 hover:text-blue-600 transition-all'>Full-Stack Web Development Program</Link> at BCIT
          <br /><br />
          Completed the <Link href={"https://www.coursera.org/professional-certificates/meta-front-end-developer"} className='text-blue-400 hover:text-blue-600 transition-all'> Meta Front-End Developer Certificate </Link> building strong foundations in responsive design, JavaScript, and React.
          <br /><br />
          Actively seeking opportunities to grow as a developer, contribute to innovative projects, and further enhance my technical skillset.
        </p>
      </section>
      <section>
        <h3 className="text-xl font-semibold mt-8 text-neutral-100">Familiar Technologies</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {Object.entries(stack).map(([key, { name, icon }]) => (
            <li key={key} className="flex items-center space-x-3">
              {icon}
              <span className="text-neutral-300 text-lg">{name}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}