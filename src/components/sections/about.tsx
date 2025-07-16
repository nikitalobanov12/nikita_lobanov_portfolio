export function AboutSection() {
	return (
		<section
			id='about'
			className='py-16'
		>
			<div className='space-y-6'>
				<div className='space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight section-heading'>About Me</h2>
					<p className='text-muted-foreground'>Full-Stack Developer with hands-on experience in JavaScript/TypeScript, AWS cloud services, and database optimization. Proven ability to design, develop, and deploy scalable web applications, with a focus on maintaining high availability and optimal performance.</p>
				</div>
				<div className='prose dark:prose-invert'>
					<p>
						I specialize in building robust, maintainable software and leveraging modern technologies to solve real-world problems. My expertise spans full-stack development, cloud infrastructure, and database performance optimization. I am passionate about delivering high-quality solutions that drive business value and user satisfaction.
					</p>
					<br />
					<p>
						Currently pursuing a <span className='blue-highlight'>Bachelors of Science in Computer Science</span> with a concentration in <span className='blue-highlight'>Full-Stack Web Development</span> at <span className='blue-highlight'>British Columbia Institute of Technology</span> (expected April 2026). My coursework includes Data Structures & Algorithms, Web Database Technologies, Operating Systems, Object-Oriented Programming, JavaScript Frameworks and Server, Mathematics for Computing, Agile Software Development, and Web Administration.
					</p>
				</div>
			</div>
		</section>
	);
}
