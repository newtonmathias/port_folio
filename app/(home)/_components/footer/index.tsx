import Socials from "../../../../components/socials";
import { Separator } from "../../../../components/ui/separator";

const Footer = () => {
  return (
    <div>
      <Separator className="my-6" />
      <div className="container flex flex-col md:flex-row justify-between items-center mb-6">
        <p className="text-sm  py-2">© 2024 Newton Mathias</p>
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
