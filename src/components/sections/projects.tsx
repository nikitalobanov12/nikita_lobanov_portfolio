import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { MotionDiv, MotionSection } from '@/components/motion-components';

export function ProjectsSection() {
	const projects = [
		{
			title: 'WriteShare',
			description: 'A real-time collaborative markdown editor with advanced synchronization and scalable AWS deployment.',
			details: `
- Developed a real-time collaborative markdown editor, integrating Liveblocks for real-time editing and Yjs for CRDT-based conflict-free data synchronization.
- Utilized Prisma ORM with PostgreSQL & Redis as a cache and datastore, holding frequently accessed data in memory and asynchronously syncing to the database, reducing load times by over 90%.
- Designed a type-safe API layer using tRPC and Zod, ensuring data integrity and reducing runtime errors by 80%.
- Resolved a complex infinite save loop race condition by restructuring component state ownership and isolating CRDT state updates within the editor, with dedicated backend mutations for persistence.
- Deployed a containerized microservice architecture on AWS using Docker, ECS Fargate for orchestration, RDS PostgreSQL for persistent storage, and ElastiCache Redis for caching.
`,
			date: '2024',
			tags: ['AWS Services', 'tRPC', 'Web Sockets', 'Docker', 'Redis', 'NextAuth.js', 'Prisma', 'PostgreSQL', 'TypeScript', 'Next.js'],
			github: 'https://github.com/nikitalobanov12/writeshare',
			live: 'https://writeshare.nikitalobanov.com',
		},
		{
			title: 'DayFlow',
			description: 'A goal setting and task planning application with AI-powered features, built for web and desktop with Tauri and React.',
			details: `
- Created a goal setting & task planning application with AI features, built with Tauri 2.0 for desktop and React 19 for web, serving ~180 active users from a single codebase.
- Integrated Google Gemini AI for intelligent task scheduling, automatic time estimation, and smart task creation from natural language, leveraging user context for personalized planning.
- Established bidirectional Google Calendar integration for task syncing and AI-aware scheduling that considers existing events.
- Automated CI/CD pipeline with GitHub Actions for desktop releases, Vercel deployments, and CodeQL security scanning.
- Optimized database performance using indexes and efficient SQL queries, reducing query execution time by 40-70%.
- Enhanced React component performance through optimistic UI updates and memoization, reducing page re-renders by 99%.
`,
			date: '2024',
			tags: ['React', 'Tauri', 'PostgreSQL', 'GitHub Actions', 'Node.js', 'Stripe', 'VertexAI', 'TypeScript'],
			github: 'https://github.com/nikitalobanov12/dayflow',
			live: 'https://dayflow-landing-page.vercel.app/',
		},
		{
			title: 'Circles',
			description: 'A full-stack social media application for community building, featuring groups, activity feeds, and scalable image delivery.',
			details: `
- Engineered a full-stack social media application with group photo sharing, personalized activity feeds, privacy controls, and granular security permissions.
- Led a team of 2 developers in an Agile environment, using Git for version control and Jira for task management.
- Collaborated with a design team to translate Figma prototypes into a production-ready full stack application.
- Improved PostgreSQL performance by implementing efficient data fetching with Prisma, minimizing N+1 queries and optimizing query construction.
- Integrated Cloudinary for image storage and built scalable image delivery with file transformations and CDNs, reducing bandwidth by 60% and image load times by 50%.
`,
			date: '2024',
			tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Redis', 'Vercel', 'Tailwind CSS', 'Cloudinary', 'TypeScript'],
			github: 'https://github.com/ILHT-IDSP/IDSP-Circle',
			live: 'https://idsp-circle-tawny.vercel.app/',
		},
	];
	return (
		<MotionSection
			id='projects'
			className='py-16'
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
		>
			<div className='space-y-6'>
				<MotionDiv
					className='space-y-2'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true }}
				>
					<h2 className='text-3xl font-bold tracking-tight section-heading'>Projects</h2>
					<p className='text-muted-foreground'>A showcase of my recent development work featuring full-stack applications with modern technologies</p>
				</MotionDiv>
				<div className='grid gap-6 md:grid-cols-2'>
					{projects.map((project, index) => (
						<MotionDiv
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ y: -5, transition: { duration: 0.2 } }}
						>
							<Card className='flex flex-col h-full hover:shadow-lg transition-shadow duration-300 project-card enhanced-card'>
								<CardHeader>
									<CardTitle className=''>{project.title}</CardTitle>
									<CardDescription>{project.date}</CardDescription>
								</CardHeader>
								<CardContent className='flex-1'>
									<p className='mb-3 text-base leading-relaxed'>{project.description}</p>
									<pre className='text-base text-muted-foreground leading-relaxed whitespace-pre-wrap'>{project.details}</pre>
									<div className='flex flex-wrap gap-2 mt-4'>
										{project.tags.map((tag, tagIndex) => (
											<MotionDiv
												key={tag}
												initial={{ opacity: 0, scale: 0.8 }}
												whileInView={{ opacity: 1, scale: 1 }}
												transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
												viewport={{ once: true }}
											>
												<Badge
													variant='secondary'
													className='hover:bg-blue-500 hover:text-white transition-colors duration-200 blue-glow'
												>
													{tag}
												</Badge>
											</MotionDiv>
										))}
									</div>
								</CardContent>
								<CardFooter className='flex gap-2'>
									{project.github && (
										<MotionDiv
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											<Button
												variant='outline'
												size='sm'
												asChild
											>
												<Link
													href={project.github}
													target='_blank'
													rel='noopener noreferrer'
												>
													<Github className='h-4 w-4 mr-2' />
													GitHub
												</Link>
											</Button>
										</MotionDiv>
									)}
									{project.live && (
										<MotionDiv
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											<Button
												size='sm'
												asChild
												className='btn-blue-gradient'
											>
												<Link
													href={project.live}
													target='_blank'
													rel='noopener noreferrer'
												>
													<ExternalLink className='h-4 w-4 mr-2' />
													Live Demo
												</Link>
											</Button>
										</MotionDiv>
									)}
								</CardFooter>
							</Card>
						</MotionDiv>
					))}
				</div>
			</div>
		</MotionSection>
	);
}
