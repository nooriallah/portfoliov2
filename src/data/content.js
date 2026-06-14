import { Layout, Server, Database, Wrench, Code2, Globe } from "lucide-react";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "../components/icons/BrandIcons.jsx";

export const IMG = {
  logo: "https://nooriallah.netlify.app/img/logo.webp",
  hero: "https://nooriallah.netlify.app/img/me/hero_pic3.webp",
  about: "https://nooriallah.netlify.app/img/me/about_pic.webp",
  cv: "https://nooriallah.netlify.app/cv/Noorullah_Qayoumi_CV.pdf",
  qr: "https://nooriallah.netlify.app/img/qrcode.png",
  t1: "https://nooriallah.netlify.app/img/clients/testimonial-1.jpg",
  t2: "https://nooriallah.netlify.app/img/clients/testimonial-2.jpg",
  t3: "https://nooriallah.netlify.app/img/clients/testimonial-3.jpg",
};

export const NAV = [
  ["Home", "home"],
  ["About", "about"],
  ["Work", "work"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Services", "services"],
  ["Reviews", "reviews"],
  ["Contact", "contact"],
];

export const ROLES = [
  "Web Developer",
  "Programmer",
  "Front-End Engineer",
  "Freelancer",
];

export const about = {
  text: "Creative web developer specializing in front-end and back-end development, familiar with the full development cycle for web application projects and well-versed in numerous languages, frameworks and CMS platforms.",
  facts: [
    ["Degree", "Bachelor in CS"],
    ["Experience", "4+ Years"],
    ["Location", "Kabul, Afghanistan"],
    ["Freelance", "Available"],
    ["Email", "nooriallah18@gmail.com"],
    ["Birthday", "19 March"],
  ],
};

export const skills = [
  {
    group: "Front-End",
    icon: Layout,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "jQuery",
      "Tailwind CSS",
      "Bootstrap 5",
    ],
  },
  {
    group: "Back-End",
    icon: Server,
    items: ["PHP", "Laravel", "Livewire"],
  },
  { group: "Databases", icon: Database, items: ["MySQL"] },
  {
    group: "CMS & Tools",
    icon: Wrench,
    items: ["WordPress", "Webflow", "OJS", "Git"],
  },
  {
    group: "Languages",
    icon: Code2,
    items: ["PHP", "JavaScript", "Java", "Python"],
  },
];

export const services = [
  {
    icon: Layout,
    title: "Front-End Development",
    desc: "Responsive, accessible interfaces built with React and modern CSS.",
  },
  {
    icon: Server,
    title: "Back-End & APIs",
    desc: "Server-side logic and REST APIs with PHP/Laravel and Node.js.",
  },
  {
    icon: Globe,
    title: "WordPress & CMS",
    desc: "Custom themes, plugins and content systems for fast launches.",
  },
  {
    icon: Code2,
    title: "Web Applications",
    desc: "Full single-page apps from concept to deployment.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Well-structured, performant MySQL/PostgreSQL schemas.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Ongoing fixes, optimization and feature work.",
  },
];

export const work = [
  {
    title: "Samangan Journal publishing system",
    tag: "Web App",
    link: "https://samanganjournal.com",
    desc: "Academic / journal management system built around OJS workflows.",
  },
  {
    title: "E-Commerce Site",
    tag: "WordPress",
    desc: "Storefront with cart, payments and an admin dashboard.",
  },
  {
    title: "Corporate Website",
    tag: "WordPress",
    desc: "Custom-themed marketing site with a CMS for the client team.",
  },
  {
    title: "React Dashboard",
    tag: "React.js",
    desc: "Data-driven admin panel with charts and role-based access.",
  },
];

export const reviews = [
  {
    img: IMG.t1,
    name: "S. Basir Rashha",
    role: "Product Designer / Rashha Design",
    text: "A fantastic experience! He delivered a beautifully crafted website that perfectly captured our vision. Highly recommended for expertise and professionalism.",
  },
  {
    img: IMG.t2,
    name: "Omid Amini",
    role: "CEO / Maham Tejarat Arshin",
    text: "Incredibly impressed with his web development skills. He transformed our ideas into a user-friendly and visually stunning website.",
  },
  {
    img: IMG.t3,
    name: "Hussain Rajabi",
    role: "Sales Manager / LBtak",
    text: "His expertise in PHP and React brought our project to life. Prompt communication and exceptional work ethic made the process seamless.",
  },
];

export const experience = [
  {
    year: "2021 — Present",
    title: "Freelance Web Developer",
    place: "Self-employed",
    desc: "Building web apps and sites for clients across WordPress, PHP, Laravel and React.",
  },
  {
    year: "2024 — Present",
    title: "Web Developer",
    place: "Shenaas Marketing Agency, Kabul",
    desc: "Experienced web developer at Shenaas Company, specializing in developing websites.",
  },
  {
    year: "2023 — 2024",
    title: "Web Developer",
    place: "OBRANG & BP, Kabul",
    desc: "Web Developer at Obrang & Brightpoint, adept in crafting innovative digital solutions.",
  },
  {
    year: "2022",
    title: "Surveyor/SCOPE Registration Officer",
    place: "ASOW, Kabul & Bamian",
    desc: "Experienced Scopper (Biometric Officer) adept in advanced identification technology.",
  },
];

export const education = [
  {
    year: "Graduated",
    title: "Bachelor in Computer Science",
    place: "Kabul, Afghanistan",
    desc: "Foundations in software engineering, databases and web technologies.",
  },
  {
    year: "2023 — Present",
    title: "PHP, Laravel & Livewire",
    place: "Online on Laracasts",
    desc: "Proficient in PHP, Laravel and Livewire after completing the Laracasts online course.",
  },
  {
    year: "2023",
    title: "Javascript & Reactjs",
    place: "Online on Scrimba",
    desc: "Skilled in JavaScript and React.js, completed Scrimba's online course.",
  },
  {
    year: "Ongoing",
    title: "Continuous Learning",
    place: "Online (Laracasts, Scrimba, YouTube)",
    desc: "Modern JS frameworks, PHP frameworks, DevOps and cloud deployment.",
  },
];

export const socials = [
  { icon: Github, url: "https://github.com/nooriallah/" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/eng-nooriallah/" },
  { icon: Facebook, url: "https://www.facebook.com/Eng.Nooriallah" },
  { icon: Instagram, url: "https://www.instagram.com/eng.nooriallah/" },
];
