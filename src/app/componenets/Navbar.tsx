import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { JSX, SVGProps } from 'react';

export default function Navbar() {
  return (
    <header className='border-border border-b'>
      <div className='flex items-center justify-between h-16 max-w-7xl mx-auto'>
        <div className='flex items-center space-x-4'>
          <span className='font-bold'>Token Manager Explorer</span>
        </div>
        <nav className='flex items-center space-x-4'>
          <Link
            href='marketplace'
            className='text-muted-foreground'
            prefetch={false}
          >
            Marketplace
          </Link>
          <Link
            href='profile'
            className='text-muted-foreground'
            prefetch={false}
          >
            <Button variant='ghost' size='icon' className='rounded-full'>
              <UserIcon className='text-orange-500' />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  );
}
