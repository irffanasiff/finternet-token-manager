'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import useBankStore from '@/utils/store/useBankStore';
import { useRouter } from 'next/navigation';

const DeployProduct = ({ params }: { params: { slug: string } }) => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  // add banking product
  const { addBankingProduct } = useBankStore();
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/profile');
    addBankingProduct({
      id: '1',
      name: 'Savings Account',
      description:
        'Savings account for your customers, powered by the Finterent.',
      icon: 'bank',
      action: {
        buttonText: 'View Details',
        navigateTo: '/profile/abc_bank/product/1',
      },
    });
  };

  return (
    <div className='mx-auto max-w-7xl py-16 flex flex-col items-start gap-14'>
      <div className='flex flex-col gap-1 items-start justify-start'>
        <h1 className='text-2xl font-semibold'>
          Configure Savings Account Product
        </h1>
        <p className='font-light'>
          Configure the savings account deployment for your users
        </p>
      </div>

      <div className='flex gap-12 w-full'>
        <div className='max-w-[280px]  w-full'>
          <nav className='space-y-4'>
            <div
              className={`w-full px-4 py-2 rounded-md ${
                step === 1 ? 'bg-card' : 'bg-none'
              }`}
            >
              Bank Configurations
            </div>
            <div
              className={`w-full px-4 py-2 rounded-md ${
                step === 2 ? 'bg-card' : 'bg-none'
              }`}
            >
              Account Configurations
            </div>
            <div
              className={`w-full px-4 py-2 rounded-md ${
                step === 3 ? 'bg-card' : 'bg-none'
              }`}
            >
              Verification & KYC
            </div>
          </nav>
        </div>
        <div className='pl-8 w-full'>
          <form className='space-y-6 w-full min-h-[600px]'>
            {step === 1 && <BankConfigurations />}
            {step === 2 && <AccountConfigurations />}
            {step === 3 && <VerificationKYC />}
          </form>
          <div className='flex justify-between pt-8 max-w-[520px] '>
            {step > 1 && (
              <Button
                size={'lg'}
                className='w-44 rounded-lg'
                variant='secondary'
                onClick={prevStep}
              >
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button
                size={'lg'}
                className='w-44 rounded-lg'
                onClick={nextStep}
              >
                Next
              </Button>
            ) : (
              <Button
                size={'lg'}
                className='w-44 rounded-lg'
                onClick={handleSubmit}
              >
                Deploy
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const BankConfigurations = () => {
  return (
    <div className='flex flex-col max-w-[520px] gap-10'>
      <div>
        <Label className='block text-lg font-medium mb-6'>
          Select Savings Account Types*
        </Label>
        <div className='space-y-3'>
          <div className='px-4 py-3 border border-border rounded-lg flex-row items-center gap-3 flex w-full justify-start'>
            <Checkbox className='size-5 ' />
            Regular Savings Account
          </div>
          <div className='px-4 py-3 border border-border rounded-lg flex-row items-center gap-3 flex w-full justify-start'>
            <Checkbox className='size-5' />
            Basic Savings Account
          </div>
          <div className='px-4 py-3 border border-border rounded-lg flex-row items-center gap-3 flex w-full justify-start '>
            <Checkbox className='size-5' />
            Salary Based Savings Account
          </div>
          {/* <div className='px-4 py-3 border border-border rounded-lg flex-row items-center gap-3 flex w-full justify-start'>
            <Checkbox className='size-5' />
            Merchant Current Account
          </div>
          <div className='px-4 py-3 border border-border rounded-lg flex-row items-center gap-3 flex w-full justify-start'>
            <Checkbox className='size-5' />
            Special Current Account
          </div> */}
        </div>
      </div>
      <div>
        <Label
          htmlFor='interest-rate'
          className='block text-lg font-medium mb-2'
        >
          Interest Rate*
        </Label>
        <Input
          id='interest-rate'
          value={3.4}
          type='number'
          placeholder='Enter Interest Rate Value'
        />
      </div>
      <div>
        <Label
          htmlFor='transfer-limit'
          className='block text-lg font-medium mb-2'
        >
          Maximum Transfer limit over a year
        </Label>
        <Input
          id='transfer-limit'
          value={10000000}
          type='number'
          placeholder='Enter Value'
        />
      </div>
      <div className='hidden'>
        <Label
          htmlFor='jurisdictions'
          className='block text-lg font-medium mb-2'
        >
          Restricted Jurisdictions
        </Label>
        <Input id='jurisdictions' placeholder='Enter Value' />
      </div>
    </div>
  );
};

const AccountConfigurations = () => {
  return (
    <div className='flex flex-col max-w-[520px] gap-10'>
      <div>
        <Label htmlFor='min-amount' className='block text-lg font-medium mb-2'>
          Minimum Amount to Tokenise
        </Label>
        <Input
          id='min-amount'
          value={10}
          type='number'
          placeholder='Enter Value'
        />
      </div>
      <div>
        <Label htmlFor='max-amount' className='block text-lg font-medium mb-2'>
          Maximum Limit to Tokenise
        </Label>
        <Input
          id='max-amount'
          value={10000000}
          type='number'
          placeholder='Enter Value'
        />
      </div>
    </div>
  );
};

const VerificationKYC = () => {
  return (
    <div className='flex flex-col max-w-[520px] gap-10'>
      <div className='flex flex-col w-full items-center gap-6'>
        <div className='flex-row justify-between items-center gap-3 flex w-full'>
          <p>KYC Required</p>
          <Checkbox className='size-5 ' defaultChecked />
        </div>
        <div className='flex-row justify-between items-center gap-3 flex w-full'>
          <p>Cross Border Payments</p>
          <Checkbox className='size-5' disabled />
        </div>
      </div>
    </div>
  );
};

function CheckIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M20 6 9 17l-5-5' />
    </svg>
  );
}

export default DeployProduct;
