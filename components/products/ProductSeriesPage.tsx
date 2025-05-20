"use client"

import { CollectionCarousel } from "@/components/collections/CollectionCarousel" // Keep for now, might remove later
import { ProductGrid } from "@/components/products/ProductGrid"
import { FeaturedProductsDisplay } from "@/components/products/FeaturedProductsDisplay" // Import the new component
import type { SeriesMetadata, ProductCategory } from "@/types/collections"
import type { ProductData } from "@/types/products"

interface ProductSeriesPageProps {
  series: SeriesMetadata
  products: ProductData[]
  category: ProductCategory
  seriesId: string
}

export default function ProductSeriesPage({ 
  series, 
  products,
  category, // Keep category if needed by other parts or for future use
  seriesId // Keep seriesId if needed
}: ProductSeriesPageProps) {
  // Determine featured products - e.g., first 4 products or based on a flag
  // For now, let's assume the first 4 are featured. This can be made more sophisticated.
  const featuredProducts = products.slice(0, 4);
  const remainingProducts = products.slice(4);

  return (
    <div className="container py-12 space-y-12"> {/* Increased spacing */}
      {/* Series Title and Description */}
      <div className="text-center mb-8"> {/* Centered title and description */}
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{series.title}</h1>
        <p className="mt-4 text-xl text-muted-foreground">{series.description}</p>
      </div>
      
      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <FeaturedProductsDisplay 
          products={featuredProducts} 
          title={`Featured ${series.title}`}
          category={category} // Pass category
          seriesId={seriesId} // Pass seriesId
        />
      )}
      
      {/* Main Product Grid Section */}
      {remainingProducts.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            All {series.title}
          </h2>
          <ProductGrid products={remainingProducts} />
        </section>
      )}

      {series.features && series.features.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2">
            {series.features.map((feature, index) => (
              <li key={index} className="text-muted-foreground">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* {series.specifications && Object.keys(series.specifications).length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            {Object.entries(series.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b pb-2">
                <dt className="font-medium">{key}</dt>
                <dd className="text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )} */}
    </div>
  )
}
