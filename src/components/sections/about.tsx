export function AboutSection() {
	return (
		<section
			id='about'
			className='py-16'
		>
			<div className='space-y-6'>
				<div className='space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight section-heading'>About Me</h2>
					<p className='text-muted-foreground'>I am a senior computer science student at BCIT specializing in fullstack web development with hands-on experience building scalable applications and system integrations. Currently seeking backend or full-stack development roles where I can apply my technical skills in modern web technologies and continue learning.</p>
				</div>
				<div className='prose dark:prose-invert'>
					<p>
						I have practical experience developing REST APIs, building high-performance React frontends, and real-time systems, along with working on AI-powered applications and complex database systems. My expertise spans full-stack development, cloud infrastructure, and database performance optimization. I&apos;ve led development teams, optimized systems that process 1,400+ files per month, and built applications serving hundreds of daily active users.
					</p>
					<br />
					<p>
						Currently pursuing a <span className='blue-highlight'>Bachelor of Science in Computer Science</span> with a concentration in <span className='blue-highlight'>Full-Stack Web Development</span> at <span className='blue-highlight'>British Columbia Institute of Technology</span> (expected May 2026). My coursework includes Data Structures & Algorithms, Web Database Technologies, Operating Systems, Object-Oriented Programming, JavaScript Frameworks and Server, Mathematics for Computing, Web Administration, Unix Tools and Scripting, and Agile Development.
					</p>
				</div>
			</div>
		</section>
	);
}
