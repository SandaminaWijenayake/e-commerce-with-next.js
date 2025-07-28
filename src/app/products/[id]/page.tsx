import Image from "next/image";
import { notFound } from "next/navigation";
import BackButton from "./BackButton";
import ShoppingControls from "./ShoppingControls";
import { getProductById } from "@/lib/mongodb";

type Params = { id: string };

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }
  const safeProduct = {
    id: product.id,
    name: product.name,
    brand: product.brand,
    size: product.size,
    occasion: product.occasion,
    color: product.color,
    saleDiscount: product.saleDiscount,
    price: product.price,
    rating: product.rating,
    image: product.image,
    description: product.description,
  };

  return (
    <div className="pt-32 max-w-4xl mx-auto">
      <BackButton />

      <div className="flex flex-col sm:flex-col md:w-1/2 lg:w-11/12 lg:flex-row gap-6 items-start w-11/12 m-auto lg:items-center">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-[400px] h-[400px] object-cover rounded-lg"
          />
        )}

        <div className="m-auto lg:ml-4 text-center lg:text-left">
          <h2 className="m-auto text-justify pb-2">{product.description}</h2>
          <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-1">Brand: {product.brand}</p>
          <p>occasion: {product.occasion}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <div className="align-items-center flex justify-center lg:justify-start">
            <ShoppingControls product={safeProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}
