"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { ProductData } from "@/types/products"

interface ProductGridProps {
  products: ProductData[]
  productsPerPage?: number
}

export function ProductGrid({ products, productsPerPage = 8 }: ProductGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(products.length / productsPerPage)
  
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = products.slice(startIndex, endIndex)
  
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">No products found</h3>
        <p className="text-muted-foreground">
          No products are currently available in this collection.
        </p>
      </div>
    )
  }
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <Card key={product.id} className="flex flex-col h-full overflow-hidden group">
            <CardHeader className="p-0 overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.imageUrl || '/images/placeholder-product.webp'}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-semibold px-4 py-2 bg-black/60 rounded-md">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <CardTitle className="mb-2">{product.name}</CardTitle>
              <CardDescription className="line-clamp-3">{product.description}</CardDescription>
              {product.price !== undefined ? (
                <div className="mt-4 font-semibold text-lg">
                  ${product.price.toFixed(2)}
                </div>
              ) : (
                <div className="mt-4 text-sm text-gray-600">
                  Contact for Price
                </div>
              )}
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/${product.category}/${product.seriesId}/${product.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-8">
          <Button 
            onClick={prevPage} 
            disabled={currentPage === 1}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>
          
          <div className="text-muted-foreground">
            Page {currentPage} of {totalPages}
          </div>
          
          <Button 
            onClick={nextPage} 
            disabled={currentPage === totalPages}
            variant="outline"
            className="flex items-center gap-2"
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}