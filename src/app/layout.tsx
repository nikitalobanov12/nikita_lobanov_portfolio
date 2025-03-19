import React from "react"; 
import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn} from "@/lib/utils"

const fontSans = FontSans( {
	subsets: ["latin"],
	variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Nikita Lobanov | Full-Stack Web Developer",
  description: "Full-Stack Web Developer portfolio showcasing projects and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
		<body className={cn(
			"min-h-screen bg-background font-sans antialiased",
			fontSans.variable
		)}>
			<div className="relative flex min-h-screen flex-col">
				{children}
			</div>
			
		</body>
    </html>
  );
}
