import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ReactElement } from 'react';
import Link from 'next/link';
import React from 'react';

interface Icon {
    href: string;
    icon: ReactElement; 
  }

const links: Record<string, Icon> = {
    github: {
      href: "https://github.com/nikitalobanov12",
      icon: <AiFillGithub style={{ width: '1.5rem', height: '1.5rem' }}/>,
    },
    linkedin: {
      href: "https://www.linkedin.com/in/nikita-l-1470bb313/",
      icon: <AiFillLinkedin style={{ width: '1.5rem', height: '1.5rem' }} />,
    },
    email: {
      href: "mailto:nikitaalobanovv@gmail.com",
      icon: <MdEmail style={{ width: '1.5rem', height: '1.5rem' }} />,
    },
  };
export default function Icons(){

    return(<>
    {Object.values(links).map((link) => ( 
            <li key={link.href}>
          <Link
            href={link.href}
            className="inline-block transform hover:scale-110 transition-all duration-300 hover:text-neutral-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </Link>
          </li>
        ))}
        </>
    )
  } 