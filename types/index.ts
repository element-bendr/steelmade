export interface SeriesMetadata {
  title: string
  description: string
  seoDescription: string
  coverImage: string
  features: string[]
  images: string[]  // Added images array
  lastModified?: Date // Added lastModified field
}
