'use client';
import React from 'react';
import GradientBackground from '@/features/courses/_ui/courses-gradient-bgc';
import VideoPlayer from '@/app/(private)/courses/course/[courseSlug]/_ui/video-player';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import CardSkeleton from '@/features/courses/_ui/card-skeleton';
import Link from 'next/link';
import Course from '@/features/courses/_ui/course';

const Page = ({ params }) => {

  const url = 'https://www.youtube.com/watch?v=7-zwvUPKYpE'

  return (
    <div className="bg-background">
      <div className="relative isolate px-4 xs:px-6 pt-14 lg:px-8">
        <GradientBackground position="top" />
        <div className="flex justify-between w-full mx-auto py-20 sm:py-20 px-4">
          <div className='w-[65%]'>
            <VideoPlayer url={url} />
          </div>
          <Card
            className="w-1/3 text-foreground drop-shadow-xl shadow-white/10 border-border/60 bg-[#171719d9]/30 backdrop-blur">
            <CardHeader>
              <CardTitle className="pt-2 text-foreground text-3xl font-medium">
                My courses
              </CardTitle>
              <CardDescription>
                All courses currently available to you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-7">

              </div>
            </CardContent>
          </Card>
        </div>
        <GradientBackground position="bottom" />
      </div>
    </div>
  );
};

export default Page;