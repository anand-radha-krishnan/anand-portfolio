"use client";

import Experience from "@/components/Experience";

import useExperience from "@/hooks/useExperience";
import ProfileSkeleton from "@/components/skeleton/ProfileSkeleton";
import CustomDrawer from "@/components/CustomDrawer";

export default function Profile() {
  const { data: experiences, isFetching } = useExperience();

  return (
    <div className="m-4 mt-28">
      {isFetching ? (
        <ProfileSkeleton />
      ) : (
        <>
          <div className="mt-12 mb-10 items-center grid grid-cols-4 max-w-xl mx-auto">
            <div className="text-3xl font-bold col-span-2">Experience</div>
            <CustomDrawer
              triggerClass="col-span-2 w-full text-right"
              content="Data for this page is fetched from Sanity.io CMS!"
            />
          </div>

          <Experience experiences={experiences} />
        </>
      )}
    </div>
  );
}
