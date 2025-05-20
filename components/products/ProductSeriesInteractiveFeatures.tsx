"use client"

import Link from "next/link"
import { GradientButton } from "@/components/ui/gradient-button"
import { ArrowLeft } from "lucide-react"
import { ImageCarousel } from "@/components/ui/image-carousel"
import { SeriesMetadata } from "@/types"
import { getImageAsset } from "@/lib/utils/image-utils"

interface ProductSeriesInteractiveFeaturesProps {
  series: SeriesMetadata
  backLink: string
  backText: string
}

export function ProductSeriesInteractiveFeatures({
  series,
  backLink,
  backText
}: ProductSeriesInteractiveFeaturesProps) {
  return (
    <>
      <div className="mb-8">
        <Link href={backLink} legacyBehavior passHref>
          <GradientButton className="mb-4 gap-2 text-black">
            <ArrowLeft className="h-4 w-4" />
            {backText}
          </GradientButton>
        </Link>
      </div>      <div className="order-2 lg:order-1">        <ImageCarousel 
          images={[
            getImageAsset(series.coverImage, series.title), 
            ...(series.images?.map(img => getImageAsset(img, series.title)) || [])
          ].filter(Boolean)}
          title={series.title}
          aspectRatio="4/3"
          quality={85}
        />
      </div>
      
      <div className="mt-8">
        <GradientButton asLink href="/contact" className="gap-2 text-black">
          Request Quote
          <ArrowLeft className="h-4 w-4 rotate-180" />
        </GradientButton>
      </div>
    </>
  )
}
