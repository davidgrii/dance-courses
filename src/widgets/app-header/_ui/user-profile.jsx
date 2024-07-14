import React from 'react';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';

function UserProfileData({ userData }) {

  const defaultProfileImage = 'https://cdn2-courses.iphonephotographyschool.com/83ded634-c96e-4dcf-a2c5-293353d49db2/images/avatar-placeholder.png';

  return (
    <>
      <div className="flex gap-3.5 items-center pt-5">
        <div>
          <Image
            width={300}
            height={300}
            className="max-w-16 rounded-full"
            src={userData.image ? userData.image : defaultProfileImage}
            alt={userData.name ? userData.name : 'Default User'}
          />
        </div>
        <div className="flex flex-col gap-0.5 text-left">
          <h3 className="text-lg font-medium">{userData.name}</h3>
          <h4 className="opacity-65 text-[11px] font-extralight">{userData.email}</h4>
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
