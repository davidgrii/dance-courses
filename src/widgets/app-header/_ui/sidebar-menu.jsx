'use client';

import React from 'react';
import Link from 'next/link';
import {
  AboutUsIcon,
  ContactIcon,
  CoursesIcon,
  HomeIcon,
  PhilosophyIcon,
  QuestionsIcon
} from '@/shared/icons/icons';
import { usePathname } from 'next/navigation';
import { Button } from '@/shared/ui/button';
import Logo from '@/widgets/app-header/_ui/logo';
import UserProfileData from '@/widgets/app-header/_ui/user-profile';
import { useSignOut } from '@/features/auth/use-sign-out';
import { useAppSession } from '@/entities/user/session';
import { signIn } from 'next-auth/react';
import { Separator } from '@/shared/ui/separator';
import { LogIn, LogOut } from 'lucide-react';


const SidebarMenu = ({ navItems }) => {
  const currentPage = usePathname();
  const session = useAppSession();

  const { signOut, isPending: isLoadingSignOut } = useSignOut();
  const user = session?.data?.user;

  const icons = [
    HomeIcon,
    CoursesIcon,
    AboutUsIcon,
    PhilosophyIcon,
    ContactIcon,
    QuestionsIcon
  ];

  return (
    <div className="flex flex-col h-full pt-1">
      <div className="flex-auto">
        <Logo />
        <div className="flex justify-between items-center mb-[18px]">
          {user && <UserProfileData userData={user} isLoading={session.status === 'loading'} />}
        </div>
        <Separator />
        <ul className="flex flex-col space-y-4 text-lg opacity-80 my-[18px]">
          {navItems.map(({ href, label, _blank, exact }, index) => {
            const Icon = icons[index];

            return (
              <li
                key={label}>
                <Link
                  href={href}
                  className={`${currentPage === href ? 'text-foreground/100 font-normal' : 'text-foreground/60'} rounded-lg flex items-center text-foreground/100 font-light transition-all  bg-background hover:text-foreground/90 hover:bg-foreground/5 py-2.5`}
                  target={_blank ? '_blank' : '_self'}
                >
                  <div className="flex mx-2 gap-2">
                    {Icon && <Icon />}
                    <span>- {label}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <Separator />
        <ul className="flex flex-col space-y-4 text-lg opacity-80 my-[18px]">
          <Link
            href={'/faq'}
            className={`${currentPage === '/faq' ? 'text-foreground/100' : 'text-foreground/60'} flex items-center gap-2 text-foreground/100 transition-all hover:bg-foreground/5 rounded-lg hover:text-foreground/90 py-2.5`}
          >
            <div className="flex mx-2 gap-2">
              <QuestionsIcon />
              <span>- FAQS</span>
            </div>
          </Link>
        </ul>
      </div>
      <div className="flex justify-between tracking-wider">
        {user ?
          <Button
            onClick={() => signOut()}
            disabled={isLoadingSignOut}
            variant="outline"
            className="rounded-full w-full py-7 bg-none font-medium text-xl text-foreground border-solid border border-border">
            <LogOut className="hidden xs:block mr-2 h-5 w-5" /> <span
            className="font-medium text-xl tracking-wide">Logout</span>
          </Button>
          :
          <Button
            onClick={() => signIn()}
            variant="outline"
            className="rounded-full  w-full py-7 bg-none font-medium text-foreground border-solid border border-border">
            <LogIn className="hidden xs:block mr-2 h-5 w-5" /> <span
            className="font-medium text-xl tracking-wide">Login</span>
          </Button>
        }
      </div>
      {/*{!user &&*/}
      {/*  <Link*/}
      {/*    href={'/auth/register'}*/}
      {/*    className="w-full  mt-5"*/}
      {/*  >*/}
      {/*    <div*/}
      {/*      className="inline-flex justify-center text-center items-center text-sm text-foreground/70 font-light gap-1">*/}
      {/*      <p>{'Don\'t have an account?'}</p>*/}
      {/*      <ArrowRight />*/}
      {/*      <span className="inline-flex items-center font-medium leading-6 text-foreground/90">*/}
      {/*        Register*/}
      {/*      </span>*/}
      {/*    </div>*/}
      {/*  </Link>*/}
      {/*}*/}
    </div>
  );
};

export default SidebarMenu;
