import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { allProducts } from "@/lib/mongodb";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Furnitures", value: "furniture" },
  { label: "Electronics", value: "electronic" },
  { label: "Lamps", value: "lamp" },
  { label: "Kitchen", value: "kitchen" },
  { label: "Chairs", value: "chair" },
  { label: "Skin Care", value: "skin-care" },
];

type AllProductsProps = {
  allProducts: allProducts[];
  category: string | null;
};
const FilterFunction = ({ allProducts, category }: AllProductsProps) => {
  const router = useRouter();
  const [filteredProducts, setFilteredProducts] = useState<typeof allProducts>(
    []
  );

  const handleClick = (_id: string) => {
    router.push(`/product/${_id}`);
  };

  const productClickedFromHomePageHandler = (category: string | null) => {
    if (category) {
      const filtered = allProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  const handleFilterOption = (option: string) => {
    console.log(`Filter by: ${option}`);

    if (option.toLowerCase() === "all") {
      setFilteredProducts(allProducts);
      return;
    }

    const filtered = allProducts.filter(
      (product) => product.category.toLowerCase() === option.toLowerCase()
    );

    setFilteredProducts(filtered);
    console.log(option.toLowerCase(), "<filtered>");
  };
  useEffect(() => {
    setFilteredProducts(allProducts);
    productClickedFromHomePageHandler(category);
  }, [allProducts, category]);

  return (
    <>
      <div className="flex flex-wrap justify-center w-full cursor-pointer  mx-auto">
        {" "}
        {filterOptions.map((option) => (
          <h1
            onClick={() => handleFilterOption(option.value)}
            key={option.value}
            className="mx-2 text-center hover:text-gray-700"
          >
            {option.label}
          </h1>
        ))}
      </div>
      <div className="grid grid-cols-1 pt-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((items) => (
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
    </>
  );
};

export default FilterFunction;
