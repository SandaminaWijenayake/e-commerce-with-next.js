"use client";

import Image from "next/image";
import { HeroImage } from "@/lib/mongodb";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

type HeroImagesProps = {
  heroImages: HeroImage[];
};

export default function HeroImages({ heroImages }: HeroImagesProps) {
  const router = useRouter();

  const productClickedHandler = (type: string | null) => {
    router.push(`/categories?category=${type}`);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections designed to elevate your lifestyle
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {heroImages.map((data) => (
            <div
              key={data._id?.toString()}
              className="aspect-[4/3] relative overflow-hidden rounded-lg bg-muted"
              onClick={() =>
                productClickedHandler(
                  data.name === "Skin Care"
                    ? "skin-care"
                    : data.name === "Electronics"
                    ? "electronic"
                    : data.name
                )
              }
            >
              <Image
                fill
                src={data.image}
                alt={`${data.name} category`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="cursor-pointer absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="cursor-pointer text-white font-semibold text-lg mb-2">
                  {data.name}
                </h3>
                <div className="cursor-pointer flex items-center text-white/90 text-sm group-hover:text-white transition-colors duration-200">
                  <span>Shop now</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <section className="grid grid-cols-1 grid-rows-7 md:grid-rows-4 md:grid-cols-2 lg:grid-rows-2 mt-10 md:mt-32 lg:grid-cols-4 h-[900px] sm:h-[700px] md:h-[500px] overflow-hidden w-10/12 m-auto gap-4">
    //   {heroImages.slice(0, 1).map((data) => (
    //     <div
    //       key={data._id?.toString()}
    //       className="md:col-span-2 row-span-2   cursor-pointer flex items-center relative w-full h-full justify-center"
    //       onClick={() => productClickedHandler("Furniture")}
    //     >
    //       <Image
    //         src={data.image}
    //         alt={data.name || "Hero Image"}
    //         fill
    //         sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
    //         priority
    //         className="rounded-md max-h-full max-w-full absolute object-cover"
    //       />
    //       <motion.div
    //         whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    //         initial={{ backgroundColor: "rgba(0,0,0,0.3)" }}
    //         className="absolute inset-0 text-white text-4xl font-semibold"
    //       >
    //         <p className="absolute bottom-4 left-4">Live Comfortably</p>
    //       </motion.div>
    //     </div>
    //   ))}
    //   {heroImages.slice(1, 2).map((data) => (
    //     <div
    //       key={data._id?.toString()}
    //       className="flex items-center cursor-pointer row-span-3 md:row-span-2 relative w-full h-full justify-center "
    //       onClick={() => productClickedHandler("skin-care")}
    //     >
    //       <Image
    //         src={data.image}
    //         alt={data.name || "Hero Image"}
    //         fill
    //         priority
    //         sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
    //         className="rounded-md max-h-full max-w-full object-cover"
    //       />
    //       <motion.div
    //         whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    //         initial={{ backgroundColor: "rgba(0,0,0,0.3)" }}
    //         className="absolute inset-0 text-white text-4xl font-semibold"
    //       >
    //         <p className="absolute bottom-4 left-4">Skincare</p>
    //       </motion.div>
    //     </div>
    //   ))}
    //   <div className="gap-4 cursor-pointer row-span-1 relative w-full h-full">
    //     {heroImages.slice(2, 3).map((data) => (
    //       <div
    //         key={data._id?.toString()}
    //         onClick={() => productClickedHandler("Kitchen")}
    //       >
    //         <Image
    //           src={data.image}
    //           alt={data.name || "Hero Image"}
    //           fill
    //           priority
    //           sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
    //           className="rounded-md max-h-full max-w-full object-cover"
    //         />
    //         <motion.div
    //           whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    //           initial={{ backgroundColor: "rgba(0,0,0,0.3)" }}
    //           className="absolute inset-0 text-white text-4xl font-semibold"
    //         >
    //           <p className="absolute bottom-4 left-4">Kitchen</p>
    //         </motion.div>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="gap-4 cursor-pointer relative w-full h-full">
    //     {heroImages.slice(3, 4).map((data) => (
    //       <div
    //         key={data._id?.toString()}
    //         onClick={() => productClickedHandler("Electronic")}
    //       >
    //         <Image
    //           src={data.image}
    //           alt={data.name || "Hero Image"}
    //           fill
    //           priority
    //           sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
    //           className="rounded-md object-cover"
    //         />
    //         <motion.div
    //           whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    //           initial={{ backgroundColor: "rgba(0,0,0,0.3)" }}
    //           className="absolute inset-0 text-white text-4xl font-semibold"
    //         >
    //           <p className="absolute bottom-4 left-4">Electronics</p>
    //         </motion.div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
}
