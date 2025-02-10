import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import projects from "@/static/projects.json";

export default function ProjectCards() {
  return (
    <div className="flex justify-around flex-column">
      {projects.map((project, index) => {
        return (
          <Card
            key={`${project.project_name.replaceAll(" ", "_")}_${index}`}
            className={cn("w-[380px]", "m-16")}
          >
            <CardHeader>
              <CardTitle>{project.project_title}</CardTitle>
              <CardDescription>{project.project_description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Link
                href={project.project_link}
                className="text-sm"
                target="_blank"
              >
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                  <div className="flex-1 space-y-1">{project.project_name}</div>
                </div>
              </Link>
              <div>
                {project.project_details?.map((detail, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {detail.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
