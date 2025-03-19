import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row mx-auto">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Nikita Lobanov. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/nikitalobanov12" 
            target="_blank" 
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            GitHub
          </Link>
          <Link 
            href="https://linkedin.com/in/nikitalobanov" 
            target="_blank"
            className="text-sm text-muted-foreground hover:text-foreground" 
          >
            LinkedIn
          </Link>
          <Link 
            href="mailto:nikitaalobanovv@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}