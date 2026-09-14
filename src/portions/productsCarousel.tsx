"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { List } from "@/data/list";
import { BlurFade } from "@/components/ui/blur-fade";

type Product = { name: string; picLink: string; description: string; nextLink: string };

export default function Products() {
  const products: Product[] = [...List.Men, ...List.Women];
  const [api, setApi] = useState<EmblaCarouselType | null>(null);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="products" className="w-full bg-[#f7f7eb] px-4 py-[80px] sm:px-8 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[60px]">
        <header className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-instrument text-[42px] font-normal leading-none text-[#193827]">
            EXPLORE OUR PRODUCTS
          </h2>
          <p className="max-w-[560px] font-dmsans text-base font-light leading-normal text-[#193827]">
            Discover our comprehensive range of premium leather goods — designed for every modern brand portfolio.
          </p>
        </header>

        <BlurFade inView duration={0.7}>
          <Carousel opts={{ align: "center", loop: true }} setApi={(api) => setApi(api ?? null)} className="w-[90vw] max-w-[1280px] max-md:px-3">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.nextLink} className="basis-full md:basis-1/2 xl:basis-1/3">
                  <Card product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-5 border-[#193827] text-[#193827] bg-transparent hover:bg-[#193827] hover:text-[#efc250]" />
            <CarouselNext className="-right-5 border-[#193827] text-[#193827] bg-transparent hover:bg-[#193827] hover:text-[#efc250]" />
          </Carousel>
        </BlurFade>
      </div>
    </section>
  );
}

function Card({ product }: { product: Product }) {
  return (
    <Link href={product.nextLink} className="block w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-center border border-[#193827]/10 bg-[#f7f7eb] hover:bg-[#f0f1e5] transition p-4 sm:p-6 md:p-8">
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-4 py-1.5 border border-[#efc250] bg-[#f7f7eb] rounded-full z-10">
          <span className="font-dmsans text-[#193827] text-xs sm:text-sm font-medium">Product</span>
        </div>
        <div className="flex-1 flex items-center justify-center w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
          <Image src={product.picLink} alt={product.name} width={500} height={500}
            className="w-full h-auto max-h-[50vh] sm:max-h-[55vh] object-contain" priority />
        </div>
        <h3 className="font-instrument text-[#193827] text-xl sm:text-2xl md:text-3xl text-center mt-4 sm:mt-6 mb-4 sm:mb-6 px-4">
          {product.name}
        </h3>
      </div>
    </Link>
  );
}