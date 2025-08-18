import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
export function ExperienceSection() {
	const experiences = [
		{
			title: 'Software Development Intern',
			company: 'Seaspan Corporation',
			period: 'May 2024 - August 2024',
			location: 'Vancouver, BC',
			description: [
				'Developed Spring Boot REST APIs that automated data processing between Oracle ERP and Excel for accounts payable, eliminating 160+ hours of monthly manual work.',
				'Built React dashboards for monitoring vessel performance metrics across their 227-ship fleet, enabling precise monitoring and optimization of key indicators.',
				'Helped coordinate IT support during the global July 2024 CrowdStrike outage, guiding 80+ employees through system recovery and achieving 100% functionality restoration.',
				'Monitored Oracle database performance and conducted routine health checks on Linux/Windows servers and REST APIs to ensure optimal system performance.'
			],
		},
		{
			title: 'Full Stack Web Developer',
			company: 'Affistash',
			period: 'March 2023 - April 2024',
			location: 'Remote',
			description: [
				'Built frontend interfaces for Affistash, an AI platform that helps brands find affiliate partners automatically.',
				'Developed the main partner discovery dashboard in React, allowing brands to see detailed analytics about potential affiliates including their traffic data and niche focus.',
				'Streamlined the brands affiliate recruitment from a weeks-long manual process to finding hundreds of quality partners in minutes.'
			],
		},
		{
			title: 'Information Technology Intern',
			company: 'DDS Wireless',
			period: 'June 2018 - August 2020',
			location: 'Richmond, BC',
			description: [
				'Worked in the IT department on troubleshooting hardware problems and technical support tasks, including Windows OS installations for new computers & corrupted computers.',
				'Managed ethernet cable routing and network infrastructure setup, ensuring reliable connectivity across the organization.',
				'Performed comprehensive hardware diagnostics and component-level troubleshooting by testing RAM modules, identifying faulty motherboard slots, and validating functionality of refurbished equipment.'
			],
		},
		{
			title: 'Cook - The Victor',
			company: 'Blau & Associates',
			period: 'June 2024 - Present',
			location: 'Vancouver, BC',
			description: [
				'Working as a professional cook at The Victor restaurant, maintaining high-quality food preparation standards and contributing to kitchen operations.'
			],
		},
		{
			title: 'Line Cook',
			company: 'Browns Socialhouse - Premier Restaurant Group',
			period: 'May 2022 - July 2023',
			location: 'Richmond, BC',
			description: [
				'Worked as a line cook in a fast-paced restaurant environment, maintaining food quality standards and contributing to efficient kitchen operations.'
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
