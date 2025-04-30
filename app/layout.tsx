import React from 'react';
import './globals.css';
import { Header } from './components/header';
import { Footer } from './components/footer';

export const metadata = {
  title: 'SteelMade Website',
  description: 'High-quality steel manufacturing solutions'
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
