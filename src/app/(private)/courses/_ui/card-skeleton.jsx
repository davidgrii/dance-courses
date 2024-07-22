import { Skeleton } from "@/shared/ui/skeleton"

const CardSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[255px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[120px]" />
      </div>
    </div>
  )
};

export default CardSkeleton;