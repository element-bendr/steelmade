import { Suspense } from "react"
import { Badge } from "@/components/ui/badge"
import { SeriesMetadata } from "@/types"
import { SeriesGrid } from "./SeriesGrid"
import { capitalize } from "@/lib/utils"
import { ProductSeriesInteractiveFeatures } from "./ProductSeriesInteractiveFeatures"
import { RevalidatingIndicator } from "@/components/ui/revalidating-indicator"
import { ProductType } from "@/lib/services/product-service"
import Script from "next/script"

interface ProductSeriesPageProps {
  series: SeriesMetadata
  productType: ProductType
  backLink: string
  backText: string
  relatedSeriesData?: Record<string, SeriesMetadata>
}

export default function ProductSeriesPage({ 
  series, 
  productType, 
  backLink,
  backText,
  relatedSeriesData
}: ProductSeriesPageProps) {
  // Construct the JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: series.title,
    description: series.description,
    image: series.coverImage,
    brand: {
      "@type": "Brand",
      name: "SteelMade"
    },
    category: `Office ${capitalize(productType)}`,
    manufacturer: {
      "@type": "Organization",
      name: "SteelMade",
      url: "https://steelmade.com"
    },
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
      itemCondition: "https://schema.org/NewCondition"
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Script
        id={`product-jsonld-${series.title}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <RevalidatingIndicator />
      
      <h1 className="mb-4 text-4xl font-bold">{series.title}</h1>
      <p className="max-w-3xl text-muted-foreground">{series.description}</p>

      <div className="mb-12 grid gap-8 lg:grid-cols-2">
        {/* Left side: Interactive Features */}
        <Suspense fallback={
          <div className="h-[400px] animate-pulse bg-gray-200 rounded-xl" />
        }>
          <ProductSeriesInteractiveFeatures
            series={series}
            backLink={backLink}
            backText={backText}
          />
        </Suspense>

        {/* Right side: Product info */}
        <div className="order-1 lg:order-2">
          <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
          <div className="mb-6 flex flex-wrap gap-2">
            {series.features.map((feature) => (
              <Badge 
                key={feature} 
                variant="secondary" 
                className="text-base"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* About section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">About {series.title}</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground">
            Our {series.title} represents the pinnacle of {productType.slice(0, -1)} technology.
            Each piece is meticulously crafted using premium materials and advanced
            engineering principles to deliver unparalleled quality and functionality.
            Whether you're furnishing a corporate office or enhancing your home
            workspace, these {productType} are designed to exceed your expectations.
          </p>
        </div>
      </section>

      {/* Related Products */}
      {relatedSeriesData && Object.keys(relatedSeriesData).length > 0 && (
        <Suspense fallback={
          <div className="h-[300px] animate-pulse bg-gray-200 rounded-xl" />
        }>
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold">
              Explore Other {capitalize(productType)}
            </h2>
            <SeriesGrid 
              seriesData={relatedSeriesData}
              productType={productType}
            />
          </section>
        </Suspense>
      )}
    </main>
  )
}
