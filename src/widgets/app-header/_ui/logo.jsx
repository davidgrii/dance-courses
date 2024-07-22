import Link from 'next/link';

const Logo = () => {
  return (
    <Link className='flex items-center ' href='/'>
      <span className='text-2xl lg:text-4xl pl-1 font-bold inline-block text-foreground'>
        Jazzo Studio.co
      </span>
    </Link>
  );
};

export default Logo;
