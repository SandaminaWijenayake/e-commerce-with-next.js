"use client";

import { useEffect, useState } from "react";
import { setProducts } from "@/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import type { Product } from "@/lib/mongodb";
import ProductList from "@/components/ProductList";

export default function Home() {
  const dispatch = useAppDispatch();
  const products: Product[] = useAppSelector((state) => state.products.items);
  // const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  async function fetchProducts() {
    // setLoading(true);
    try {
      const res = await fetch("/api/products");
      const data = (await res.json()) as Product[];
      dispatch(setProducts(data));
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      // setLoading(false);
    }
  }

  useEffect(() => {
    setMounted(true);
    fetchProducts();
  }, []);

  return (
    <>
      <div className="h-32"></div>
      {mounted && <ProductList products={products} />}
    </>
  );
}
