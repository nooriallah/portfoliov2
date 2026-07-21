import { Layout, Server, Database, Wrench, Code2, Globe } from "lucide-react";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "../components/icons/BrandIcons.jsx";

// Images, links, icons and tech names — everything that is NOT translated.
// Translated text (titles, descriptions, labels) lives in components/i18n/translations.js

export const IMG = {
  logo: "https://nooriallah.netlify.app/img/logo.webp",
  hero: "https://nooriallah.netlify.app/img/me/hero_pic3.webp",
  about: "https://nooriallah.netlify.app/img/me/about_pic.webp",
  // Impor cv from src/data/cv/ to here, so it can be downloaded from the hero section.
  cv: "src/data/cv/Noorullah_Qayoumi_CV.pdf",
  qr: "https://nooriallah.netlify.app/img/qrcode.png",
  t1: "https://nooriallah.netlify.app/img/clients/testimonial-1.jpg",
  t2: "https://nooriallah.netlify.app/img/clients/testimonial-2.jpg",
  t3: "https://nooriallah.netlify.app/img/clients/testimonial-3.jpg",
};

// Section ids stay in English (used as element IDs + scroll targets).
export const NAV_IDS = [
  "home",
  "about",
  "work",
  "experience",
  "skills",
  "services",
  "reviews",
  "contact",
];

// Icons + tech names are language-neutral. Group labels come from translations (keyed by id).
export const skillsMeta = [
  {
    id: "frontend",
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
  { id: "backend", icon: Server, items: ["PHP", "Laravel", "Livewire"] },
  { id: "databases", icon: Database, items: ["MySQL", "SQLlite"] },
  {
    id: "tools",
    icon: Wrench,
    items: ["WordPress", "Webflow", "OJS", "Git", "STRAPI"],
  },
  {
    id: "languages",
    icon: Code2,
    items: ["PHP", "JavaScript", "Java", "Python"],
  },
];

// Service icons; title + desc come from translations (keyed by id).
export const servicesMeta = [
  { id: "frontend", icon: Layout },
  { id: "backend", icon: Server },
  { id: "cms", icon: Globe },
  { id: "apps", icon: Code2 },
  { id: "db", icon: Database },
  { id: "support", icon: Wrench },
];

// Project tag + optional link are language-neutral; title + desc come from translations (by index).
export const workMeta = [
  { tag: "Web App", link: "https://samanganjournal.com" },
  { tag: "WordPress" },
  { tag: "WordPress" },
  { tag: "React.js" },
];

// Reviewer photo + name are shared; role + text come from translations (by index).
export const reviewMeta = [
  { img: IMG.t1, name: "S. Basir Rashha" },
  { img: IMG.t2, name: "Omid Amini" },
  { img: IMG.t3, name: "Hussain Rajabi" },
];

export const socials = [
  { icon: Github, url: "https://github.com/nooriallah/" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/eng-nooriallah/" },
  { icon: Facebook, url: "https://www.facebook.com/eng.noorullah0" },
  { icon: Instagram, url: "https://www.instagram.com/eng.noorullah_/" },
];
