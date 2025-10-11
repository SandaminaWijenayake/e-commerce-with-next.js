import React from "react";
import { allProducts } from "@/lib/mongodb";
import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";

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
      <div className="w-10/12 mx-auto py-16 md:py-16 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Handpicked items that our customers love most
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allProducts.slice(0, 8).map((item) => (
            <ProductCard
              key={item._id?.toString()}
              id={item._id?.toString()}
              img={item.img}
              description={item.description}
              category={item.category}
              price={item.price}
              onClick={handleClick}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => router.push("/categories")}
            className="btn-gray font-semibold rounded-4xl"
          >
            <span>View All Products &gt;</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
