"use client";
import Image from "next/image";
import Link from "next/link";
import { List } from "@/data/list";
import { BlurFade } from "@/components/ui/blur-fade";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type Product = { name: string; picLink: string; description: string; nextLink: string };

export default function Products() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const source: Product[] = [...List.Men, ...List.Women];
  const products = source.slice(0, 5);

  // Fallback for dev if list is empty
  const items: Product[] = products.length
    ? products
    : Array.from({ length: 5 }).map((_, i) => ({
        name: "Facade Leather",
        picLink: "/Manufacturer.jpg",
        nextLink: "/products",
        description: "",
      }));

  // Sync the active dot with the current slide
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Auto-scroll every 5s, pause on hover
  useEffect(() => {
    if (!api || isPaused) return;
    const id = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [api, isPaused]);

  return (
    <section
      id="products"
      className="w-full bg-[#f7f7eb] py-[60px] px-5 sm:px-8 lg:px-20"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8">

        {/* Header */}
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

        {/* Carousel */}
        <BlurFade inView duration={0.7} delay={0.15}>
          <div
            className="relative w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Carousel
              opts={{ align: "center", loop: true }}
              setApi={(api) => setApi(api ?? null)}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {items.map((item, i) => (
                  <CarouselItem
                    key={`${item.nextLink}-${i}`}
                    className="pl-6 basis-[220px] sm:basis-[260px] md:basis-[300px] lg:basis-[340px]"
                  >
                    <Link
                      href={item.nextLink}
                      className="group flex flex-col items-center w-full hover:-translate-y-1 transition-transform duration-300"
                    >
                      <div className="w-full aspect-square flex items-center justify-center">
                        <Image
                          src={item.picLink}
                          alt={item.name}
                          width={500}
                          height={500}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <span className="mt-3 font-dmsans uppercase text-base font-light text-[#193827] text-center leading-[21px]">
                        {item.name}
                      </span>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Arrows — Saiham-styled with faded border ring */}
              <CarouselPrevious
                className="
                  hidden sm:flex
                  -left-4 md:-left-12
                  h-10 w-10
                  ring-1 ring-[#193827]/40
                  bg-transparent text-[#193827]
                  rounded-none
                  transition-all duration-500
                  hover:ring-[#193827] hover:bg-[#193827] hover:text-[#efc250]
                "
              />
              <CarouselNext
                className="
                  hidden sm:flex
                  -right-4 md:-right-12
                  h-10 w-10
                  ring-1 ring-[#193827]/40
                  bg-transparent text-[#193827]
                  rounded-none
                  transition-all duration-500
                  hover:ring-[#193827] hover:bg-[#193827] hover:text-[#efc250]
                "
              />
            </Carousel>
          </div>
        </BlurFade>

        {/* Dots — click jumps, current highlights */}
        <div className="flex items-center gap-2 mt-4">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={current === i}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                current === i
                  ? "w-6 bg-[#1b3a29]"
                  : "bg-[#f0f1e5] hover:bg-[#1b3a29]/40"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}