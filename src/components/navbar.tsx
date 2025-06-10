'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ThemeToggle } from '@/components/theme-toggle';

export function Navbar() {
	return (
		<header className='sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-14 items-center px-4 mx-auto'>
				{' '}
				<div className='flex'>
					<Link
						href='/'
						className='mr-6 flex items-center space-x-2 font-bold transition-all hover:text-blue-600 dark:hover:text-blue-400'
					>
						<span>Nikita Lobanov</span>
					</Link>
				</div>{' '}
				<div className='md:hidden ml-auto flex items-center space-x-2'>
					<ThemeToggle />
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant='ghost'
								size='sm'
								className='px-2'
							>
								<Menu className='h-6 w-6' />
								<span className='sr-only'>Toggle menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align='end'
							className='w-[250px]'
						>
							<DropdownMenuItem
								asChild
								className='py-3 text-base font-medium focus:bg-muted'
							>
								<Link
									href='#about'
									className='cursor-pointer w-full'
								>
									About
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem
								asChild
								className='py-3 text-base font-medium focus:bg-muted'
							>
								<Link
									href='#experience'
									className='cursor-pointer w-full'
								>
									Experience
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem
								asChild
								className='py-3 text-base font-medium focus:bg-muted'
							>
								<Link
									href='#projects'
									className='cursor-pointer w-full'
								>
									Projects
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem
								asChild
								className='py-3 text-base font-medium focus:bg-muted'
							>
								<Link
									href='#contact'
									className='cursor-pointer w-full'
								>
									Contact
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem
								asChild
								className='py-3 text-base font-medium focus:bg-muted'
							>
								<a
									href='/resume.pdf'
									target='_blank'
									download='nikita_lobanov_resume.pdf'
									className='cursor-pointer w-full flex items-center'
								>
									Download Resume
								</a>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>{' '}
				<nav className='hidden md:flex items-center space-x-6 text-sm font-medium flex-1 justify-end'>
					<Link
						href='#about'
						className='transition-all hover:text-blue-600 dark:hover:text-blue-400 blue-accent'
					>
						About
					</Link>
					<Link
						href='#experience'
						className='transition-all hover:text-blue-600 dark:hover:text-blue-400 blue-accent'
					>
						Experience
					</Link>
					<Link
						href='#projects'
						className='transition-all hover:text-blue-600 dark:hover:text-blue-400 blue-accent'
					>
						Projects
					</Link>
					<Link
						href='#contact'
						className='transition-all hover:text-blue-600 dark:hover:text-blue-400 blue-accent'
					>
						Contact
					</Link>
					<Button
						asChild
						size='sm'
						className='btn-blue-gradient'
					>
						<a
							href='/resume.pdf'
							target='_blank'
							download='nikita_lobanov_resume.pdf'
						>
							Download Resume
						</a>
					</Button>
					<ThemeToggle />
				</nav>
			</div>
		</header>
	);
}
