import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SkillsSection() {
  const skills = {
    languages: ["JavaScript", "SQL", "HTML & CSS", "C#", "Java", "Bash"],
    technologies: ["Git", "Node.js", "React.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma", "Express.js", "Linux", "Firebase Firestore", "Redis"],
    tools: ["Jira", "Github", "Trello", "Vite", "Notion", "Firebase web hosting"]
  };

  return (
    <section id="skills" className="py-16">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <p className="text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>
        
        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
          
          <TabsContent value="languages" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Programming Languages</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="technologies" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Technologies</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                    {tech}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tools" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Tools</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="px-3 py-1 text-sm">
                    {tool}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}