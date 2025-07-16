import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
export function ExperienceSection() {
	const experiences = [
		{
			title: 'Full Stack Development Intern',
			company: 'Seaspan Corp',
			period: 'May 2024 - Aug 2024',
			location: 'Vancouver, BC',
			description: [
				'Diagnosed and resolved application errors in NetSuite and Oracle systems by analyzing system logs and employee data.',
				'Worked with IT team to resolve the global July 2024 CrowdStrike outage, restoring access for 1,300+ employees across 5 time zones in under 24 hours.',
				'Monitored Oracle database performance and conducted routine health checks on Linux/Windows servers and REST APIs, ensuring 99.9% uptime.',
				'Managed employee support requests via Jira Service Desk: triaged, categorized, and prioritized 300+ tickets in 3 months.',
				'Collaborated with database administrators to optimize Oracle queries and maintain data integrity.',
				'Provided technical support for NetSuite ERP system, troubleshooting user access issues, data discrepancies, and workflow problems.',
				'Escalated critical issues to senior engineers, ensuring rapid resolution and minimal business disruption.'
			],
		},
	];

	return (
		<section
			id='experience'
			className='py-16'
		>
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
							<CardHeader>
								<div className='flex flex-col md:flex-row md:items-center md:justify-between'>
									<div>
										<CardTitle className=''>
											{exp.title} at <span className='blue-highlight'>{exp.company}</span>
										</CardTitle>
										<CardDescription>
											{exp.period} | {exp.location}
										</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<ul className='list-disc pl-6 space-y-3'>
									{exp.description.map((item, i) => (
										<li
											key={i}
											className='text-base text-muted-foreground leading-relaxed'
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
