// /components/product/allProducts.js
import React from "react";
import ProductCard from "./productCard";

const AllProducts = ({ products }) => {
  return (
    <section>
      <div>
        {/* <p>Check out our All Products</p> */}
        <h2>All Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
  