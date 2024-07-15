'use client';

import React from 'react';
import Link from 'next/link';
import {
  AboutUsIcon,
  ContactIcon,
  CoursesIcon,
  HomeIcon,
  PhilosophyIcon,
  ArrowRight,
  UserQuestionsIcon
} from '@/shared/icons/icons';
import { usePathname } from 'next/navigation';
import { Button } from '@/shared/ui/button';
import Logo from '@/widgets/app-header/_ui/logo';
import UserProfileData from '@/widgets/app-header/_ui/user-profile';
import { useSignOut } from '@/features/auth/use-sign-out';
import { useAppSession } from '@/entities/user/session';
import { signIn } from 'next-auth/react';


const SidebarMenu = ({  navItems }) => {
  const currentPage = usePathname();
  const session = useAppSession()

  const { signOut, isPending: isLoadingSignOut } = useSignOut();

  console.log()

  const icons = [
    HomeIcon,
    CoursesIcon,
    AboutUsIcon,
    PhilosophyIcon,
    ContactIcon,
    UserQuestionsIcon
  ];

  const user = session?.data?.user;

  return (
    <div className="flex flex-col h-full p-3 pt-1">
      <div className="flex-auto">
        <Logo text="Jazzo Studio.co" textSize="text-3xl" />
        <div className="flex justify-between items-center">
          {user && <UserProfileData userData={user} />}
        </div>
        <div className="h-[0.7px] bg-foreground/30 my-[25px] mx-[-8px] mb-[18px] border-none"></div>
        <ul className="flex flex-col space-y-5 text-lg opacity-80">
          {navItems.map(({ href, label, _blank, exact }, index) => {
            const Icon = icons[index];

            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`${currentPage === href ? 'text-foreground/100' : 'text-foreground/60'} flex items-center gap-2 text-foreground/100 transition-colors hover:text-foreground/90 py-2.5`}
                  target={_blank ? '_blank' : '_self'}
                >
                  {Icon && <Icon />}
                  <span>- {label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="h-[0.7px] bg-foreground/30 my-[25px] mx-[-8px] mb-[18px] border-none"></div>
        <ul className="flex flex-col space-y-5 text-lg opacity-80">
          <Link
            href={'/faq'}
            className={`${currentPage === '/faq' ? 'text-foreground/100' : 'text-foreground/60'} flex items-center gap-2 text-foreground/100 transition-colors hover:text-foreground/90 py-2.5`}
          >
            <UserQuestionsIcon />
            <span>- FAQS</span>
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
            Logout
          </Button>
          :
          <Button
            onClick={() => signIn()}
            variant="outline"
            className="rounded-full  w-full py-7 bg-none font-medium text-xl text-foreground border-solid border border-border">
            Login
          </Button>
        }
      </div>
      {!user &&
        <Link
          href={'/auth/register'}
          className="w-full  mt-5"
        >
          <div
            className="inline-flex justify-center text-center items-center text-sm text-foreground/70 font-light gap-1">
            <p>{'Don\'t have an account?'}</p>
            <ArrowRight />
            <span className="inline-flex items-center font-medium leading-6 text-foreground/90">
              Register
            </span>
          </div>
        </Link>
      }
    </div>
  );
};

export default SidebarMenu;
