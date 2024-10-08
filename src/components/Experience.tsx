import workExperiences from "@/static/work-experience.json";

export default function Experience() {
  return (
    <>
      {workExperiences.map((workExperience, index) => {
        return (
          <div className="" key={`work-experience-${index}`}>
            <div className="grid grid-cols-3 max-w-xl mx-auto pb-10 gap-3">
              <div className="flex row-span-2">
                <div className="relative right-2 w-1 h-6 animate-pulse">
                  <div className="bg-white shadow rounded h-full"></div>
                </div>
                {workExperience.timeline}
              </div>
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
          </div>
        );
      })}
    </>
  );
}
