import { Metadata } from "next"
import { Suspense } from "react"
import { SeriesGrid } from "@/components/products"
import { RevalidatingIndicator } from "@/components/ui/revalidating-indicator"
import { getAllSeries, getRevalidateTime } from "@/lib/services/product-service"

export const metadata: Metadata = {
  title: "Office Desks | SteelMade",
  description: "Browse our collection of modern office desks designed for productivity. From executive to standing desks, find the perfect workspace solution.",
}

export default async function DesksPage() {
  const seriesData = await getAllSeries("desks")

  return (
    <main className="container mx-auto px-4 py-8">
      <RevalidatingIndicator />
      
      <h1 className="mb-4 text-4xl font-bold">Office Desks</h1>
      <p className="mb-8 max-w-3xl text-muted-foreground">
        Explore our range of premium office desks, from executive workstations to 
        height-adjustable solutions. Each desk is engineered for optimal workflow 
        and crafted with durability in mind.
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
          productType="desks"
        />
      </Suspense>
    </main>
  )
}

export const revalidate = getRevalidateTime()
