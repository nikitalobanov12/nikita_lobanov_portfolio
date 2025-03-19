import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "Jeddit",
      description: "A full-stack Reddit-style social media platform where users can create communities, share content, and engage through comments and voting.",
      details: "Implemented nested comment threads, voting systems, and community moderation features.",
      date: "February 2025",
      tags: ["Node.js", "Express.js", "Bcrypt"],
    },
    {
      title: "Devhouse",
      description: "A social media platform for developers to share code snippets, receive feedback, and network with peers.",
      details: "Users can create accounts, post code examples, and interact with other developers' content through likes and comments.",
      date: "March 2025",
      tags: ["Node", "TypeScript", "Hono", "Prisma", "Redis", "Zod"],
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">
            Showcase of my recent development work
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-2">{project.description}</p>
                <p className="text-sm text-muted-foreground">{project.details}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                </Button>
                <Button size="sm" asChild>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}