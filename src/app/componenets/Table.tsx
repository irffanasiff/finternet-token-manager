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
import Link from 'next/link';
import TableData from '../tabledata.json';
import { usePathname } from 'next/navigation';

export default function TransactionsTableData() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const pathname = usePathname();
  const data = TableData;

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
                <Link href={pathname + '/' + row.txnId} key={index}>
                  <div className='flex items-center space-x-2'>
                    <span className='hover:underline'>
                      {row.txnId.slice(0, 6)}...
                      {row.txnId.slice(row.txnId.length - 6)}
                    </span>
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
                </Link>
              </TableCell>
              <TableCell className='text-[#1D68BF]'>
                {row.finternetId}
              </TableCell>
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
