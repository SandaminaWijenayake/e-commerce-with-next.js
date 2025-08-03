"use client";
import { useState } from "react";
import { addToCart } from "@/features/cart/cartSlice";
import type { allProducts } from "@/lib/mongodb";
import { useAppDispatch } from "@/lib/hooks";

export default function ShoppingControls({
  allproduct,
}: {
  allproduct: allProducts;
}) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);

  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => q + 1);

  const handleAddToCart = () => {
    const cartItem = {
      id: allproduct._id?.toString() || "",
      name: allproduct.category,
      price: allproduct.price,
      image: allproduct.img,
      quantity,
    };

    dispatch(addToCart(cartItem));
  };

  return (
    <div className="mt-6 flex items-center sm:gap-4">
      <button
        onClick={decrement}
        className="px-3 py-1 bg-gray-200 cursor-pointer rounded hover:bg-gray-300"
      >
        -
      </button>
      <span className="w-8 text-center">{quantity}</span>
      <button
        onClick={increment}
        className="px-3 py-1 bg-gray-200 cursor-pointer rounded hover:bg-gray-300"
      >
        +
      </button>
      <button
        onClick={handleAddToCart}
        className="ml-4 px-5 py-2 cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
