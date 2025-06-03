'use client';

import { MotionDiv } from './motion-components';

export function FloatingElements() {
	return (
		<div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
			{/* Floating circles */}
			<MotionDiv
				className='absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl'
				animate={{
					x: [0, 100, 0],
					y: [0, -50, 0],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: 'linear',
				}}
			/>

			<MotionDiv
				className='absolute top-1/2 right-10 w-96 h-96 bg-gradient-to-l from-primary/5 to-muted/10 rounded-full blur-3xl'
				animate={{
					x: [0, -80, 0],
					y: [0, 100, 0],
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: 'linear',
				}}
			/>

			<MotionDiv
				className='absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-tr from-accent/10 to-primary/5 rounded-full blur-3xl'
				animate={{
					x: [0, -60, 0],
					y: [0, -80, 0],
				}}
				transition={{
					duration: 30,
					repeat: Infinity,
					ease: 'linear',
				}}
			/>
		</div>
	);
}
