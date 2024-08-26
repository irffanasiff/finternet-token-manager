import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { JSX, SVGProps } from 'react';
import { BankingProduct } from '@/utils/types';
import Link from 'next/link';

export default function ProductCard({ product }: { product: BankingProduct }) {
  return (
    <Card className='w-full max-w-[394px] rounded-lg'>
      <CardHeader className='py-8 flex flex-col items-start gap-6'>
        <BanknoteIcon className='w-12 h-12 text-[#FF5722]' />
        <div>
          <CardTitle className='text-[20px] font-medium'>
            {product.name}
          </CardTitle>
          <CardDescription className='mt-1 text-sm font-light text-muted-foreground'>
            {product.description}
          </CardDescription>
        </div>
      </CardHeader>
      <div className='w-full h-[1px] bg-white' />
      <CardFooter className='p-4'>
        <div className='flex flex-row gap-4 w-full'>
          <Link href={product.action.navigateTo} className='w-full'>
            <Button
              variant={product.action.buttonVariant}
              size={'lg'}
              className='w-full'
            >
              {product.action.buttonText}{' '}
              <ArrowRightIcon className='ml-2 w-4 h-4' />
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

function ArrowRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d='m12 5 7 7-7 7' />
    </svg>
  );
}

function BanknoteIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      width='58'
      height='58'
      viewBox='0 0 58 58'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M41.0834 33.8334H45.9167V41.0834H53.1667V45.9167H45.9167V53.1667H41.0834V45.9167H33.8334V41.0834H41.0834V33.8334ZM27.7917 2.41675L50.75 14.5001V19.3334H4.83337V14.5001L27.7917 2.41675ZM38.6667 24.1667H45.9167V29.1934L43.5 29.0001C41.8084 29.0001 40.1892 29.2901 38.6667 29.8217V24.1667ZM4.83337 53.1667V45.9167H29.1934C29.6525 48.6717 30.9092 51.1609 32.6975 53.1667H4.83337ZM24.1667 24.1667H31.4167V35.4767C30.305 37.1442 29.5317 39.0292 29.1934 41.0834H24.1667V24.1667ZM9.66671 24.1667H16.9167V41.0834H9.66671V24.1667Z'
        fill='#F26E34'
      />
    </svg>
  );
}
