import React, { useEffect } from 'react';
import  defaultProfileImage  from '/public/avatar-placeholder.png'
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import UserSkeleton from '@/widgets/app-header/_ui/user-skeleton';

function UserProfileData({ userData, isLoading }) {

  const img = userData.image ? userData.image : defaultProfileImage;
  const name = userData.name ? userData.name : 'Default User';
  const email = userData.email ? userData.email : 'No Email';


    if (isLoading) {
      return (
        <UserSkeleton />
      )
    }

  return (
    <>
      <div className="flex gap-3.5 items-center pt-5">
        <div>
          <Image
            width={64}
            height={64}
            className="w-16 h-16 rounded-full"
            src={img}
            alt={name}
          />
        </div>
        <div className="flex flex-col gap-0.5 text-left">
          <h3 className="text-lg font-medium">{name}</h3>
          <h4 className="opacity-65 text-[11px] font-extralight">{email}</h4>
        </div>
      </div>
      <Button
        variant="outline"
        className="mt-4 font-light border border-border bg-background/0 px-[16px] py-[20px] text-[13px]">
        EN
      </Button>
    </>
  );
}

export default UserProfileData;
