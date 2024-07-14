'use client';

import React, { useEffect } from 'react';
import { useAppSession } from '@/entities/user/session';
import { signIn } from 'next-auth/react';
import { FullPageSpinner } from '@/shared/ui/full-page-spinner';

const AuthorizedGuard = ({ children }) => {

  const session = useAppSession();
  const isUnauthenticated = session.status === 'unauthenticated';

  useEffect(() => {
    if (isUnauthenticated) {
      signIn();
    }
  }, [isUnauthenticated]);

  const isLoading = session.status === 'loading' || session.status === 'unauthenticated';

  return (
    <>
      <FullPageSpinner isLoading={isLoading} />
      {session.status === 'authenticated' && children}
    </>
  );
};

export default AuthorizedGuard;