import type { ProductCategory as ProductCategoryType } from "./collections";

export interface ProductImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  images?: ProductImage[];
  price?: string | number;
  inStock?: boolean;
  features?: string[];
  specifications?: Record<string, string>;
  relatedProducts?: string[];
  slug: string;
}

export type ProductType =
  | "chairs"
  | "desks"
  | "storage-solutions" // Changed from "storage"
  | "hospital-furniture"
  | "school-furniture"
  | "racking-systems"
  | "modular-furniture"; // Added modular-furniture

export type ProductCategory =
  | "Chairs"
  | "Desks"
  | "Storage Solutions" // Changed from "Storage"
  | "Hospital Furniture"
  | "School Furniture"
  | "Racking Systems"
  | "Modular Furniture"; // Added Modular Furniture

export interface ProductCategoryPageData {
  name: string;
  description?: string;
  products: Product[];
  featuredProducts?: Product[];
  subcategories?: ProductCategoryPageData[];
}

export interface ProductData {
  id: string;
  name: string;
  description: string;
  price?: number;
  imageUrl: string;
  images?: ProductImage[];
  category: ProductCategoryType;
  seriesId: string;
  features: string[];
  specifications?: Record<string, string>;
  inStock: boolean;
  relatedProducts?: string[];
}
