import ProjectCards from "@/components/ProjectCards";
import clientProjects from "@/static/client-projects.json";
import personalProjects from "@/static/personal-projects.json";

export default function Projects() {
  return (
    <div className="m-4 md:m-0">
      <h1 className="font-bold text-3xl text-center mt-12 mb-8">
        Client Projects
      </h1>
      <ProjectCards projects={clientProjects} />
      <h1 className="font-bold text-3xl text-center mt-12 mb-8">
        Personal Projects
      </h1>
      <ProjectCards projects={personalProjects} />
    </div>
  );
}
