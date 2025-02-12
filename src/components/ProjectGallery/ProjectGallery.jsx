import "./ProjectGallery.scss";
import projects from "../../data/project-data.json";
import ProjectThumbnail from "../ProjectThumbnail/ProjectThumbnail";

export default function ProjectGallery({ page }) {
  return (
    <div
      className={`projects__gallery ${
        page === "/" ? "projects__gallery--mini" : ""
      }`}
    >
      {projects.map((project) => {
        return (
          <ProjectThumbnail
            key={project.id}
            name={project.name}
            thumb={project.thumb}
            altText={project.alt}
            brief={project.about}
            tech={project.tech}
            type={project.category}
            date={project.date}
            client={project.client}
            team={project.team}
            link={project.link}
          />
        );
      })}
    </div>
  );
}
