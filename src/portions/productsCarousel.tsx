"use client";
import Image from "next/image";
import Link from "next/link";
import { List } from "@/data/list";
import { BlurFade } from "@/components/ui/blur-fade";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Product = { name: string; picLink: string; description: string; nextLink: string };

export default function Products() {
  const source: Product[] = [...List.Men, ...List.Women];
  const products = source.slice(0, 5);
  const [activeDot, setActiveDot] = useState(2);

  // Fallback placeholders during dev if list is empty
  const items: Product[] = products.length
    ? products
    : Array.from({ length: 5 }).map((_, i) => ({
        name: "Facade Leather",
        picLink: "/Manufacturer.jpg",
        nextLink: "/products",
        description: "",
      }));

  return (
    <section
      id="products"
      className="w-full bg-[#f7f7eb] py-[60px] px-5 sm:px-8 lg:px-20"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8">

        {/* Header — per Figma */}
        <BlurFade inView duration={0.7} delay={0}>
          <header className="flex flex-col items-center gap-1 text-center max-w-[522px]">
            <h2 className="font-instrument uppercase text-[42px] max-md:text-3xl leading-[55px] text-[#193827]">
              Our Leather Collection
            </h2>
            <p className="font-dmsans text-base font-light leading-[21px] text-[#193827]">
              Discover our comprehensive range of premium leather goods designed for every modern brand portfolio.
            </p>
          </header>
        </BlurFade>

        {/* Product row — 5 items at 220×241 */}
        <div className="flex flex-wrap items-start justify-center gap-8 w-full">
          {items.map((item, i) => (
            <BlurFade
              key={`${item.nextLink}-${i}`}
              inView
              duration={0.6}
              delay={0.1 + i * 0.08}
            >
              <Link
                href={item.nextLink}
                className="group flex flex-col items-center w-[220px] hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-[220px] h-[220px] flex items-center justify-center">
                  <Image
                    src={item.picLink}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="mt-2 font-dmsans uppercase text-base font-light text-[#193827] text-center leading-[21px]">
                  {item.name}
                </span>
              </Link>
            </BlurFade>
          ))}
        </div>

        {/* Paging dots — per Figma, dot 3 active by default */}
        <div className="flex items-center gap-2 mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveDot(i)}
              aria-label={`Go to page ${i + 1}`}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeDot === i
                  ? "bg-[#1b3a29]"
                  : "bg-[#f0f1e5] hover:bg-[#1b3a29]/40"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}