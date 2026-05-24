// app/layout.tsx
import type { Metadata } from 'next';
import { Bebas_Neue, Barlow } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const barlow = Barlow({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: '⚽ World Cup 2026 Family Bets',
  description: 'Place your bets for the 2026 FIFA World Cup',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${barlow.variable}`}>
        {children}
      </body>
    </html>
  );
}
