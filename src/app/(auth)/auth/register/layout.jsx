import React from 'react';
import GradientBackground from '@/features/auth/register/_ui/register-gradient-bgc';
import RegisterContainer from '@/features/auth/register/_ui/register-container';
import RegisterForm from '@/features/auth/register/_ui/register-form';

const Layout = () => {
  return (
    <div className='bg-background'>
      <div className='relative isolate px-4 xs:px-6 pt-14 lg:px-8'>
        <GradientBackground position='top' />
        <div className='mx-auto max-w-2xl pt-24 pb-32'>
          <RegisterContainer form={<RegisterForm />} />
        </div>
        <GradientBackground position='bottom' />
      </div>
    </div>
  );
};
export default Layout;
