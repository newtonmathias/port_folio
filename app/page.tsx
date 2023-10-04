import { About } from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Landing from "@/components/home";
import SiteHeader from "@/components/layout/header";
import Projects from "@/components/projects";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Landing />
      <Separator />
      <About />
      <Separator />
      <Projects />
      <Separator />
      <Contact />
      <Footer />
    </>
  );
}