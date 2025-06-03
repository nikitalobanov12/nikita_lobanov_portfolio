import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function ProjectsSection() {
	const projects = [
		{
			title: 'DayFlow',
			description: 'A cross-platform desktop productivity application built with Tauri, React, and Rust, demonstrating expertise in systems programming and modern desktop development. Features native performance with web technologies and automated cross-platform distribution.',
			details: 'Showcases advanced technical skills including Rust backend development, SQLite database integration, GitHub Actions CI/CD pipelines, and cross-platform binary compilation. Implements modern UI/UX principles with Tailwind CSS and TypeScript, delivering native desktop performance across Windows, macOS, and Linux.',
			date: 'June 2025',
			tags: ['React', 'TypeScript', 'Rust', 'Tauri', 'SQLite', 'Tailwind', 'GitHub Actions'],
			github: 'https://github.com/nikitalobanov12/dayflow',
			live: 'https://dayflow-landing-page.vercel.app/',
		},
		{
			title: 'Circles',
			description: 'An advanced social media application with Next.js, TypeScript, and PostgreSQL, showcasing full-stack expertise through complex database design, real-time features, and performance optimization.',
			details: 'Features include authentication systems, API design, scalable architecture patterns, Redis caching for performance optimization, and enterprise-grade image processing. Demonstrates production-ready development skills with modern web technologies.',
			date: 'May 2025',
			tags: ['Next.js', 'React', 'Prisma', 'PostgreSQL', 'Redis', 'Tailwind', 'TypeScript'],
			github: 'https://github.com/ILHT-IDSP/IDSP-Circle',
			live: 'https://idsp-circle-tawny.vercel.app/',
		},
		{
			title: 'Affistash',
			description: 'An AI-powered SaaS platform connecting affiliate marketers with companies, utilizing OpenAI for intelligent strategy generation and Stripe for secure payment processing.',
			details: 'Built with Next.js, TypeScript, and Firebase to optimize partnerships and drive results for affiliate marketing professionals. Features include AI-generated marketing strategies, payment integration, and real-time data analytics.',
			date: 'March 2024',
			tags: ['Next.js', 'TypeScript', 'Firebase', 'Stripe', 'Sass CSS', 'OpenAI API'],
			live: 'https://affistash.com',
		},
	];

	return (
		<section
			id='projects'
			className='py-16'
		>
			<div className='space-y-6'>
				{' '}
				<div className='space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight'>Projects</h2>
					<p className='text-muted-foreground'>A showcase of my recent development work featuring full-stack applications with modern technologies</p>
				</div>
				<div className='grid gap-6 md:grid-cols-2'>
					{projects.map((project, index) => (
						<Card
							key={index}
							className='flex flex-col h-full'
						>
							<CardHeader>
								<CardTitle>{project.title}</CardTitle>
								<CardDescription>{project.date}</CardDescription>
							</CardHeader>
							<CardContent className='flex-1'>
								<p className='mb-2'>{project.description}</p>
								<p className='text-sm text-muted-foreground'>{project.details}</p>
								<div className='flex flex-wrap gap-2 mt-4'>
									{project.tags.map(tag => (
										<Badge
											key={tag}
											variant='secondary'
										>
											{tag}
										</Badge>
									))}
								</div>
							</CardContent>{' '}
							<CardFooter className='flex gap-2'>
								{project.github && (
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
								)}
								{project.live && (
									<Button
										size='sm'
										asChild
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
								)}
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
