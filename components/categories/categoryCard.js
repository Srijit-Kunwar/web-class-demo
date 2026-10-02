import Link from 'next/link'
import React from 'react'

const CategoryCard = ({category}) => {
console.log(category)
  return (
      <Link
            href={`/categories/${category.slug}`}
            key={category.slug}
            className="flex flex-col items-center justify-center gap-2 rounded-lg border p-4 text-center transition hover:scale-105"
          >
            <p>{category.name}</p>
          </Link>
  )
}

export default CategoryCard
