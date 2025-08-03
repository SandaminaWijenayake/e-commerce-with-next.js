import React from "react";
import { allProducts } from "@/lib/mongodb";
import { useRouter } from "next/navigation";

type AllProductsProps = {
  allProducts: allProducts[];
};

const AllProducts = ({ allProducts }: AllProductsProps) => {
  const router = useRouter();

  const handleClick = (_id: string) => {
    router.push(`/product/${_id}`);
  };
  return (
    <>
      <div className="w-10/12 mx-auto py-16 md:py-32 ">
        <div className="text-xl md:text-2xl  font-semibold pb-12">
          Products we are proud of
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allProducts.slice(0, 8).map((items) => (
            <div
              className="transition-transform cursor-pointer duration-200 hover:border-2 hover:border-gray-300 p-4 rounded-lg shadow-md"
              key={items._id?.toString()}
              onClick={() => handleClick(items._id?.toString())}
            >
              <img src={items.img} alt={items.description} />
              <h2>{items.description}</h2>
              <p className="font-bold pt-1">${items.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
