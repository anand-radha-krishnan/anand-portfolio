export interface Project {
  project_type: string;
  project_title: string;
  project_description: string;
  project_link: string;
  project_name: string;
  project_details: ProjectDetails[];
}

export interface ProjectDetails {
  title?: string;
  description?: string;
}
