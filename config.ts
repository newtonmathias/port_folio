import { Icons } from "./components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Booksquare",
  description: "Discover a world of books and knowledge.",
  url: "https://skateshop.sadmn.com",
  ogImage: "https://skateshop.sadmn.com/opengraph-image.png",
  mainNav: [
    {
      title: "About",
      link: "/",
    },
    {
      title: "Skills",
      link: "/skills",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ],
};

export const projects = [
  {
    id: 1,
    image: "/images/dashboard.png",
    title: "Dashboard",
    desc: "An ecommerce admin dashboard is a web application that provides tools and features for managing and monitoring an online store. It allows store owners and administrators to view and analyze sales data with graphs and charts, manage product listings, process orders and shipments, and track customer information. ",
    tech: ["ReactJS", "NodeJS", "Redux", "MongoDB", "MUI"],
    demo: "https://newton-dashboard.onrender.com/",
  },
  {
    id: 2,
    image: "/images/healthcare.png",
    title: "E-healthcare",
    desc: "E-healthcare is a web application that allowsusers to search for doctors based on their location, specialty, and availability. Users can book an appointment and receive medical consultations via video call or chat or book in-person meeting.The platform also provides features such as electronic medical records, prescription management, and secure communication between doctors and patients.",
    tech: ["NextJS", "Redux", "MongoDB", "Stripe", "cloudinary"],
    demo: "https://ehealthcare-murex.vercel.app/",
  },
  {
    id: 3,
    image: "/images/booksquare.png",
    title: "Game landing",
    desc: "This is a video game landing page that serves as an introduction to a specific video game. It typically includes information about the game, such as its release date, developer, and gameplay features. It may also include screenshots or trailers to give visitors a sense of what the game looks and plays like.",
    tech: ["NextJS", "Tailwind CSS", "Framer Motion"],
    demo: "https://realmshowdown.vercel.app/",
  },
  {
    id: 4,
    image: "/images/booksquare.png",
    title: "Game landing",
    desc: "This is a video game landing page that serves as an introduction to a specific video game. It typically includes information about the game, such as its release date, developer, and gameplay features. It may also include screenshots or trailers to give visitors a sense of what the game looks and plays like.",
    tech: ["NextJS", "Tailwind CSS", "Framer Motion"],
    demo: "https://realmshowdown.vercel.app/",
  },
  {
    id: 5,
    image: "/images/booksquare.png",
    title: "Game landing",
    desc: "This is a video game landing page that serves as an introduction to a specific video game. It typically includes information about the game, such as its release date, developer, and gameplay features. It may also include screenshots or trailers to give visitors a sense of what the game looks and plays like.",
    tech: ["NextJS", "Tailwind CSS", "Framer Motion"],
    demo: "https://realmshowdown.vercel.app/",
  },
  {
    id: 6,
    image: "/images/booksquare.png",
    title: "Game landing",
    desc: "This is a video game landing page that serves as an introduction to a specific video game. It typically includes information about the game, such as its release date, developer, and gameplay features. It may also include screenshots or trailers to give visitors a sense of what the game looks and plays like.",
    tech: ["NextJS", "Tailwind CSS", "Framer Motion"],
    demo: "https://realmshowdown.vercel.app/",
  },
];

export const skills = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "I have experience using modern frontend technologies such JavaScript ReactJS, NextJS, and Redux. I also have a strong understanding of CSS and am proficient in using design libraries like Tailwind and Material-UI to create visually appealing and user-friendly web applications.",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "I have experience using modern frontend technologies such JavaScript ReactJS, NextJS, and Redux. I also have a strong understanding of CSS and am proficient in using design libraries like Tailwind and Material-UI to create visually appealing and user-friendly web applications.",
  },
  {
    id: 3,
    title: "Penetration Testing",
    description:
      "I am a skilled penetration tester with experience in identifying and exploiting vulnerabilities in applications and networks. I have a strong understanding of security best practices and enjoy helping organizations improve their defenses against cyber threats.",
  },
];

export const socials = [
  {
    title: "Twitter",
    href: "links.twitter",
    external: true,
    Icon: Icons.twitter,
  },
  {
    title: "GitHub",
    href: "links.githubAccount",
    external: true,
    Icon: Icons.gitHub,
  },
  {
    title: "Mail",
    href: "links.discord",
    external: true,
    Icon: Icons.mail,
  },
  {
    title: "Linkedin",
    href: "links.calDotCom",
    external: true,
    Icon: Icons.linkedin,
  },
];

export const technologies = [
  { id: 1, name: "JavaScript (ES6+)" },
  { id: 2, name: "TypeScript" },
  { id: 3, name: "ReactJS | NextJS" },
  { id: 4, name: "NodeJS" },
  { id: 5, name: "Vercel" },
  { id: 6, name: "AWS" },
  { id: 7, name: "TailwindCSS" },
];
