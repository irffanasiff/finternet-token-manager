'use client';
import { Copy, CopyCheck } from 'lucide-react';
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const data = [
  {
    txnId: '0x1a9f6e8d3b...',
    finternetId: 'vikram@finternet',
    action: 'Detokenize',
    actionType: 'SEND',
    units: 10.87,
    time: 'a sec ago',
    verificationStatus: 'Approved',
    txnStatus: 'Success',
  },
  {
    txnId: '0x1a9f6e8d3b...',
    finternetId: 'amit@finternet',
    action: 'Tokenize',
    actionType: 'RECEIVE',
    units: 456.4,
    time: 'a sec ago',
    verificationStatus: 'Approved',
    txnStatus: 'Success',
  },
  {
    txnId: '0x1a9f6e8d3b...',
    finternetId: 'priya@finternet',
    action: 'Detokenize',
    actionType: 'SEND',
    units: 100000.0,
    time: 'a sec ago',
    verificationStatus: 'Pending',
    txnStatus: 'Pending',
  },
  {
    txnId: '0x1a9f6e8d3b...',
    finternetId: 'sanjay@finternet',
    action: 'Tokenize',
    actionType: 'RECEIVE',
    units: 34768.34,
    time: 'a sec ago',
    verificationStatus: 'Pending',
    txnStatus: 'Pending',
  },
  {
    txnId: '0x3b5d7f9d6e...',
    finternetId: 'asha@finternet',
    action: 'Tokenize',
    actionType: 'RECEIVE',
    units: 234.5,
    time: 'a sec ago',
    verificationStatus: 'Approved',
    txnStatus: 'Success',
  },
  {
    txnId: '0x1a9f6e8d3b...',
    finternetId: 'rajesh@finternet',
    action: 'Detokenize',
    actionType: 'WITHDRAW',
    units: 1000.0,
    time: '2 sec ago',
    verificationStatus: 'Approved',
    txnStatus: 'Success',
  },
  {
    txnId: '0x1a9f6e8d3b...',
    finternetId: 'meera@finternet',
    action: 'Tokenize',
    actionType: 'RECEIVE',
    units: 1298.12,
    time: '2 sec ago',
    verificationStatus: 'Rejected',
    txnStatus: 'Success',
  },
  {
    txnId: '0x4e3f2d1c7b...',
    finternetId: 'yash@finternet',
    action: 'Tokenize',
    actionType: 'TOPUP',
    units: 11678.0,
    time: '2 sec ago',
    verificationStatus: 'Approved',
    txnStatus: 'Success',
  },
];

export default function TransactionsTableData() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getActionStyle = (action: string) => {
    switch (action) {
      case 'Detokenize':
        return 'text-orange-500';
      case 'Tokenize':
        return 'text-green-500';
      default:
        return '';
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-blue-100 text-blue-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className='w-full'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Txn Id</TableHead>
            <TableHead>Finternet Id</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Units</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Verification Status</TableHead>
            <TableHead>Txn Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className='font-medium'>
                <div className='flex items-center space-x-2'>
                  <span>{row.txnId}</span>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='h-8 w-8'
                    onClick={() => handleCopy(row.txnId)}
                  >
                    {copiedId === row.txnId ? (
                      <CopyCheck className='h-4 w-4' />
                    ) : (
                      <Copy className='h-4 w-4' />
                    )}
                  </Button>
                </div>
              </TableCell>
              <TableCell>{row.finternetId}</TableCell>
              <TableCell>
                <div className='flex items-center space-x-2'>
                  <span className={getActionStyle(row.action)}>
                    {row.action}
                  </span>
                  <span className='px-2 py-1 text-xs font-medium uppercase bg-gray-100 rounded-full'>
                    {row.actionType}
                  </span>
                </div>
              </TableCell>
              <TableCell>{row.units.toLocaleString()}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(
                    row.verificationStatus
                  )}`}
                >
                  {row.verificationStatus}
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(
                    row.txnStatus
                  )}`}
                >
                  {row.txnStatus}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
