"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ContentItem {
  id: string;
  title: string;
}

function ContentSection({
  title,
  items,
  viewAllHref,
}: {
  title: string;
  items: ContentItem[];
  viewAllHref: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <motion.li
            key={Math.random()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={`/${title.toLowerCase()}/${item.id}`}
              className="block p-2 rounded-md hover:bg-accent"
            >
              {item.title}
            </Link>
          </motion.li>
        ))}
      </ul>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Link
          href={viewAllHref}
          className="inline-block text-sm text-primary hover:underline"
        >
          View all {title.toLowerCase()}
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -5 }}
            transition={{ duration: 0.2 }}
          >
            {" →"}
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function HomeContentTeaser() {
  const projects: ContentItem[] = [
    { id: "1", title: "Project Alpha" },
    { id: "2", title: "Project Beta" },
    { id: "3", title: "Project Gamma" },
  ];

  const notes: ContentItem[] = [
    { id: "1", title: "React Hooks" },
    { id: "2", title: "CSS Grid" },
    { id: "3", title: "TypeScript Tips" },
  ];

  const blogPosts: ContentItem[] = [
    { id: "1", title: "The Future of Web Dev" },
    { id: "2", title: "Optimizing Performance" },
    { id: "3", title: "Accessibility in Design" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        <ContentSection
          title="Projects"
          items={projects}
          viewAllHref="/projects"
        />
        <ContentSection title="Notes" items={notes} viewAllHref="/notes" />
        <ContentSection
          title="Blog Posts"
          items={blogPosts}
          viewAllHref="/blog"
        />
      </motion.div>
    </div>
  );
}
