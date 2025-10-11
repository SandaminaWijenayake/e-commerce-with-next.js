import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { allProducts } from "@/lib/mongodb";
// import Image from "next/image";
import ProductCard from "./ProductCard";

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
      <div className="grid grid-cols-4">
        <aside className="col-span-1">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our complete collection of quality products
            </p>
          </div>
          <div className="grid grid-cols-1 ">
            <div className="hidden lg:block">
              <div className="sticky top-6 space-y-6"></div>
              <h3 className="text-lg font-semibold ">Categories</h3>
              {filterOptions.map((option) => (
                <h1
                  onClick={() => handleFilterOption(option.value)}
                  key={option.value}
                  className="mx-2 space-y-2 hover:text-gray-700"
                >
                  {option.label}
                </h1>
              ))}
            </div>
          </div>
        </aside>
        <div className="col-span-3">
          <div className="grid grid-cols-1 pt-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {filteredProducts.map((item) => (
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
        </div>
      </div>
    </>
  );
};

export default FilterFunction;
