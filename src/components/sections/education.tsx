import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function EducationSection() {
  return (
	<div id="education" className="space-y-6 h-full flex flex-col">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        <p className="text-muted-foreground">
          My academic background and qualifications
        </p>
      </div>
      
	  <Card className="flex-1">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle>Full-Stack Web Development</CardTitle>
              <CardDescription>British Columbia Institute of Technology</CardDescription>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="text-sm text-muted-foreground">Expected April 2026</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h4 className="font-medium">Relevant Courses</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li className="text-sm text-muted-foreground">Agile Software Development</li>
              <li className="text-sm text-muted-foreground">Data Structures</li>
              <li className="text-sm text-muted-foreground">Algorithms</li>
              <li className="text-sm text-muted-foreground">Databases</li>
              <li className="text-sm text-muted-foreground">Operating Systems</li>
              <li className="text-sm text-muted-foreground">Object-Oriented Programming</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}