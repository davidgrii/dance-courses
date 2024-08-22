import React from 'react';
import AppHeader from '@/widgets/app-header/app-header';
import AppFooter from '@/widgets/app-footer/app-footer';
import AuthorizedGuard from '@/features/auth/authorized-guard';

const Layout = ({ children }) => {
  return (
    <>
      <AppHeader variant="private" />
      <AuthorizedGuard>
        {children}
      </AuthorizedGuard>
      <AppFooter />
    </>
  );
};

export default Layout;