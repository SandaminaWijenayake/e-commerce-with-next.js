"use client";
import React, { use, useEffect, useState } from "react";
import HomeButton from "./HomeButton";
import FilterFunction from "@/components/FilterFunction";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { getAllProductsAsync } from "@/features/products/productSlice";
import { LoadingOverlay } from "@/components/LoadingOverlay";
import { useSearchParams } from "next/navigation";

const page = () => {
  const dispatch = useAppDispatch();
  const loading: boolean = useAppSelector((state) => state.allProducts.loading);
  const allProducts = useAppSelector(
    (state: RootState) => state.allProducts.items
  );
  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(getAllProductsAsync());
      console.log("Products fetched successfully");
    }
  }, [allProducts.length]);

  const category = useSearchParams().get("category");

  return (
    <div className="pt-32 w-10/12 mx-auto">
      <HomeButton />
      {loading ? (
        <LoadingOverlay />
      ) : (
        <FilterFunction category={category} allProducts={allProducts} />
      )}
    </div>
  );
};

export default page;
