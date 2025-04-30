import { Metadata } from "next"
import { Suspense } from "react"
import { SeriesGrid } from "@/components/products"
import { RevalidatingIndicator } from "@/components/ui/revalidating-indicator"
import { getAllSeries, getRevalidateTime } from "@/lib/services/product-service"

export const metadata: Metadata = {
  title: "Office Chairs | SteelMade",
  description: "Explore our range of ergonomic office chairs designed for comfort and productivity. Find the perfect chair for your workspace.",
}

export default async function ChairsPage() {
  const seriesData = await getAllSeries("chairs")

  return (
    <main className="container mx-auto px-4 py-8">
      <RevalidatingIndicator />
      
      <h1 className="mb-4 text-4xl font-bold">Office Chairs</h1>
      <p className="mb-8 max-w-3xl text-muted-foreground">
        Discover our collection of ergonomically designed office chairs. Each series 
        is crafted to provide optimal comfort and support for long working hours, 
        combining innovative design with premium materials.
      </p>

      <Suspense fallback={
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-[400px] animate-pulse bg-gray-200 rounded-xl" />
          ))}
        </div>
      }>
        <SeriesGrid 
          seriesData={seriesData}
          productType="chairs"
        />
      </Suspense>
    </main>
  )
}

export const revalidate = getRevalidateTime()
