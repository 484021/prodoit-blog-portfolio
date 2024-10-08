"use client";
import { motion } from "framer-motion";
import { Mail, Menu } from "lucide-react";
import React, { useState } from "react";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex ml-auto ">
            <Icons.logo className="ml-2 h-7 w-7" />

            <Link className="ml-2 mr-6 flex items-center space-x-2" href="/">
              Santhosh Bhoopal
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium ">
              {pathname === "/" ? (
                <>
                  <Link href="#about">About</Link>
                  <Link href="#skills">Skills</Link>
                  <Link href="#projects">Projects</Link>
                  <Link href="#experience">Experience</Link>
                  <Link href="#testimonials">Testimonials</Link>
                  <Link href="/blog">Blog</Link>
                </>
              ) : (
                <>
                  <Link href="/">Home</Link>
                  <Link href="/blog">Blog</Link>
                </>
              )}
            </nav>
          </div>
          <div className="flex flex-1 items-center w-full justify-end">
            <Link href={`${pathname === "/" ? "#contact" : "/contact"}`}>
              <Button variant="outline" className=" hidden md:flex ">
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
            {pathname === "/" ? (
              <>
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
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
              </>
            ) : (
              <>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </>
            )}
          </nav>
        </motion.div>
      )}
    </>
  );
}
