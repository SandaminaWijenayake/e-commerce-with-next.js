import { use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import products from "@/lib/items.json";
import type { Product } from "@/features/products/productSlice";
import BackButton from "./BackButton";
import ShoppingControls from "./ShoppingControls";

type ParamsPromise = Promise<{ id: string }>;

export default function ProductPage({ params }: { params: ParamsPromise }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === Number(id));

  if (!product) notFound();

  return (
    <div className="pt-32 max-w-4xl mx-auto">
      <BackButton />

      <div className="flex flex-col sm:flex-col lg:flex-row gap-6 items-start w-11/12 m-auto lg:items-center">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            width={350}
            height={350}
            className="rounded-lg  m-auto shrink-0"
          />
        )}

        <div className="flex-1 m-auto">
          <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-1">Brand: {product.brand}</p>
          <p className="text-lg font-medium">₹{product.price}</p>
          <ShoppingControls product={product} />
        </div>
      </div>
    </div>
  );
}
