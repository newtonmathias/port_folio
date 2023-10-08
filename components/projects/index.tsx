import { projects } from "@/config";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <div id="projects" className="py-20">
      <div className="text-center pb-16 space-y-2">
        <h5 className="text-sm leading-6 text-primary-yellow ">RECENT WORK</h5>
        <h2 className="text-4xl font-semibold font-lato">
          Here are a few past projects I&apos;ve worked on
        </h2>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-4 md:mx-8 gap-6 md:gap-7">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.desc}
            image={project.image}
            tech={project.tech}
            link={project.demo}
            viewable={project.viewable}
            online={project.online}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
