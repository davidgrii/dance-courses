import React, { useState } from 'react';
import { Tabs, TabsContent } from '@/shared/ui/tabs';
import NavCourses from '@/features/courses/_ui/nav-courses';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import CardSkeleton from '@/features/courses/_ui/card-skeleton';
import Link from 'next/link';
import Course from '@/features/courses/_ui/course';

const TabsCourses = () => {
  const [isLoading, setIsLoading] = useState(false);


  const arrayCard = [{}, {}, {}, {}];

  return (
    <Tabs defaultValue="My courses">
      <NavCourses />
      <TabsContent value="My courses">
        <Card
          className="text-foreground drop-shadow-xl shadow-white/10 border-border/60 bg-[#171719d9]/30 backdrop-blur">
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
              {isLoading ?
                arrayCard.map((item, index) => (
                  <CardSkeleton key={index} />
                ))
                :
                arrayCard.map((item, index) => (
                  <Link key={index} href={`/courses/course/${index + 1}`}>
                    <Course  index={index} />
                  </Link>
                ))
              }
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="All courses">
        <Card
          className="text-foreground drop-shadow-xl shadow-white/10 border-border/60 bg-[#171719d9]/30 backdrop-blur ">
          <CardHeader>
            <CardTitle className="pt-2 text-foreground text-3xl font-medium">
              All courses
            </CardTitle>
            <CardDescription>
              All courses on our platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-7">
              {isLoading ?
                arrayCard.map((item, index) => (
                  <CardSkeleton key={index} />
                ))
                :
                arrayCard.map((item, index) => (
                  <Link key={index} href={`/courses/course/${index + 1}`}>
                    <Course  index={index} />
                  </Link>
                ))
              }
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Complete courses">
        <Card
          className="text-foreground drop-shadow-xl shadow-white/10 border-border/60 bg-[#171719d9]/30 backdrop-blur ">
          <CardHeader>
            <CardTitle className="pt-6 text-foreground text-3xl font-medium">
              Complete courses
            </CardTitle>
            <CardDescription>
              Complete courses on our platform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">

          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Mini courses">
        <Card
          className="text-foreground drop-shadow-xl shadow-white/10 border-border/60 bg-[#171719d9]/30 backdrop-blur ">
          <CardHeader>
            <CardTitle className="pt-6 text-foreground text-3xl font-medium">
              Mini courses
            </CardTitle>
            <CardDescription>
              Mini courses on our platform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">

          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default TabsCourses;