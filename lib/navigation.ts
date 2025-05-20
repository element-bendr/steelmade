import type { ProductCategory } from "@/types/collections"

export interface NavigationItem {
  title: string
  href: string
  category?: ProductCategory
  children?: NavigationItem[]
}

// Updated to link to top-level category pages
export function getCategoryUrl(category: ProductCategory, seriesId?: string) {
  return seriesId 
    ? `/${category}/${seriesId}` // Assumes series are sub-routes of top-level category pages
    : `/${category}`
}

export function getProductUrl(category: ProductCategory, seriesId: string, productId: string) {
  return `/${category}/${seriesId}/${productId}`;
}

// Updated to include all categories and use slugs consistent with page routes
export const productCategories: Record<ProductCategory, string> = {
  chairs: "Chairs",
  desks: "Desks",
  storage: "Storage",
  "school-furniture": "School Furniture",
  "hospital-furniture": "Hospital Furniture",
  "racking-systems": "Racking Systems",
  "storage-solutions": "Storage Solutions",
}

export const mainNavigation: NavigationItem[] = [
  {
    title: "Products", // Changed from "Collections" to "Products"
    href: "/products", // Link to a potential top-level products overview page or the first category
    children: Object.entries(productCategories).map(([category, title]) => ({
      title,
      href: `/${category}`, // Links to top-level category pages like /chairs, /desks
      category: category as ProductCategory
    }))
  }
  // ... other main navigation items like "About Us", "Contact", etc.
]