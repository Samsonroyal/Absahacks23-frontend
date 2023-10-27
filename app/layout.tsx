import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import Toast from './toast';
import { Suspense } from 'react';


export const metadata = {
  title: 'Blockfam ',
  description:
    'An admin dashboard built to streamline the loan underwriting and verification process with a smart contract.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        <Analytics />
        <Toast />
      </body>
    </html>
  );
}
