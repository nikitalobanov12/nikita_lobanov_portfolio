export function AboutSection() {
	return (
		<section
			id='about'
			className='py-16'
		>
			<div className='space-y-6'>
				<div className='space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight'>About Me</h2>
					<p className='text-muted-foreground'>Full-stack developer specializing in web applications, desktop development, and systems programming</p>
				</div>
				<div className='prose dark:prose-invert'>
					<p>I&apos;m a passionate full-stack developer currently studying at British Columbia Institute of Technology, expected to graduate in April 2026. With proven experience across web development, desktop applications, and systems programming, I combine technical expertise with practical problem-solving abilities and strong teamwork skills.</p>
					<br />
					<p>My professional journey includes working as an Application Support Intern at Seaspan Corp, where I successfully managed 100+ support tickets with 97% SLA compliance and maintained 99.9% system uptime. I&apos;ve developed several production-ready applications, including DayFlow (a cross-platform desktop app using Rust and Tauri), Circles (a social media platform with Redis caching and PostgreSQL), and Affistash (an AI-powered SaaS platform using OpenAI and Stripe).</p>
					<br />
					<p>I specialize in creating efficient, scalable applications using modern technologies like React, TypeScript, Next.js, Node.js, and Rust. My experience spans from database design and API development to desktop application development, systems programming, authentication systems, payment integrations, and performance optimization with advanced caching strategies and CI/CD pipelines.</p>
					<br />
					<p>Currently working at The Victor as a cook, this role has further strengthened my collaborative skills and ability to perform under pressure while maintaining high standards - qualities that translate effectively to agile software development environments and team-based coding projects.</p>
				</div>
			</div>
		</section>
	);
}
