// layout.tsx
import React from "react"; // Import React for StrictMode
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Nikita Lobanov",
  description: "Full-Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <React.StrictMode>
        <body className="font-mono antialiased bg-neutral-900 text-gray-300 container max-w-3xl mx-auto px-8">
          {children}
          <Footer />
        </body>
      </React.StrictMode>
    </html>
  );
}
