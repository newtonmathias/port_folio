import { technologies } from "@/config";
import Image from "next/image";

export const About = () => {
  return (
    <div className="container md:w-2/3 py-20">
      <div className="text-center pb-6 space-y-2">
        <h5 className="text-sm leading-6 tracking-widest text-primary-yellow uppercase font-bold font-lustria">
          About Me
        </h5>
        <h2 className="text-4xl font-semibold font-lato">
          Fusion of Code and Creativity
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 space-y-5 text-lg text-dark-gray dark:text-light-gray">
          <p>
            Hey there! I'm Newton, a passionate web developer based in Nairobi.
            I'm all about crafting awesome digital experiences, and my journey
            into the web development realm began in 2012 with tinkering custom
            Tumblr themes — those tweaks taught me a lot about HTML & CSS!
          </p>
          <p>
            Since then, I've had the pleasure of working across various
            landscapes, from advertising agencies and startups to big
            corporations and student-led design studios. These days, my main
            focus revolves around creating accessible, inclusive products and
            digital experiences, especially as a freelance full stack web
            developer on Upwork.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid grid-cols-2">
            {technologies.map((tech) => (
              <li key={tech.id}>{tech.name}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/3 flex items-center md:items-start justify-center">
          <Image
            alt="profile.png"
            src="/images/profile.png"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};
