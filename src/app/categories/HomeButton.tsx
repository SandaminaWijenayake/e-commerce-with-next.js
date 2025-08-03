"use client";

import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();
  return (
    <>
      <div className="relative flex items-center w-full">
        <button
          onClick={() => router.push("/")}
          className="cursor-pointer items-center gap-2 text-lg text-gray-600 hover:text-black"
        >
          Home
        </button>
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold">
          ALL
        </h1>
      </div>
      <div className="w-full h-[1px] bg-gray-300 my-4"></div>
    </>
  );
}
