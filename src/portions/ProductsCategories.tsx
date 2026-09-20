"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { List } from "@/data/list";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

interface ProductProps {
  category: string;
}

type Product = {
  name: string;
  picLink: string;
  description: string;
  nextLink: string;
};

export default function ProductsCategories({ category }: ProductProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeDot, setActiveDot] = useState(2);

  const setCategory = useCallback(
    (next: "Men" | "Women") => {
      if (next === category) return;
      const params = new URLSearchParams(searchParams.toString());
      params.set("category", next);
      router.replace(`/products?${params.toString()}`, { scroll: false });
    },
    [category, router, searchParams]
  );

  const isMen = category === "Men";
  const source: Product[] = isMen ? List.Men : List.Women;

  // Top catalog row — first 5 items
  const catalogItems = source.slice(0, 5);

  // Main grid — up to 12 items (3 rows × 4 cols). Fall back to catalog items if list is short.
  const gridItems =
    source.length >= 12
      ? source.slice(0, 12)
      : [...source, ...source, ...source].slice(0, 12);

  // Fallback for dev
  const placeholder = (i: number): Product => ({
    name: "Product Name",
    picLink: "/Manufacturer.jpg",
    nextLink: "/products",
    description: "Handcrafted premium leather",
  });

  const catalog = catalogItems.length ? catalogItems : Array.from({ length: 5 }, (_, i) => placeholder(i));
  const grid = gridItems.length ? gridItems : Array.from({ length: 12 }, (_, i) => placeholder(i));

  return (
    <main className="w-screen bg-[#f7f7eb] pt-[88px]">

      {/* ============ SECTION 1: Catalog Header ============ */}
      <section
        className="w-screen bg-[#f7f7eb] flex flex-col items-center gap-8 px-5 sm:px-8 lg:px-20"
        style={{ paddingTop: 150, paddingBottom: 60 }}
      >
        <div className="w-full max-w-[1280px] flex flex-col items-center gap-[60px]">

          {/* Header text */}
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

          {/* 5 product items — 220×241 each */}
          <div className="flex flex-wrap items-start justify-center gap-8 w-full">
            {catalog.map((item, i) => (
              <BlurFade
                key={`cat-${item.nextLink}-${i}`}
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

          {/* Paging dots */}
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

      {/* ============ SECTION 2: Filter + Product Grid ============ */}
      <section className="w-screen bg-[#f7f7eb] py-[60px] px-5 sm:px-8 lg:px-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8">

          {/* Header */}
          <BlurFade inView duration={0.7} delay={0}>
            <header className="flex flex-col items-center gap-1 text-center max-w-[522px]">
              <h2 className="font-instrument uppercase text-[42px] max-md:text-3xl leading-[55px] text-[#193827]">
                Our Leather Collection
              </h2>
              <p className="font-dmsans text-base font-light leading-[21px] text-[#193827]">
                Filter our full catalogue by category.
              </p>
            </header>
          </BlurFade>

          {/* Pill-toggle filter — 288×48 dark green pill w/ gold chip */}
          <BlurFade inView duration={0.7} delay={0.15}>
            <div className="flex flex-col items-start p-1 gap-2.5 w-[296px]">
              <div className="w-[288px] h-[48px] bg-[#193827] border border-[#efc250] rounded-full p-1 flex items-center">
                {/* Men chip */}
                <button
                  type="button"
                  onClick={() => setCategory("Men")}
                  className={cn(
                    "flex-1 h-[40px] rounded-full font-dmsans text-base font-light transition-colors duration-300",
                    isMen
                      ? "bg-[#efc250] text-[#070102]"
                      : "bg-transparent text-white hover:text-[#efc250]"
                  )}
                >
                  Men
                </button>
                {/* Women chip */}
                <button
                  type="button"
                  onClick={() => setCategory("Women")}
                  className={cn(
                    "flex-1 h-[40px] rounded-full font-dmsans text-base font-light transition-colors duration-300",
                    !isMen
                      ? "bg-[#efc250] text-[#070102]"
                      : "bg-transparent text-white hover:text-[#efc250]"
                  )}
                >
                  Women
                </button>
              </div>
            </div>
          </BlurFade>

          {/* Grid — 3 rows × 4 cols of 287×375 cards */}
          <div className="w-screen flex flex-col gap-10">
            {[0, 1, 2].map((rowIdx) => (
              <div
                key={rowIdx}
                className="w-full flex flex-wrap justify-between items-center gap-10"
              >
                {grid.slice(rowIdx * 4, rowIdx * 4 + 4).map((item, i) => (
                  <BlurFade
                    key={`grid-${category}-${item.nextLink}-${rowIdx * 4 + i}`}
                    inView
                    duration={0.7}
                    delay={0.1 + (rowIdx * 0.1) + i * 0.08}
                  >
                    <ProductCard
                      product={item}
                      category={category}
                      isMen={isMen}
                    />
                  </BlurFade>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================
   Product Card
   287 × 375, white bg, 16px padding, 24px gap
   ========================= */

function ProductCard({
  product,
  category,
  isMen,
}: {
  product: Product;
  category: string;
  isMen: boolean;
}) {
  // Color swatches — Figma's 4 ellipse colors
  const swatches = ["#205158", "#5D2B1C", "#484D3F", "#000000"];

  return (
    <Link
      href={product.nextLink}
      className="group flex flex-col items-start gap-6 p-4 w-[287px] h-[375px] bg-white hover:shadow-lg transition-shadow duration-300"
    >
      {/* Product image — 255×250 */}
      <div className="w-[255px] h-[250px] bg-[#f0f1e5] overflow-hidden flex items-center justify-center">
        <Image
          src={product.picLink}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info block */}
      <div className="w-[255px] flex flex-col gap-[14px]">
        <div className="flex flex-col">
          <h3 className="font-dmsans uppercase text-[16px] font-light leading-[21px] text-[#193827]">
            {product.name}
          </h3>
          <p className="font-dmsans text-[14px] font-light leading-[18px] text-[#193827] truncate">
            {product.description || "Handcrafted premium leather"}
          </p>
        </div>

        {/* Color swatches */}
        <div className="flex items-center gap-[4.8px] h-4">
          {swatches.map((color) => (
            <span
              key={color}
              className="w-4 h-4 rounded-full border border-[#193827]/40 flex items-center justify-center p-[1.6px]"
            >
              <span
                className="w-[12.8px] h-[12.8px] rounded-full"
                style={{ background: color }}
              />
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}