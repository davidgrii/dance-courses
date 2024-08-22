import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
  YouTubeIcon,
} from '@/widgets/app-footer/icons/icons';

const Layout = ({ navItems }) => {
  const currentPage = usePathname();
  const icons = [
    { component: FacebookIcon, href: 'https://www.facebook.com' },
    { component: TelegramIcon, href: 'https://t.me' },
    { component: YouTubeIcon, href: 'https://www.youtube.com' },
    { component: InstagramIcon, href: 'https://www.instagram.com' },
    { component: WhatsappIcon, href: 'https://www.whatsapp.com' },
  ];

  return (
    <>
      <footer className='pt-10 pb-6 flex flex-col bg-background/10 backdrop-blur justify-center border border-[hsl(240,3.7%,15.9%)] rounded-t-[70px] bg-[#0c0c0d] text-white sm:pt-16 sm:pb-10'>
        <div>
          <ul className='flex px-5 flex-wrap text-lg justify-center gap-6 sm:flex-row sm:gap-20'>
            {navItems.map(({ href, label, _blank, exact }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={`${currentPage === href ? 'text-foreground/100' : 'text-foreground/60'} transition-colors hover:text-foreground/90`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-6 flex justify-center gap-12 sm:mt-10'>
          {icons.map(({ component: IconComponent, href }, i) => (
            <Link key={i} href={href} target='_blank' rel='noopener noreferrer'>
              <IconComponent />
            </Link>
          ))}
        </div>
        <div className='mt-6 text-foreground/60 font-light sm:mt-10 '>
          © 2024 Jazzo Studio Company, Inc. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Layout;
