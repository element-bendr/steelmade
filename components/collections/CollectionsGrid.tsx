'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { ProductType } from '@/types';
import type { 
  SubCategoryCollection, 
  SubCategoryCollections, 
  EmptySubCategoryCollection,
  SeriesWithProducts
} from '@/types/collections';
import type { ImageAsset } from '@/types/image-types';
import { CollectionCard } from './CollectionCard';
import { CollectionFilters } from './CollectionFilters';
import { Button } from '@/components/ui/button';
import { CollectionEventType } from '@/lib/utils/collection-events';
import { useCollectionEvents } from '@/hooks/use-collection-events';
import { isEmptyCollection } from '@/lib/utils/collection-utils';
import { CollectionsService } from '@/lib/services/collections-service';

interface CollectionFiltersType {
  materials: string[];
  features: string[];
  priceRanges: {
    label: string;
    min: number;
    max: number;
  }[];
}

interface CollectionsGridProps {
  type: ProductType;
  collections: SubCategoryCollections | EmptySubCategoryCollection;
}

/**
 * Grid display of collections with filtering capabilities
 */
export function CollectionsGrid({ type, collections }: CollectionsGridProps) {
  const [displayedCollections, setDisplayedCollections] = useState<SubCategoryCollection[]>(() => {
    if (isEmptyCollection(collections)) {
      return [];
    }
    return Object.entries(collections)
      .map(([id, collection]) => ({
        id,
        ...(collection as SubCategoryCollection)
      }))
      .sort((a, b) => a.metadata.title.localeCompare(b.metadata.title));
  });

  const [selectedFilters, setSelectedFilters] = useState({
    materials: [] as string[],
    features: [] as string[],
    priceRanges: [] as string[],
  });

  const filters: CollectionFiltersType = useMemo(() => {
    const allMaterials = new Set<string>();
    const allFeatures = new Set<string>();
    
    displayedCollections.forEach(collection => {
      collection.materials?.forEach(material => allMaterials.add(material));
      collection.features?.forEach(feature => allFeatures.add(feature));
    });

    return {
      materials: Array.from(allMaterials),
      features: Array.from(allFeatures),
      priceRanges: [], // Add price ranges if needed
    };
  }, [displayedCollections]);

  // Handle filter changes
  const handleFilterChange = useCallback((filterType: string, value: string) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      if (filterType === '') {
        return {
          materials: [],
          features: [],
          priceRanges: [],
        };
      }

      const filterArray = newFilters[filterType as keyof typeof newFilters];
      const index = filterArray.indexOf(value);
      
      if (index === -1) {
        filterArray.push(value);
      } else {
        filterArray.splice(index, 1);
      }

      return newFilters;
    });
  }, []);

  const originalCollections = useMemo(() => {
    if (isEmptyCollection(collections)) {
      return [];
    }
    return Object.entries(collections)
      .map(([id, collection]) => ({
        id,
        ...(collection as SubCategoryCollection)
      }))
      .sort((a, b) => a.metadata.title.localeCompare(b.metadata.title));
  }, [collections]);

  // Apply filters whenever filters change
  useEffect(() => {
    const newCollections = originalCollections.filter(collection => {
      if (selectedFilters.materials.length > 0 && 
          !collection.materials?.some(m => selectedFilters.materials.includes(m))) {
        return false;
      }
      if (selectedFilters.features.length > 0 && 
          !collection.features?.some(f => selectedFilters.features.includes(f))) {
        return false;
      }
      return true;
    });

    setDisplayedCollections(newCollections);
  }, [selectedFilters, originalCollections]);

  const [showAllItems, setShowAllItems] = useState(false);
  const displayLimit = showAllItems ? displayedCollections.length : 5;

  return (
    <div className="space-y-6">
      <CollectionFilters
        type={type}
        filters={filters}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />

      {displayedCollections.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-slate-500 dark:text-slate-400">
            No collections found
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCollections.slice(0, displayLimit).map((collection) => (
              <CollectionCard
                key={collection.id}
                collection={collection}
                type={type}
                subCategory={collection.id}
              />
            ))}
          </div>
          
          {displayedCollections.length > 5 && (
            <div className="text-center mt-8">
              <Button 
                variant="outline"
                onClick={() => setShowAllItems(prev => !prev)}
              >
                {showAllItems ? "Show Fewer Items" : "View More Items"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
