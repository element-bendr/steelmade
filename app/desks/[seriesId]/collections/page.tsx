'use client';

import { ProtectedCollectionsGrid } from "@/components/collections/protected-collections-grid";
import { SubCategoryCollection } from "@/types/collections";
import { ProductType } from "@/types";

interface CollectionsPageProps {
  collections: Record<string, SubCategoryCollection>;
}

export default function CollectionsPage({ collections }: CollectionsPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProtectedCollectionsGrid
        type="desks"
        collections={collections}
      />
    </div>
  );
}
