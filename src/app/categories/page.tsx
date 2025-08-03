// app/categories/page.tsx
"use client"; // still a Client Component
import { Suspense } from "react";
import HomeButton from "./HomeButton";
import SearchSection from "./SearchSection";

export default function CategoryPage() {
  return (
    <div className="pt-32 w-10/12 mx-auto">
      <HomeButton />

      <Suspense fallback={<div>Loading filters…</div>}>
        <SearchSection />
      </Suspense>
    </div>
  );
}
