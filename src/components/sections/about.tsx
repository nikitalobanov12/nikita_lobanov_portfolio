export function AboutSection() {
	return (
		<section
			id='about'
			className='py-16'
		>
			<div className='space-y-6'>
				{' '}
				<div className='space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight section-heading'>About Me</h2>
					<p className='text-muted-foreground'>Full-stack developer specializing in web applications, desktop development, and systems programming</p>
				</div>{' '}				<div className='prose dark:prose-invert'>
					<p>
						I build web and desktop applications using <span className='blue-highlight'>React</span>, <span className='blue-highlight'>Node.js</span>, and <span className='blue-highlight'>Rust</span>. I&apos;ve worked on real-time systems, deployed full-stack apps, and contributed to both solo and team-based projects. I focus on writing maintainable code and delivering working software.
					</p>
					<br />
					<p>
						Currently studying <span className='blue-highlight'>Full-Stack Web Development</span> at <span className='blue-highlight'>British Columbia Institute of Technology</span> with an expected graduation in April 2026. My coursework includes Agile Software Development, Data Structures, Algorithms, Databases, Operating Systems, and Object-Oriented Programming.
					</p>
					<br />
					<p>
						My professional experience includes working as an <span className='blue-highlight'>Application Support Intern</span> at <span className='blue-highlight'>Seaspan Corp</span>, where I diagnosed and resolved application errors, managed 100+ support tickets with 97% SLA compliance, and maintained 99.9% uptime for critical systems. I also collaborated with IT teams to resolve a global CrowdStrike outage, restoring access for 1,300+ employees across 5 time zones.
					</p>
				</div>
			</div>
		</section>
	);
}
