import { About } from "@/app/(home)/_components/about";
import Contact from "@/app/(home)/_components/contact";
import Footer from "@/app/(home)/_components/footer";
import Landing from "@/app/(home)/_components/home";
import SiteHeader from "@/app/(home)/_components/layout/header";
import Projects from "@/app/(home)/_components/projects";
import Services from "@/app/(home)/_components/services";
import Testimonials from "@/app/(home)/_components/testimonials";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Landing />
      <Separator />
      <About />
      <Separator />
      <Services />
      <Separator />
      <Projects />
      <Separator />
      <Testimonials />
      <Separator />
      <Contact />
      <Footer />
    </>
  );
}
