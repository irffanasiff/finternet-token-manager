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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import tableData from '../../../tabledata.json';

interface BalanceChangeItem {
  finternetId?: string;
  before: number;
  after: number;
  change: number;
  symbol: string;
}
const ProductDetailsDashboard = ({
  params,
}: {
  params: {
    txn: string;
  };
}) => {
  // now inside the tableData find the same transaction id
  const transaction = tableData.find((item) => item.txnId === params.txn);

  const balanceChangeData: BalanceChangeItem[] = [
    {
      finternetId: transaction?.from,
      before: parseInt(transaction?.before || '0'),
      after: parseInt(transaction?.after || '0'),
      change: transaction?.units || 0,
      symbol: '-',
    },
    {
      finternetId: transaction?.to,
      before: 0,
      after: transaction?.units || 0,
      change: transaction?.units || 0,
      symbol: '+',
    },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value);
  };

  return (
    <div className='max-w-7xl mx-auto py-16 w-full flex flex-col gap-16 px-12'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/profile'>Profile</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/profile/savings_account'>
              Savings Account
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Transaction Detail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='w-full flex flex-row justify-between items-center'>
        <div className='flex flex-col gap-1 items-start justify-start'>
          <h1 className='text-2xl font-semibold'>Transaction</h1>
          <p className='font-medium text-primary'>{params.txn}</p>
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
        <h1 className='text-2xl font-medium'>Balance Change</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className=''>Finternet Id</TableHead>
              <TableHead className='text-right '>Before</TableHead>
              <TableHead className='text-right'>After</TableHead>
              <TableHead className='text-right'>Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {balanceChangeData.map((item) =>
              item.finternetId ? (
                <TableRow key={item.finternetId}>
                  <TableCell className='text-primary'>
                    {item.finternetId}
                  </TableCell>
                  <TableCell className='text-right'>
                    {formatCurrency(item.before)}
                  </TableCell>
                  <TableCell className='text-right'>
                    {formatCurrency(item.after)}
                  </TableCell>
                  <TableCell
                    className={`text-right ${
                      item.symbol === '+' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {item.symbol}
                    {formatCurrency(item.change)}
                  </TableCell>
                </TableRow>
              ) : (
                ''
              )
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex flex-col gap-4 items-start justify-start w-full'>
        <h1 className='text-2xl font-medium'>Transaction Details</h1>
        <div className='flex flex-col gap-4 w-full text-sm'>
          <div className='rounded-lg flex flex-row justify-between items-center p-4 px-6 bg-card'>
            <div className='text-muted-foreground'>Transaction id</div>
            <div>{params.txn}</div>
          </div>
          <div className='rounded-lg flex flex-row justify-between items-center p-4 px-6 bg-card'>
            <div className='text-muted-foreground'>Verification Status</div>
            <div>{transaction?.verificationStatus}</div>
          </div>
          <div className='rounded-lg flex flex-row justify-between items-center p-4 px-6 bg-card'>
            <div className='text-muted-foreground'>Transaction Status</div>
            <div>{transaction?.txnStatus}</div>
          </div>
          <div className='rounded-lg flex flex-row justify-between items-center p-4 px-6 bg-card'>
            <div className='text-muted-foreground'>Asset Action</div>
            <div>{transaction?.action}</div>
          </div>
          <div className='rounded-lg flex flex-row justify-between items-center p-4 px-6 bg-card'>
            <div className='text-muted-foreground'>User Action</div>
            <div>{transaction?.actionType}</div>
          </div>
          <div className='rounded-lg flex flex-row justify-between items-center p-4 px-6 bg-card'>
            <div className='text-muted-foreground'>Units</div>
            <div>{transaction?.units}</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 items-start justify-start w-full'>
        <h1 className='text-2xl font-medium'>Logs</h1>
        <div className='flex flex-col gap-4 w-full text-sm'>
          <div className='rounded-lg flex flex-row justify-between items-center p-4 px-6 bg-card'>
            <div className='text-muted-foreground'>Transaction id</div>
            <div>{params.txn}</div>
          </div>
          <div className='rounded-lg flex flex-row justify-between items-center p-4 px-6 bg-card'>
            <div className='text-muted-foreground'>Verification Status</div>
            <div>{transaction?.verificationStatus}</div>
          </div>
          <div className='rounded-lg flex flex-row justify-between items-center p-4 px-6 bg-card'>
            <div className='text-muted-foreground'>Transaction Status</div>
            <div>{transaction?.txnStatus}</div>
          </div>
          <div className='rounded-lg flex flex-row justify-between items-center p-4 px-6 bg-card'>
            <div className='text-muted-foreground'>Asset Action</div>
            <div>{transaction?.action}</div>
          </div>
          <div className='rounded-lg flex flex-row justify-between items-center p-4 px-6 bg-card'>
            <div className='text-muted-foreground'>User Action</div>
            <div>{transaction?.actionType}</div>
          </div>
          <div className='rounded-lg flex flex-row justify-between items-center p-4 px-6 bg-card'>
            <div className='text-muted-foreground'>Units</div>
            <div>{transaction?.units}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsDashboard;
