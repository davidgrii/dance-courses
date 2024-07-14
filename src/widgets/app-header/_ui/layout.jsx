import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/shared/ui/sheet';
import { Button } from '@/shared/ui/button';
import { OpenIcon } from '@/shared/icons/icons';

const Layout = ({ logo, nav, button, profile }) => {
  return (
    <header className='px-1 pt-3.5 pb-1.5 xs:pb-3 xs:pt-5 xs:px-3 lg:px-6 fixed top-0 left-0 right-0 z-50 border-border/60 bg-background/95 backdrop-blur'>
      <div className=' flex h-14 items-center justify-between lg:px-4'>
        <div className='mr-0 xs:mr-5 lg:mr-14'>{logo}</div>
        <div className='items-center flex'>
          <div className='hidden mr-5 lg:block '>{nav}</div>
          <div >{button}</div>
          <div className='mr-[-5px] xs:mr-0'>
            <Sheet>
              <SheetContent side='right'>{profile}</SheetContent>
              <SheetTrigger asChild>
                <Button variant='menuButton' className='px-2.5 '>
                  <OpenIcon />
                </Button>
              </SheetTrigger>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Layout;
