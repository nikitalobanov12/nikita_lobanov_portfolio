'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import React from 'react';

// Motion-specific props to filter out during SSR
const motionProps = ['initial', 'animate', 'variants', 'whileHover', 'whileTap', 'transition', 'whileFocus', 'whileInView', 'exit', 'drag', 'dragConstraints', 'dragElastic', 'dragMomentum', 'dragPropagation', 'dragSnapToOrigin', 'dragTransition', 'layoutId', 'layout', 'layoutDependency', 'onAnimationStart', 'onAnimationComplete', 'onUpdate', 'onDrag', 'onDragStart', 'onDragEnd', 'onDirectionLock', 'onViewportEnter', 'onViewportLeave', 'viewport', 'transformTemplate'];

function filterMotionProps(props: Record<string, unknown>) {
	const filtered: Record<string, unknown> = {};
	Object.keys(props).forEach(key => {
		if (!motionProps.includes(key)) {
			filtered[key] = props[key];
		}
	});
	return filtered;
}

export function MotionDiv(props: React.ComponentProps<typeof motion.div>) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) {
		const htmlProps = filterMotionProps(props as Record<string, unknown>);
		return <div {...htmlProps} />;
	}

	return <motion.div {...props} />;
}

export function MotionSection(props: React.ComponentProps<typeof motion.section>) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) {
		const htmlProps = filterMotionProps(props as Record<string, unknown>);
		return <section {...htmlProps} />;
	}

	return <motion.section {...props} />;
}

export function MotionH1(props: React.ComponentProps<typeof motion.h1>) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) {
		const htmlProps = filterMotionProps(props as Record<string, unknown>);
		return <h1 {...htmlProps} />;
	}

	return <motion.h1 {...props} />;
}

export function MotionH2(props: React.ComponentProps<typeof motion.h2>) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) {
		const htmlProps = filterMotionProps(props as Record<string, unknown>);
		return <h2 {...htmlProps} />;
	}

	return <motion.h2 {...props} />;
}

export function MotionP(props: React.ComponentProps<typeof motion.p>) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) {
		const htmlProps = filterMotionProps(props as Record<string, unknown>);
		return <p {...htmlProps} />;
	}

	return <motion.p {...props} />;
}

export { AnimatePresence };
