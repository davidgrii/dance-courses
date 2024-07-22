import React from 'react';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import GradientBackground from '@/app/(public)/about/about-gradient-bgc';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import {
  Activity,
  CreditCard,
  DollarSign,
  Users
} from 'lucide-react';

const Layout = () => {
  return (
    <div className="bg-background">
      <div className="relative isolate px-4 xs:px-6 pt-14 lg:px-8">
        <GradientBackground position="top" />

        <main className="mx-auto py-16 sm:py-20 max-w-[1300px]">
          <section>
            <div
              className="pb-14 lg:flex lg:items-center lg:justify-between lg:pb-28">
              <div className="text-center flex flex-col items-center lg:mr-5 lg:text-left lg:items-start">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-6xl">
                  Who is Jazzo?
                </h2>
                <p className="max-w-2xl font-normal mt-4 text-sm text-muted-foreground sm:mt-6 sm:text-lg">
                  Jazzo was created by Mimoda Jazzo as a way to experience and
                  express our authentic self. He is an artist and wellness expert
                  working out of his studio in Los Angeles.
                  <br />
                  <br />
                  Jazzo is an expression, a movement focused on the wellbeing and
                  health of the individual expressed and explored through movement
                  and being in our bodies.
                  <br />
                  <br />
                  Jazzo endeavours to be a holistic system that facilitates
                  health, fitness, self discovery, and a tool to address trauma in
                  the body, express yourself, and find harmony with the world
                  around us.
                </p>
                <Button
                  variant="outline"
                  className="my-10 rounded-full px-20 py-8 bg-none font-medium tracking-normal text-2xl text-foreground border-solid border border-border">
                  Get started
                </Button>
              </div>
              <div className="mx-auto relative sm:max-w-2xl lg:mx-0">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full rounded-[18px]"
                  src="/about-img/about-jazzo-img.webp"
                  alt="App screenshot"
                />
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-5 sm:mb-8 sm:text-4xl ">Some of our graphics</h3>
            <div className="grid grid-cols-2 gap-2 w-full sm:gap-7">
              <Card
                className="text-foreground drop-shadow-xl shadow-white/10 border-border/60 bg-[#171719d9]/30 backdrop-blur"
                x-chunk="dashboard-01-chunk-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card
                className="text-foreground drop-shadow-xl shadow-white/10 border-border/60 bg-[#171719d9]/30 backdrop-blur"
                x-chunk="dashboard-01-chunk-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Community
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card
                className="text-foreground drop-shadow-xl shadow-white/10 border-border/60 bg-[#171719d9]/30 backdrop-blur"
                x-chunk="dashboard-01-chunk-2">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card
                className="text-foreground drop-shadow-xl shadow-white/10 border-border/60 bg-[#171719d9]/30 backdrop-blur"
                x-chunk="dashboard-01-chunk-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>

          </section>
        </main>
        <GradientBackground position="bottom" />
      </div>
    </div>
  );
};

export default Layout;
