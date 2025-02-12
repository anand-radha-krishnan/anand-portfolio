"use client";
import ProjectCards from "@/components/ProjectCards";
import { useEffect, useState, useTransition } from "react";

export default function Projects() {
  const [isPending, startTransition] = useTransition();
  const [projects, serProjects] = useState({
    clientProjects: [],
    personalProjects: [],
  });

  const fetchData = async (projectType: string) => {
    const resp = await fetch(`/api/projects/${projectType}`);
    const data = await resp.json();
    return data;
  };

  useEffect(() => {
    startTransition(async () => {
      const clientProjects = await fetchData("client");
      const personalProjects = await fetchData("personal");
      serProjects({
        clientProjects: clientProjects.projects,
        personalProjects: personalProjects.projects,
      });
    });
  }, []);

  return (
    <div className="m-4 md:m-0 md:mb-12">
      {isPending ? (
        <h1 className="font-bold text-3xl text-center mt-12 mb-4">
          Loading...
        </h1>
      ) : (
        <>
          <h1 className="font-bold text-3xl text-center mt-12 mb-4">
            Client Projects
          </h1>
          <ProjectCards projects={projects.clientProjects} />
          <h1 className="font-bold text-3xl text-center mt-12 mb-4">
            Personal Projects
          </h1>
          <ProjectCards projects={projects.personalProjects} />
        </>
      )}
    </div>
  );
}
