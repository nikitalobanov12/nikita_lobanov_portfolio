import Image from 'next/image';
import React from 'react';

interface Project {
  title: string;
  imageUrl: string;
  description: string | string[];
  websiteUrl: string;
  githubUrl?: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectCard: React.FC<Project> = ({
  title,
  imageUrl,
  description,
  websiteUrl,
  githubUrl,
}) => {
  return (
    <article className="relative w-full h-auto md:h-80 overflow-hidden rounded-lg md:shadow-lg transform transition-transform duration-300 group md:hover:scale-105 grid grid-rows-auto md:grid-rows-none">
      {/* Image Container */}
      <div className="relative w-full h-48 md:h-80">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="md:rounded-lg rounded-t-lg w-full h-full object-cover md:group-hover:opacity-5 transition-opacity duration-300"
        />
      </div>

      {/* Description Container */}
      <div
        className="
          bg-white md:bg-transparent
          p-4 md:p-6
          text-center md:text-white
          md:absolute inset-0
          grid
          place-items-center
          opacity-100 md:opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      >
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="mb-4 text-neutral-600 md:text-neutral-300">
            {Array.isArray(description)
              ? description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))
              : <p>{description}</p>}
          </div>
          <div className="flex justify-center gap-3">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-neutral-800 font-bold bg-neutral-200 text-neutral-800 transition-colors hover:text-white py-2 px-4 rounded-md"
            >
              Visit Website
            </a>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-400 hover:bg-green-800 text-neutral-800 font-bold transition-colors py-2 px-4 rounded-md"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-4">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};
const projectsData = [
  {
    title: 'Affistash',
    imageUrl: '/Affistash.png', 
    description: [
        'Helped build this Web-App',
        'Uses NextJS, Google Authentication, Prisma Database',
        'Taught me how to collaborate with others using Git'
      ],
    websiteUrl: 'https://affistash.com/',
  },
  {
    title: 'H2L Design Studio',
    imageUrl: '/h2l.png',
    description: [
        'Website for interior design studio, built and designed by me',
        'Uses Vanilla JS, Html, CSS, Node.js, firebase'

    ],
    websiteUrl: 'https://h2ldesignstudio.com/',
    githubUrl: 'https://github.com/nikitalobanov12/H2L',
  },
];

export default function Projects(){
  return (
  <section className='lg:my-24 md:my-16 my-12'>
  <h2 className="text-2xl font-semibold leading-relaxed text-neutral-100"> Projects</h2>
  <ProjectsGrid projects={projectsData} />
  </section>
  );
}

