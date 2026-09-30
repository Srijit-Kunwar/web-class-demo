// /products/page.js

import AllProducts from "@/components/product/allProducts";
import { getProducts } from "@/lib/api/products";
import React from "react";

const ProductPage = async () => {
  const [products] = await Promise.all([getProducts()]);

  const allProducts = products.products;
  return (
    <div>
      <AllProducts products={allProducts} />
    </div>
  );
};

export default ProductPage;
