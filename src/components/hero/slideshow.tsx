"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const IMAGES = [
  { src: "/main.jpg", alt: "Nikita Lobanov Headshot" },
  { src: "/nikita.jpg", alt: "Nikita Lobanov portrait" },
  { src: "/nikita-3.jpg", alt: "Nikita Lobanov working" },
];

interface HeroSlideshowProps {
  className?: string;
  intervalMs?: number;
}

export default function HeroSlideshow({
  className,
  intervalMs = 4500,
}: HeroSlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);

  const current = IMAGES[index];

  return (
    <div
      className={cn("relative flex justify-center md:justify-end", className)}
    >
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/70 p-3 shadow-xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="h-72 w-72 max-w-full rounded-xl object-cover md:h-[22rem] md:w-[22rem]"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-border/70"></div>
      </div>
    </div>
  );
}
