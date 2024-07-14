'use client';

import React from 'react';
import Layout from '../app-footer/_ui/layout';

const NAV_ITEMS = [
  { href: '/', label: 'Home', exact: true },
  { href: '/courses', label: 'Courses' },
  { href: '/about', label: 'About us' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/contact', label: 'Contact us' },
];

const AppFooter = () => {
  return <Layout navItems={NAV_ITEMS} />;
};

export default AppFooter;
