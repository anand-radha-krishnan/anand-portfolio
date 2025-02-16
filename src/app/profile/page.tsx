"use client";

import Experience from "@/components/Experience";

import useExperience from "@/hooks/useExperience";
import ProfileSkeleton from "@/components/ProfileSkeleton";
import CustomPopover from "@/components/CustomPopover";

export default function Profile() {
  const { data: experiences, isFetching } = useExperience();

  return (
    <div className="m-4 md:m-0">
      {isFetching ? (
        <ProfileSkeleton />
      ) : (
        <>
          <div className="mt-16 mb-10 items-center grid grid-cols-4 max-w-xl mx-auto">
            <div className="text-3xl font-bold col-span-2">Experience</div>
            <CustomPopover
              triggerClass="col-span-2 w-full text-right"
              content="Did you know? Data for this page is fetched from Sanity.io CMS!"
            />
          </div>

          <Experience experiences={experiences} />
        </>
      )}
    </div>
  );
}
