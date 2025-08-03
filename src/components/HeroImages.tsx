"use client";

import Image from "next/image";
import { HeroImage } from "@/lib/mongodb";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type HeroImagesProps = {
  heroImages: HeroImage[];
};

export default function HeroImages({ heroImages }: HeroImagesProps) {
  const router = useRouter();

  const productClickedHandler = (type: string | null) => {
    router.push(`/categories?category=${type}`);
  };

  return (
    <section className="grid grid-cols-1 grid-rows-7 md:grid-rows-4 md:grid-cols-2 lg:grid-rows-2 mt-32 lg:grid-cols-4 h-[900px] sm:h-[700px] md:h-[500px] overflow-hidden w-10/12 m-auto gap-4">
      {heroImages.slice(0, 1).map((data) => (
        <div
          key={data._id?.toString()}
          className="md:col-span-2 row-span-2   cursor-pointer flex items-center relative w-full h-full justify-center"
          onClick={() => productClickedHandler("Furniture")}
        >
          <Image
            src={data.image}
            alt={data.name || "Hero Image"}
            fill
            priority
            className="rounded-md max-h-full max-w-full absolute object-cover"
          />
          <motion.div
            whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
            initial={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            className="absolute inset-0 text-white text-4xl font-semibold"
          >
            <p className="absolute bottom-4 left-4">Live Comfortably</p>
          </motion.div>
        </div>
      ))}
      {heroImages.slice(1, 2).map((data) => (
        <div
          key={data._id?.toString()}
          className="flex items-center cursor-pointer row-span-3 md:row-span-2 relative w-full h-full justify-center "
          onClick={() => productClickedHandler("skin-care")}
        >
          <Image
            src={data.image}
            alt={data.name || "Hero Image"}
            fill
            priority
            className="rounded-md max-h-full max-w-full object-cover"
          />
          <motion.div
            whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
            initial={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            className="absolute inset-0 text-white text-4xl font-semibold"
          >
            <p className="absolute bottom-4 left-4">Skincare</p>
          </motion.div>
        </div>
      ))}
      <div className="gap-4 cursor-pointer row-span-1 relative w-full h-full">
        {heroImages.slice(2, 3).map((data) => (
          <div
            key={data._id?.toString()}
            onClick={() => productClickedHandler("Kitchen")}
          >
            <Image
              src={data.image}
              alt={data.name || "Hero Image"}
              fill
              priority
              className="rounded-md max-h-full max-w-full object-cover"
            />
            <motion.div
              whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
              initial={{ backgroundColor: "rgba(0,0,0,0.3)" }}
              className="absolute inset-0 text-white text-4xl font-semibold"
            >
              <p className="absolute bottom-4 left-4">Kitchen</p>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="gap-4 cursor-pointer relative w-full h-full">
        {heroImages.slice(3, 4).map((data) => (
          <div
            key={data._id?.toString()}
            onClick={() => productClickedHandler("Electronic")}
          >
            <Image
              src={data.image}
              alt={data.name || "Hero Image"}
              fill
              priority
              className="rounded-md object-cover"
            />
            <motion.div
              whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
              initial={{ backgroundColor: "rgba(0,0,0,0.3)" }}
              className="absolute inset-0 text-white text-4xl font-semibold"
            >
              <p className="absolute bottom-4 left-4">Electronics</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
