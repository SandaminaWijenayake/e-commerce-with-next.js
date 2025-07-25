import React from "react";
import type { Product } from "@/features/products/productSlice";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/navigation";

type ProductListProps = {
  products: Product[];
};

function ProductList({ products }: ProductListProps) {
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/products/${id}`);
  };
  return (
    <div className="columns-1  text-gray-700 sm:columns-2 lg:columns-4 gap-6 p-6 space-y-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="cursor-pointer hover:shadow-lg transition rounded-lg"
          onClick={() => handleClick(product.id)}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
