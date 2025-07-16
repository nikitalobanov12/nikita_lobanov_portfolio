import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MotionSection, MotionDiv } from '@/components/motion-components';

export function SkillsSection() {
	const skills = {
		languages: ['JavaScript', 'TypeScript', 'SQL', 'HTML & CSS', 'Rust'],
		frameworks: ['React', 'Prisma', 'Tailwind', 'Tauri', 'Node.js', 'Express', 'NestJS'],
		database: ['PostgreSQL', 'AWS RDS', 'AWS ElastiCache', 'Redis', 'Microservices', 'REST API', 'GraphQL', 'AWS ECS', 'AWS ECR', 'AWS VPC', 'AWS S3', 'Vercel'],
		tools: ['Jira', 'Git', 'GitHub', 'Vite', 'Vercel', 'GitHub Actions', 'Docker', 'Vitest', 'Playwright'],
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const skillVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.4,
				ease: 'easeOut',
			},
		},
	};

	return (
		<MotionSection
			id='skills'
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
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<h2 className='text-3xl font-bold tracking-tight '>Skills</h2>
					<p className='text-muted-foreground'>Technologies and tools I work with</p>
				</MotionDiv>

				<MotionDiv
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<Tabs defaultValue='languages' className='w-full'>
						<TabsList className='grid grid-cols-4 mb-8 bg-muted'>
							<TabsTrigger value='languages' className='data-[state=active]:bg-blue-500 data-[state=active]:text-white text-foreground font-medium'>Languages</TabsTrigger>
							<TabsTrigger value='frameworks' className='data-[state=active]:bg-blue-500 data-[state=active]:text-white text-foreground font-medium'>Frameworks & Libraries</TabsTrigger>
							<TabsTrigger value='database' className='data-[state=active]:bg-blue-500 data-[state=active]:text-white text-foreground font-medium'>Database & Infrastructure</TabsTrigger>
							<TabsTrigger value='tools' className='data-[state=active]:bg-blue-500 data-[state=active]:text-white text-foreground font-medium'>Tools</TabsTrigger>
						</TabsList>

						<TabsContent value='languages' className='mt-0'>
							<Card className='enhanced-card'>
								<CardHeader>
									<CardTitle>Programming Languages</CardTitle>
								</CardHeader>
								<CardContent>
									<MotionDiv className='flex flex-wrap gap-2' variants={containerVariants} initial='hidden' whileInView='visible' viewport={{ once: true }}>
										{skills.languages.map(skill => (
											<MotionDiv key={skill} variants={skillVariants} whileHover={{ scale: 1.05, rotate: 1 }} whileTap={{ scale: 0.95 }}>
												<Badge variant='secondary' className='px-4 py-2 text-base bg-blue-100 hover:text-white dark:bg-blue-900/50 dark:text-blue-200 dark:hover:bg-blue-600 transition-all duration-200 cursor-default blue-glow'>{skill}</Badge>
											</MotionDiv>
										))}
									</MotionDiv>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value='frameworks' className='mt-0'>
							<Card className='enhanced-card'>
								<CardHeader>
									<CardTitle>Frameworks & Libraries</CardTitle>
								</CardHeader>
								<CardContent>
									<MotionDiv className='flex flex-wrap gap-2' variants={containerVariants} initial='hidden' whileInView='visible' viewport={{ once: true }}>
										{skills.frameworks.map(framework => (
											<MotionDiv key={framework} variants={skillVariants} whileHover={{ scale: 1.05, rotate: -1 }} whileTap={{ scale: 0.95 }}>
												<Badge variant='secondary' className='px-4 py-2 text-base bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white dark:bg-blue-900/50 dark:text-blue-200 dark:hover:bg-blue-600 transition-all duration-200 cursor-default blue-glow'>{framework}</Badge>
											</MotionDiv>
										))}
									</MotionDiv>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value='database' className='mt-0'>
							<Card className='enhanced-card'>
								<CardHeader>
									<CardTitle>Database & Infrastructure</CardTitle>
								</CardHeader>
								<CardContent>
									<MotionDiv className='flex flex-wrap gap-2' variants={containerVariants} initial='hidden' whileInView='visible' viewport={{ once: true }}>
										{skills.database.map(db => (
											<MotionDiv key={db} variants={skillVariants} whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }}>
												<Badge variant='secondary' className='px-4 py-2 text-base hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default'>{db}</Badge>
											</MotionDiv>
										))}
									</MotionDiv>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value='tools' className='mt-0'>
							<Card className='enhanced-card'>
								<CardHeader>
									<CardTitle>Tools</CardTitle>
								</CardHeader>
								<CardContent>
									<MotionDiv className='flex flex-wrap gap-2' variants={containerVariants} initial='hidden' whileInView='visible' viewport={{ once: true }}>
										{skills.tools.map(tool => (
											<MotionDiv key={tool} variants={skillVariants} whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }}>
												<Badge variant='secondary' className='px-4 py-2 text-base hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default'>{tool}</Badge>
											</MotionDiv>
										))}
									</MotionDiv>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</MotionDiv>
			</div>
		</MotionSection>
	);
}
