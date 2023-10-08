import { technologies } from "@/config";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <div id="about" className="container xl:w-2/3 py-20">
      <div className="text-center pb-6 space-y-2">
        <h5 className="text-sm leading-6 tracking-widest text-primary-yellow uppercase font-bold font-lustria">
          About Me
        </h5>
        <h2 className="text-4xl font-semibold font-lato">
          Fusion of Code and Creativity
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 flex items-center md:items-start justify-center">
          <Image
            alt="profile.png"
            src="/images/profile.png"
            width={400}
            height={500}
          />
        </div>
        <div className="md:w-2/3 space-y-5 text-lg text-dark-gray dark:text-light-gray">
          <p>
            Hey there! I&apos;m Newton, a passionate software engineer
            specializing in full-stack development and offensive security, based
            in Nairobi. My journey into engineering began during my BSc in
            Electronic and Computer Engineering. Over the years, my interest in
            creating things on the internet has evolved, and I&apos;ve honed my
            skills through freelancing, working with clients on{" "}
            <Link
              href="https://www.upwork.com/freelancers/newtonm3"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-[#73bb44] hover:cursor-pointer font-lato hover:underline font-medium">
                Upwork
              </span>
            </Link>
            , as well as local businesses.
          </p>
          <p>
            With a solid foundation in cybersecurity, honed through hands-on
            experiences in bug bounty programs like HackerOne, I seamlessly
            integrate security into my web development expertise. Possessing a
            knack for uncovering vulnerabilities, I prioritize fortifying my
            work against potential threats.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2">
            {technologies.map((tech) => (
              <li key={tech.id}>{tech.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
