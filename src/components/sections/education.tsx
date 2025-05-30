import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function EducationSection() {
	return (
		<div
			id='education'
			className='space-y-6 h-full flex flex-col'
		>
			<div className='space-y-2'>
				<h2 className='text-3xl font-bold tracking-tight'>Education</h2>
				<p className='text-muted-foreground'>My academic background and qualifications</p>
			</div>

			<Card className='flex-1'>
				<CardHeader>
					<div className='flex flex-col md:flex-row md:items-center md:justify-between'>
						<div>
							<CardTitle>Full-Stack Web Development</CardTitle>
							<CardDescription>British Columbia Institute of Technology</CardDescription>
						</div>
						<div className='mt-2 md:mt-0'>
							<span className='text-sm text-muted-foreground'>Expected April 2026</span>
						</div>
					</div>
				</CardHeader>{' '}
				<CardContent>
					<div className='space-y-4'>
						<div>
							<h4 className='font-medium mb-2'>Core Development Skills</h4>
							<ul className='list-disc pl-6 space-y-1'>
								<li className='text-sm text-muted-foreground'>Frontend & Backend Web Development</li>
								<li className='text-sm text-muted-foreground'>Software Design & Programming Fundamentals</li>
								<li className='text-sm text-muted-foreground'>Modern JavaScript Frameworks & Server Technologies</li>
								<li className='text-sm text-muted-foreground'>C# & .NET Web Application Development</li>
								<li className='text-sm text-muted-foreground'>Server-Side Programming & API Development</li>
								<li className='text-sm text-muted-foreground'>Object-Oriented Programming & Design Patterns</li>
							</ul>
						</div>
						<div>
							<h4 className='font-medium mb-2'>Professional Development</h4>
							<ul className='list-disc pl-6 space-y-1'>
								<li className='text-sm text-muted-foreground'>Agile Software Development Methodologies</li>
								<li className='text-sm text-muted-foreground'>Database Design & Management</li>
								<li className='text-sm text-muted-foreground'>User Experience & Interface Design</li>
								<li className='text-sm text-muted-foreground'>System Administration & DevOps</li>
								<li className='text-sm text-muted-foreground'>Digital Marketing & Business Strategy</li>
								<li className='text-sm text-muted-foreground'>Real-World Project Development & Deployment</li>
							</ul>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
