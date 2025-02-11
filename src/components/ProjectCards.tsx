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
import clientProjects from "@/static/client-projects.json";

export default function ProjectCards() {
  return (
    <div className="flex justify-start md:flex-row flex-wrap md:mx-16 mx-0">
      {clientProjects.map((clientProject, index) => {
        return (
          <motion.div
            key={`${clientProject.project_name.replaceAll(" ", "_")}_${index}`}
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
            <Card
              className={"w-[380px] h-[350px] md:m-4 md:mt-8 mt-8 basis-7xl"}
            >
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
                        <span className="arrow-transform">&nbsp;{"-->"}</span>
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
        );
      })}
    </div>
  );
}
