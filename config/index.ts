import { Icons } from "../components/icons";

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

export const info = [
  {
    name: "Newton Maithya",
    location: "Nairobi, Kenya",
    email: "newtymathias@gmail.com",
    website: "https://newtonmathias.com",
    bio: "Hey there! I&apos;m Newton, a passionate software engineer specializing in full-stack development and offensive security, based in Nairobi. My journey into engineering began during my BSc in Electronic and Computer Engineering. Over the years, my interest in creating things on the internet has evolved, and I&apos;ve honed my skills through freelancing, working with clients on Upwork , as well as local businesses. With a solid foundation in cybersecurity, honed through hands-on experiences in bug bounty programs like HackerOne, I seamlessly integrate security into my web development expertise. Possessing a knack for uncovering vulnerabilities, I prioritize fortifying my work against potential threats.",
    work_experience: [
      {
        position: "Full Stack Developer",
        company: "Pitchlink",
        location: "Germany",
        dates: "November 2023 - Present",
        highlights: [
          "Developed and maintained a comprehensive web platform for Pitchlink, facilitating seamless communication between investors and startups.",
          "Utilized  Next.js, TypeScript, and Postgresql to build scalable and responsive web applications.",
          "Designed and implemented RESTful APIs to handle data exchange between the front-end and back-end systems, ensuring smooth functionality and performance.",
          "Integrated third-party services and APIs for additional functionality, such as payment gateways and analytics tools.",
          "Collaborated with a multidisciplinary team of designers, developers, and stakeholders to deliver features according to specifications and deadlines.",
          "Participated in code reviews, debugging sessions, and performance optimization efforts to maintain code quality and improve system efficiency.",
          "Engaged in continuous learning and exploration of new technologies to enhance product capabilities and stay updated with industry trends.",
        ],
      },
      {
        position: "Software Engineer",
        company: "Vidusubsidies",
        location: "Denmark",
        dates: "July 2023 - August 2023",
        highlights: [
          "Spearheaded the development of an internal web application for Vindsubsidies, employing cutting-edge technologies such as Next.js| React.js, Node.js (NestJS), and PostgreSQL.",
          "Implemented a secure Single Sign-On (SSO) mechanism utilizing Azure Active Directory for user authentication, guaranteeing user privacy and data security.",
          "Designed and established a role-based access control system, differentiating between admin, client, and consultant roles, with the ability for admins to manage users efficiently.",
          "Engineered a document generation system, incorporating Generative AI API, OpenAI's GPT, offering customizable and user-friendly document templates.",
          "Managed the end-to-end development process, including front-end and back-end code, database schema design, API documentation, unit testing, and deployments.",
          "Collaborated within an agile development team consisting of a project manager, front-end developer, and back-end developer, maintaining a strong focus on scalability, reliability, and security.",
        ],
      },
      {
        position: "Junior Software Engineer",
        company: "ZipsMarket",
        location: "Miami, FL",
        dates: "March 2023 - June 2023",
        highlights: [
          "Built 12 customizable website themes, empowering clients to personalize their online presence.",
          "Created a dynamic deployment system, connecting client sites to a user-friendly panel for customization.",
          "Provided clients with comprehensive control over their websites, including content, images, blog management, section visibility, and style customization (fonts, colors).",
          "Implemented advanced features, enabling clients to integrate add-ons like Calendly, maps, and SEO optimization.",
          "Leveraged JavaScript to manipulate the Document Object Model (DOM), seamlessly injecting client-specific information retrieved through an API.",
          "Utilized a technology stack comprising HTML, JavaScript, React.js, Tailwind CSS, and Node.js to craft responsive and visually appealing themes.",
          "Collaborated within an Agile development environment, participating in regular sprints and ensuring agile methodologies were followed.",
        ],
      },
    ],
    projects: [
      {
        name: "Final Year Project: E-Health Care System",
        dates: "June 2022 - October 2022",
        description:
          "Created an E-Health Care System connecting users with doctors through real-time communication through text, call, or video, potentially preventing pre-hospital fatalities and overcrowding by offering remote access.",
      },
    ],
    education: {
      degree: "Bachelor of Science in Electronic and Computer Engineering",
      university: "Jomo Kenya University of Agriculture and Technology",
      location: "Juja, Kenya",
      year: "2023",
    },
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "HTML/CSS",
      "Tailwind",
      "API development and Integration",
      "Git",
      "Docker",
      "MongoDB",
      "SQL",
      "Agile Methodologies",
      "Linux",
      "Penetration Testing",
      "Unit Testing",
    ],
  },
];

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

const otherSocials = [
  {
    title: "Calendly",
    decription: "Schedule a video call via my calendly",
    href: "https://calendly.com/newtonmathias/30min",
  },
  {
    title: "Upwork",
    decription: "You can message me or send a job invite on upwork",
    href: "https://www.upwork.com/freelancers/newtonmathias",
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
