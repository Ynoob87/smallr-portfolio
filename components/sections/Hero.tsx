"use client";

import {
  Github,
  Mail,
  Linkedin,
  Code2,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/constants/site";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4">
      <motion.div
        className="relative max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mx-auto mb-8 size-32 overflow-hidden rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative size-full">
            <Image
              src="/avatar.jpg"
              alt={siteConfig.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 128px, 128px"
              priority
            />
            <motion.div
              className="absolute -inset-1 -z-10 rounded-full bg-gradient-to-br from-primary-light/50 to-secondary-light/50 blur-md dark:from-primary-dark/50 dark:to-secondary-dark/50"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        <h1 className="relative inline-block text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent dark:from-primary-dark dark:to-secondary-dark">
            {siteConfig.name}
          </span>
          <motion.span
            className="absolute -right-8 -top-6 text-primary-light dark:text-primary-dark"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="size-6" />
          </motion.span>
        </h1>

        <motion.div
          className="mt-6 flex items-center justify-center gap-2 text-lg text-secondary-light dark:text-secondary-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Code2 className="size-5" />
          <span>{text}</span>
          <Cursor cursorColor="currentColor" />
        </motion.div>

        <motion.p
          className="mt-6 text-secondary-light/80 dark:text-secondary-dark/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Passionate about creating beautiful, functional, and user-friendly web
          applications that solve real-world problems.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            {
              href: siteConfig.links.github,
              icon: Github,
              label: "Open Source Projects",
              className: "hover:text-[#333] dark:hover:text-[#efefef]",
            },
            {
              href: siteConfig.links.linkedin,
              icon: Linkedin,
              label: "Connect with me",
              className: "hover:text-[#0077b5]",
            },
            {
              href: `mailto:${siteConfig.links.email}`,
              icon: Mail,
              label: "Get in touch",
              className: "hover:text-[#ea4335]",
            },
          ].map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative text-secondary-light/80 transition-colors dark:text-secondary-dark/80 ${link.className}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="size-6" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs opacity-0 transition-opacity group-hover:opacity-100">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-xs text-secondary-light/60 dark:text-secondary-dark/60">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="size-4 text-secondary-light/60 dark:text-secondary-dark/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
