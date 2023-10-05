import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}
const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-1 items-center">
          <div className="p-3 rounded-full bg-primary-yellow">
            <Icon />
          </div>
          <h4 className="text-xl h-auto leading-6 font-lato">{title}</h4>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-dark-gray dark:text-light-gray text-sm leading-6">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
