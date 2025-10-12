"use client";

import { useEffect, useState } from "react";
import { getProductsAsync } from "@/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import type { HeroImage, Product } from "@/lib/mongodb";
import HeroImages from "@/components/HeroImages";
import HeroNew from "@/components/HeroNew";
import { getHeroImagesAsync } from "@/features/products/productSlice";
import { LoadingOverlay } from "@/components/LoadingOverlay";
import AllProducts from "@/components/AllProducts";
import { allProducts } from "@/lib/mongodb";
import { getAllProductsAsync } from "@/features/products/productSlice";
import Creativeharmoniousliving from "@/components/Creativeharmoniousliving";
import { getOtherImagesAsync } from "@/features/products/productSlice";
// import TrendingNow from "@/components/TrendingNow";
// import ComfortableElegante from "@/components/ComfortableElegante";

export default function Home() {
  const dispatch = useAppDispatch();
  const products: Product[] = useAppSelector((state) => state.products.items);
  const allProducts: allProducts[] = useAppSelector(
    (state) => state.allProducts.items
  );
  const heroImages: HeroImage[] = useAppSelector(
    (state) => state.heroImages.items
  );
  // const otherImages: otherimages[] = useAppSelector(
  //   (state) => state.otherImages.items
  // );

  const loading: boolean = useAppSelector((state) => state.products.loading);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductsAsync());
      dispatch(getHeroImagesAsync());
      dispatch(getAllProductsAsync());
      dispatch(getOtherImagesAsync());
      console.log("Products fetched successfully");
    }
    setMounted(true);
    console.log(mounted, "mounted products");
    console.log(products.length, "products loaded");
  }, [products.length, dispatch, mounted]);

  return (
    <>
      {mounted && loading ? <LoadingOverlay /> : <HeroNew />}
      {mounted && loading ? (
        <LoadingOverlay />
      ) : (
        <HeroImages heroImages={heroImages} />
        // <ProductList products={products} />
      )}
      {mounted && loading ? (
        <LoadingOverlay />
      ) : (
        <AllProducts allProducts={allProducts} />
      )}
      {mounted && loading ? <LoadingOverlay /> : <Creativeharmoniousliving />}
      {/* {mounted && loading ? (
        <LoadingOverlay />
      ) : (
        <TrendingNow allProducts={allProducts} />
      )} */}
      {/* {mounted && loading ? (
        <LoadingOverlay />
      ) : (
        <ComfortableElegante otherimages={otherImages} />
      )} */}
    </>
  );
}
