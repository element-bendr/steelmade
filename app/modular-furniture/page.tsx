// app/modular-furniture/page.tsx
import { Metadata } from "next";
import ProductCategoryPageLayout from "@/components/products/ProductCategoryPageLayout";
// Corrected: Added getAllSeries import
import { getCategoryData, getAllSeries, getRevalidateTime } from "@/lib/services/product-service";
import { getImageUrl } from "@/lib/utils/image-utils";

export const revalidate = getRevalidateTime();

export async function generateMetadata(): Promise<Metadata> {
  const category = await getCategoryData("modular-furniture");
  if (!category) return {};

  const title = category.title || "Modular Furniture | SteelMade";
  const description = category.seoDescription || "Explore our versatile modular furniture solutions.";
  const imageUrl = category.coverImage ? getImageUrl(category.coverImage) : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `https://steelmade.com/modular-furniture`,
    },
  };
}

export default async function ModularFurniturePage() {
  const categoryData = await getCategoryData("modular-furniture");
  // Fetched full series data using getAllSeries
  const allSeriesForCategory = await getAllSeries("modular-furniture");

  if (!categoryData) {
    return <div>Modular furniture category not found.</div>;
  }

  // seriesData is now correctly populated with full SeriesMetadata objects
  const seriesData = allSeriesForCategory;

  const pageTitle = categoryData.title || "Modular Furniture";
  const pageDescription = categoryData.seoDescription || "Explore our versatile modular furniture solutions.";
  const breadcrumbItems = [
    { name: "Home", item: "https://steelmade.com" },
    { name: pageTitle, item: `https://steelmade.com/modular-furniture` },
  ];

  return (
    <ProductCategoryPageLayout
      category={categoryData}
      seriesData={seriesData} // Passed the full series data
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      breadcrumbItems={breadcrumbItems}
    />
  );
}
