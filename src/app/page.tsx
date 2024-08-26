import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Globe, User } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='container mx-auto px-4 py-32 max-w-4xl'>
      <header className='text-center mb-12'>
        <h1 className='text-3xl font-bold mb-4'>
          Welcome to the Token Manager Dashboard
        </h1>
        <p className='text-lg text-muted-foreground px-24'>
          Use the token manager dashboard to manage your products and onboard
          your users onto the finternet.
        </p>
      </header>

      <div className='flex items-center justify-center gap-8'>
        <Link href='/marketplace'>
          <Card className='flex flex-col items-center text-center p-6'>
            <CardHeader className='flex items-center justify-center pb-2'>
              <div className='w-16 h-16 bg-[#777777]/10 rounded-full flex items-center justify-center mb-4'>
                <Globe className='w-8 h-8 text-[#777777]' />
              </div>
              <CardTitle className='text-2xl '>Explore Products</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className='text-muted-foreground'>
                Explore different kind of products in the marketplace and deploy
                as per your needs.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href='/profile'>
          <Card className='flex flex-col items-center text-center p-6 '>
            <CardHeader className='flex items-center justify-center pb-2'>
              <div className='w-16 h-16 bg-[#777777]/10 rounded-full flex items-center justify-center mb-4'>
                <User className='w-8 h-8 text-[#777777]' />
              </div>
              <CardTitle className='text-2xl'>Current Account</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className='text-muted-foreground'>
                View your banks finternet profile and manage all your products
                directly from the dashboard
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
