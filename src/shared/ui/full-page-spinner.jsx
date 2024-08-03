import { useAppearanceDelay } from '../lib/react';
import { Spinner } from './spinner';
import React from 'react';
import GradientBackground from '@/features/courses/_ui/courses-gradient-bgc';

export function FullPageSpinner({ isLoading }) {
  const show = useAppearanceDelay(isLoading);

  if (show) {
    return (
      <div className="bg-background">

        <div className="relative isolate px-4 xs:px-6 pt-14 lg:px-8">
          <GradientBackground position="top" />
          <div className=" h-[100vh] relative">
            <div className="absolute bottom-[50%] left-[50%]">
              <Spinner
                className="w-10 h-10 text-primary"
                aria-label="Page load"
              />
            </div>
          </div>
          <GradientBackground position="bottom" />

        </div>

      </div>
    );
  }

  return null;
}