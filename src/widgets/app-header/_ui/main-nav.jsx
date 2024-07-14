import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MainNav = ({ isAuth, navItems }) => {
  const currentPage = usePathname();

  return (
    <nav className='flex items-start gap-6 text-sm flex-col'>
      <div className='flex items-center text-xl'>
        <ul className='flex gap-7'>
          {navItems.map(({ href, label, _blank, exact }) => (
            <li key={label}>
              <Link
                href={href}
                className={`${currentPage === href ? 'text-foreground/100 font-normal' : 'text-foreground/60'} font-light transition-colors hover:text-foreground/90`}
                target={_blank ? '_blank' : '_self'}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex gap-2.5 ml-24 text-[16px] items-center'>
          <span className=' text-popover opacity-70 pt-1'>En </span> |{' '}
          <p className='pt-1 opacity-20'>Ru</p>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
