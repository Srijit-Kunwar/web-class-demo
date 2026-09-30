import React from "react";
import { getProducts, getCategories } from "@/lib/api/products";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  const featuredProducts = products.products.slice(0, 8); 

  return (
    <main>
      {/* hero section */}
      {/* all categories */}
      <Categories categories={categories} />
      {/* featured products section */}
      <FeaturedProducts products={featuredProducts} />
    </main>
  );
}
