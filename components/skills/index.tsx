import { skills } from "@/config";
import React from "react";
import SkillsCard from "./skills-card";

const SkillsSection = () => {
  return (
    <div className="bg-primary-gray text-center py-20">
      <div className=" space-y-3">
        <h3 className="uppercase text-base font-medium tracking-tight font-lato text-gray-400">
          Supporting people
        </h3>
        <h2 className="font-bold font-lustria text-2xl">
          Positive difference in the world
        </h2>
        <h3 className="font-bold font-lustria pb-4">
          Utilizing exceptional software
        </h3>
      </div>
      <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <SkillsCard
            key={skill.id}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
