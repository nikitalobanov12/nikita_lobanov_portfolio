import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="text-muted-foreground">
            Full-stack web developer with a passion for building performant web applications
          </p>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <div className="prose dark:prose-invert">
              <p>
                I&apos;m a full-stack web developer currently studying at British Columbia Institute of Technology,
                expected to graduate in April 2026. With hands-on experience in both front-end and back-end
                technologies, I combine technical expertise with practical problem-solving abilities.
              </p>
              <p>
                My technical journey includes professional experience as an Application Support Intern at
                Seaspan Corp and work as a Full-stack Developer at Astash. I&apos;m passionate about creating 
                efficient, user-friendly web applications using modern technologies like React, TypeScript, 
                and Node.js.
              </p>
              <p>
                Outside of coding, my experience in culinary teamwork at The Victor has strengthened my 
                collaborative skills and ability to perform under pressure - qualities that translate 
                effectively to software development environments.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}