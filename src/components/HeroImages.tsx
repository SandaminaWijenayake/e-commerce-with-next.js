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
  );
}
