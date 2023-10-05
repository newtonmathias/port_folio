import Image from "next/image";
import profileImage from "../../public/images/pic.png";
import { Button } from "../ui/button";
import AnimatedText from "./animated-text";
import Link from "next/link";
const Landing = () => {
  return (
    <div className="container py-12 md:py-24">
      <header
        className="flex flex-col justify-center items-center text-center"
        role="heading"
        aria-label="Craft. Enhance. Perfect."
      >
        <h5 className="flex mb-12 items-center gap-2 border border-border py-1 px-3 text-sm font-lato rounded-full w-48">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <span className="font-bold">Currently available</span>
        </h5>
        <AnimatedText />
      </header>
      <div className="flex lg:w-1/2 mx-auto text-center">
        <p className="font-lato text-xl text-dark-gray dark:text-light-gray py-8">
          I am a software engineer with a background in full-stack development
          and security engineering. I have a passion for building high-quality,
          scalable systems that are both secure and user-friendly.
        </p>
      </div>
      <div className="flex flex-col  md:flex-row  justify-center items-center py-10 gap-5">
        <Link
          href="https://calendly.com/newtonmathias/30min"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button className="w-full md:w-44 text-base">Book a Call</Button>
        </Link>
        <Button className="w-full  md:w-44 text-base" variant="outline">
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default Landing;
