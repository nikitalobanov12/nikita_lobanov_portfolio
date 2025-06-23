import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Outfit as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from '@/components/theme-provider';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: 'Nikita Lobanov | Full-Stack Web Developer',
	description: 'Full-Stack Web Developer portfolio showcasing projects and experience',
	icons: {
		icon: '/logo.svg',
		shortcut: '/logo.svg',
		apple: '/logo.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<div className='relative flex min-h-screen flex-col'>
						{children}
						<Analytics />
					</div>
				</ThemeProvider>
				<div id='mobile-menu-root'></div>
			</body>
		</html>
	);
}
