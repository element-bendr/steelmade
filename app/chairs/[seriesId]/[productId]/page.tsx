import { notFound } from 'next/navigation';
import { getProductById, getSeriesById } from '@/lib/services/product-service'; // Corrected import
import type { ProductData } from '@/types/products';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image'; // Import next/image
import ProductImageGallery from '@/components/products/ProductImageGallery';
import ProductInformation from '@/components/products/ProductInformation';
import Breadcrumbs from '@/components/ui/Breadcrumbs'; // Import Breadcrumbs
import type { BreadcrumbItem } from '@/components/ui/Breadcrumbs'; // Import BreadcrumbItem type
import { getCategoryUrl } from '@/lib/navigation'; // Correctly only import getCategoryUrl
import ProductPageLayout from '@/components/products/ProductPageLayout'; // Add this line

type ProductDetailPageProps = {
  params: {
    // categorySlug: string; // This will be implicitly 'chairs' due to the folder structure
    seriesId: string;
    productId: string;
  };
};

export async function generateMetadata(
  { params }: ProductDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await getProductById('chairs', params.seriesId, params.productId); // Corrected call

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  // Optionally, access and extend parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${product.name} - SteelMade`, //e.g. "Ergonomic Task Chair - SteelMade"
    description: product.description, // Use product's own description
    openGraph: {
      title: `${product.name} - SteelMade`,
      description: product.description,
      images: product.images?.length ? product.images.map(img => ({ url: img.url, alt: img.alt })) : (product.imageUrl ? [{ url: product.imageUrl, alt: product.name }] : []),
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  // Fetch both product and series details in parallel for efficiency
  const [product, series] = await Promise.all([
    getProductById('chairs', params.seriesId, params.productId), // Corrected call
    getSeriesById('chairs', params.seriesId) // Corrected call
  ]);

  if (!product || !series) {
    notFound();
  }

  return (
    <ProductPageLayout product={product} category="chairs" series={series} />
    // <div className="container mx-auto px-4 py-8">
    //   <Breadcrumbs items={breadcrumbItems} />
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
    //     <ProductImageGallery images={product.images || (product.imageUrl ? [{url: product.imageUrl, alt: product.name, width: 800, height: 600}] : [])} productName={product.name} />
    //     <ProductInformation product={product} />
    //   </div>
    //   {/* TODO: Related products section (Optional) */}
    // </div>
  );
}
