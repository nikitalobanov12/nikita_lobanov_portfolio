import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { MotionDiv, MotionSection } from '@/components/motion-components';

export function ProjectsSection() {
	const projects = [
		{
			title: 'Notion Clone',
			description: 'A collaborative document editor inspired by Notion, built for real-time editing and scalable deployment.',
			details: `
- Deployed a Dockerized application to AWS ECS Fargate, utilizing ECR for container storage, RDS PostgreSQL for persistent data, and ElastiCache Redis for high-speed caching.
- Optimized Redis cache layer for real-time document updates and session storage, significantly reducing database load and latency.
- Implemented type-safe APIs with tRPC, ensuring end-to-end type safety and robust input validation, eliminating runtime errors.
- Built a secure authentication system using NextAuth.js and Redis session management for improved performance and security.
- Configured AWS Application Load Balancer and CloudWatch for traffic distribution and system monitoring.
- Achieved comprehensive test coverage using Playwright for end-to-end testing and Vitest for unit/integration tests.
- Followed AWS security best practices, including IAM roles, VPC networking, and Secrets Manager for sensitive configuration.
- Designed for horizontal scalability and high availability, with zero-downtime deployments and automated database migrations.
`,
			date: '2024',
			tags: ['AWS ECS', 'Docker', 'tRPC', 'Redis', 'PostgreSQL', 'NextAuth.js', 'Playwright', 'Vitest', 'TypeScript', 'Next.js'],
			github: 'https://github.com/nikitalobanov12/notion-clone',
			live: '',
		},
		{
			title: 'DayFlow',
			description: 'A cross-platform productivity app for task and time management, featuring native performance and cloud sync.',
			details: `
- Built a native desktop application for Windows, macOS, and Linux using Tauri 2.0 and React 19, achieving cold starts under 3s and <100ms sync latency.
- Integrated PostgreSQL for persistent storage and Supabase for real-time syncing and offline support.
- Automated build and deployment pipeline with GitHub Actions CI/CD for desktop releases and Vercel deployments.
- Optimized database performance using indexes, query profiling, and efficient SQL without ORM, reducing query load and improving responsiveness.
- Improved React component performance through optimistic UI updates, memoization, and render optimization.
- Integrated Stripe payment processing for premium features and Google GenAI for AI-powered productivity enhancements.
- Designed a modern, responsive UI/UX for both web and desktop, with accessibility and dark mode support.
- Implemented robust error handling, crash reporting, and user analytics for continuous improvement.
`,
			date: '2024',
			tags: ['React', 'Tauri', 'PostgreSQL', 'Supabase', 'GitHub Actions', 'Stripe', 'Google GenAI', 'TypeScript', 'Node.js'],
			github: 'https://github.com/nikitalobanov12/dayflow',
			live: 'https://dayflow-landing-page.vercel.app/',
		},
		{
			title: 'Circles',
			description: 'A full-stack social application with user groups, comments, activity feeds, and real-time updates.',
			details: `
- Built with Next.js, Prisma, PostgreSQL, and Redis, deployed on Vercel for global scalability and fast edge delivery.
- Implemented user authentication, group management, comments, and activity feeds with efficient API routes and media upload pipelines.
- Reduced API response times by 90% by implementing Redis caching between backend and database layers.
- Optimized database performance by resolving N+1 query problems and reducing data overfetching.
- Integrated Cloudinary for image storage and conversion, and converted Figma designs to responsive UI with Tailwind CSS.
- Collaborated with a team using Agile methodology across multiple sprints, with daily standups and sprint planning.
- Designed for extensibility, supporting new features and integrations with minimal downtime.
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
