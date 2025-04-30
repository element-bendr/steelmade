import React from 'react';
import { Testimonials } from './components/testimonials';
import { GradientButton } from '../components/ui/gradient-button';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">SteelMade Website</h1>
        <p className="mt-4 text-lg text-gray-700">
          Welcome to SteelMade Website - your partner in high-quality steel manufacturing.
        </p>
        <GradientButton asLink href="/contact" className="mt-6">
          Get in Touch
        </GradientButton>
      </div>
      <Testimonials />
    </main>
  );
}
