import { socials } from "@/config";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="hidden md:flex justify-center md:justify-start gap-7">
      {socials.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          target={link?.external ? "_blank" : undefined}
          rel={link?.external ? "noreferrer" : undefined}
          className="text-sm transition-colors hover:text-primary-yellow"
        >
          <link.Icon />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
