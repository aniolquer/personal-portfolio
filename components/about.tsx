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
      className="text-clip mb-28  text-center leading-8 sm:mb-40 scroll-mt-28 max-w-[45rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Embarking on a 12-year journey in product and growth, I've melded a deep
        passion for product excellence with a knack for driving revenue and
        leading teams. Starting with a strong foundation in International
        Business Economics, I've honed my skills in software engineering and
        coaching, crafting a unique approach to product management.
      </p>

      <p>
        My expertise spans from strategic growth to hands-on programming,
        bridging technical and business worlds. I thrive on challenges,
        leveraging a broad skill set in technologies like HTML, CSS, and
        JavaScript, to React and Node.js. This blend of leadership, tech savvy,
        and growth strategies is what I bring to the table.
      </p>

      <p>
        Outside work, I'm committed to personal development, exploring new tech,
        and engaging in cultural pursuits. As I look forward to contributing to
        the tech industry, I'm eager to leverage my unique blend of skills and
        experiences for impactful projects.
      </p>
    </motion.section>
  );
}
