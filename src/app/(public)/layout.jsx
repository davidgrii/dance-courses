import React from 'react';
import AppHeader from '@/widgets/app-header/app-header';
import AppFooter from '@/widgets/app-footer/app-footer';

const Layout = ({children}) => {
  return (
    <>
      <AppHeader variant='public'/>
      {children}
      <AppFooter/>
    </>
  );
};

export default Layout;