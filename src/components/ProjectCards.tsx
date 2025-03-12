"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/common/CardComponent";
import { Project, ProjectDetails } from "@/types/projects";
import SpotlightCard from "./common/SpotlightCard";
import { useTheme } from "next-themes";

export default function ProjectCards({
  projects,
  display,
}: {
  projects: Project[];
  display?: number;
}) {
  const displayProjects = display ? projects.slice(0, display) : projects;
  const theme = useTheme();

  return (
    <div className="flex flex-wrap md:mx-16 mx-2 justify-center">
      {displayProjects.length !== 0 &&
        displayProjects.map((clientProject, index) => {
          return (
            <motion.div
              key={`${clientProject.project_name.replaceAll(
                " ",
                "_"
              )}_${index}`}
              whileInView={{ opacity: 1, y: [50, 0] }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: index * 0.3 + 0.5 }}
            >
              <Card
                className={
                  "md:m-4 md:mt-8 mt-8 max-w-sm delay-200 duration-300 ease-anticipate ease-out hover:scale-110"
                }
              >
                <SpotlightCard
                  spotlightColor={
                    theme.theme === "dark"
                      ? "rgba(250, 250, 249, 0.25)"
                      : "rgba(0, 0, 0, 0.25)"
                  }
                  className="h-[350px]"
                >
                  <Link
                    href={clientProject.project_link}
                    className="text-sm "
                    target="_blank"
                  >
                    <CardHeader>
                      <CardTitle>{clientProject.project_title}</CardTitle>
                      <CardDescription>
                        {clientProject.project_description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className=" flex items-center space-x-4 rounded-md border p-4">
                        <div className="flex-1 space-y-1 ">
                          {clientProject.project_name}
                          <span aria-hidden="true">
                            <span>&nbsp;{"-->"}</span>
                          </span>
                        </div>
                      </div>
                      <div>
                        {clientProject.project_details?.map(
                          (detail: ProjectDetails, index: number) => (
                            <div
                              key={index}
                              className="mb-4 pb-4 last:mb-0 last:pb-0"
                            >
                              <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                  {detail.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {detail.description}
                                </p>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Link>
                </SpotlightCard>
              </Card>
            </motion.div>
          );
        })}
    </div>
  );
}
