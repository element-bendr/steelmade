"use client"

import Image from "next/image"
import Link from "next/link"
import type { ProductData } from "@/types/products"
import { cn } from "@/lib/utils"

interface FeaturedProductsDisplayProps {
  products: ProductData[]
  title?: string
  className?: string
  category: string
  seriesId: string
}

export function FeaturedProductsDisplay({ 
  products, 
  title, 
  className, 
  category,
  seriesId
}: FeaturedProductsDisplayProps) {
  if (!products || products.length === 0) {
    return null // Or some placeholder for no products
  }

  return (
    <section className={cn("py-8", className)}>
      {title && (
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-center">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Link 
            key={product.id} 
            href={`/${category}/${seriesId}/${product.id}`} // Use passed category and seriesId
            className="group block overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[4/3] w-full bg-muted">
              <Image
                src={product.imageUrl || "/images/placeholder-alt.png"} // Fallback placeholder
                alt={product.name || "Product image"}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold leading-tight text-gray-800 group-hover:text-primary">
                {product.name}
              </h3>
              {product.description && ( // Changed from shortDescription to description
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {product.description} {/* Changed from shortDescription to description */}
                </p>
              )}
              <p className="mt-2 text-base font-medium text-gray-900">
                {product.price ? `$${Number(product.price).toFixed(2)}` : "Contact for Price"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
