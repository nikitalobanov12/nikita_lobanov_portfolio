import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
export function ExperienceSection() {
	const experiences = [
		{
			title: 'Application Support Intern',
			company: 'Seaspan Corp',
			period: 'May 2024 - Aug 2024',
			location: 'Vancouver, BC',
			description: [
				'Diagnosed and resolved application errors by analyzing system logs, error messages, and user-reported data.',
				'Managed user support requests via Jira Service Desk: triaged, categorized, and prioritized 100+ tickets, escalating critical issues to senior engineers and maintaining 97% SLA compliance.',
				'Monitored and maintained infrastructure health by conducting routine checks on servers (Windows), SQL databases, and REST APIs, ensuring 99.9% uptime for critical systems.',
				'Collaborated with IT teams to resolve a global CrowdStrike outage, restoring access for 1,300+ employees across 5 time zones.',
			],
		},
	];

	return (
		<section
			id='experience'
			className='py-16'
		>
			{' '}
			<div className='space-y-6'>
				<div className='space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight section-heading'>Experience</h2>
					<p className='text-muted-foreground'>My professional journey and work experience</p>
				</div>

				<div className='grid gap-6'>
					{experiences.map((exp, index) => (
						<Card
							key={index}
							className='enhanced-card hover-glow'
						>
							{' '}
							<CardHeader>
								<div className='flex flex-col md:flex-row md:items-center md:justify-between'>
									<div>
										<CardTitle className=''>
											{exp.title} at <span className='blue-highlight'>{exp.company}</span>
										</CardTitle>
										<CardDescription>
											{exp.period} • {exp.location}
										</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<ul className='list-disc pl-6 space-y-2'>
									{exp.description.map((item, i) => (
										<li
											key={i}
											className='text-sm text-muted-foreground'
										>
											{item}
										</li>
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
