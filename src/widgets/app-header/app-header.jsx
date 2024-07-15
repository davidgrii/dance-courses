'use client';

import React from 'react';
import Logo from '../app-header/_ui/logo';
import Layout from '@/widgets/app-header/_ui/layout';
import MainNav from '@/widgets/app-header/_ui/main-nav';
import SidebarMenu from './_ui/sidebar-menu';
import { useAppSession } from '@/entities/user/session';
import SignInButton from '@/features/auth/sign-in-button';

const NAV_ITEMS = [
  { href: '/', label: 'Home', exact: true },
  { href: '/courses', label: 'Courses' },
  { href: '/about', label: 'About us' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/contact', label: 'Contact us' }
];

const AppHeader = ({ variant }) => {
  const session = useAppSession()

  console.log(session)
  const isAuth = variant !== 'auth';

  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav isAuth={isAuth} navItems={NAV_ITEMS} />}
      button={isAuth && session.status === 'unauthenticated' && <SignInButton/>}
      profile={<SidebarMenu isAuth={isAuth} navItems={NAV_ITEMS} />}
    />
  );
};

export default AppHeader;
