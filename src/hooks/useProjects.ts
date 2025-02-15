import { useQuery } from "@tanstack/react-query";

const fetchProjects = async () => {
  const resp = await fetch(`/api/projects`);
  return await resp.json();
};

const useProjects = () => {
  const query = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const filterProjects = (filterType: string) => {
    return query.data?.projects.filter(
      (project: any) => project.project_type === filterType
    );
  };

  return {
    query,
    clientProjects: filterProjects("client"),
    personalProjects: filterProjects("personal"),
  };
};

export default useProjects;
