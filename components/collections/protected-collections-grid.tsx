"use client";

import { ErrorBoundaryWrapper } from '@/components/error-boundary/client-error-boundary';
import { CollectionsGrid } from './CollectionsGrid';
import type { ProductType } from '@/types';
import type { SubCategoryCollections, EmptySubCategoryCollection } from '@/types/collections';

interface ProtectedCollectionsGridProps {
  type: ProductType;
  collections: SubCategoryCollections | EmptySubCategoryCollection;
}

export function ProtectedCollectionsGrid({ type, collections }: ProtectedCollectionsGridProps) {
  return (
    <ErrorBoundaryWrapper>
      <CollectionsGrid type={type} collections={collections} />
    </ErrorBoundaryWrapper>
  );
}
