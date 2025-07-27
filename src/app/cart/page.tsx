"use client";

import Cart from "@/components/Cart";
import type { RootState } from "@/lib/store";
import { selectCartTotal } from "@/features/cart/selectors";
import { useAppSelector } from "@/lib/hooks";

export default function CartPage() {
  const total = useAppSelector((state: RootState) => selectCartTotal(state));

  return (
    <main className="pt-32 w-[90%] mx-auto">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-semibold">Total : </span>
          <span className="text-xl font-bold">${total.toFixed(2)}</span>
        </div>
      </div>

      <Cart />
    </main>
  );
}
