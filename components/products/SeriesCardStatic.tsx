import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { SeriesMetadata } from "@/types"

interface SeriesCardStaticProps {
  series: SeriesMetadata
  className?: string
}

export function SeriesCardStatic({ series, className }: SeriesCardStaticProps) {
  return (
    <div className={className}>
      <Card className="morphism-card group flex flex-col overflow-hidden">
        <div className="relative aspect-video overflow-hidden rounded-t-lg before:absolute before:inset-0 before:bg-gradient-morphism before:opacity-0">
          <OptimizedImage
            src={series.coverImage}
            alt={series.title}
            aspectRatio="16/9"
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-semibold text-text">{series.title}</CardTitle>
          <CardDescription className="text-text-muted leading-relaxed">{series.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {series.features.map((feature) => (
              <Badge 
                key={feature} 
                variant="secondary" 
                className="morphism-surface bg-white/50 text-text-muted"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
