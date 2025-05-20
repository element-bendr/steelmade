import { CategoryCollections } from "@/types/collections";

export function generateCollectionSchema(collections: CategoryCollections) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": Object.entries(collections).flatMap(([category, subCategories]) =>
      Object.entries(subCategories).map(([seriesId, series], index) => ({
        "@type": "Product",
        "position": index + 1,
        "name": series.metadata.title,
        "description": series.metadata.description,
        "image": series.metadata.coverImage.url,
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": series.priceRange.min.replace("$", ""),
          "highPrice": series.priceRange.max.replace("$", ""),
          "priceCurrency": "USD"
        }
      }))
    )
  };
}

export default function CollectionsSchema({ collections }: { collections: CategoryCollections }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateCollectionSchema(collections))
      }}
    />
  );
}
