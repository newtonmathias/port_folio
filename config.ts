import { Icons } from "./components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Newton Mathias",
  description: "Freelance Software Engineer",
  url: "https://newtonmathias.com",
  mainNav: [
    {
      title: "About",
      link: "about",
    },
    {
      title: "Services",
      link: "services",
    },
    {
      title: "Projects",
      link: "projects",
    },
    {
      title: "Testimonials",
      link: "testimonials",
    },
    {
      title: "Contact",
      link: "contact",
    },
  ],
};

export const projects = [
  {
    id: 0,
    image: "/images/pitchlink.png",
    title: "Pitchlink",
    desc: "A fundraising hub to share your pitch deck, showcase your product, create data rooms, schedule meetings, and identify the most engaged investors based on their activity",
    tech: ["Nextjs", "AWS", "MySQL", "Stripe", "Shadcn"],
    demo: "https://www.pitchlink.io/",
    viewable: true,
    online: true,
  },
  {
    id: 1,
    image: "/images/wbso.png",
    title: "AI Document Generator",
    desc: "An internal application, powered by OpenAI's GPT API, enables efficient WBSO document generation.It has role-based access control for document management.",
    tech: ["ReactJS", "NodeJS", "OpenAI", "PostgreSQL ", "Tailwind"],
    demo: "/",
    viewable: false,
    online: true,
  },
  {
    id: 2,
    image: "/images/booksquare.png",
    title: "Bookstore",
    desc: "A dynamic e-commerce platform for purchasing books, with diverse user roles for engaging in debates, articles, blogs, and discussion forums.",
    tech: ["Nextjs", "MongoDB", "Sanity", "Stripe", "AWS"],
    demo: "https://www.realdiscoveredmathsci.com/",
    viewable: true,
    online: true,
  },
  {
    id: 3,
    image: "/images/dashboard.png",
    title: "Dashboard",
    desc: "An ecommerce admin dashboard is a web application that provides tools and features for managing and monitoring an online store.",
    tech: ["ReactJS", "NodeJS", "Redux", "MongoDB", "MUI"],
    demo: "https://newton-dashboard.onrender.com/",
    viewable: true,
    online: true,
  },
  {
    id: 4,
    image: "/images/healthcare.png",
    title: "E-healthcare",
    desc: "E-healthcare is a web application that allowsusers to search for doctors, Users can book an appointment and receive medical consultations via video call or chat or book in-person meeting.",
    tech: ["NextJS", "Redux", "MongoDB", "Stripe", "cloudinary"],
    demo: "https://ehealthcare-murex.vercel.app/",
    viewable: true,
    online: true,
  },
  {
    id: 5,
    image: "/images/zips.png",
    title: "Custom Themes",
    desc: "Built 5 customizable website themes for ZipsMarket, empowering clients to personalize their online presence, by connecting client sites to a user-friendly panel for customization",
    tech: ["ReactJS", "Javascript", "Tailwind CSS"],
    demo: "https://ehealthcare-murex.vercel.app/",
    viewable: true,
    online: false,
  },
  {
    id: 6,
    image: "/images/game.png",
    title: "Game landing",
    desc: "This is a video game landing page that serves as an introduction to a specific video game. It typically includes information about the game, such as its release date, developer, and gameplay features. It may also include screenshots or trailers to give visitors a sense of what the game looks and plays like.",
    tech: ["NextJS", "Tailwind CSS", "Framer Motion"],
    demo: "https://realmshowdown.vercel.app/",
    viewable: true,
    online: true,
  },
  {
    id: 7,
    image: "/images/fitress.png",
    title: "Fitness Page",
    desc: "A professional and engaging landing page that effectively communicates the benefits of the fitness product or service and encourages users to take action.",
    tech: ["NextJS", "Typescript", "Tailwind CSS", "Framer Motion"],
    demo: "https://fitress.pages.dev/",
    viewable: true,
    online: true,
  },
  {
    id: 8,
    image: "/images/cyber.png",
    title: "Cyber Security Blog",
    desc: "A static cyber security blog. It is easy to publish content using the embedded studio and has live preview before publishing.",
    tech: ["NextJS", "Typescript", "Sanity", "Tailwind CSS", "Rich Text"],
    demo: "https://cyberblog-rho.vercel.app/",
    viewable: true,
    online: true,
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
    title: "twitter",
    href: "https://twitter.com/newto97",
    external: true,
    Icon: Icons.twitter,
  },
  {
    title: "GitHub",
    href: "https://github.com/newtonmathias",
    external: true,
    Icon: Icons.gitHub,
  },
  {
    title: "Mail",
    href: "mailto:newtymathias@gmail.com",
    external: true,
    Icon: Icons.mail,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/newton-mathias",
    external: true,
    Icon: Icons.linkedin,
  },
];

export const technologies = [
  { id: 1, name: "JavaScript (ES6+)" },
  { id: 2, name: "TypeScript" },
  { id: 3, name: "ReactJS | NextJS" },
  { id: 4, name: "NodeJS" },
  { id: 5, name: "GraphQL" },
  { id: 6, name: "AWS" },
  { id: 7, name: "Express | Nest | Fastify" },
  { id: 8, name: "MongoDB | MySQL | Postgresql" },
];

export const services = [
  {
    id: 1,
    title: "Custom Web Development",
    description:
      "Specializing in end-to-end web application development, focusing on crafting fast, reliable, and highly scalable solutions tailored to meet your business needs. From seamless user interfaces to robust backend systems, bringing visions to life. ",
    Icon: Icons.web,
  },
  {
    id: 2,
    title: "API Development",
    description:
      "Creating tailored APIs to act as the foundation of digital ecosystems. These APIs go beyond simple data exchange, being crafted for reliability and seamless integration, enabling systems to communicate effortlessly and with high efficiency.",
    Icon: Icons.api,
  },
  {
    id: 3,
    title: "UI/UX Design Integration",
    description:
      "Integrating aesthetically pleasing UI/UX designs seamlessly into web applications, resulting in an engaging and intuitive user interface. This approach ensures a user-centric experience with a strong emphasis on style and usability.",
    Icon: Icons.figma,
  },
  {
    id: 4,
    title: "Web Performance Optimization",
    description:
      "Excelling in optimizing web applications for peak performance and unparalleled accessibility. Fine-tuning every aspect of the application to ensure rapid loading times, smooth interactions, and accessibility across all devices.",
    Icon: Icons.speed,
  },
  {
    id: 5,
    title: "3rd Party Integrations",
    description:
      "Expert in seamlessly integrating third-party services into web applications, including Email Integration, Payment Integration, and Analytics Integration, to enhance functionality and optimize user experience.",
    Icon: Icons.third,
  },

  {
    id: 6,
    title: "Maintenance and Support",
    description:
      "Providing ongoing maintenance, updates, and support services to ensure the smooth functioning and fortified security of web applications, giving clients peace of mind  regarding their digital assets and operations.",
    Icon: Icons.maintenance,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Belmin Muslimovic",
    content:
      "Newton is a great developer. He was able to handle the tasks fast and efficiently. Highly recommended!",
    company: "assemblen.io",
  },
  {
    id: 2,
    name: "Andre Van Veen",
    content:
      "Newton did everything we asked and is a very dedicated and hard worker. He'll be a great addition to any team. This job ended due to the business's closure.",
    company: "zipsmarket.com",
  },
  {
    id: 3,
    name: "Maurice Njoka",
    content:
      "Newton transformed our book store's website, making it faster and more user-friendly than ever. The improved design and smooth experience have significantly enhanced our customers' satisfaction.",
    company: "realdiscoveredmathsci.com",
  },
  {
    id: 4,
    name: "Fadi Due",
    content:
      "Good developer to work with, with good react skills, will hire again soon…",
    company: "shopinbus",
  },
];
