import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
export function ExperienceSection() {
	const experiences = [
		{
			title: 'Software Development Intern',
			company: 'Seaspan Corp',
			period: 'May 2024 - Sep 2024',
			location: 'Vancouver, BC',
			description: [
				'Designed and optimized Express.js REST APIs to facilitate data exchange between Oracle ERP Cloud and Excel; Processing 1,400+ files per month & removing the need for manual data entry for accounts payable records.',
				'Developed data visualization dashboards in React for key vessel performance indicators such as speed-over-ground, specific fuel oil consumption, and engine load, enabling precise monitoring and optimization across Seaspan\'s fleet of 227 containerships.',
				'Served as a point of contact for employee support during the global July 2024 CrowdStrike outage, working closely with the IT Support team & guiding 80+ employees through remediation steps and confirming full functionality of their machines.',
				'Monitored Oracle database performance and conducted routine health checks on Linux/Windows servers and REST APIs, ensuring 99.9% uptime by identifying and addressing potential bottlenecks.'
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
