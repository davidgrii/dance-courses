import React from 'react';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';

const Layout = () => {
  return (
    <div className='bg-background'>
      <div className='relative isolate px-4 xs:px-6 pt-14 lg:px-8'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className='sm:pt-32 '>
          <div className='relative pb-[120px] isolate overflow-hidden  px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
            <svg
              viewBox='0 0 1024 1024'
              className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
              aria-hidden='true'
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
                fillOpacity='0.7'
              />
              <defs>
                <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                  <stop stopColor='#7775D6' />
                  <stop offset={1} stopColor='#E935C1' />
                </radialGradient>
              </defs>
            </svg>
            <div className='text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
              <h2 className='text-4xl font-bold tracking-tight text-foreground sm:text-6xl'>
                Who is Jazzo?
              </h2>
              <p className='max-w-2xl mt-6 text-lg leading-8 text-foreground/70'>
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
              <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
                <Button
                  variant='outline'
                  className='rounded-full px-20 py-8 bg-none font-medium text-2xl text-foreground border-solid border border-border'>
                  Get started
                </Button>
              </div>
            </div>
            <div className='relative'>
              <Image
                width={1000}
                height={1000}
                className='w-[50rem] max-w-none rounded-[18px] '
                src='/about-img/about-jazzo-img.webp'
                alt='App screenshot'
              />
            </div>
          </div>
        </div>

        <div
          className='opacity-20 absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
