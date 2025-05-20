"use client";

import { GradientButton } from '@/components/ui/gradient-button';

export function ProductActions({
  price,
  sku
}: {
  price: string;
  sku: string;
}) {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">${price}</span>
        <span className="text-sm text-muted-foreground">SKU: {sku}</span>
      </div>
      
      <GradientButton className="mt-4 w-full py-3">
        Request a Quote
      </GradientButton>
    </div>
  );
}
