"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { productCategories } from "@/lib/navigation"
import type { ProductCategory } from "@/types/collections"

interface CategoryNavProps {
  currentCategory?: ProductCategory
}

export function CategoryNav({ currentCategory }: CategoryNavProps) {
  return (
    <nav className="flex flex-wrap gap-2 mb-8">
      {Object.entries(productCategories).map(([category, title]) => (
        <Link 
          key={category} 
          href={`/${category}`}
          className="shrink-0"
        >
          <Button
            variant={currentCategory === category ? "default" : "outline"}
            className="whitespace-nowrap"
          >
            {title}
          </Button>
        </Link>
      ))}
    </nav>
  )
}