import Image from "next/image";
import React from "react";
import type { Product } from "@/features/products/productSlice";
import { motion } from "framer-motion";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      key={product.id}
      className="break-inside-avoid rounded shadow-sm p-4 bg-white cursor-pointer"
      whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative w-full h-[300px] mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="rounded-md object-cover"
        />
      </div>
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm">{product.brand}</p>
      <p className="text-sm">Size: {product.size}</p>
      <p className="text-sm">Occasion: {product.occasion}</p>
      <div className="flex items-center gap-2 mt-2">
        <span className="font-bold text-green-600">
          ${product.price.toFixed(2)}
        </span>
        <span className="text-sm line-through text-gray-400">
          ${(product.price / (1 - product.saleDiscount / 100)).toFixed(2)}
        </span>
      </div>
    </motion.div>
  );
}

export default ProductCard;
