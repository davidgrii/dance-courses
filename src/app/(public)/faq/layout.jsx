import React from 'react';
import { FaqsAccordion } from '@/app/(public)/faq/_ui/faq-accordion';
import GradientBackground from '@/app/(public)/faq/_ui/faq-gradient-bgc';
import { Card, CardContent } from '@/shared/ui/card';


const Layout = () => {
  return (
    <>
      <div className="bg-background">
        <div className="relative isolate px-6 lg:px-8 py-32 sm:py-32 ">
          <GradientBackground position="top" />
          <Card
            className="py-16 text-foreground mb-3 drop-shadow-xl rounded-2xl mx-auto max-w-4xl shadow-white/10 border-border/60 bg-[#171719d9]/30 backdrop-blur ">
            <div className="mx-auto max-w-2xl">
              <CardContent>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2
                    className="text-2xl mb-7 text-center font-bold leading-9 tracking-wide text-foreground xs:text-3xl sm:text-4xl sm:mt-10 ">
                    FAQS
                  </h2>
                </div>
                <FaqsAccordion />
              </CardContent>
            </div>
          </Card>
          <GradientBackground position="bottom" />
        </div>
      </div>
    </>
  );
};

export default Layout;
