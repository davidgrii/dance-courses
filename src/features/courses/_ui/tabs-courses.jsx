import React, { useState } from 'react';
import { Tabs, TabsContent } from '@/shared/ui/tabs';
import NavCourses from '@/features/courses/_ui/nav-courses';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import CardSkeleton from '@/features/courses/_ui/card-skeleton';
import Course from '@/features/courses/_ui/course';
import image1 from 'public/course-images/_DSC2140.jpg';
import image2 from 'public/course-images/Jazzo in Slow Motion_Pratice Physical Mantra.png';
import image3 from 'public/course-images/vlcsnap-2024-08-15-14h33m14s927.png';

const TabsCourses = () => {
  const [isLoading, setIsLoading] = useState(false);


  const courses = [
    {
      title: 'Jazzo Dance Biomechanics',
      previewImage: image1,
      courseType: 'Complete course',
      description: 'This course is your step-by-step guide to freestyle dance and ' +
        'building your dancefloor confidence. It’s about tapping into your inner creativity, ' +
        'surrendering to the music, expressing yourself through movement, letting go of fears,' +
        ' building confidence and self-love. Join this transformative journey and embrace the power of movement',
      kajabiLink: 'https://mimodajazzo.mykajabi.com/offers/MBirPLEU'
    },
    {
      title: 'Jazzo in Slow Motion',
      previewImage: image2,
      courseType: 'Mini course',
      description: 'Jazzo in Slow Motion is an important part of maintaining the Jazzo Aesthetic lifestyle. It is our Aesthetic Mindfulness, Neuroaesthetic Meditation in Slow Motion that can be done anywhere anytime. It is designed to bring your mind and body together, focusing on the now, engaging with your stress and pain.',
      kajabiLink: 'https://mimodajazzo.mykajabi.com/offers/DYXYAfzu/checkout'
    },
    {
      title: 'Jazzo Pilates - Animal Motion',
      previewImage: image3,
      courseType: 'Complete course',
      description: 'Jazzo Pilates Animal Motion is a full body workout for those with little time, extra money, or patience. The workout focuses on calisthenic types of exercises that can be done at home and can show results in as little as 10 minutes a day. These two exercises can be done either independently or linked together, depending on your needs and time availability.',
      kajabiLink: 'https://mimodajazzo.mykajabi.com/offers/p2RLKbpB/checkout'
    }
  ];

  return (
    <Tabs defaultValue="All courses">
      <NavCourses />

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
                courses.map((item, index) => (
                  <CardSkeleton key={index} />
                ))
                :
                courses.map((item, index) => (
                  <Course
                    key={index}
                    index={index}
                    title={item.title}
                    description={item.description}
                    kajabiLink={item.kajabiLink}
                    typeCourse={item.courseType}
                    previewImage={item.previewImage}
                  />
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