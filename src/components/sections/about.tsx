export function AboutSection() {
	return (
		<section
			id='about'
			className='py-16'
		>
			<div className='space-y-6'>
				<div className='space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight section-heading'>About Me</h2>
					<p className='text-muted-foreground'>Full-Stack Developer with hands-on experience in JavaScript/TypeScript, AWS cloud services, and database optimization.</p>
				</div>
				<div className='prose dark:prose-invert'>
					<p>
						I have a proven track record deploying scalable applications and maintaining uptime for critical systems. My expertise spans full-stack development, cloud infrastructure, and database performance optimization. I am passionate about building robust, maintainable software and leveraging modern technologies to solve real-world problems.
					</p>
					<br />
					<p>
						Currently, I am studying <span className='blue-highlight'>Full-Stack Web Development</span> at <span className='blue-highlight'>British Columbia Institute of Technology</span> (expected April 2026), with coursework in Agile Software Development, Data Structures & Algorithms, Databases, Operating Systems, and Object-Oriented Programming.
					</p>
				</div>
			</div>
		</section>
	);
}
