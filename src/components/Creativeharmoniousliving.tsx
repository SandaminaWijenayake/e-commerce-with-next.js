import React from "react";
import { otherimages } from "@/lib/mongodb";
import { useRouter } from "next/navigation";

type CreativeharmoniouslivingProps = {
  otherimages: otherimages[];
};

const Creativeharmoniousliving = ({
  otherimages,
}: CreativeharmoniouslivingProps) => {
  const router = useRouter();
  return (
    <>
      <div className="w-10/12 flex overflow-hidden h-[400px] m-auto">
        <div className="flex flex-col justify-center bg-[#e9e9e9] px-10 lg:px-20 md:w-1/2">
          <h1 className="font-semibold text-3xl">Creative harmonious living</h1>
          <p className=" mt-4 mb-5 ">
            RAOUF Products are all made to standard sizes so that you can mix
            and match them freely.
          </p>
          <button
            onClick={() => router.push("/categories")}
            className="bg-black cursor-pointer font-bold text-white w-32 py-4"
          >
            Shop now
          </button>
        </div>
        <div className="md:w-1/2 hidden md:flex items-center justify-center">
          {otherimages.slice(0, 1).map((items) => (
            <img
              key={items._id?.toString()}
              src={items.image}
              className="w-full h-full object-cover"
              alt="Creative Harmonious Living"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Creativeharmoniousliving;
