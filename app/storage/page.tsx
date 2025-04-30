import { Metadata } from "next"
import { Suspense } from "react"
import { SeriesGrid } from "@/components/products"
import { RevalidatingIndicator } from "@/components/ui/revalidating-indicator"
import { getAllSeries, getRevalidateTime } from "@/lib/services/product-service"

export const metadata: Metadata = {
  title: "Storage Solutions | SteelMade",
  description: "Discover our range of office storage solutions. From cabinets to shelving systems, find organized storage that enhances your workspace efficiency.",
}

export default async function StoragePage() {
  const seriesData = await getAllSeries("storage")

  return (
    <main className="container mx-auto px-4 py-8">
      <RevalidatingIndicator />
      
      <h1 className="mb-4 text-4xl font-bold">Storage Solutions</h1>
      <p className="mb-8 max-w-3xl text-muted-foreground">
        Transform your workspace with our innovative storage solutions. From compact 
        filing systems to expansive storage units, our range combines practicality 
        with contemporary design to keep your office organized and efficient.
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
          productType="storage"
        />
      </Suspense>
    </main>
  )
}

export const revalidate = getRevalidateTime()
