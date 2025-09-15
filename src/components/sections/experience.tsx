import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
export function ExperienceSection() {
	const experiences = [
		{
			title: 'Software Development Intern',
			company: 'Seaspan Corporation',
			period: 'May 2024 - August 2024',
			location: 'Vancouver, BC',
			description: [
				'Saved 160+ hours per month in accounts payable by processing 1,400+ monthly files via Spring Boot REST APIs integrated with Oracle ERP Cloud and Excel, replacing manual entry with a validated, auditable pipeline used across finance teams.',
				'Enabled KPI monitoring for 227+ Vessels by building dashboards using React JS to track speed over ground, specific fuel oil consumption, and engine load, adding time filters, & role aware views, facilitating faster visibility into vessel KPIs & issues.',
				'Reduced database and API bottlenecks by instituting health checks, connection pool tuning, and SQL profiling across Oracle, Linux/Windows hosts, & Spring Boot services, with documented runbooks to remediate recurring performance hotspots.',
				'Cut financial data quality issues 90% by automating validation in the Oracle ERP integration using Java services and SQL stored procedures, flagging inconsistencies pre ingestion to prevent reconciliation errors and processing failures.'
			],
		},
		{
			title: 'Full Stack Developer',
			company: 'Affistash',
			period: 'March 2023 - April 2024',
			location: 'Remote',
			description: [
				'Eliminated manual research across 1,000+ potential affiliates by building dashboards with Next.js, surfacing AI sourced partner analytics, with faceted search, saved views, and sorting to let brand users evaluate fit directly inside the platform.',
				'Served 500+ daily brand queries with targeted suggestions by integrating Firebase Firestore and OpenAI endpoints behind a responsive frontend, adding request batching, response caching, and error handling to control latency, reliability, and cost.',
				'Enabled analysis of 100,000+ audience data points by implementing D3 and Recharts visualizations on Firebase real time data streams, with drilldowns, tooltips, exportable reports, and geographic/referral breakdowns for deeper audience insight.',
				'Increased engagement and accelerated outreach by shipping real time match notifications via Firebase Cloud Functions and WebSockets, with deduping, per user throttling, and preference controls to deliver timely alerts.'
			],
		},
		{
			title: 'Information Technology Intern',
			company: 'DDS Wireless',
			period: 'June 2018 - August 2020',
			location: 'Richmond, BC',
			description: [
				'Provisioned 60+ office and lab PCs by reinstalling Windows, applying chipset and device drivers, and validating health via Event Viewer and SMART diagnostics, producing standardized images and checklists reducing setup variance across teams.',
				'Resolved 85% of tickets independently by diagnosing BSODs, boot loops, & connectivity issues, replacing faulty RAM or drives & rebuilding corrupted installs, with documented fixes that reduced repeat incidents & improved time to resolution.'
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
