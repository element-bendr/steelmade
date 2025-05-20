import { Metadata } from "next"
import { notFound } from "next/navigation"
import { default as ProductSeriesPage } from "@/components/products/ProductSeriesPage"
import { getSeriesById, getRelatedSeries, getAllSeries, getRevalidateTime } from "@/lib/services/product-service"
import { getImageUrl } from "@/lib/utils/image-utils"

interface DeskSeriesPageProps {
  params: {
    seriesId: string
  }
}

export async function generateMetadata({ params }: DeskSeriesPageProps): Promise<Metadata> {
  const series = await getSeriesById("desks", params.seriesId)
  if (!series) return {}

  const title = `${series.title} | Office Desks | SteelMade`
  const description = series.seoDescription
  const imageUrl = getImageUrl(series.coverImage)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [imageUrl],
      locale: "en_US",
      siteName: "SteelMade Office Furniture",
      publishedTime: new Date().toISOString(),
      authors: ["SteelMade"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@steelmade",
      site: "@steelmade",
    },
    alternates: {
      canonical: `https://steelmade.com/desks/${params.seriesId}`,
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

export default async function DeskSeriesPage({ params }: DeskSeriesPageProps) {
  const [series, relatedSeries] = await Promise.all([
    getSeriesById("desks", params.seriesId),
    getRelatedSeries("desks", params.seriesId)
  ])

  if (!series) notFound()

  return (
    <ProductSeriesPage
      series={series}
      productType="desks"
      backLink="/desks"
      backText="Back to Desks"
      relatedSeriesData={relatedSeries}
    />
  )
}

export async function generateStaticParams() {
  const allSeries = await getAllSeries("desks")
  return Object.keys(allSeries).map((seriesId) => ({
    seriesId,
  }))
}

export const revalidate = getRevalidateTime()
