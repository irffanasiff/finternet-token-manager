import React from 'react';
import ProductCard from '../componenets/ProductCard';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import productsData from '../data.json';
import { BankingProduct } from '@/utils/types';
import { Card, CardHeader } from '@/components/ui/card';

const Marketplace = () => {
  return (
    <div className='mx-auto max-w-7xl py-24 flex flex-col items-start gap-12'>
      <div className='flex flex-col gap-1 w-full'>
        <div className='text-[28px] '>Products Marketplace</div>
        <p className='text-[16px] font-light text-muted-foreground'>
          Select and deploy products for your users. Manage these products
          directly from your dashboard.
        </p>
      </div>
      <div className='hidden items-center justify-between w-full'>
        <h1 className='text-xl font-medium'>Banking Products</h1>
        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Search'
              className='pl-8 bg-card rounded-md border-none'
            />
          </div>
          <Select>
            <SelectTrigger className='bg-card rounded-md'>
              <SelectValue placeholder='Select Bank Type' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='type1'>Type 1</SelectItem>
              <SelectItem value='type2'>Type 2</SelectItem>
              <SelectItem value='type3'>Type 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Card className='w-full rounded-lg'>
        <CardHeader className='py-4 flex flex-row justify-between items-start gap-6'>
          <div>Products Imported from CBS</div>
          <p className='underline font-normal text-secondary-foreground'>
            Learn More
          </p>
        </CardHeader>
      </Card>
      <div className='flex flex-row gap-12 flex-wrap justify-center'>
        {productsData.bankingProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
function SearchIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
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
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  );
}
export default Marketplace;
