import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container flex h-14 items-center px-4 mx-auto">
        <div className="flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 font-bold">
            <span>Nikita Lobanov</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium flex-1 justify-end">
          <Link href="#about" className="transition-colors hover:text-foreground/80">About</Link>
          <Link href="#experience" className="transition-colors hover:text-foreground/80">Experience</Link>
          <Link href="#projects" className="transition-colors hover:text-foreground/80">Projects</Link>
          <Link href="#contact" className="transition-colors hover:text-foreground/80">Contact</Link>
          <Button asChild size="sm">
            <a href="/resume.pdf" target="_blank" download="Nikita_Lobanov_Resume.pdf">Resume</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}