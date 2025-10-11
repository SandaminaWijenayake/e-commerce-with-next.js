import Image from "next/image";

interface ProductCardProps {
  id: string;
  img: string;
  description: string;
  category: string;
  price: number;
  onClick: (id: string) => void;
}

const ProductCard = ({
  id,
  img,
  description,
  category,
  price,
  onClick,
}: ProductCardProps) => {
  return (
    <div
      className=" group cursor-pointer leading-8 p-4 rounded-lg shadow-md"
      onClick={() => onClick(id)}
    >
      <Image
        className="group-hover:scale-105 transition-transform"
        src={img}
        alt={description}
        width={1000}
        height={1000}
      />
      <h2 className="font-semibold">{description}</h2>
      <p className="bg-gray-100 rounded-3xl w-fit px-2">{category}</p>
      <p className="font-bold pt-1">${price}</p>
      <button className="opacity-0 scale-95 pointer-events-none btn py-1 w-full my-1 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
