import Image from 'next/image';
import React from 'react'

export default function About(){
  const stack = {
    nextJS: {
      name: "Next.js",
      icon: <Image src="/nextjs.svg" alt="Next.js Logo" width={32} height={32} />,
    },
    tailwind: {
      name: "Tailwind CSS",
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
          Currently in the Full-Stack Web Development Program at BCIT
          <br /><br />
          Working as a freelance Front-End Developer
          <br /><br />
          Looking for new opportunities to expand my skillset
        </p>
      </section>
      <section>
        <h3 className="text-xl font-semibold mt-8 text-neutral-100">Primary Tech Stack</h3>
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