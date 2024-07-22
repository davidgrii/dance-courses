import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from '@/shared/icons/icons';

const RegisterContainer = ({ form }) => {
  return (
    <div className='flex min-h-full flex-1 flex-col p-20 justify-center bg-background/90 border border-white/50 rounded-2xl'>
      <div className='sm:mx-auto sm:w-full '>
        <Image
          width={1000}
          height={1000}
          className='mx-auto h-10 w-auto'
          src='/logo.png'
          alt='Jazzo Studio logo'
        />
        <h2 className='mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-foreground'>
          Register to your account
        </h2>
      </div>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-screen-sm'>
        {form}
        <div className='flex justify-center mt-10 text-center text-lg text-foreground/60 font-light gap-1'>
          <p>{'Do you have an account?'}</p>
          <Link
            href={'/login'}
            className='inline-flex items-center font-medium leading-6 text-foreground/90'
          >
            <ArrowRight /> Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterContainer;
