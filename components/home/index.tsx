import { Button } from "../ui/button";
import AnimatedText from "./animated-text";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 pb-10 md:pb-16">
          <span className="font-medium text-lg text-dark-gray dark:text-light-gray">
            Are You Looking For A Freelance Developer? Look no further.
          </span>
          <Link href="#contact">
            <button className="flex items-center justify-center gap-1 border border-border py-1  px-3 text-sm font-semibold font-lato rounded-full bg-black text-white hover:bg-accent">
              <p>Hire me to today</p>
              <MoveRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
        <AnimatedText />
      </div>
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
        <Link href="#contact">
          <Button className="w-full  md:w-44 text-base" variant="outline">
            Contact Me
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
