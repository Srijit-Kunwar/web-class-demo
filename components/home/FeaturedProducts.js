import Image from "next/image";
import React from "react";
import ProductCard from "../product/productCard";

const FeaturedProducts = ({ products }) => {
  return (
    <section>
      <div>
        <p>Check out our featured products</p>
        <h2>Featured Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
