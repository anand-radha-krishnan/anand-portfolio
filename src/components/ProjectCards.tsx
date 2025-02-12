"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import projects from "@/static/client-projects.json";

export default function ProjectCards({ display }: { display?: number }) {
  const clientProjects = display ? projects.slice(0, display) : projects;
  return (
    <div className="flex lg:justify-start flex-wrap md:mx-16 mx-2 justify-center">
      {clientProjects.map((clientProject, index) => {
        return (
          <motion.div
            key={`${clientProject.project_name.replaceAll(" ", "_")}_${index}`}
            whileInView={{ opacity: 1, y: [50, 0] }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: index * 0.3 + 0.5 }}
            className="flex row-span-2"
          >
            <motion.div
              whileHover={{
                scale: [null, 1, 1.1],
                transition: {
                  duration: 0.5,
                  times: [0, 0.6, 1],
                  ease: ["anticipate", "easeOut"],
                },
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <Card className={"md:m-4 md:mt-8 mt-8 max-w-sm h-[350px]"}>
                <Link
                  href={clientProject.project_link}
                  className="text-sm"
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
                      {clientProject.project_details?.map((detail, index) => (
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
                </Link>
              </Card>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
