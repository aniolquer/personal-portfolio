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
        With over 12 years of diving deep into the world of products and growth,
        my passion lies in crafting solutions that truly make a difference. To
        me, this journey it's about bringing ideas to life that positively
        affect both users and businesses. My expertise is a mix of creativity,
        strategy, and the drive to see projects from a spark of inspiration to
        real-world impact. I'm all about connecting dots in new ways, leading
        teams to explore uncharted territories, and nurturing ideas that
        resonate with people's needs and aspirations.
      </p>

      <p>
        My background has equipped me with the tools to understand the technical
        side of product creation and the side of how to grow a product in
        competitive markets. This unique blend allows me to work closely with
        diverse teams, guiding them towards a common vision. I thrive on
        challenge and innovation, always eager to learn and adapt. My goal is to
        continue making meaningful contributions to the tech world, creating
        products that don't just exist but truly matter.
      </p>
    </motion.section>
  );
}
