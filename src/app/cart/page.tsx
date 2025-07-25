"use client";

import Cart from "@/components/Cart";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store";
import { selectCartTotal } from "@/features/cart/selectors";

export default function CartPage() {
  const total = useSelector((state: RootState) => selectCartTotal(state));

  return (
    <main className="pt-32 w-[90%] mx-auto">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-semibold">Total : </span>
          <span className="text-xl font-bold">Rs. {total.toFixed(2)}</span>
        </div>
      </div>

      <Cart />
    </main>
  );
}
