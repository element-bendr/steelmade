"use client"

import { useEffect, useState } from 'react'
import type { ProductData } from '@/types/products'
import type { ProductCategory } from '@/types/collections'

export function useProducts(category: ProductCategory, seriesId: string) {
  const [products, setProducts] = useState<ProductData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`/api/products/${category}/${seriesId}`)
        if (!response.ok) throw new Error('Failed to fetch products')
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [category, seriesId])

  return { products, isLoading, error } }
}