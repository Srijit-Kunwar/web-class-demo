import React from 'react'
import {getProductsByCategory} from '@/lib/api/products'
import NotFound from '@/app/not-found';
import CategoryCard from '@/components/categories/categoryCard';
const CategoryByID = async({params}) => {
  const {categoryId} = await params;
  console.log(categoryId);

    let products;
   
    try {
      products = await getProductsByCategory(categoryId);
       products=products.products
       console.log(products)
    } catch {
      NotFound();
    }
    if (!products?.id) {
      NotFound();
    }
  return (
    <div>
      {products.map((product)=>(
       <ProductCard product={product} key={product.id} />
      ))}
      <h1>Category slug :{products[0].title}</h1>
      <p> Category Name:{products[0].rating}</p>
    </div>
  )
}

export default CategoryByID
