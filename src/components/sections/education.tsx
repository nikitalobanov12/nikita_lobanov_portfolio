import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function EducationSection() {
	return (
		<div
			id='education'
			className='space-y-6 h-full flex flex-col'
		>
			<div className='space-y-2'>
				<h2 className='text-3xl font-bold tracking-tight section-heading'>Education</h2>
				<p className='text-muted-foreground'>My academic background and qualifications</p>
			</div>
			<Card className='flex-1 enhanced-card'>
				<CardHeader>
					<div className='flex flex-col md:flex-row md:items-center md:justify-between'>
						<div>
							<CardTitle className=''>Bachelors of Science in Computer Science</CardTitle>
							<CardDescription>
								<span className='blue-highlight'>British Columbia Institute of Technology</span> — <span className='blue-highlight'>Full-Stack Web Development</span>
							</CardDescription>
						</div>
						<div className='mt-2 md:mt-0'>
							<span className='text-sm text-muted-foreground'>Vancouver, BC | Expected April 2026</span>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<div className='space-y-4'>
						<div>
							<h4 className='font-medium mb-2'>Relevant Courses</h4>
							<p className='text-sm text-muted-foreground'>Data Structures & Algorithms, Web Database Technologies, Operating Systems, Object-Oriented Programming, JavaScript Frameworks and Server, Mathematics for Computing, Agile Software Development, Web Administration.</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
