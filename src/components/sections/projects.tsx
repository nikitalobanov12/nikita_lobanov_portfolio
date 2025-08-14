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
			description: 'Google Docs-style collaborative markdown editor with real-time synchronization and conflict resolution.',
			details: `
- Built Google Docs-style collaborative markdown editor where 10+ users can edit simultaneously without conflicts. Integrated Liveblocks WebSocket connections with Yjs's CRDT algorithm to merge concurrent edits and maintain document consistency.
- Implemented Redis caching layer that stores frequently accessed documents in memory while PostgreSQL handles persistent storage. Used Redis pub/sub for real-time notifications and background workers to sync cache to database every 30 seconds. Reduced document load times from 2.3s to 150ms.
- Debugged infinite save loop where React useState updates triggered CRDT sync events, which triggered more useState updates. Fixed by moving document state management entirely into Liveblocks provider and removing React state dependencies for editor content.
- Containerized application with Docker multi-stage builds and deployed on AWS ECS Fargate with auto-scaling groups. Used RDS PostgreSQL for data persistence and ElastiCache Redis clusters for caching and session management.
`,
			date: '2024',
			tags: ['AWS Services', 'tRPC', 'Web Sockets', 'Docker', 'Redis', 'NextAuth.js'],
			github: 'https://github.com/nikitalobanov12/writeshare',
			live: 'https://writeshare.nikitalobanov.com',
		},
		{
			title: 'DayFlow',
			description: 'Cross-platform task management app with AI-powered natural language processing and real-time synchronization.',
			details: `
- Built cross-platform task management app using React frontend & Tauri platform for native desktop compilation with a shared codebase between web and desktop versions. Grew from 0 to 300+ daily active users over 2 months.
- Integrated Google Gemini AI API to parse natural language task descriptions like "plan mom's birthday party next week" into structured tasks with deadlines, priorities, and subtasks. Simplifying the task creation process for users.
- Identified slow database queries using PostgreSQL EXPLAIN ANALYZE and added B-tree indexes on user_id, due_date, and status columns. Optimized JOIN queries between tasks and projects tables. Cut average query time from 800ms to 240ms.
- Built Stripe payment integration system with webhook handlers for payment processing and trial management. Set up GitHub Actions CI/CD pipeline that runs tests, builds artifacts, and deploys to production on commit or merge to main.
`,
			date: '2024',
			tags: ['React', 'React Router', 'Tauri', 'PostgreSQL', 'GitHub Actions', 'Node.js', 'Stripe', 'Google VertexAI'],
			github: 'https://github.com/nikitalobanov12/dayflow',
			live: 'https://dayflow-landing-page.vercel.app/',
		},
		{
			title: 'Circles',
			description: 'Social platform for private community groups with photo sharing, activity feeds, and member permissions.',
			details: `
- Built a social platform for private community groups with photo sharing, activity feeds, and member permissions. Led team of 3 developers using 1-week sprints, daily standups, and Git feature branch workflow with code reviews done by me.
- Worked with 5 designers to create Figma mockups and convert them into pixel-perfect React components. Built responsive layouts that matched designs across desktop, tablet, and mobile breakpoints.
- Fixed N+1 query problems where loading user feeds was making 200+ individual database calls to fetch post authors, comments, and likes. Implemented Prisma eager loading with include statements and restructured queries to use joins. Reduced query count from 200+ to 3 queries per page load.
`,
			date: '2024',
			tags: ['Next.js', 'Prisma PostgreSQL', 'Redis', 'Vercel', 'Tailwind CSS'],
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
