"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
     <p className="mb-3">
  I am currently pursuing my degree in{" "}
  <span className="font-medium">Computer Science</span> and actively building
  real-world projects in{" "}
  <span className="font-medium">full-stack web development</span>.{" "}
  <span className="italic">My favorite part of programming</span> is solving
  complex problems and turning ideas into functional systems. I{" "}
  <span className="underline">enjoy</span> building scalable and efficient
  applications.

  My core stack includes{" "}
  <span className="font-medium">
    React, Next.js, Node.js, and MongoDB
  </span>
  , and I also have experience with TypeScript, Prisma, and cloud deployment
  (AWS/Vercel). I am always eager to learn new technologies and improve my
  skills. I am currently looking for opportunities to grow as a{" "}
  <span className="font-medium">software developer</span>.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy playing video
  games, exploring new tech, and working on side projects. I also like{" "}
  <span className="font-medium">learning new concepts</span> and improving my
  problem-solving skills. Currently, I’m exploring{" "}
  <span className="font-medium">system design and cloud technologies</span>.
</p>
    </motion.section>
  );
}
