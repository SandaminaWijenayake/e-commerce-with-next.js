"use client";

import { useEffect, useState } from "react";
import { getProductsAsync } from "@/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import type { HeroImage, Product } from "@/lib/mongodb";
import ProductList from "@/components/ProductList";
import HeroImages from "@/components/HeroImages";
import { getHeroImagesAsync } from "@/features/products/productSlice";
import { LoadingOverlay } from "@/components/LoadingOverlay";

export default function Home() {
  const dispatch = useAppDispatch();
  const products: Product[] = useAppSelector((state) => state.products.items);
  const heroImages: HeroImage[] = useAppSelector(
    (state) => state.heroImages.items
  );
  const loading: boolean = useAppSelector((state) => state.products.loading);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductsAsync());
      dispatch(getHeroImagesAsync());
      console.log("Products fetched successfully");
    }
    setMounted(true);
    console.log(mounted, "mounted products");
    console.log(products.length, "products loaded");
  }, []);

  return (
    <>
      {mounted && loading ? (
        <LoadingOverlay />
      ) : (
        <HeroImages heroImages={heroImages} />
      )}
      {mounted && loading ? (
        <LoadingOverlay />
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
}
