import React from "react";
import { otherimages } from "@/lib/mongodb";
import { useRouter } from "next/navigation";
import Image from "next/image";

type ComfortableEleganteProps = {
  otherimages: otherimages[];
};

const ComfortableElegante = ({ otherimages }: ComfortableEleganteProps) => {
  const router = useRouter();
  return (
    <div>
      <div className="w-10/12 flex overflow-hidden h-[400px] m-auto">
        <div className="md:w-1/2 hidden md:flex items-center justify-center">
          {otherimages.slice(1, 2).map((items) => (
            <Image
              key={items._id?.toString()}
              src={items.image}
              width={1000}
              height={500}
              className="w-full h-full object-cover"
              alt="Creative Harmonious Living"
            />
          ))}
        </div>
        <div className="flex flex-col justify-center bg-[#f9ece2] px-10 lg:px-20 md:w-1/2">
          <h1 className="font-semibold text-3xl">
            Comfortable & Elegante Living
          </h1>
          <p className=" mt-4 mb-5 ">
            RAOUF Products are all made to standard sizes so that you can mix
            and match them freely.
          </p>
          <button
            onClick={() => router.push("/categories")}
            className="btn w-32 px-4"
          >
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComfortableElegante;
