import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";
import { ExternalLink } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  id: number;
  tech: string[];
}

const ProjectCard = ({
  title,
  description,
  image,
  id,
  link,
  tech,
}: ProjectCardProps) => {
  return (
    <Link href={link} rel="noopener noreferrer" target="_blank">
      <Card className="bg-primary-gray dark:bg-transparent group cursor-pointer">
        <CardHeader></CardHeader>
        <CardContent className="flex flex-col items-center justify-center rounded-sm">
          <div className="my-14 md:my-20  group-hover:md:my-9 group-hover:shadow-2xl shadow-lg rounded-md overflow-hidden transition-transform duration-300 transform group-hover:-translate-y-2">
            <Image
              src={image}
              width={240}
              height={160}
              alt="/images/dashboard.png"
              loading="lazy"
              className="rounded-md w-full h-auto md:w-300 md:h-200"
            />
          </div>
          <div className="hidden group-hover:flex flex-col gap-2">
            <p className="line-clamp-3 text-dark-gray dark:text-light-gray">
              {description}
            </p>
            <Separator className="mt-1 mb-2.5" />
            <div className="flex items-center justify-between w-full text-dark-gray dark:text-light-gray">
              {tech.map((item) => (
                <p className=" font-lato font-medium leading-none">{item}</p>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between md:pt-8 group-hover:md:pt-0">
          <p className="font-lato  text-sm">{title}</p>
          <Link href={link} rel="noopener noreferrer" target="_blank">
            <ExternalLink className="h-4 w-4 cursor-pointer" />
          </Link>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
