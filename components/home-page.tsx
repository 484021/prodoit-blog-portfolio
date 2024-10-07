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
import { ArrowRight, Github, Globe, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/component/contact-form";
import petly from "@/lib/assets/petly.png";
import nestio from "@/lib/assets/nestio.png";
import wordanalytics from "@/lib/assets/wordanalytics.png";
import Image from "next/image";

const AnimatedCounter = ({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMilSecDur = duration;
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

const SkillBadge = ({ skill }: { skill: string }) => {
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

type BlogPost = {
  metadata: {
    [key: string]: string;
  };
  slug: string;
  content: string;
};

export default function HomePage({
  latestBlogPosts,
}: {
  latestBlogPosts: BlogPost[];
}) {
  const latestPosts = latestBlogPosts
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .slice(0, 4);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 flex"
        style={{ scaleX }}
      />

      <main className="container px-4 py-8 mx-auto w-full space-y-6 relative">
        <motion.section
          id="about"
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Santhosh Bhoopal</h1>
          <p className="text-xl mb-4">Full Stack Developer</p>
          <p className="text-xl mb-4 flex"><MapPin className="mr-2"/>Canada</p>
          <p className="text-muted-foreground mb-4">
            I&apos;m a Full Stack Developer with experience building web
            applications. I create practical, user-friendly solutions that help
            businesses operate more efficiently.
          </p>
          <div className="flex space-x-4">
            <Link href="#contact">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </Link>
            <Link href="https://github.com/484021" target="_blank">
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/sanbho/" target="_blank">
              <Button variant="outline">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </Link>
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
            {skills.map((skill) => (
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
                title: "Petly",
                description:
                  "A SaaS to manage all your pet day care clients and dogs in one place. Full Stack CRUD operations with Auth and Payment.",
                tech: [
                  "Next.js",
                  "React",
                  "TypeScript",
                  "PostgreSQL",
                  "Prisma",
                  "Stripe",
                ],
                demo: "https://petly-sooty.vercel.app/",
                github: "https://github.com/484021/petly",
                image: petly,
              },
              {
                title: "Nestio",
                description:
                  "A property management website that connects owners and renters. Rich full of features from OAuth, messaging, bookmarking, search, filter and more.",
                tech: ["Next.js", "React", "JavaScript", "MongoDB", "Mongoose"],
                demo: "https://nestio.vercel.app/",
                github: "https://github.com/484021/nestio",
                image: nestio,
              },
              {
                title: "Word Analytics",
                description:
                  "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
                tech: ["React"],
                demo: "https://github.com/484021/Word-Analytics-React-Vite",
                github: "https://github.com/johndoe/weather-dashboard",
                image: wordanalytics,
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:scale-105 transition">
                  <CardHeader>
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <Link href={project.demo} target="_blank">
                      <Image
                        src={project.image}
                        alt="project image"
                        className="border rounded-md"
                      />
                    </Link>
                    <CardDescription className="mt-2">
                      {project.description}
                    </CardDescription>
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
                        <Link href={project.demo} target="_blank">
                          <Globe className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.github} target="_blank">
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
              <TabsTrigger value="task-app">Management App</TabsTrigger>
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
                        The client&rsquo;s existing e-commerce platform was slow
                        and unresponsive, leading to high bounce rates and low
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
                          <AnimatedCounter value={50} />% reduction in page load
                          time
                        </li>
                        <li>
                          <AnimatedCounter value={30} />% increase in conversion
                          rate
                        </li>
                        <li>
                          <AnimatedCounter value={25} />% decrease in bounce
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
                  <CardTitle>Pet Daycare Management App</CardTitle>
                  <CardDescription>
                    Increasing organization and efficency
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Problem</h3>
                      <p className="text-sm text-muted-foreground">
                        The pet daycare struggled with coordinating schedules
                        and tracking tasks, which led to missed appointments,
                        inefficient workflow, and reduced overall productivity.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Solution</h3>
                      <p className="text-sm text-muted-foreground">
                        Developed a complete pet daycare management app with
                        secure authentication, pet sign-in and sign-out
                        tracking, payment processing, and detailed pet profiles.
                        The app allows staff to manage bookings, monitor pet
                        activity, and store important pet information, ensuring
                        a smooth and efficient daycare experience for both staff
                        and pet owners.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Impact</h3>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        <li>
                          <AnimatedCounter value={50} />% improvement in
                          operational efficiency
                        </li>
                        <li>
                          <AnimatedCounter value={70} />% reduction in missed
                          appointments and scheduling errors
                        </li>
                        <li>
                          <AnimatedCounter value={95} />% satisfaction rate
                          among staff and pet owners within the first month
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.section>

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
                    <p className="italic">
                      &ldquo;{testimonial.content}&ldquo;
                    </p>
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
                role: "Full Stack Developer",
                company: "sukuran Web Solutions",
                period: "2022 - Present",
                responsibilities: [
                  "Boosted mobile traffic by 50% by developing a responsive, mobile-first design using React and Tailwind CSS, leading to a 15% increase in overall conversions",
                  "Developed a client management platform for clients by building a full stack web application with Next.js and PostgreSQL, resulting in a 25% reduction in manual administrative tasks",
                  "Collaborated with a team of 3 developers and conducted code reviews",
                ],
              },
              {
                role: "Operations Manager",
                company: "Unix Housing Inc",
                period: "2021 - 2022",
                responsibilities: [
                  "Boosted revenue by 18% by optimizing staff scheduling and implementing a new training program, leading to improved customer service and faster order processing",
                  "Cut labor costs by 10% by restructuring employee shifts and introducing performance tracking software, increasing staff productivity by 20%",
                  "Improved customer satisfaction scores by 35% by launching a customer feedback program",
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
            {latestPosts.map((post, index) => (
              <motion.div
                key={post.metadata.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{post.metadata.title}</CardTitle>
                    <CardDescription>
                      {post.metadata.publishedAt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{post.metadata.summary}</p>
                    <Link
                      href={`/blog/${post.metadata.category}/${post.slug}`}
                      key={Math.random()}
                    >
                      <Button variant="link" className="p-0 h-auto mt-2">
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
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
        </motion.section>
      </main>
    </div>
  );
}
