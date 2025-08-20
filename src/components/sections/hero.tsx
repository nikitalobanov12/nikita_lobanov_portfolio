import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  MotionDiv,
  MotionSection,
  MotionH1,
  MotionH2,
  MotionP,
} from "@/components/motion-components";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <MotionSection
      className="py-20 md:py-32 flex flex-col md:flex-row items-center md:items-start gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-start gap-4 flex-1">
        <MotionH1
          className="text-4xl md:text-6xl font-bold gradient-text"
          variants={itemVariants}
        >
          Nikita Lobanov
        </MotionH1>
      <MotionH2
        className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium"
        variants={itemVariants}
      >
        Full Stack Engineer
      </MotionH2>{" "}
      <MotionP
        className="text-lg md:text-xl max-w-[600px] text-muted-foreground mt-4 leading-relaxed"
        variants={itemVariants}
      >
        I am a senior computer science student at BCIT specializing in fullstack
        web development with hands-on experience building scalable applications
        and system integrations. I have practical experience developing REST
        APIs, building high-performance React frontends, and real-time systems,
        along with working on AI-powered applications and complex database
        systems.
      </MotionP>
      <MotionDiv className="flex flex-wrap gap-4 mt-6" variants={itemVariants}>
        {" "}
        <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            className="group blue-glow bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white border-0"
          >
            <Link href="#contact">
              Contact me
              <MotionDiv
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="h-4 w-4" />
              </MotionDiv>
            </Link>
          </Button>
        </MotionDiv>
        <div className="flex items-center gap-4">
          {[
            {
              href: "https://github.com/nikitalobanov12",
              icon: Github,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/nikitalobanov",
              icon: Linkedin,
              label: "LinkedIn",
            },
            {
              href: "mailto:nikitaalobanovv@gmail.com",
              icon: Mail,
              label: "Email",
            },
          ].map((social, index) => (
            <MotionDiv
              key={social.label}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              {" "}
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover-glow border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Link
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              </Button>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
      </div>
      <MotionDiv
        className="w-full md:w-1/2 flex justify-center relative h-96 md:h-[600px]"
        variants={itemVariants}
      >
        {/* Main large bubble */}
        <MotionDiv
          className="absolute z-10"
          style={{ top: '15%', left: '50%', transform: 'translateX(-50%)' }}
          whileHover={{ scale: 1.05 }}
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-md opacity-30 animate-pulse"></div>
            <Image
              src="/nikita.jpg"
              alt="Nikita Lobanov"
              fill
              className="relative rounded-full border-4 border-blue-200 dark:border-blue-800 shadow-xl object-cover"
              priority
            />
          </div>
        </MotionDiv>

        {/* Secondary bubble - top left */}
        <MotionDiv
          className="absolute z-5"
          style={{ top: '0%', left: '0%' }}
          animate={{ 
            y: [0, -15, 0],
            x: [0, -5, 0],
            rotate: [0, -3, 3, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="relative w-40 h-40 md:w-52 md:h-52">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-md opacity-30 animate-pulse"></div>
            <Image
              src="/nikita-2.jpg"
              alt="Nikita Lobanov"
              fill
              className="relative rounded-full border-4 border-blue-200 dark:border-blue-700 shadow-xl object-cover"
            />
          </div>
        </MotionDiv>

        {/* Third bubble - bottom left */}
        <MotionDiv
          className="absolute z-5"
          style={{ bottom: '10%', left: '5%' }}
          animate={{ 
            y: [0, 12, 0],
            x: [0, -8, 0],
            rotate: [0, 4, -2, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="relative w-36 h-36 md:w-48 md:h-48">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-600 rounded-full blur-md opacity-30 animate-pulse"></div>
            <Image
              src="/nikita-3.jpg"
              alt="Nikita Lobanov"
              fill
              className="relative rounded-full border-4 border-blue-200 dark:border-blue-800 shadow-xl object-cover"
            />
          </div>
        </MotionDiv>

        {/* Floating gradient orbs for extra ambiance */}
        <MotionDiv
          className="absolute w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl"
          style={{ top: '60%', right: '25%' }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <MotionDiv
          className="absolute w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-lg"
          style={{ top: '25%', left: '20%' }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </MotionDiv>
    </MotionSection>
  );
}
