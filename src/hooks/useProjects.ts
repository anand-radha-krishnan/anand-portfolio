import { useQuery } from "@tanstack/react-query";

import { Project } from "@/types/projects";

const fetchProjects = async (): Promise<Project[]> => {
  const resp = await fetch(`/api/projects`);
  return await resp.json();
};

const useProjects = () => {
  const query = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 1 * 1000 * 60 * 24,
  });

  const filterProjects = (filterType: string) => {
    return query.data?.filter(
      (project: Project) => project.project_type === filterType
    );
  };

  return {
    query,
    clientProjects: filterProjects("client") || [],
    personalProjects: filterProjects("personal") || [],
  };
};

export default useProjects;
