import ty  type?: "website" | "article",e { Metadata } from "next"
import { productCategories } from "@/lib/navigation"
import type { ProductCategory } from "@/types/collections"

interface SeoMetadata {
  title?: string
  description?: string
  image?: string
  category?: ProductCategory
  type?: "product" | "collection" | "page"
  canonical?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  image,
  category,
  type = "page",
  canonical,
  noIndex
}: SeoMetadata): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://steelmade.com"
  const categoryName = category ? productCategories[category] : undefined
  const fullTitle = categoryName 
    ? `${title} - ${categoryName} | SteelMade`
    : `${title} | SteelMade`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type,
      images: image ? [{ url: image }] : undefined,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
    alternates: {
      canonical: canonical ? `${baseUrl}${canonical}` : baseUrl,
    },
    robots: noIndex ? "noindex, nofollow" : "index, follow"
  }
}