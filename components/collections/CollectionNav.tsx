"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getCategoryUrl, productCategories } from "@/lib/navigation"
import type { ProductCategory } from "@/types/collections"

interface CollectionNavProps {
  currentCategory?: ProductCategory;
}

export function CollectionNav({ currentCategory }: CollectionNavProps) {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center gap-2 py-4 overflow-x-auto">
        {Object.entries(productCategories).map(([category, label]) => (
          <Link 
            key={category}
            href={getCategoryUrl(category as ProductCategory)}
            className="shrink-0"
          >
            <Button
              variant={pathname?.includes(category) ? "default" : "outline"}
              size="sm"
              className="whitespace-nowrap"
            >
              {label}
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  )
}