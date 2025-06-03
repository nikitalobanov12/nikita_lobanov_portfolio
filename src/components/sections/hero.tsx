import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { MotionDiv, MotionSection, MotionH1, MotionH2, MotionP } from '@/components/motion-components';

export function HeroSection() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: 'easeOut',
			},
		},
	};
	return (
		<MotionSection
			className='py-20 md:py-32 flex flex-col items-start gap-4'
			variants={containerVariants}
			initial='hidden'
			animate='visible'
		>
			<MotionH1
				className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent'
				variants={itemVariants}
			>
				Nikita Lobanov
			</MotionH1>

			<MotionH2
				className='text-2xl md:text-3xl text-muted-foreground'
				variants={itemVariants}
			>
				Full-Stack Web Developer
			</MotionH2>

			<MotionP
				className='text-lg md:text-xl max-w-[600px] text-muted-foreground mt-4'
				variants={itemVariants}
			>
				Passionate about building modern, scalable applications across web and desktop platforms. Experienced with TypeScript, React, & Node.js, specializing in full-stack development.

			</MotionP>

			<MotionDiv
				className='flex flex-wrap gap-4 mt-6'
				variants={itemVariants}
			>
				<MotionDiv
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Button
						asChild
						className='group'
					>
						<Link href='#contact'>
							Contact me
							<MotionDiv
								className='ml-2'
								animate={{ x: [0, 5, 0] }}
								transition={{ duration: 2, repeat: Infinity }}
							>
								<ArrowRight className='h-4 w-4' />
							</MotionDiv>
						</Link>
					</Button>
				</MotionDiv>

				<div className='flex items-center gap-4'>
					{[
						{ href: 'https://github.com/nikitalobanov12', icon: Github, label: 'GitHub' },
						{ href: 'https://linkedin.com/in/nikitalobanov', icon: Linkedin, label: 'LinkedIn' },
						{ href: 'mailto:nikitaalobanovv@gmail.com', icon: Mail, label: 'Email' },
					].map((social, index) => (
						<MotionDiv
							key={social.label}
							whileHover={{ scale: 1.1, rotate: 5 }}
							whileTap={{ scale: 0.9 }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1 + index * 0.1 }}
						>
							<Button
								variant='outline'
								size='icon'
								asChild
							>
								<Link
									href={social.href}
									target={social.label !== 'Email' ? '_blank' : undefined}
								>
									<social.icon className='h-5 w-5' />
								</Link>
							</Button>
						</MotionDiv>
					))}
				</div>
			</MotionDiv>
		</MotionSection>
	);
}
