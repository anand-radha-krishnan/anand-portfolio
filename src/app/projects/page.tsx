import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const projects = [
  {
    project_title: "AT&T",
    project_description: "Upper funnel marketing landing pages",
    project_link: "https://www.att.com",
    project_name: "AT&T - Upper Funnel",
    project_details: [
      {
        description:
          "Upper funnel marketing pages for the users to shop available offers and products. Application has more than 200 pages and designed with responsive layout to be used on both mobile and larger devices",
      },
      {
        title: "React, Typescript",
      },
    ],
  },
  {
    project_title: "Audi",
    project_description: "Function on Demand digital shop",
    project_link: "https://www.audi.de/de/",
    project_name: "Audi - Function on Demand",
    project_details: [
      {
        description:
          "E-commerce application for Audi vehicle owners. Designed with Next.js and TypeScript along with Next app router and backend for frontend (bff).",
      },
      { title: "Next.js, TypeScript, bff" },
    ],
  },
  {
    project_title: "Language Translator",
    project_description: "Translate text to multiple available languages.",
    project_link: "/language-translator",
    project_name: "Language Translator",
    project_details: [
      {
        description:
          "Langauge translator uses open-source Meta NLLB (Natural Langugage Left Behind) API to translate the input text to the desired language.",
      },
      { title: "NLLB API, ShadCn, TailwindCss" },
    ],
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export default function CardDemo({ ...props }: CardProps) {
  return (
    <div className="flex justify-around flex-column">
      {projects.map((project, index) => {
        return (
          <Card
            key={`${project.project_name.replaceAll(" ", "_")}_${index}`}
            className={cn("w-[380px]", "m-16")}
            {...props}
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
