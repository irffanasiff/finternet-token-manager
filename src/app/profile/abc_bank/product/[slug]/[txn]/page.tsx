import { Button } from '@/components/ui/button';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const ProductDetailsDashboard = () => {
  interface BalanceChangeItem {
    finternetId: string;
    before: number;
    after: number;
    change: number;
  }

  const balanceChangeData: BalanceChangeItem[] = [
    {
      finternetId: 'vikram@finternet',
      before: 12467,
      after: 12010.3,
      change: -456.7,
    },
    {
      finternetId: 'nidhi@finternet',
      before: 1827,
      after: 2283.7,
      change: 456.7,
    },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value);
  };
  return (
    <div className='max-w-7xl mx-auto py-16 w-full flex flex-col gap-16'>
      {' '}
      <div className='w-full flex flex-row justify-between items-center'>
        <div className='flex flex-col gap-1 items-start justify-start'>
          <h1 className='text-2xl font-semibold'>Transaction</h1>
          <p className='font-light text-primary'>
            0x1a9f6e8d3b2c4b5e8f6d7a8c9e1b2d3a4c5b6d7e8f9a1b2c3d4e5f6a7b8
          </p>
        </div>
        <div className='flex flex-row gap-2'>
          <Button size={'lg'} variant={'warning'}>
            Report
          </Button>{' '}
          <Button size={'lg'} variant={'destructive'}>
            Freeze Txn
          </Button>
        </div>
      </div>
      <div className='flex flex-col gap-4 items-start justify-start w-full'>
        <h1 className='text-2xl font-medium'>Details</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[250px]'>Finternet Id</TableHead>
              <TableHead className='text-right'>Before</TableHead>
              <TableHead className='text-right'>After</TableHead>
              <TableHead className='text-right'>Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {balanceChangeData.map((item) => (
              <TableRow key={item.finternetId}>
                <TableCell>{item.finternetId}</TableCell>
                <TableCell className='text-right'>
                  {formatCurrency(item.before)}
                </TableCell>
                <TableCell className='text-right'>
                  {formatCurrency(item.after)}
                </TableCell>
                <TableCell
                  className={`text-right ${
                    item.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {item.change >= 0 ? '+' : ''}
                  {formatCurrency(item.change)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductDetailsDashboard;
