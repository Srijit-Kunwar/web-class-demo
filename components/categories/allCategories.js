// /components/product/allProducts.js
import React from "react";
// import ProductCard from "./productCard";
import CategoryCard from "./categoryCard"

const AllCategories = ({ category }) => {
  return (
    <section>
      <div>
        {/* <p>Check out our All categories</p> */}
        <h2>All Categories</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.map((cat) => (
          <CategoryCard category={cat} key={cat.id} />
        ))}
      </div>
    </section>
  );
};

export default AllCategories;
