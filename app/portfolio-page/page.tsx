"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Github, Globe, Linkedin, Mail, Menu } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { ContactForm } from "@/components/component/contact-form";

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    const totalMilSecDur = parseInt(duration);
    const incrementTime = (totalMilSecDur / end) * 1000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

const SkillBadge = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge
        variant="secondary"
        className="text-sm py-1 px-2 w-full text-center"
      >
        {skill}
      </Badge>
    </motion.div>
  );
};

export default function PortfolioPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "REST APIs",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX }}
      />

      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center ">
          <div className="mr-4 hidden md:flex ml-auto">
            <Icons.logo className="h-7 w-7" />

            <Link className="ml-2 mr-6 flex items-center space-x-2" href="/">
              Santhosh Bhoopal
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about">About</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#experience">Experience</Link>
              <Link href="#testimonials">Testimonials</Link>
              <Link href="#blog">Blog</Link>
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

      <main className="container mx-auto px-4 py-8">
        <motion.section
          id="about"
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Santhosh Bhoopal</h1>
          <p className="text-xl mb-4">
            Full-Stack Developer | Next.js | React | Node.js | PostgreSQL
          </p>
          <p className="text-muted-foreground mb-4">
            I'm a passionate full-stack developer with experience building
            scalable web applications. Specializing in Next.js, React, and
            Node.js, I create efficient, user-friendly solutions that drive
            business growth.
          </p>
          <div className="flex space-x-4">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Hire Me
            </Button>
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <SkillBadge skill={skill} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="projects"
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A full-featured e-commerce solution with real-time inventory management.",
                tech: ["Next.js", "React", "Node.js", "PostgreSQL"],
                demo: "https://demo-ecommerce.com",
                github: "https://github.com/johndoe/ecommerce",
              },
              {
                title: "Task Management App",
                description:
                  "A collaborative task management tool with real-time updates.",
                tech: ["React", "Firebase", "Material-UI"],
                demo: "https://task-app-demo.com",
                github: "https://github.com/johndoe/task-app",
              },
              {
                title: "Weather Forecast Dashboard",
                description:
                  "An interactive weather dashboard with location-based forecasts.",
                tech: ["Vue.js", "Express", "OpenWeatherMap API"],
                demo: "https://weather-dashboard-demo.com",
                github: "https://github.com/johndoe/weather-dashboard",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.demo}>
                          <Globe className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.github}>
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="case-studies"
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
          <Tabs defaultValue="ecommerce" className="space-y-4">
            <TabsList>
              <TabsTrigger value="ecommerce">E-commerce Platform</TabsTrigger>
              <TabsTrigger value="task-app">Task Management App</TabsTrigger>
            </TabsList>
            <TabsContent value="ecommerce">
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Platform Optimization</CardTitle>
                  <CardDescription>
                    Improving performance and user experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Problem</h3>
                      <p className="text-sm text-muted-foreground">
                        The client's existing e-commerce platform was slow and
                        unresponsive, leading to high bounce rates and low
                        conversion.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Solution</h3>
                      <p className="text-sm text-muted-foreground">
                        Implemented a Next.js frontend with server-side
                        rendering and API routes, coupled with a Node.js backend
                        and PostgreSQL database. Utilized Redis for caching and
                        implemented efficient indexing strategies.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Impact</h3>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        <li>
                          <AnimatedCounter value="50" />% reduction in page load
                          time
                        </li>
                        <li>
                          <AnimatedCounter value="30" />% increase in conversion
                          rate
                        </li>
                        <li>
                          <AnimatedCounter value="25" />% decrease in bounce
                          rate
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="task-app">
              <Card>
                <CardHeader>
                  <CardTitle>Task Management App Redesign</CardTitle>
                  <CardDescription>
                    Enhancing collaboration and productivity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Problem</h3>
                      <p className="text-sm text-muted-foreground">
                        The client's team struggled with coordination and task
                        tracking, leading to missed deadlines and reduced
                        productivity.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Solution</h3>
                      <p className="text-sm text-muted-foreground">
                        Developed a React-based task management app with
                        real-time updates using Firebase. Implemented
                        drag-and-drop functionality, customizable workflows, and
                        integrated chat features.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Impact</h3>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        <li>
                          <AnimatedCounter value="40" />% improvement in team
                          productivity
                        </li>
                        <li>
                          <AnimatedCounter value="60" />% reduction in missed
                          deadlines
                        </li>
                        <li>
                          <AnimatedCounter value="90" />% user adoption rate
                          within the first month
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* <motion.section
          id="tools-techniques"
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Tools and Techniques in Action
          </h2>
          <div className="space-y-6">
            {[
              {
                problem:
                  "Slow database queries in a large-scale e-commerce platform",
                tools: ["PostgreSQL", "Prisma", "Redis"],
                solution:
                  "Implemented database indexing, query optimization, and caching strategies",
                results:
                  "Reduced average query time by 75%, improving overall site performance",
              },
              {
                problem:
                  "Performance issues in a React-based single-page application",
                tools: ["React", "Next.js", "Webpack"],
                solution:
                  "Migrated to Next.js for server-side rendering and implemented code splitting",
                results:
                  "Improved initial page load time by 60% and enhanced SEO capabilities",
              },
              {
                problem:
                  "Scalability challenges in a real-time chat application",
                tools: ["Node.js", "Socket.io", "MongoDB", "Docker"],
                solution:
                  "Designed a microservices architecture and implemented horizontal scaling",
                results:
                  "Increased concurrent user capacity by 500% without compromising performance",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Problem: {item.problem}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2">
                      <strong>Tools/Technologies Used:</strong>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {item.tools.map((tool) => (
                          <Badge key={tool} variant="secondary">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mb-2">
                      <strong>Solution:</strong>
                      <p>{item.solution}</p>
                    </div>
                    <div>
                      <strong>Results:</strong>
                      <p>{item.results}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section> */}

        <motion.section
          id="testimonials"
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Tracy Fung",
                role: "Artist",
                content:
                  "Very quick and thorough. Asks many questions to ensure the site meets your needs. The results turned out the way I expected and better. Even created a logo.",
              },
              {
                name: "Oluremi Precious",
                role: "Owner, Love The Beads",
                content:
                  "We’re impressed with the seamless functionality and clean design of the website. Excellent job, and your attention to detail is truly commendable!",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <div className="space-y-6">
            {[
              {
                role: "Senior Full-Stack Developer",
                company: "TechInnovate Solutions",
                period: "2020 - Present",
                responsibilities: [
                  "Lead development of scalable web applications using Next.js, React, and Node.js",
                  "Implement and optimize RESTful APIs and GraphQL endpoints",
                  "Mentor junior developers and conduct code reviews",
                ],
              },
              {
                role: "Full-Stack Developer",
                company: "WebCraft Agency",
                period: "2018 - 2020",
                responsibilities: [
                  "Developed responsive web applications using React and Express.js",
                  "Integrated third-party APIs and services to enhance application functionality",
                  "Collaborated with design team to implement pixel-perfect UI/UX designs",
                ],
              },
            ].map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{job.role}</CardTitle>
                    <CardDescription>
                      {job.company} | {job.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="blog"
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Optimizing React Performance: Tips and Tricks",
                excerpt:
                  "Learn how to improve your React application's performance with these advanced techniques.",
                date: "2023-05-15",
              },
              {
                title: "Building Scalable APIs with GraphQL and Node.js",
                excerpt:
                  "Discover the benefits of GraphQL and how to implement it in your Node.js backend.",
                date: "2023-04-22",
              },
            ].map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{post.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto mt-2">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ContactForm />
          {/* <Card>
            <CardHeader>
              <CardTitle>Let's Work Together</CardTitle>
              <CardDescription>
                I'm always open to new opportunities and collaborations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </motion.section>
      </main>
    </div>
  );
}
