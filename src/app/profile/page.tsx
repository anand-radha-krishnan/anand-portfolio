import React from "react";
import Link from "next/link";

export default function Profile() {
  const workExperiences = [
    {
      timeline: "May 2022 - Present",
      designation: "Senior Frontend Developer",
      description: [
        "Building an e-commerce platform for Audi with Next.js v14 and TypeScript. Frontend caching with React Query. ",
        "Migrated the existing React v18 codebase to Next.js.",
        "Deployed the application in multiple regions like EMEA, APAC and NA regions with multiple lanugages.",
      ],
    },
    {
      timeline: "Jan 2021 - Apr 2022",
      designation: "Senior Frontend Developer",
      description: [
        "Developed reusable components using React and Typescript for 120+ Upper-funnel marketing pages for AT&T.",
        "Content for the pages were managed in Adobe Experience Manager (AEM 6.4).",
        "Developed standalone discount forms and integrated them into a hub page.",
        "Led offshore team of 6 developers.",
      ],
    },
    {
      timeline: "Apr 2020 - Dec 2020",
      designation: "Frontend Developer",
      description: [
        "Integrated SonarQube in CI/CD pipeline to improve code quality, test coverage and reduce security vulnerabilities.",
        "Developed common components and deployed as npm packages using lerna, rollup.js and Storybook",
      ],
    },
    {
      timeline: "May 2018 - Mar 2020",
      designation: "Frontend Developer",
      description: [
        "Built a Single Page Application for Directv using Angular framework with TypeScript.",
        "Experimented with feature flags to provide personalized experience for users",
        "Provided unique experience to users using A/B testing",
      ],
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-xl text-2xl font-bold mt-24 mb-10">
        Work Experience
      </div>
      {workExperiences.map((workExperience, index) => {
        return (
          <div
            className="grid grid-cols-3 max-w-xl mx-auto pb-10 gap-3"
            key={`work-experience-${index}`}
          >
            <div className="row-span-2">{workExperience.timeline}</div>
            <div className="col-span-2">{workExperience.designation}</div>
            <div className="col-span-2">
              {workExperience.description.length &&
                workExperience.description.map((desc, index) => {
                  return (
                    <ul
                      key={`work-experience-description-${index}`}
                      className="list-disc pl-4"
                    >
                      <li className="pb-2">{desc}</li>
                    </ul>
                  );
                })}
            </div>
          </div>
        );
      })}
    </>
  );
}
