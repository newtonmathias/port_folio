import { services } from "@/config";
import React from "react";
import ServiceCard from "./service-card";

const Services = () => {
  return (
    <div id="services" className="container xl:w-4/5 py-20">
      <div className="text-center pb-6 space-y-2">
        <h5 className="text-sm leading-6 tracking-widest text-primary-yellow uppercase font-bold font-lustria">
          Services
        </h5>
        <h2 className="text-4xl py-3 font-semibold font-lato">
          Tailored Solutions for Your Unique Needs
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            Icon={service.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
