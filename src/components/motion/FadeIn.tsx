'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FadeInProps extends HTMLMotionProps<'div'> {
	delay?: number;
}

export function FadeIn({ className, delay = 0, children, ...props }: FadeInProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5, delay }}
			className={cn(className)}
			{...props}
		>
			{children}
		</motion.div>
	);
}
