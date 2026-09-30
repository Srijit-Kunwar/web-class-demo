import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product, key }) => {
  return (
    <Link href={`/products/${product.id}`} key={key} className="border p-4 flex flex-col items-center">
      <Image
        src={product.images[0]}
        alt={product.title}
        width={200}
        height={200}
      />
      <div className="mt-2 text-center flex   ">
        <p>{product.title}</p>
        <p>{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
