import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import imageUrl from "@/../public/assets/SE185_011325_homepage_2up_module-Q3-renutriv-1366x1366.webp";
import { useRouter } from "next/navigation";
const HeroBanner = () => {
  const router = useRouter();
  return (
    <section className="relative bg-gradient-to-br from-background to-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] py-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="sm:text-4xl text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Discover Amazing Products
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-lg">
                Shop the latest trends and timeless classics with unbeatable
                quality and prices. Your perfect lifestyle awaits.
              </p>
            </div>

            <div className="flex font-medium flex-col sm:flex-row gap-4">
              <button
                className=" group inline-flex items-center justify-center btn"
                aria-label="Shop now"
                onClick={() => {
                  router.push("/categories");
                }}
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                className="btn-muted"
                onClick={() => {
                  router.push("/about");
                }}
              >
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm">Product Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <div className="text-sm">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large hover-lift">
              <Image
                width={2000}
                height={2000}
                src={imageUrl}
                alt="Featured products showcase"
                className="w-full h-[500px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            <div className="cursor-pointer absolute bg-white -top-4 -left-4 rounded-lg shadow-2xl p-4 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
              <div className="text-sm font-medium text-primary ">
                Free Shipping
              </div>
              <div className="text-xs">On orders over $100</div>
            </div>

            <div className="cursor-pointer absolute text-white bg-green-600 -bottom-4 -right-4  rounded-lg shadow-2xl p-4 transform rotate-[5deg] hover:rotate-0 transition-transform duration-300">
              <div className="text-sm font-medium">30% OFF</div>
              <div className="text-xs">Limited Time</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-72 h-72 bg-accent-warm/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default HeroBanner;
