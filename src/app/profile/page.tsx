'use client';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import useBankStore from '@/utils/store/useBankStore';
import { JSX, SVGProps } from 'react';
import ProductCard from '../componenets/ProductCard';
import Link from 'next/link';

export default function Component() {
  const { data } = useBankStore();
  return (
    <div className='max-w-7xl mx-auto flex flex-col gap-16 py-16'>
      <div className='flex items-center space-x-4'>
        <Avatar className='size-16 bg-[#FE2E64] rounded-md'>
          <AvatarImage
            src='/placeholder-user.jpg'
            className='bg-[#FE2E64]'
            alt='ABC Bank'
          />
        </Avatar>
        <div>
          <h1 className='text-xl font-semibold'>ABC Bank</h1>
          <p className='text-muted-foreground text-base'>ABC Bank of People</p>
        </div>
      </div>
      <div>
        <div className='flex flex-col items-start justify-start gap-8'>
          <h2 className='text-lg font-semibold'>Deployed Assets</h2>
          <div className='flex flex-row items-start justify-start w-full gap-12 flex-wrap'>
            {data.bankingProducts.map((product: any) => (
              <ProductCard
                product={{
                  id: '1',
                  name: product.name,
                  description: product.description,
                  icon: product.icon,
                  action: {
                    buttonVariant: 'secondary',
                    buttonText: product.action.buttonText,
                    navigateTo: product.action.navigateTo,
                  },
                }}
              />
            ))}
            <Link href='/marketplace'>
              <div className='h-full min-h-[296px] border border-dashed border-border rounded-lg p-8 text-center flex flex-col items-center justify-center'>
                <PlusIcon className='w-12 h-12 mx-auto text-muted-foreground' />
                <h3 className='mt-4 text-xl font-medium'>Add Asset</h3>
                <p className='mt-2 font-light text-muted-foreground text-center max-w-[320px]'>
                  Explore products on the marketplace and deploy them for your
                  customers.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d='M5 12h14' />
      <path d='M12 5v14' />
    </svg>
  );
}
