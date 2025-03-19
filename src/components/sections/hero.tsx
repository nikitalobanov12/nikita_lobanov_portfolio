import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 flex flex-col items-start gap-4">
      <h1 className="text-4xl md:text-6xl font-bold">
        Nikita Lobanov
      </h1>
      <h2 className="text-2xl md:text-3xl text-muted-foreground">
        Full-Stack Web Developer
      </h2>
      <p className="text-lg md:text-xl max-w-[600px] text-muted-foreground mt-4">
        Building modern web applications with TypeScript, React, and Node.js. Currently studying at British Columbia Institute of Technology.
      </p>
      
      <div className="flex flex-wrap gap-4 mt-6">
        <Button asChild>
          <Link href="#contact">
            Contact me <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/nikitalobanov" target="_blank">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://linkedin.com/in/nikitalobanov" target="_blank">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="mailto:nikitaalobanovv@gmail.com">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}