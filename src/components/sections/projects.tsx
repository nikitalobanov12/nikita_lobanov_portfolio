import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { MotionDiv, MotionSection } from '@/components/motion-components';

export function ProjectsSection() {
	const projects = [
		{
			title: 'DayFlow',
			description: 'Built a cross-platform productivity app (Windows, macOS, Linux) with native performance using Tauri 2.0 and React 18',
			details: 'Integrated PostgreSQL/Supabase for real-time syncing and offline support. Set up GitHub Actions for automated CI/CD and cross-platform builds. Designed a modern, responsive UI/UX for both web and desktop. Achieved cold starts under 3s and <100ms sync latency.',
			date: 'June 2025',
			tags: ['React', 'TypeScript', 'Rust', 'Tauri', 'SQLite', 'GitHub Actions'],
			github: 'https://github.com/nikitalobanov12/dayflow',
			live: 'https://dayflow-landing-page.vercel.app/',
		},
		{
			title: 'Circles',
			description: 'Developed a scalable social media app with real-time updates and Redis caching',
			details: 'Built user authentication, API routes, and media upload pipelines. Designed database schemas to support social graphs, comments, and messaging. Optimized backend for low-latency reads/writes and horizontal scaling. Delivered full production deployment on Vercel.',
			date: 'May 2025',
			tags: ['Next.js', 'React', 'Prisma PostgreSQL', 'Redis', 'Tailwind'],
			github: 'https://github.com/ILHT-IDSP/IDSP-Circle',
			live: 'https://idsp-circle-tawny.vercel.app/',
		},
		{
			title: 'Affistash',
			description: 'Collaborated in a 4-person team to build an AI-powered affiliate marketing SaaS',
			details: 'Integrated OpenAI to generate personalized marketing strategies. Implemented Stripe for subscription payments and Firebase for authentication. Built a dashboard for users to manage campaigns and brand matches. Launched MVP with end-to-end CI/CD and secure user management.',
			date: 'March 2024',
			tags: ['Next.js', 'TypeScript', 'Firebase', 'Stripe', 'Sass CSS', 'OpenAI API'],
			live: 'https://affistash.com',
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
									<p className='mb-2'>{project.description}</p>
									<p className='text-sm text-muted-foreground'>{project.details}</p>
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
