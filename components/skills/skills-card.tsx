import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "../ui/separator";
import { Server } from "lucide-react";

interface SkillsCardProps {
  title: string;
  description: string;
}
const SkillsCard = ({ title, description }: SkillsCardProps) => {
  return (
    <Card>
      <CardHeader className="bg-primary-black flex flex-col items-center justify-center">
        <CardTitle>
          <Server className="h-10 w-10 text-primary-yellow" />
        </CardTitle>
        <CardDescription className="text-white text-2xl font-lustria leading-5 tracking-wide">
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-lato">{description}t</p>
      </CardContent>
      <CardFooter>
        <Separator className="bg-primary-yellow" />
      </CardFooter>
    </Card>
  );
};

export default SkillsCard;
