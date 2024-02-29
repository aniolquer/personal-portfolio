// #region Imports
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import growlia from "@/public/growlia.png";
import wheelOfLife from "@/public/wheel-of-life.png";
import teambuildingPicture from "@/public/ai-teambuilding-marketplace.png";
import { AiOutlineMobile } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { BiRuler } from "react-icons/bi";
import { RiSuitcaseLine, RiComputerLine } from "react-icons/ri";
import walipa from "@/public/walipa.png";

// #endregion

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Growlia",
    description:
      "Saas-enabled Marketplace for coaching services. I was in charge of product. The platform featured video calls, chat, and scheduling.",
    tags: ["React", "TypeScript", "Firebase", "Tailwind", "Timekit", "ZoomSDK"],
    imageUrl: growlia,
  },
  {
    title: "Code Racer",
    description:
      "Plaforms focused on coders featuring the option to compete in real-time agains each other. Using websockets and analytics.",
    tags: ["React", "Next.js", "Tailwind", "Monaco Editor ", "MongoDB"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Lunch Roulette",
    description:
      "App to help users connect and get to know each other better. It uses a random algorithm to match people.",
    tags: ["React", "TypeScript", "Vite.js", "Tailwind", "PostgreSQL"],
    imageUrl: rmtdevImg,
  },
  {
    title: "AI Marketplace",
    description:
      "Marketplace offering teambuilding activities powered by and AI chatbot connected to OpenAI",
    tags: ["React", "Next.js", "OpenAI API", "Notion Databases", "Framer"],
    imageUrl: teambuildingPicture,
  },
  {
    title: "Walipa",
    description:
      "The 1st all-in-one loyalty app for the hospitality sector, with the options to create campaigns to increase customer retention.",
    tags: ["React Native", "SQL", "PHP", "Laravel"],
    imageUrl: walipa,
  },
  {
    title: "Wheel of Life",
    description:
      "Track the progress of your life with this app. A simple and effective way to keep track of you feelings and your life goals.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wheelOfLife,
  },
] as const;

export const skillsData = [
  "Agile",
  "Scrum",
  "Artificial Intelligence",
  "User Research",
  "UX Design",
  "A/B Testing",
  "Design Systems",
  "Wireframes Design",
  "CI/CD Pipelines",
  "Roadmapping",
  "User Stories",
  "Design Thinking",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Nest.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Docker",
] as const;

export const experiencesData = [
  {
    title: "Graduated Business",
    location: "UPF (Barcelona) & Boston College (USA)",
    description:
      "Graduated from UPF with a degree in International Business. I also studied at Boston College in the United States.",
    icon: React.createElement(LuGraduationCap),
    date: "2009 - 2013",
  },
  {
    title: "Co-founder & Product Manager",
    location: "Walipa (Barcelona)",
    description:
      "Lead the product initiative at a startup that focused on providing a mobile-first solution for the hospitality industry.",
    icon: React.createElement(AiOutlineMobile),
    date: "2012 - 2014",
  },
  {
    title: "Marketing & Sales Director",
    location: "InboundCycle (Barcelona)",
    description:
      "Lead the growth function of the company. I defined the customer requirements for the product team",
    icon: React.createElement(BsGraphUp),
    date: "2013 - 2015",
  },
  {
    title: "Growth Director",
    location: "Talent Clue (Barcelona)",
    description:
      "Managed a team of sales and customer success professionals. Worked closely with the Product team to improve the product.",
    icon: React.createElement(RiSuitcaseLine),
    date: "2016 - 2018",
  },
  {
    title: "Co-Founder & Head of Product",
    location: "Growlia (Barcelona)",
    description:
      "Speaheded the product function at the 1st B2B coaching provider in Spain while also working with GTM teams to drive growth.",
    icon: React.createElement(BiRuler),
    date: "2018 - 2023",
  },
  {
    title: "Senior Product Manager ",
    location: "Multiple Projects (Freelance)",
    description:
      "Worked with multiple startups and companies to help them build and launch their products. I also advised them on product strategy.",
    icon: React.createElement(RiComputerLine),
    date: "2023 - Now",
  },
] as const;
