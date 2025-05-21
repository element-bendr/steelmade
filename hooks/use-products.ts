"use client"

import { useEffect, useState } from 'react'
import type { ProductData } from '@/types/products'
import type { ProductCategory } from '@/types/collections'

export function useProducts(category: ProductCategory, seriesId: string) {
  const [products, setProducts] = useState<ProductData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProducts = async () => {
    setIsLoading(true)
    setError(null)
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

  useEffect(() => {
    fetchProducts()
  }, [category, seriesId, fetchProducts]) // Added fetchProducts to the dependency array

  return { products, isLoading, error, refetch: fetchProducts }
}