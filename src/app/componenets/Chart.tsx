'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
  {
    date: '2024-06-01',
    totalTransactions: 5280,
    tokenizeTransactions: 3600,
    detokenizeTransactions: 1680,
  },
  {
    date: '2024-06-02',
    totalTransactions: 6420,
    tokenizeTransactions: 4750,
    detokenizeTransactions: 1670,
  },
  {
    date: '2024-06-03',
    totalTransactions: 27840,
    tokenizeTransactions: 23000,
    detokenizeTransactions: 4840,
  },
  {
    date: '2024-06-04',
    totalTransactions: 27050,
    tokenizeTransactions: 22400,
    detokenizeTransactions: 4650,
  },
  {
    date: '2024-06-05',
    totalTransactions: 8720,
    tokenizeTransactions: 6800,
    detokenizeTransactions: 1920,
  },
  {
    date: '2024-06-06',
    totalTransactions: 8160,
    tokenizeTransactions: 6200,
    detokenizeTransactions: 1960,
  },
  {
    date: '2024-06-07',
    totalTransactions: 29500,
    tokenizeTransactions: 25000,
    detokenizeTransactions: 4500,
  },
  {
    date: '2024-06-08',
    totalTransactions: 19830,
    tokenizeTransactions: 15600,
    detokenizeTransactions: 4230,
  },
  {
    date: '2024-06-09',
    totalTransactions: 10560,
    tokenizeTransactions: 7480,
    detokenizeTransactions: 3080,
  },
  {
    date: '2024-06-10',
    totalTransactions: 25440,
    tokenizeTransactions: 21800,
    detokenizeTransactions: 3640,
  },
  {
    date: '2024-06-11',
    totalTransactions: 21350,
    tokenizeTransactions: 17500,
    detokenizeTransactions: 3850,
  },
  {
    date: '2024-06-12',
    totalTransactions: 6750,
    tokenizeTransactions: 5040,
    detokenizeTransactions: 1710,
  },
  {
    date: '2024-06-13',
    totalTransactions: 29920,
    tokenizeTransactions: 25100,
    detokenizeTransactions: 4820,
  },
  {
    date: '2024-06-14',
    totalTransactions: 23340,
    tokenizeTransactions: 19400,
    detokenizeTransactions: 3940,
  },
  {
    date: '2024-06-15',
    totalTransactions: 18420,
    tokenizeTransactions: 14400,
    detokenizeTransactions: 4020,
  },
  {
    date: '2024-06-16',
    totalTransactions: 25560,
    tokenizeTransactions: 21000,
    detokenizeTransactions: 4560,
  },
  {
    date: '2024-06-17',
    totalTransactions: 4860,
    tokenizeTransactions: 3000,
    detokenizeTransactions: 1860,
  },
  {
    date: '2024-06-18',
    totalTransactions: 29750,
    tokenizeTransactions: 25400,
    detokenizeTransactions: 4350,
  },
  {
    date: '2024-06-19',
    totalTransactions: 5580,
    tokenizeTransactions: 4160,
    detokenizeTransactions: 1420,
  },
  {
    date: '2024-06-20',
    totalTransactions: 9400,
    tokenizeTransactions: 7200,
    detokenizeTransactions: 2200,
  },
  {
    date: '2024-06-21',
    totalTransactions: 26480,
    tokenizeTransactions: 22000,
    detokenizeTransactions: 4480,
  },
  {
    date: '2024-06-22',
    totalTransactions: 23100,
    tokenizeTransactions: 18600,
    detokenizeTransactions: 4500,
  },
  {
    date: '2024-06-23',
    totalTransactions: 17340,
    tokenizeTransactions: 14600,
    detokenizeTransactions: 2740,
  },
  {
    date: '2024-06-24',
    totalTransactions: 15480,
    tokenizeTransactions: 12600,
    detokenizeTransactions: 2880,
  },
  {
    date: '2024-06-25',
    totalTransactions: 5920,
    tokenizeTransactions: 4200,
    detokenizeTransactions: 1720,
  },
  {
    date: '2024-06-26',
    totalTransactions: 29500,
    tokenizeTransactions: 25000,
    detokenizeTransactions: 4500,
  },
  {
    date: '2024-06-27',
    totalTransactions: 6320,
    tokenizeTransactions: 4200,
    detokenizeTransactions: 2120,
  },
  {
    date: '2024-06-28',
    totalTransactions: 28200,
    tokenizeTransactions: 23400,
    detokenizeTransactions: 4800,
  },
  {
    date: '2024-06-29',
    totalTransactions: 10700,
    tokenizeTransactions: 8400,
    detokenizeTransactions: 2300,
  },
  {
    date: '2024-06-30',
    totalTransactions: 10780,
    tokenizeTransactions: 7900,
    detokenizeTransactions: 2880,
  },
  {
    date: '2024-07-01',
    totalTransactions: 20520,
    tokenizeTransactions: 16800,
    detokenizeTransactions: 3720,
  },
  {
    date: '2024-07-02',
    totalTransactions: 4920,
    tokenizeTransactions: 3600,
    detokenizeTransactions: 1320,
  },
  {
    date: '2024-07-03',
    totalTransactions: 14780,
    tokenizeTransactions: 12000,
    detokenizeTransactions: 2780,
  },
  {
    date: '2024-07-04',
    totalTransactions: 26600,
    tokenizeTransactions: 22200,
    detokenizeTransactions: 4400,
  },
  {
    date: '2024-07-05',
    totalTransactions: 13460,
    tokenizeTransactions: 10800,
    detokenizeTransactions: 2660,
  },
  {
    date: '2024-07-06',
    totalTransactions: 12740,
    tokenizeTransactions: 10000,
    detokenizeTransactions: 2740,
  },
  {
    date: '2024-07-07',
    totalTransactions: 18700,
    tokenizeTransactions: 14600,
    detokenizeTransactions: 4100,
  },
  {
    date: '2024-07-08',
    totalTransactions: 15800,
    tokenizeTransactions: 11900,
    detokenizeTransactions: 3900,
  },
  {
    date: '2024-07-09',
    totalTransactions: 5080,
    tokenizeTransactions: 3500,
    detokenizeTransactions: 1580,
  },
  {
    date: '2024-07-10',
    totalTransactions: 5120,
    tokenizeTransactions: 3700,
    detokenizeTransactions: 1420,
  },
  {
    date: '2024-07-11',
    totalTransactions: 11020,
    tokenizeTransactions: 8100,
    detokenizeTransactions: 2920,
  },
  {
    date: '2024-07-12',
    totalTransactions: 14680,
    tokenizeTransactions: 10800,
    detokenizeTransactions: 3880,
  },
  {
    date: '2024-07-13',
    totalTransactions: 19600,
    tokenizeTransactions: 15700,
    detokenizeTransactions: 3900,
  },
  {
    date: '2024-07-14',
    totalTransactions: 31180,
    tokenizeTransactions: 26200,
    detokenizeTransactions: 4980,
  },
  {
    date: '2024-07-15',
    totalTransactions: 21160,
    tokenizeTransactions: 16800,
    detokenizeTransactions: 4360,
  },
  {
    date: '2024-07-16',
    totalTransactions: 28020,
    tokenizeTransactions: 23100,
    detokenizeTransactions: 4920,
  },
  {
    date: '2024-07-17',
    totalTransactions: 12380,
    tokenizeTransactions: 9400,
    detokenizeTransactions: 2980,
  },
  {
    date: '2024-07-18',
    totalTransactions: 12360,
    tokenizeTransactions: 10200,
    detokenizeTransactions: 2160,
  },
  {
    date: '2024-07-19',
    totalTransactions: 20900,
    tokenizeTransactions: 16800,
    detokenizeTransactions: 4100,
  },
  {
    date: '2024-07-20',
    totalTransactions: 18320,
    tokenizeTransactions: 14400,
    detokenizeTransactions: 3920,
  },
  {
    date: '2024-07-21',
    totalTransactions: 14200,
    tokenizeTransactions: 10600,
    detokenizeTransactions: 3600,
  },
  {
    date: '2024-07-22',
    totalTransactions: 9320,
    tokenizeTransactions: 7100,
    detokenizeTransactions: 2220,
  },
  {
    date: '2024-07-23',
    totalTransactions: 24220,
    tokenizeTransactions: 18700,
    detokenizeTransactions: 5520,
  },
  {
    date: '2024-07-24',
    totalTransactions: 31120,
    tokenizeTransactions: 26200,
    detokenizeTransactions: 4920,
  },
  {
    date: '2024-07-25',
    totalTransactions: 30060,
    tokenizeTransactions: 24400,
    detokenizeTransactions: 5660,
  },
  {
    date: '2024-07-26',
    totalTransactions: 24020,
    tokenizeTransactions: 19600,
    detokenizeTransactions: 4420,
  },
  {
    date: '2024-07-27',
    totalTransactions: 15420,
    tokenizeTransactions: 11800,
    detokenizeTransactions: 3620,
  },
  {
    date: '2024-07-28',
    totalTransactions: 18320,
    tokenizeTransactions: 13700,
    detokenizeTransactions: 4620,
  },
  {
    date: '2024-07-29',
    totalTransactions: 11120,
    tokenizeTransactions: 8200,
    detokenizeTransactions: 2920,
  },
  {
    date: '2024-07-30',
    totalTransactions: 30680,
    tokenizeTransactions: 25700,
    detokenizeTransactions: 4980,
  },
  {
    date: '2024-07-31',
    totalTransactions: 21300,
    tokenizeTransactions: 16200,
    detokenizeTransactions: 5100,
  },
  {
    date: '2024-08-01',
    totalTransactions: 8280,
    tokenizeTransactions: 6120,
    detokenizeTransactions: 2160,
  },
  {
    date: '2024-08-02',
    totalTransactions: 25960,
    tokenizeTransactions: 20800,
    detokenizeTransactions: 5160,
  },
  {
    date: '2024-08-03',
    totalTransactions: 5080,
    tokenizeTransactions: 3400,
    detokenizeTransactions: 1680,
  },
  {
    date: '2024-08-04',
    totalTransactions: 14500,
    tokenizeTransactions: 10800,
    detokenizeTransactions: 3700,
  },
  {
    date: '2024-08-05',
    totalTransactions: 26160,
    tokenizeTransactions: 19500,
    detokenizeTransactions: 6660,
  },
  {
    date: '2024-08-06',
    totalTransactions: 9320,
    tokenizeTransactions: 6120,
    detokenizeTransactions: 3200,
  },
  {
    date: '2024-08-07',
    totalTransactions: 15160,
    tokenizeTransactions: 11500,
    detokenizeTransactions: 3660,
  },
  {
    date: '2024-08-08',
    totalTransactions: 9280,
    tokenizeTransactions: 7000,
    detokenizeTransactions: 2280,
  },
  {
    date: '2024-08-09',
    totalTransactions: 6000,
    tokenizeTransactions: 4700,
    detokenizeTransactions: 1300,
  },
  {
    date: '2024-08-10',
    totalTransactions: 16200,
    tokenizeTransactions: 12000,
    detokenizeTransactions: 4200,
  },
  {
    date: '2024-08-11',
    totalTransactions: 24360,
    tokenizeTransactions: 20100,
    detokenizeTransactions: 4260,
  },
  {
    date: '2024-08-12',
    totalTransactions: 29920,
    tokenizeTransactions: 24200,
    detokenizeTransactions: 5720,
  },
  {
    date: '2024-08-13',
    totalTransactions: 9280,
    tokenizeTransactions: 7400,
    detokenizeTransactions: 1880,
  },
  {
    date: '2024-08-14',
    totalTransactions: 8080,
    tokenizeTransactions: 6100,
    detokenizeTransactions: 1980,
  },
  {
    date: '2024-08-15',
    totalTransactions: 9200,
    tokenizeTransactions: 6800,
    detokenizeTransactions: 2400,
  },
  {
    date: '2024-08-16',
    totalTransactions: 22920,
    tokenizeTransactions: 18600,
    detokenizeTransactions: 4320,
  },
  {
    date: '2024-08-17',
    totalTransactions: 19580,
    tokenizeTransactions: 14800,
    detokenizeTransactions: 4780,
  },
  {
    date: '2024-08-18',
    totalTransactions: 21920,
    tokenizeTransactions: 16500,
    detokenizeTransactions: 5420,
  },
  {
    date: '2024-08-19',
    totalTransactions: 17420,
    tokenizeTransactions: 13000,
    detokenizeTransactions: 4420,
  },
  {
    date: '2024-08-20',
    totalTransactions: 3920,
    tokenizeTransactions: 2700,
    detokenizeTransactions: 1220,
  },
  {
    date: '2024-08-21',
    totalTransactions: 27260,
    tokenizeTransactions: 21200,
    detokenizeTransactions: 6060,
  },
  {
    date: '2024-08-22',
    totalTransactions: 20060,
    tokenizeTransactions: 16200,
    detokenizeTransactions: 3860,
  },
  {
    date: '2024-08-23',
    totalTransactions: 24820,
    tokenizeTransactions: 19600,
    detokenizeTransactions: 5220,
  },
  {
    date: '2024-08-24',
    totalTransactions: 16120,
    tokenizeTransactions: 12400,
    detokenizeTransactions: 3720,
  },
  {
    date: '2024-08-25',
    totalTransactions: 11820,
    tokenizeTransactions: 8700,
    detokenizeTransactions: 3120,
  },
  {
    date: '2024-08-26',
    totalTransactions: 6820,
    tokenizeTransactions: 5200,
    detokenizeTransactions: 1620,
  },
  {
    date: '2024-08-27',
    totalTransactions: 13940,
    tokenizeTransactions: 10000,
    detokenizeTransactions: 3940,
  },
  {
    date: '2024-08-28',
    totalTransactions: 25900,
    tokenizeTransactions: 24800,
    detokenizeTransactions: 1100,
  },
];

const chartConfig = {
  views: {
    label: 'Transactions',
  },
  totalTransactions: {
    label: 'totalTransactions',
    color: 'hsl(var(--chart-1))',
  },
  tokenizeTransactions: {
    label: 'tokenizeTransactions',
    color: 'hsl(var(--chart-2))',
  },
  detokenizeTransactions: {
    label: 'detokenizeTransactions',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function TransactionsChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('totalTransactions');

  const total = React.useMemo(
    () => ({
      tokenizeTransactions: chartData.reduce(
        (acc, curr) => acc + curr.tokenizeTransactions,
        0
      ),
      detokenizeTransactions: chartData.reduce(
        (acc, curr) => acc + curr.detokenizeTransactions,
        0
      ),
    }),
    []
  );

  return (
    <Card className='w-full'>
      <CardHeader className='flex flex-col items-stretch space-y-0 border-b-2 border-white p-0 sm:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6'>
          <CardTitle>
            <h1 className='text-2xl'>25,900</h1>
          </CardTitle>
          <CardDescription>
            <p className='font-light'>Transactions per sec.</p>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className='px-2 sm:p-6'>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-[250px] w-full'
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className='w-[150px]'
                  nameKey='views'
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`#CACACA`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
