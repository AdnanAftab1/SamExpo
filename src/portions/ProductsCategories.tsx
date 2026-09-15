"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { List } from "@/data/list";
import { BlurFade } from "@/components/ui/blur-fade";

interface ProductProps {
  category: string;
}

export default function ProductsCategories({ category }: ProductProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setCategory = useCallback(
    (next: "Women" | "Men") => {
      if (next === category) return;
      const params = new URLSearchParams(searchParams.toString());
      params.set("category", next);
      router.replace(`/products?${params.toString()}`, { scroll: false });
    },
    [category, router, searchParams]
  );

  const isMen = category === "Men";
  const products = isMen ? List.Men : List.Women;

  return (
    <section className="w-full py-[80px] px-5 sm:px-8 lg:px-20 bg-[#f7f7eb] inline-flex flex-col justify-center items-center gap-10 overflow-hidden">
      <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-8 mx-auto">

        {/* Header */}
        <BlurFade inView={true} duration={0.7} delay={0}>
          <div className="w-full flex flex-col justify-start items-center gap-14">
            <div className="flex flex-col justify-center items-center gap-2 text-center">
              <h2 className="font-instrument text-[#193827] text-[42px] max-md:text-3xl font-normal leading-none">
                EXPLORE OUR PRODUCTS
              </h2>
              <p className="font-dmsans text-[#193827] text-base font-light max-w-[560px]">
                Passionate professionals dedicated to transforming spaces with innovative leather solutions and personalized service
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Vineeth-style CSS Toggle */}
        <BlurFade inView={true} duration={0.7} delay={0.2}>
          <div className="w-full">
          <div className="toggle" >
            <input
              type="checkbox"
              checked={isMen}
              onChange={(e) => setCategory(e.target.checked ? "Men" : "Women")}
              aria-label="Toggle between men's and women's products"
            />
            <label />
          </div>
          </div>
        </BlurFade>

        {/* Products Grid */}
        <div className="w-full flex flex-wrap justify-center items-center gap-6">
          {products.map((item, index) => (
            <BlurFade
              key={`${category}-${item.nextLink}`}
              inView={true}
              duration={0.7}
              delay={0.1 + index * 0.08}
              offset={20}
            >
              <Link
                href={item.nextLink}
                className="w-96 max-md:w-full p-4 border border-[#193827]/10 bg-white inline-flex flex-col justify-start items-start gap-5 hover:border-[#efc250] hover:bg-white transition-colors"
              >
                <Image
                  priority={index < 4}
                  src={item.picLink}
                  alt={item.name}
                  height={720}
                  width={480}
                  className="w-full h-64 object-contain"
                />
                <div className="w-full flex flex-col justify-start items-start gap-3">
                  <div className="w-full flex flex-col justify-start items-start gap-1">
                    <div className="font-instrument text-[#193827] text-xl leading-tight">
                      {item.name}
                    </div>
                    <div className="font-dmsans text-[#193827]/60 text-base font-light">
                      {item.description}
                    </div>
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}