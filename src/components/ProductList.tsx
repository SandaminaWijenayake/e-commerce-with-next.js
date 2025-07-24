import React from "react";
import type { Product } from "@/features/products/productSlice";
import ProductCard from "@/components/ProductCard";

type ProductListProps = {
  products: Product[];
};

function ProductList({ products }: ProductListProps) {
  return (
    <div className="columns-1 text-gray-700 sm:columns-2 lg:columns-4 gap-6 p-6 space-y-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
