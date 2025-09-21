'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';

const STORAGE_KEY = 'theme';

function getInitialTheme(): 'dark' | 'light' {
	if (typeof window === 'undefined') {
		return 'dark';
	}
	const stored = window.localStorage.getItem(STORAGE_KEY);
	if (stored === 'dark' || stored === 'light') {
		return stored;
	}
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
	const [theme, setTheme] = useState<'dark' | 'light'>(() => getInitialTheme());

	useEffect(() => {
		const root = document.documentElement;
		if (theme === 'dark') {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
		window.localStorage.setItem(STORAGE_KEY, theme);
	}, [theme]);

	return (
		<Button
			variant='ghost'
			size='icon'
			className='relative'
			aria-label='Toggle theme'
			onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
		>
			<Sun className='h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<Moon className='absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	);
}
