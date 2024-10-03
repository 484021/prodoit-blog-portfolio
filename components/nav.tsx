"use client";
import { motion } from "framer-motion";
import { Mail, Menu } from "lucide-react";
import React, { useState } from "react";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center ">
          <div className="mr-4 hidden md:flex ml-auto">
            <Icons.logo className="h-7 w-7" />

            <Link
              className="ml-2 mr-6 flex items-center space-x-2"
              href="/portfolio-page"
            >
              Santhosh Bhoopal
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/portfolio-page/">About</Link>
              <Link href="/portfolio-page/">Skills</Link>
              <Link href="/portfolio-page/">Projects</Link>
              <Link href="/portfolio-page/">Experience</Link>
              <Link href="/portfolio-page/">Testimonials</Link>
              <Link href="/blog">Blog</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center md:justify-end">
            <Link href="#contact">
              <Button variant="outline" className=" hidden md:flex">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-background p-6 md:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Button
            variant="ghost"
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Button>
          <nav className="flex flex-col space-y-4">
            <Link href="#about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#skills" onClick={() => setIsMenuOpen(false)}>
              Skills
            </Link>
            <Link href="#projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link href="#experience" onClick={() => setIsMenuOpen(false)}>
              Experience
            </Link>
            <Link href="#testimonials" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>
            <Link href="#blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
          </nav>
        </motion.div>
      )}
    </>
  );
}
