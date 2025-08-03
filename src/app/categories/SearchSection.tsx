"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getAllProductsAsync } from "@/features/products/productSlice";
import { LoadingOverlay } from "@/components/LoadingOverlay";
import FilterFunction from "@/components/FilterFunction";

export default function SearchSection() {
  const params = useSearchParams();
  const category = params.get("category");
  const dispatch = useAppDispatch();
  const { loading, items: allProducts } = useAppSelector((state) => ({
    loading: state.allProducts.loading,
    items: state.allProducts.items,
  }));

  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(getAllProductsAsync());
    }
  }, [allProducts.length, dispatch]);

  if (loading) {
    return <LoadingOverlay />;
  }

  return <FilterFunction category={category} allProducts={allProducts} />;
}
