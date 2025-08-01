'use client';

import { useScroll, useSpring } from 'framer-motion';
import { MotionDiv } from './motion-components';

export function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<MotionDiv
			className='fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-50 origin-left'
			style={{ scaleX }}
		/>
	);
}
