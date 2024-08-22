'use client';

import React from 'react';
import GradientBackground from '@/features/courses/_ui/courses-gradient-bgc';

import TabsCourses from '@/features/courses/_ui/tabs-courses';

const Layout = () => {

  return (
    <div className="bg-background">
      <div className="relative isolate px-4 xs:px-6 pt-14 lg:px-8">
        <GradientBackground position="top" />
        <main className="py-14 mx-auto max-w-7xl sm:py-20 px-4">
          <TabsCourses/>
        </main>
        <GradientBackground position="bottom" />
      </div>
    </div>
  );
};

export default Layout;
