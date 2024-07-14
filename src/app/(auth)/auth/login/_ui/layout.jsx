'use client';

import React from 'react';
import LoginForm from '@/app/(auth)/auth/login/_ui/login-form';
import GradientBackground from '@/app/(auth)/auth/login/_ui/login-gradient-bgc';
import LoginContainer from '@/app/(auth)/auth/login/_ui/login-container';
import GoogleSignInButton from '@/features/auth/google-sign-in-button';


const Layout = () => {
  return (
    <div className="bg-background">
      <div className="relative isolate px-4 xs:px-6 pt-14 lg:px-8">
        <GradientBackground position="top" />
        <div className="mx-auto max-w-2xl py-16">
          <LoginContainer
            googleBtn={<GoogleSignInButton />}
            form={<LoginForm />}
          />
        </div>
        <GradientBackground position="bottom" />
      </div>
    </div>
  );
};
export default Layout;
