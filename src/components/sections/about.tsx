export function AboutSection() {
	return (
		<section
			id='about'
			className='py-16'
		>
			<div className='space-y-6'>
				<div className='space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight section-heading'>About Me</h2>
					<p className='text-muted-foreground'>I&apos;m a senior computer science student at BCIT specializing in full-stack web development. I build scalable applications and system integrations using TypeScript, Go, PostgreSQL, and AWS.</p>
				</div>
				<div className='prose dark:prose-invert'>
					<p>
						My experience includes developing APIs with Go, Java, and Node.js, building React frontends, and working with real-time systems using WebSockets. I&apos;ve contributed to AI-powered applications and handled database optimization projects. I&apos;ve architected cross-platform applications using Tauri for desktop compilation and optimized database queries for significant performance improvements.
					</p>
					<br />
					<p>
						My recent projects include collaborative markdown editors with real-time synchronization and task management applications with AI integration for natural language processing. I work with containerization using Docker, CI/CD pipelines with GitHub Actions, and AWS services including ECS, RDS, Lambda, and ElastiCache. I&apos;ve implemented caching strategies with Redis and deployed applications using auto-scaling infrastructure on AWS.
					</p>
					<br />
					<p>
						Currently seeking backend or full-stack development opportunities where I can leverage my technical skills and continue growing in modern web technologies and distributed systems. Open to connecting with fellow developers and exploring opportunities in software engineering.
					</p>
				</div>
			</div>
		</section>
	);
}
