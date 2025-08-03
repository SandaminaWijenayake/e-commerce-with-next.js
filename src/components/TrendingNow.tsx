import React from "react";
import { allProducts } from "@/lib/mongodb";
import { useRouter } from "next/navigation";
import Image from "next/image";

type TrendingNowProps = {
  allProducts: allProducts[];
};

const TrendingNow = ({ allProducts }: TrendingNowProps) => {
  const router = useRouter();

  const handleClick = (_id: string) => {
    router.push(`/product/${_id}`);
  };
  return (
    <div className="w-10/12 mx-auto py-16 md:py-32 ">
      <div className="md:text-2xl text-xl font-semibold pb-12">
        Trending Now
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allProducts.slice(8, 12).map((items) => (
          <div
            className="transition-transform duration-200 cursor-pointer hover:border-2 hover:border-gray-300 p-4 rounded-lg shadow-md"
            key={items._id?.toString()}
            onClick={() => handleClick(items._id?.toString())}
          >
            <Image
              src={items.img}
              alt={items.description}
              width={1000}
              height={1000}
            />
            <h2>{items.description}</h2>
            <p className="font-bold pt-1">${items.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
