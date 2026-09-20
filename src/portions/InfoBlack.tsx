"use client";
import Image from "next/image";
import Link from "next/link";
import { List } from "@/data/list";
import { BlurFade } from "@/components/ui/blur-fade";

type Product = { name: string; picLink: string; description: string; nextLink: string };

export function InfoBlack() {
  const source: Product[] = [...List.Women, ...List.Men];
  const items = source.slice(0, 5);

  // Fallback for dev
  const products: Product[] = items.length
    ? items
    : Array.from({ length: 5 }).map((_, i) => ({
        name: "Women Wallet",
        picLink: "/Manufacturer.jpg",
        nextLink: "/products",
        description: "",
      }));

  return (
    <section className="w-screen bg-[#193827] py-[80px] px-5 sm:px-8 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[60px]">

        <BlurFade inView duration={0.7} delay={0}>
          <h2 className="font-instrument uppercase text-[#efc250] text-[42px] max-md:text-3xl leading-[55px]">
            Trending Now
          </h2>
        </BlurFade>

        {/* 5 rotated product cards — 222×328 per Figma */}
        <div className="flex flex-wrap justify-center items-center gap-8 w-full">
          {products.map((item, i) => (
            <BlurFade
              key={`${item.nextLink}-${i}`}
              inView
              duration={0.6}
              delay={0.1 + i * 0.1}
            >
              <Link
                href={item.nextLink}
                className="group flex flex-col items-center gap-6 w-[222px] h-[328px] justify-center"
              >
                <div className="relative w-[222px] h-[222px] overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.picLink}
                    alt={item.name}
                    width={296}
                    height={222}
                    className="w-[296px] h-[222px] object-contain  group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="font-dmsans uppercase text-white text-base font-light leading-[21px] text-center">
                  {item.name}
                </span>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}