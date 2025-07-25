"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import type { Product } from "@/features/products/productSlice";

export default function ShoppingControls({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => q + 1);

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    };

    dispatch(addToCart(cartItem));
  };

  return (
    <div className="mt-6 flex items-center gap-4">
      <button
        onClick={decrement}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        –
      </button>
      <span className="w-8 text-center">{quantity}</span>
      <button
        onClick={increment}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        +
      </button>
      <button
        onClick={handleAddToCart}
        className="ml-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
