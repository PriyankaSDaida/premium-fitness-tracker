import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'FitTrack Premium',
  description: 'Manage your health and fitness with elegance.',
};

import LayoutWrapper from '@/components/Layout/LayoutWrapper';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
