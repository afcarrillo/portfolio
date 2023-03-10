import ProjectItem from "./ProjectItem";
import ProjectActual from "./ProjectActual";

import { actualProject, projects } from "../../utils/projects";

export default function Projects() {
  return (
    <section className="projects-section bg-light" id="projects">
      <div className="container px-4 px-lg-5">
        <ProjectActual project={actualProject} />
        {projects
          ? projects.map((project, index) => (
              <ProjectItem key={index} project={project} i={index} />
            ))
          : ""}
      </div>
    </section>
  );
}
