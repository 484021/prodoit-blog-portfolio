"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Projects", href: "/projects" },
  { id: 3, title: "Blog", href: "/blog" },
  { id: 4, title: "Contact", href: "/contact" },
];

export default function AnimatedNavBar() {
  //consume context
  const [activeItem, setActiveItem] = useState(1);

  //underline color depending on dark or light theme

  return (
    <nav className="py-4 mx-auto mt-16 lg:mt-12">
      <ul className="flex justify-center space-x-8 ">
        {navItems.map((item) => (
          <Link href={item.href} key={Math.random()}>
            <li key={Math.random()} className="relative">
              <button
                className={`text-base font-medium  transition-colors duration-200`}
                onClick={() => setActiveItem(item.id)}
              >
                {item.title}
                {activeItem === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-500"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
