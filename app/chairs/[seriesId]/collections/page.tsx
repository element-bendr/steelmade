import { notFound } from "next/navigation";
import { ProtectedCollectionsGrid } from "@/components/collections/protected-collections-grid";
import { SubCategoryCollection } from "@/types/collections";
import { collections } from "@/lib/data/collections-data";

interface PageProps {
  params: {
    seriesId: string;
  };
}

export default function Page({ params }: PageProps) {
  const collection = collections.chairs?.[params.seriesId];

  if (!collection) {
    notFound();
  }

  // Convert each product to a collection, using Object.keys to get accurate count
  const products = collection.products || {};
  const productIds = Object.keys(products);

  const productCollections = productIds.reduce<Record<string, SubCategoryCollection>>((acc, productId) => {
    const product = products[productId];
    acc[productId] = {
      id: productId,
      metadata: {
        title: product.name,
        description: product.description || "",
        seoDescription: product.seoDescription || "",
        coverImage: product.images?.[0] || {
          url: "/images/collections/placeholder-collection.webp",
          width: 800,
          height: 800
        },
        features: product.features || [],
        images: product.images || [],
        lastModified: product.lastModified
      },
      // Ensure materials and features are included at the top level
      materials: product.materials || [],
      features: product.features || [],
      products: {},
      lastModified: typeof product.lastModified === "string"
        ? product.lastModified
        : product.lastModified.toISOString(),
    };
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{collection.title}</h1>
        <p className="text-muted-foreground mt-2">{collection.description}</p>
      </div>

      <ProtectedCollectionsGrid
        type="chairs"
        collections={productCollections}
      />
    </div>
  );
}

export const revalidate = 3600; // Revalidate every hour
