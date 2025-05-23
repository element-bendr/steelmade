import { Suspense } from "react";
import { Metadata } from "next";
import { getSeriesForCategory } from "@/lib/api/products";
import ProductCategoryPageLayout from "@/components/products/ProductCategoryPageLayout";
import ProductGridSkeleton from "@/components/products/ProductGridSkeleton";

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
  // This data fetch will be streamed with Suspense
  const seriesData = await getSeriesForCategory("chairs");

  const pageTitle = "Chairs";
  const pageDescription = "Explore our diverse collection of high-quality chairs, designed for comfort, style, and durability. Find the perfect seating solution for your home or office.";  const breadcrumbItems = [
    { name: "Home", item: "/" },
    { name: "Chairs", item: "/chairs" }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Office Chairs</h1>
      <p className="text-gray-600 mb-8">
        Explore our diverse collection of high-quality chairs, designed for comfort, 
        style, and durability. Find the perfect seating solution for your home or office.
      </p>
      
      {/* Use Suspense for streaming the chair series data */}      <Suspense fallback={<ProductGridSkeleton items={8} />}>
        <ProductCategoryPageLayout
          category="chairs"
          seriesData={seriesData}
          pageTitle={pageTitle}
          pageDescription={pageDescription}
          breadcrumbItems={breadcrumbItems}
        />
      </Suspense>
    </main>
  );
}
