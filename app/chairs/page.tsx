import { Suspense } from "react";
import { Metadata } from "next";
import { getSeriesForCategory } from "@/lib/api/products";
import ProductCategoryPageLayout from "@/components/products/ProductCategoryPageLayout";
import { Skeleton } from "@/components/ui/skeleton";

// Revalidate every hour
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Chairs",
  description: "Explore our diverse collection of high-quality chairs, designed for comfort, style, and durability. Find the perfect seating solution for your home or office.",
  openGraph: {
    title: "Chairs | SteelMade",
    description: "Explore our diverse collection of high-quality chairs.",
    images: [
      {
        url: "/images/chairs/collection-cover.jpg",
        width: 1200,
        height: 630,
        alt: "SteelMade Chair Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chairs | SteelMade",
    description: "Explore our diverse collection of high-quality chairs.",
    images: ["/images/chairs/collection-cover.jpg"],
  },
  alternates: {
    canonical: "/chairs",
  },
};

export default async function ChairsPage() {
  const seriesData = await getSeriesForCategory("chairs");

  const pageTitle = "Chairs";
  const pageDescription = "Explore our diverse collection of high-quality chairs, designed for comfort, style, and durability. Find the perfect seating solution for your home or office.";
  const breadcrumbItems = [
    { name: "Home", item: "/" },
    { name: "Chairs", item: "/chairs" }
  ];

  return (
    <Suspense fallback={
      <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-[400px] rounded-xl" />
        ))}
      </div>
    }>
      <ProductCategoryPageLayout
        category="chairs"
        seriesData={seriesData}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        breadcrumbItems={breadcrumbItems}
      />
    </Suspense>
  );
}
