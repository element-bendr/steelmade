import { Skeleton } from "@/components/ui/skeleton"

export default function StorageLoading() {
  return (
    <main className="container py-12">
      <Skeleton className="h-12 w-48 mb-8" />
      <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="aspect-square rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </main>
  )
}
