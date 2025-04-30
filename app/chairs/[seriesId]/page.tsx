import { Metadata } from "next"
import { notFound } from "next/navigation"
import { default as ProductSeriesPage } from "@/components/products/ProductSeriesPage"
import { getSeriesById, getRelatedSeries, getAllSeries, getRevalidateTime } from "@/lib/services/product-service"

interface ChairSeriesPageProps {
  params: {
    seriesId: string
  }
}

export async function generateMetadata({ params }: ChairSeriesPageProps): Promise<Metadata> {
  const series = await getSeriesById("chairs", params.seriesId)
  if (!series) return {}

  const title = `${series.title} | Office Chairs | SteelMade`
  const description = series.seoDescription

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article", // Changed from "product" to "article" as Next.js Metadata doesn't support "product" type
      images: [
        {
          url: series.coverImage,
          width: 1200,
          height: 630,
          alt: series.title,
        }
      ],
      locale: "en_US",
      siteName: "SteelMade Office Furniture",
      publishedTime: new Date().toISOString(), // Added since we're using article type
      authors: ["SteelMade"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [series.coverImage],
      creator: "@steelmade",
      site: "@steelmade",
    },
    alternates: {
      canonical: `https://steelmade.com/chairs/${params.seriesId}`,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    }
  }
}

export default async function ChairSeriesPage({ params }: ChairSeriesPageProps) {
  const [series, relatedSeries] = await Promise.all([
    getSeriesById("chairs", params.seriesId),
    getRelatedSeries("chairs", params.seriesId)
  ])

  if (!series) notFound()

  return (
    <ProductSeriesPage
      series={series}
      productType="chairs"
      backLink="/chairs"
      backText="Back to Chairs"
      relatedSeriesData={relatedSeries}
    />
  )
}

export async function generateStaticParams() {
  const allSeries = await getAllSeries("chairs")
  return Object.keys(allSeries).map((seriesId) => ({
    seriesId,
  }))
}

export const revalidate = getRevalidateTime()
