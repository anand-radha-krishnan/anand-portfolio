import { useQuery } from "@tanstack/react-query";

import { Experience } from "@/types/experience";

const fetchExperience = async (): Promise<Experience[]> => {
  const resp = await fetch("/api/experience");
  return await resp.json();
};

const useExperience = () => {
  const query = useQuery({
    queryKey: ["experience"],
    queryFn: fetchExperience,
    staleTime: 1 * 1000 * 60 * 24,
  });

  return query;
};

export default useExperience;
