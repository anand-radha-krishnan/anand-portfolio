import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectSkeleton() {
  return (
    <div>
      <Skeleton className="w-[200px] h-[50px] rounded-full mx-auto" />
      <div className="flex justify-center">
        <Skeleton className="w-[350px] h-[350px] rounded-full m-12" />
        <Skeleton className="w-[350px] h-[350px] rounded-full m-12 md:block hidden" />
        <Skeleton className="w-[350px] h-[350px] rounded-full m-12 md:block hidden" />
      </div>
    </div>
  );
}
