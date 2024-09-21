"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "@/lib/assets/santhosh.jpg";

export default function HomeHeroSection() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-background pb-7">
      <div className="">
        <div className="flex flex-col ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              alt="Santhosh Bhoopal"
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover border-8 border-secondary mb-7"
              height="300"
              src={heroImage}
              width="300"
            />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-2" variants={itemVariants}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Santhosh Bhoopal{" "}
                <motion.span
                  className="absolute text-10xl "
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration: 2,
                    ease: "linear",
                  }}
                >
                  👋
                </motion.span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Full Stack Developer
              </p>
            </motion.div>
            <motion.p
              className="max-w-[600px] text-muted-foreground md:text-xl"
              variants={itemVariants}
            >
              I solve problems and build solutions. My main stack is Next.js,
              React, TypeScript, Prisma and Postgres
            </motion.p>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg">View My Work</Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline">
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
