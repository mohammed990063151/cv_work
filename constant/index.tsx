import {
  ClientsSayType,
  NavLink,
  aboutDataType,
  workSlidesTypes,
} from "@/comon.types";
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiBadgeCheck,
  HiAdjustments,
  HiChatAlt2,
} from "react-icons/hi";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import {
  DiMysql,
  DiLaravel,
  DiNodejsSmall,
  DiNginx,
  DiMongodb,
  DiRedis,
} from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  FaCss3,
  FaFacebookMessenger,
  FaFacebookSquare,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaMailBulk,
  FaReact,
  FaVuejs,
  FaWhatsapp,
  FaWordpress,
} from "react-icons/fa";
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from "react-icons/rx";

export const intorDec = `
My name is Mohammed Mustafa. I am a proficient web developer with more than 3 years of experience. I have expertise in building modern web designs, creating web-based systems, programming interfaces for applications, and developing responsive web pages.
`;

export const SkillIntorDesc = `
I have expertise in development including routing, authentication, sending notifications, sessions, caching, building RESTful API interfaces, GraphQL, WebSocket, and web app development through Laravel framework. Skilled in HTML/CSS, JavaScript, Vue.js, React.js, Next.js, MySQL, Redis, MongoDB. Capable of building responsive web and app designs to enhance user experience.
`;

export const links: NavLink[] = [
  { name: "home", path: "/", icon: HiHome },
  { name: "about", path: "/about", icon: HiUser },
  { name: "services", path: "/services", icon: HiBriefcase },
  { name: "work", path: "/work", icon: HiAdjustments },
  { name: "testimonials", path: "/testimonials", icon: HiBadgeCheck },
  { name: "contact", path: "/contact", icon: HiChatAlt2 },
];

export const SocilaLinks: NavLink[] = [
  { path: "https://github.com/mohammed990063151", name: "GitHub", icon: FaGithub },
  { path: "mailto:mohammed.du.0063151@gmail.com", name: "Email", icon: FaMailBulk },
  { path: "https://www.linkedin.com/in/mohammed-mustafa-26a68b343", name: "LinkedIn", icon: FaLinkedin },
  { path: "https://www.facebook.com/mohammed.mustafa.971156", name: "Facebook", icon: FaFacebookSquare },
  { path: "https://api.whatsapp.com/send/?phone=%2B966501427123", name: "WhatsApp", icon: FaWhatsapp },
];

export const aboutData: aboutDataType[] = [
  {
    title: "skills",
    info: [
      {
        title: "Front-End Development",
        icons: [FaHtml5, FaCss3, FaJs, FaReact, FaVuejs, SiNextdotjs, SiFramer, BsFillBootstrapFill],
      },
      {
        title: "Back-End Development",
        icons: [DiMysql, DiLaravel, DiNodejsSmall, DiNginx, DiMongodb, DiRedis],
      },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "Laravel Trainer - MSC Company", stage: "2021/10/1 - 2022/1/1" },
      { title: "Laravel Developer - MSC Company", stage: "2022/1/1 - 2024/1/1" },
      { title: "Freelancer", stage: "2024 - Present" },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Information Systems Bachelor's degree, honors | Software Engineering - Al-Neelain University",
        stage: "2022",
      },
    ],
  },
];

export const ServiceIntor = `By utilizing my skills effectively, I provide smart solutions that help achieve client satisfaction through developed software.`;

import { FiActivity, FiAirplay, FiAlertTriangle } from "react-icons/fi";
export const serviceData = [
  { icon: FiActivity, title: "Building", description: "Understand client requirements and start achieving project goals." },
  { icon: FiAlertTriangle, title: "Testing", description: "Write unit and feature tests to ensure project quality." },
  { icon: FiAirplay, title: "Deploying", description: "Assist clients in deploying project files to servers." },
];

export const WorkIntro = `I have worked on multiple projects using technologies like Vue.js, React.js, Next.js, Laravel/Livewire, MERN stack, and more, developing both static and dynamic websites.`;

export const workSlides: workSlidesTypes = {
  slides: [
    {
      images: [
        { title: "Front End Mentor", path: "/projects/huddel.png", url: "https://jksa-frontendmintor.netlify.app/" },
        { title: "Tkween Clone", path: "/projects/tkween.png", url: "https://tkween-clone.netlify.app" },
        { title: "9th Company", path: "/projects/solution.png", url: "http://solution.pharmaly.themsc.net" },
        { title: "Hock Bank", path: "/projects/modren.png", url: "https://jksa-moden-ui.onrender.com" },
      ],
    },
    {
      images: [
        { title: "AI Prompts", path: "/projects/prompts.png", url: "https://next-js-ai-powered-prompts.vercel.app" },
        { title: "Project 1", path: "/thumb1.jpg", url: "https://next-js-ai-powered-prompts.vercel.app" },
        { title: "Project 2", path: "/thumb2.jpg", url: "https://next-js-ai-powered-prompts.vercel.app" },
        { title: "Project 3", path: "/thumb3.jpg", url: "https://next-js-ai-powered-prompts.vercel.app" },
      ],
    },
  ],
};

export const testimonialData = [
  { image: "/t-avt-1.png", name: "Profaster", position: "Full-Stack Web Developer", message: "Designed, developed, and maintained server-side logic for web and mobile applications, built and managed RESTful APIs, optimized database performance, and ensured data security." },
  { image: "/t-avt-2.png", name: "FREELANCE", position: "Laravel / PHP Backend Developer", message: "Delivered custom web solutions using Laravel, Vue.js, and PHP, created RESTful APIs, integrated payment gateways, and successfully delivered 15+ projects across multiple industries." },
  { image: "/t-avt-3.png", name: "MSC (Multi Software Company)", position: "Web Developer", message: "Developed e-commerce platforms, recruitment systems, and integrated accounting solutions, improved performance by 35%, and delivered 10+ fast, SEO-optimized websites." },
];

export const Clients: ClientsSayType[] = [
  { person: "Profaster", image: "/thumb1.jpg", position: "Full-Stack Web Dev", content: "Built a comprehensive delivery system, integrated payment services and external APIs, and collaborated with teams to deliver robust and scalable solutions." },
  { person: "Freelance Clients", image: "/thumb2.jpg", position: "Backend Developer", content: "Provided custom web development services using Laravel and Vue.js, managed the full project lifecycle, and ensured cross-browser compatibility, performance, and security." },
  { person: "MSC", image: "/thumb3.jpg", position: "Web Developer", content: "Developed e-commerce, educational, and management platforms, enhanced performance and speed, applied best security practices, and achieved tangible improvements in user engagement and efficiency." },
];
