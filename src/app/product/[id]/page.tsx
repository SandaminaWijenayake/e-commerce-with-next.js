import Image from "next/image";
import { notFound } from "next/navigation";
import BackButton from "./BackButton";
import ShoppingControls from "./ShoppingControls";
import { getAllProductById, getAllProducts } from "@/lib/mongodb";

type Params = {
  id: string;
};

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map(
    (product: { _id: string | import("mongodb").ObjectId }) => ({
      id: product._id.toString(),
    })
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const product = await getAllProductById(id);
  if (!product) {
    notFound();
  }
  const safeProduct = {
    _id: product._id?.toString() || "",
    category: product.category,
    img: product.img,
    description: product.description,
    price: product.price,
    otherImgs: product.otherImgs,
    specs: product.specs,
    texture: product.texture,
    weight: product.weight,
    size: product.size,
  };

  return (
    <div className="pt-32 max-w-4xl mx-auto">
      <BackButton />

      <div className="flex flex-col  sm:flex-col  lg:flex-row gap-6 items-start w-11/12 m-auto lg:items-center">
        {product.img && (
          <Image
            src={product.img}
            alt={product.description}
            width={400}
            height={400}
            className="w-[400px] h-[400px] object-cover mx-auto rounded-lg"
          />
        )}

        <div className="flex-1 bg-gray-100 p-6 mx-auto  rounded-lg shadow-sm lg:ml-4 space-y-4 text-center lg:text-left min-h-[400px] flex flex-col justify-center">
          <div>
            <h2 className="text-xl font-bold text-black leading-relaxed">
              {product.description}
            </h2>

            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-semibold">Texture:</span>{" "}
                {product.texture}
              </p>
              <p>
                <span className="font-semibold">Size:</span> {product.size}
              </p>
            </div>
          </div>

          <div>
            <p className="text-2xl text-black font-semibold">
              ${product.price}
            </p>

            <div className="mt-6 flex justify-center lg:justify-start">
              <ShoppingControls allproduct={safeProduct} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
