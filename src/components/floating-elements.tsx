'use client';

import { MotionDiv } from './motion-components';

export function FloatingElements() {
	return (
		<div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
			{/* Enhanced floating circles with more vibrant blue gradients */}
			<MotionDiv
				className='absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/25 to-blue-400/15 rounded-full blur-3xl'
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
				className='absolute top-1/2 right-10 w-96 h-96 bg-gradient-to-l from-blue-600/20 to-blue-300/25 rounded-full blur-3xl'
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
				className='absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-tr from-blue-400/25 to-blue-500/20 rounded-full blur-3xl'
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

			{/* Additional smaller blue accent elements with more character */}
			<MotionDiv
				className='absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-300/40 to-blue-500/20 rounded-full blur-2xl'
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.4, 0.7, 0.4],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			<MotionDiv
				className='absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-to-tl from-blue-400/30 to-blue-600/15 rounded-full blur-3xl'
				animate={{
					x: [0, 40, 0],
					y: [0, -30, 0],
					rotate: [0, 180, 360],
				}}
				transition={{
					duration: 35,
					repeat: Infinity,
					ease: 'linear',
				}}
			/>

			{/* New pulsing blue accent */}
			<MotionDiv
				className='absolute top-3/4 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/35 to-blue-400/25 rounded-full blur-xl'
				animate={{
					scale: [0.8, 1.3, 0.8],
					opacity: [0.3, 0.8, 0.3],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			{/* New moving blue streak */}
			<MotionDiv
				className='absolute top-1/3 left-1/2 w-16 h-16 bg-gradient-to-br from-blue-600/40 to-transparent rounded-full blur-lg'
				animate={{
					x: [0, -120, 0],
					y: [0, 80, 0],
					scale: [1, 0.6, 1],
				}}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>
		</div>
	);
}
