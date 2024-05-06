import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          <span className="p-3 rounded-full bg-primary-yellow">
            <Icon />
          </span>
          <span className="text-xl h-auto leading-6 font-lato">{title}</span>
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
