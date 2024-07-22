import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import Image from 'next/image';
import { Separator } from '@/shared/ui/separator';
import { TabsList, TabsTrigger } from '@/shared/ui/tabs';

const NavCourses = () => {
  return (
    <Card
      className="text-foreground mb-3 drop-shadow-xl shadow-white/10 border-border/60 bg-[#171719d9]/30 backdrop-blur "
      x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center text-foreground/60 justify-between space-y-0 pb-6">
        <CardTitle className="text-sm font-extralight tracking-wide">
          My profile in
          <span
            className="pl-1.5 font-medium text-foreground decoration-1 underline">
            Jazzo Studio
          </span>
        </CardTitle>
        <Image width={45} height={45} src="/logo.png" alt='Jazzo Studio logo' />
      </CardHeader>
      <CardContent>
        <div>
          <div className="text-left space-y-1">
            <h2 className="text-xl font-normal leading-none">Courses in Jazzo Studio</h2>
            <p className="text-sm text-muted-foreground">
              Here you can view courses you have already purchased, or you can purchase new ones
            </p>
          </div>
          <Separator className="my-4" />
          <TabsList className="flex h-5 items-center space-x-4 text-sm bg-background/0">
            <TabsTrigger value="My courses">My courses</TabsTrigger>
            <Separator orientation="vertical" />
            <TabsTrigger value="All courses">All courses</TabsTrigger>
            <Separator orientation="vertical" />
            <TabsTrigger value="Complete courses">Complete courses</TabsTrigger>
            <Separator orientation="vertical" />
            <TabsTrigger value="Mini courses">Mini courses</TabsTrigger>
          </TabsList>
        </div>
      </CardContent>
    </Card>
  );
};

export default NavCourses;