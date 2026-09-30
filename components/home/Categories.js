import Link from "next/link";
import React from "react";

const Categories = ({ categories }) => {
  return (
    <section>
      <div>
        <p>All Categories</p>
        <h2>Shop by Category</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categories.map((category) => (
          <Link
            href={`/categories/${category.slug}`}
            key={category.slug}
            className="flex flex-col items-center justify-center gap-2 rounded-lg border p-4 text-center transition hover:scale-105"
          >
            <p>{category.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
