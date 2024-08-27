import { TransactionsChart } from '@/app/componenets/Chart';
import TransactionsTableData from '@/app/componenets/Table';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const ProductDetailsDashboard = () => {
  return (
    <div className='max-w-7xl mx-auto py-16 w-full flex flex-col gap-16 px-12'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/profile'>Profile</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Saving Account</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='flex flex-col gap-1 items-start justify-start'>
        <h1 className='text-2xl font-semibold'>Savings Account</h1>
        <p className='font-light text-muted-foreground'>
          Description of Fixed Deposit Smart Contract will come here
        </p>
      </div>
      <div className='flex flex-col gap-4 items-start justify-start w-full'>
        <h1 className='text-2xl font-semibold'>Transactions</h1>
        <TransactionsChart />
        <TransactionsTableData />
      </div>
    </div>
  );
};

export default ProductDetailsDashboard;
