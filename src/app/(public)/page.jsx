'use client'

import { Button } from '@/shared/ui/button';
import TabsCourses from '@/features/courses/_ui/tabs-courses';

const Home = () => (
  <main>
    <div className="bg-background">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>

        <section>
          <div className="mx-auto max-w-2xl py-32 sm:py-48">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div
                className="relative rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-accent/35">
                Announcing our next round of funding.{' '}
                <a href="#" className="font-semibold text-#ff80b5">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Design your body, redesign your mind
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 tracking-normal">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                occaecat fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                  variant="outline"
                        className="rounded-full px-20 py-8 bg-none font-medium tracking-normal text-2xl text-foreground border-solid border border-border">
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/*COURSES BLOCK*/}
        <section>
          <div className='flex justify-center pb-10'>
           <TabsCourses/>
          </div>
        </section>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>
      </div>
    </div>
  </main>
);
export default Home;
