'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from '@/shared/icons/icons';

const LoginContainer = ({ form, googleBtn }) => {
  return (
    <div
      className="py-10 px-4 flex min-h-full flex-1 flex-col justify-center bg-background/90 border border-white/50 rounded-2xl xs:p-16 xs:px-8 sm:p-20">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          width={200}
          height={200}
          className="mx-auto h-7  sm:h-10 w-auto"
          src="/logo.png"
          alt="Jazzo Studio logo"
        />

        <h2
          className="text-2xl mt-6 text-center font-bold leading-9 tracking-tight text-foreground xs:text-3xl sm:text-4xl sm:mt-10 ">
          Login to your account
        </h2>

        <div className="flex items-center mt-5 xs:mt-10">
          <div className="flex-grow border-t border-border"></div>
          {/*GOOGLE BUTTON*/}
          {googleBtn}
          <div className="flex-grow border-t border-border"></div>
        </div>

      </div>
      <div className="mt-3 xs:mt-6 sm:mx-auto sm:w-full sm:max-w-screen-sm">
        {/*LOGIN FORM*/}
        {form}
        <div
          className="mt-6 text-sm flex justify-center text-center text-foreground/60 font-light gap-1 xs:mt-10 xs:text-lg">
          <Link
            href={'/auth/register'}
            className="inline-flex items-center leading-6 text-foreground/70 font-light"
          >
            <p className="">{'Don\'t have an account?'}</p>
            <ArrowRight />
            <span
              className="inline-flex items-center font-medium leading-6 text-foreground/90">
            Register
          </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
