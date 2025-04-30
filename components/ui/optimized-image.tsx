"use client"

import Image from "next/image"
import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  sizes?: string
  aspectRatio?: string
  onError?: (error: Error) => void
}

const defaultBlurDataURL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZjNmNGY2Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWJlY2YwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkKSIvPjwvc3ZnPg=="

export function OptimizedImage({
  src,
  alt,
  width = 1080,
  height = 720,
  className,
  priority = false,
  quality = 85,
  sizes = "(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, 100vw",
  aspectRatio = "4/3",
  onError,
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleError = useCallback((error: Error) => {
    setHasError(true)
    onError?.(error)
  }, [onError])

  const handleLoad = useCallback(() => {
    setLoading(false)
  }, [])

  if (hasError) {
    return (
      <div 
        className={cn(
          "bg-gray-100 flex items-center justify-center",
          className
        )}
        style={{ aspectRatio }}
      >
        <span className="text-sm text-gray-500">Failed to load image</span>
      </div>
    )
  }

  return (
    <div 
      className="overflow-hidden"
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={defaultBlurDataURL}
        className={cn(
          "duration-700 ease-in-out will-change-[transform,filter]",
          isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0",
          className
        )}
        onLoad={handleLoad}
        onError={() => handleError(new Error(`Failed to load image: ${src}`))}
      />
    </div>
  )
}
