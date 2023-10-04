import { socials } from "@/config";
import { Github } from "lucide-react";
import Link from "next/link";
import Socials from "../socials";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <div>
      <Separator className="my-6" />
      <div className="container flex flex-col md:flex-row justify-between items-center mb-6">
        <p className="text-sm  py-2">© 2023 Newton Mathias</p>
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
