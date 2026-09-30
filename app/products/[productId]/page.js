import { getProductById } from "@/lib/api/products";
import { notFound } from "next/navigation";
import React from "react";

const ProductByID = async ({ params }) => {
  const { productId } = await params;

  let product;
  try {
    product = await getProductById(productId);
  } catch {
    notFound();
  }
  if (!product?.id) {
    notFound();
  }

  return (
    <main>
      <h1>Product Name : {product.title}</h1>
      <p>{product.description}</p>
      <h2>Price:{product.price}</h2>
    </main>
  );
};

export default ProductByID;
