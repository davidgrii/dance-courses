import React from 'react';
import { Skeleton } from '@/shared/ui/skeleton';

const UserSkeleton = () => {
  return (
    <div className="flex items-center space-x-4 pt-5">
      <Skeleton className="h-12 w-12 max-w-16 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-44" />
        <Skeleton className="h-4 w-28" />
      </div>
    </div>
  )
};

export default UserSkeleton;