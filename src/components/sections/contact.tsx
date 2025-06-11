import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Github } from 'lucide-react';

export function ContactSection() {
	return (
		<div
			id='contact'
			className='space-y-6 h-full flex flex-col'
		>
			{' '}
			<div className='space-y-2'>
				<h2 className='text-3xl font-bold tracking-tight section-heading'>Contact</h2>
				<p className='text-muted-foreground'>Get in touch with me</p>
			</div>
			<Card className='flex-1 enhanced-card'>
				<CardHeader>
					<CardTitle>Contact Information</CardTitle>
					<CardDescription>Ways to reach me</CardDescription>
				</CardHeader>
				<CardContent className='space-y-6'>
					<div className='flex items-start space-x-4'>
						<Mail className='h-5 w-5 mt-0.5 text-muted-foreground' />{' '}
						<div>
							<h3 className='font-medium'>Email</h3>
							<a
								href='mailto:nikitaalobanovv@gmail.com'
								className='text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
							>
								nikitaalobanovv@gmail.com
							</a>
						</div>
					</div>

					<div className='flex items-start space-x-4'>
						<Linkedin className='h-5 w-5 mt-0.5 text-muted-foreground' />
						<div>
							<h3 className='font-medium'>LinkedIn</h3>{' '}
							<a
								href='https://linkedin.com/in/nikitalobanov'
								target='_blank'
								rel='noopener noreferrer'
								className='text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
							>
								linkedin.com/in/nikitalobanov
							</a>
						</div>
					</div>

					<div className='flex items-start space-x-4'>
						<Github className='h-5 w-5 mt-0.5 text-muted-foreground' />
						<div>
							<h3 className='font-medium'>GitHub</h3>{' '}
							<a
								href='https://github.com/nikitalobanov12'
								target='_blank'
								rel='noopener noreferrer'
								className='text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
							>
								github.com/nikitalobanov12
							</a>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
