import AllCategories from '@/components/categories/allCategories';
import {getCategories} from '@/lib/api/products';

import React from 'react'

const CategoryPage = async() => {
  const category = await getCategories()
  console.log(category)
  return (
    <div>
      <AllCategories category={category}/>
    </div>
  )
}

export default CategoryPage
