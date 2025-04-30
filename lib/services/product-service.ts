import { SeriesMetadata } from "@/types"

// Type for supported product types
export type ProductType = "chairs" | "desks" | "storage"

// Mock data for testing - replace with real data fetching
const mockData: Record<ProductType, Record<string, SeriesMetadata>> = {
  chairs: {
    "designer-series": {
      title: "Designer Series",
      description: "Premium ergonomic chairs for modern offices",
      seoDescription: "Experience unmatched comfort with our Designer Series office chairs. Premium ergonomic seating solutions crafted for modern workspaces.",
      coverImage: "/images/chairs/designer-series/cover.jpg",
      features: ["Ergonomic Design", "Premium Materials", "Adjustable Support"],
      images: [
        "/images/chairs/designer-series/STEELMADE CHAIRS_page-0002.jpg",
        "/images/chairs/designer-series/STEELMADE CHAIRS_page-0003.jpg",
      ],
      lastModified: new Date("2025-04-15")
    },
    "director-series": {
      title: "Director Series",
      description: "Executive chairs designed for leadership",
      seoDescription: "Experience the pinnacle of comfort and style with our Director Series chairs. Premium materials and ergonomic design for executive offices.",
      coverImage: "/images/chairs/director-series/cover.jpg",
      features: ["Executive Design", "Premium Leather", "Advanced Ergonomics"],
      images: [],
      lastModified: new Date("2025-04-15")
    },
    "executive-series": {
      title: "Executive Series",
      description: "Luxurious comfort for professional spaces",
      seoDescription: "Elevate your workspace with our Executive Series chairs. Combining luxury with ergonomic excellence for the modern professional.",
      coverImage: "/images/chairs/executive-series/cover.jpg",
      features: ["Luxury Materials", "Professional Design", "Superior Comfort"],
      images: [],
      lastModified: new Date("2025-04-15")
    },
    "ergonomic-series": {
      title: "Ergonomic Series",
      description: "Science-backed comfort for all-day productivity",
      seoDescription: "Maximize comfort and productivity with our Ergonomic Series chairs. Scientifically designed for optimal posture and support.",
      coverImage: "/images/chairs/ergonomic-series/cover.jpg",
      features: ["Advanced Ergonomics", "Adjustable Support", "Health-focused Design"],
      images: [],
      lastModified: new Date("2025-04-15")
    }
  },
  desks: {
    "series-a": {
      title: "Series A",
      description: "Modern desks for contemporary workspaces",
      seoDescription: "Discover our Series A desks - a perfect blend of modern design and functionality for today's dynamic workspaces.",
      coverImage: "/images/desks/series-a/cover.jpg",
      features: ["Modern Design", "Spacious Surface", "Cable Management"],
      images: [],
      lastModified: new Date("2025-04-20")
    },
    "series-b": {
      title: "Series B",
      description: "Premium desks with advanced features",
      seoDescription: "Experience premium quality with our Series B desks. Advanced features meet exceptional craftsmanship.",
      coverImage: "/images/desks/series-b/cover.jpg",
      features: ["Premium Build", "Smart Storage", "Ergonomic Design"],
      images: [],
      lastModified: new Date("2025-04-20")
    },
    "series-c": {
      title: "Series C",
      description: "Executive desks for professional settings",
      seoDescription: "Elevate your office with Series C executive desks. Sophisticated design meets unmatched functionality.",
      coverImage: "/images/desks/series-c/cover.jpg",
      features: ["Executive Style", "Premium Materials", "Integrated Technology"],
      images: [],
      lastModified: new Date("2025-04-20")
    }
  },
  storage: {
    "series-a": {
      title: "Series A",
      description: "Versatile storage solutions for modern offices",
      seoDescription: "Transform your workspace with Series A storage solutions. Versatile and stylish organization options.",
      coverImage: "/images/storage/series-a/cover.jpg",
      features: ["Modular Design", "Contemporary Style", "Flexible Configuration"],
      images: [],
      lastModified: new Date("2025-04-10")
    },
    "series-b": {
      title: "Series B",
      description: "Premium storage with advanced organization",
      seoDescription: "Upgrade your office organization with Series B storage. Premium quality meets intelligent design.",
      coverImage: "/images/storage/series-b/cover.jpg",
      features: ["Premium Quality", "Smart Organization", "Customizable Options"],
      images: [],
      lastModified: new Date("2025-04-10")
    },
    "series-c": {
      title: "Series C",
      description: "Executive storage for professional environments",
      seoDescription: "Experience executive-level organization with Series C storage solutions. Sophisticated and practical.",
      coverImage: "/images/storage/series-c/cover.jpg",
      features: ["Executive Design", "High-end Materials", "Maximum Capacity"],
      images: [],
      lastModified: new Date("2025-04-10")
    }
  }
}

// Revalidation time in seconds (1 hour)
export function getRevalidateTime(): number {
  return 3600
}

// Get all series data for a product type
export async function getAllSeries(type: ProductType): Promise<Record<string, SeriesMetadata>> {
  // TODO: Replace with actual API call
  return mockData[type] || {}
}

// Get specific series by ID
export async function getSeriesById(type: ProductType, id: string): Promise<SeriesMetadata | null> {
  // TODO: Replace with actual API call
  return mockData[type]?.[id] || null
}

// Get related series (excluding the current one)
export async function getRelatedSeries(
  type: ProductType,
  currentId: string
): Promise<Record<string, SeriesMetadata>> {
  const allSeries = await getAllSeries(type)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [currentId]: _excluded, ...related } = allSeries
  return related
}

// Get last modified date for a series
export async function getLastModified(type: ProductType, seriesId: string): Promise<Date> {
  // TODO: Replace with actual API call or database query
  return mockData[type]?.[seriesId]?.lastModified || new Date()
}
