"use client";
import { useEffect } from "react";
import items from "@/lib/items.json";
import { setProducts } from "@/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import type { Product } from "@/features/products/productSlice";

// import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/ProductList";

export default function Home() {
  const dispatch = useAppDispatch();
  const products: Product[] = useAppSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(setProducts(items));
  }, [dispatch]);

  return (
    <>
      <div className="h-32"></div>
      <ProductList products={products} />
    </>
  );
}
