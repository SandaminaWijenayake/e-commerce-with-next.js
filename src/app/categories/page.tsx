"use client";
import { Suspense } from "react";
// import HomeButton from "./HomeButton";
import SearchSection from "./SearchSection";

export default function CategoryPage() {
  return (
    <div className="pt-10 md:pt-16 w-11/12 mx-auto">
      {/* <HomeButton /> */}

      <Suspense fallback={<div>Loading filters…</div>}>
        <SearchSection />
      </Suspense>
    </div>
  );
}
