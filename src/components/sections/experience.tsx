import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Application Support Intern",
      company: "Seaspan Corp",
      period: "May 2024 - Aug 2024",
      location: "Vancouver, BC",
      description: [
        "Diagnosed and resolved application errors by analyzing system logs, error messages, and user-reported data.",
        "Managed user support requests via Jira Service Desk: triaged, categorized, and prioritized 100+ tickets, escalating critical issues to senior engineers and maintaining 97% SLA compliance.",
        "Monitored and maintained infrastructure health by conducting routine checks on servers (Windows), SQL databases, and REST APIs, ensuring 99.9% uptime for critical systems.",
        "Collaborated with IT teams to resolve a global CrowdStrike outage, restoring access for 1,300+ employees across 5 time zones."
      ]
    },
    {
      title: "Full-stack Developer",
      company: "Astash",
      period: "March 2023 - October 2023",
      location: "Remote",
      description: [
        "Collaborated with a cross-functional team of 4 developers to design and deploy a scalable web application using Next.js (React), and Firebase Firestore as the database.",
        "Engineered RESTful APIs and integrated real-time data synchronization with Firebase Authentication and Cloud Functions.",
        "Iteratively enhanced application performance and UX by analyzing user feedback from Indie Hackers and Twitter."
      ],
      tags: ["Node", "TypeScript", "NoSQL"]
    },
    {
      title: "Cook",
      company: "The Victor",
      period: "June 2024 - Current",
      location: "Vancouver, BC",
      description: [
        "Team Collaboration: Worked closely with servers, sous chefs, and managers in a dynamic team to deliver 200-400+ daily orders, aligning workflows to meet tight deadlines. (Mirrors Agile teamwork in software development).",
        "Thrived in high-pressure, fast-paced environments by prioritizing tasks and troubleshooting unexpected issues (e.g., equipment failures, last-minute orders), ensuring seamless service during peak hours.",
        "Consistently followed complex recipes with exact measurements and plating standards, minimizing errors and waste. (Analogous to writing clean, efficient code and debugging.)"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          <p className="text-muted-foreground">
            My professional journey and work experience
          </p>
        </div>
        
        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle>{exp.title} at {exp.company}</CardTitle>
                    <CardDescription>{exp.period} • {exp.location}</CardDescription>
                  </div>
                  {exp.tags && (
                    <div className="flex gap-2 mt-2 md:mt-0">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}