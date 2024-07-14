import React from 'react';
import { signIn } from 'next-auth/react';
import { GoogleIcon } from '@/shared/icons/icons';
import { Button } from '@/shared/ui/button';

const GoogleSignInButton = () => {
  return (
    <div
      className="flex-shrink-0 mx-4 p-2.5 items-center cursor-pointer justify-center transition transform hover:scale-105 gap-2 hover:bg-foreground/5 bg-background/10 text-foreground border border-border hover:border-white/20 rounded-md shadow-sm xs:p-4"
      onClick={() => signIn('google', { callbackUrl: '/' })}
    >
      <GoogleIcon />
    </div>
  );
};

export default GoogleSignInButton;