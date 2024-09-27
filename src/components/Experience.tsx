import workExperiences from "@/static/work-experience.json";

export default function Experience() {
  return (
    <>
      {workExperiences.map((workExperience, index) => {
        return (
          <div
            className="grid grid-cols-3 max-w-xl mx-auto pb-10 gap-3"
            key={`work-experience-${index}`}
          >
            <div className="row-span-2">{workExperience.timeline}</div>
            <div className="col-span-2">{workExperience.designation}</div>
            <div className="col-span-2 text-gray-400">
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
