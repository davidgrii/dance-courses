'use client';

import React, { useEffect, useState } from 'react';
import GradientBackground from '@/features/courses/_ui/courses-gradient-bgc';
import { Progress } from '@/shared/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import CardSkeleton from '@/features/courses/_ui/card-skeleton';
import { Tabs, TabsContent } from '@/shared/ui/tabs';
import NavCourses from '@/features/courses/_ui/nav-courses';
import Course from '@/features/courses/_ui/course';
import { getCourses } from '@/shared/api/kajbi';
import Link from 'next/link';
import TabsCourses from '@/features/courses/_ui/tabs-courses';

const Layout = () => {

  return (
    <div className="bg-background">
      <div className="relative isolate px-4 xs:px-6 pt-14 lg:px-8">
        <GradientBackground position="top" />
        <main className="mx-auto max-w-7xl py-20 sm:py-20 px-4">
          <TabsCourses/>
        </main>
        <GradientBackground position="bottom" />
      </div>
    </div>
  );
};

export default Layout;
