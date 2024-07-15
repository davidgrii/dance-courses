'use client';

import { Button } from '@/shared/ui/button';
import { LogIn } from 'lucide-react';
import { signIn } from 'next-auth/react';

const SignInButton = () => {

  const handleSignIn = () => signIn();

  return (
    <Button
      className="py-5 px-6 xs:py-6 xs:pr-7 xs:pl-6 xs:mr-3 sm:mr-5 rounded-full text-lg text-foreground border-solid border border-border \"
      variant={'outline'}
      onClick={handleSignIn}>
      <LogIn className="hidden xs:block mr-2 h-5 w-5" /> <span className='text-[14px] font-medium xs:text-lg tracking-wide'>Login</span>
    </Button>
  );
};

export default SignInButton;