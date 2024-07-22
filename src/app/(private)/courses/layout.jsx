'use client';

import React, { useEffect, useState } from 'react';
import GradientBackground from '@/app/(private)/courses/_ui/courses-gradient-bgc';
import { Progress } from '@/shared/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import CardSkeleton from '@/app/(private)/courses/_ui/card-skeleton';
import { Tabs, TabsContent } from '@/shared/ui/tabs';
import NavCourses from '@/app/(private)/courses/_ui/nav-courses';
import Course from '@/app/(private)/courses/_ui/course';
import { getCourses } from '@/shared/api/kajbi';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesData = await getCourses();
        setCourses(coursesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const arrayCard = [{}, {}, {}, {}];


  return (
    <div className="bg-background">
      <div className="relative isolate px-4 xs:px-6 pt-14 lg:px-8">
        <GradientBackground position="top" />
        <main className="mx-auto max-w-7xl py-20 sm:py-20 px-4">
          <section>
            <Tabs defaultValue="My courses">
              {/*COURSES BLOCK NAV*/}
              <NavCourses />
              {/*COURSES BLOCK */}
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
                          <Course key={index} index={index} />
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
                          <Course key={index} index={index} />
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
          </section>
        </main>
        <GradientBackground position="bottom" />
      </div>
    </div>
  );
};

export default Layout;
