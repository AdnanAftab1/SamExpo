"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";

export function Info() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsData = [
    {
      title: "Custom Designing & Tech Pack Conversion",
      description: "We have the trusted expertise, modern machinery, and deep industry experience to deliver your custom private label project cost-efficiently and to your exact brand specifications."
    },
    {
      title: "Rigorous Quality Control",
      description: "Our strict three-tier quality control system ensures process integrity, flawless stitching, and complete product conformation with international physical and chemical safety specifications at all levels."
    },
    {
      title: "Skills & Export Experience",
      description: "Our skilled, highly experienced Kolkata craftsmen are eager for challenging designs and are fully equipped to scale up production for projects of any size, volume, or technical complexity."
    },
    {
      title: "Global Compliance",
      description: "All process chemicals, premium hardware, and leather treatments strictly match European REACH guidelines and global toxic limits."
    },
    {
      title: "Seamless Indian Port Logistics",
      description: "Direct pipeline access to Kolkata port hubs ensures secure transit from our floors into container vessels with clean documentation."
    }
  ];

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrentIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  return (
    <>
      {/* Feature carousel section — cream background */}
      <section className="w-full bg-[#f7f7eb] px-5 pt-[80px] pb-[80px] sm:px-8 lg:px-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[60px]">
          <header className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-instrument text-[42px] max-md:text-3xl font-normal leading-none text-[#193827]">
              WHY WORK WITH AL-AHAD EXPORTS
            </h2>
            <p className="max-w-[560px] font-dmsans text-base font-light leading-normal text-[#193827]">
              From premium small leather goods to high-tensile industrial safety wear, we deliver custom private-label leather products from Kolkata to global brand inventories.
            </p>
          </header>

          <div className="w-full">
            <Carousel
              opts={{ align: "center", loop: true }}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent className="-ml-3 md:-ml-4">
                {cardsData.map((card, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <Card title={card.title} description={card.description} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden sm:flex -left-3 md:-left-5 lg:-left-12 border-[#193827] text-[#193827] bg-transparent hover:bg-[#193827] hover:text-[#efc250]" />
              <CarouselNext className="hidden sm:flex -right-3 md:-right-5 lg:-right-12 border-[#193827] text-[#193827] bg-transparent hover:bg-[#193827] hover:text-[#efc250]" />

              <div className="flex justify-center gap-2 mt-8">
                {cardsData.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      currentIndex === index ? "w-6 bg-[#193827]" : "bg-[#f0f1e5] hover:bg-[#193827]/40"
                    )}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* About Us section — cream background */}
      <section className="w-full bg-[#f7f7eb] px-5 sm:px-8 lg:px-20 pb-[80px] overflow-hidden">
        <div className="mx-auto flex w-full max-w-[1280px] flex-wrap justify-center items-start gap-12 lg:gap-24">
          <div className="inline-flex flex-col justify-start items-start gap-8 max-w-2xl">
            <div className="flex flex-col justify-start items-start gap-4 w-full">
              <h2 className="w-full font-instrument text-[42px] max-md:text-3xl font-normal leading-none text-[#193827]">
                About Us
              </h2>
              <p className="w-full font-dmsans text-[#193827] text-lg max-md:text-base font-light leading-normal max-w-xl">
                Al-Ahad Exports is a premier manufacturing and merchant export company with its own state-of-the-art leather production facilities in India, serving global markets since 2015. Our foundational objective is to offer a completely integrated production chain, handling everything from the sourcing of raw skin, processing into high-grade finished leather, to final luxury leather goods and safety wear manufacturing.
              </p>
            </div>
            <div className="sa-cta-outline w-[200px]">
              <Link href="/contact" className="sa-cta-inner filled w-full">
                Request A Quote
              </Link>
            </div>
          </div>

          <div className="relative flex flex-row">
            <BlurFade inView={true} duration={0.7}>
              <div className="p-2 md:p-3 bg-white flex justify-start items-center gap-2.5 overflow-hidden shadow-md shadow-[#193827]/30">
                <Image
                  priority
                  src='/Manufacturer.jpg'
                  alt='Al-Ahad Exports Manufacturing Facility'
                  width={540}
                  height={540}
                  className="w-56 h-72 md:w-72 md:h-96 object-cover"
                />
              </div>
            </BlurFade>
            <BlurFade inView={true} delay={1} duration={0.5}>
              <div className="p-2 md:p-3 origin-top-left rotate-[12.71deg] bg-white flex justify-start items-center gap-2.5 overflow-hidden shadow-md shadow-[#193827]/30">
                <Image
                  priority
                  src='/Manufacturer.jpg'
                  alt='Leather Craftsmanship at Al-Ahad Exports'
                  width={540}
                  height={540}
                  className="w-56 h-72 md:w-72 md:h-96 object-cover"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ title, description }: { title?: string; description?: string }) {
  return (
    <div className="w-full h-auto min-h-[280px] md:min-h-[320px] p-5 border border-[#193827]/15 bg-[#f7f7eb] inline-flex flex-col justify-between items-start gap-3 hover:border-[#efc250] transition-colors">
      <div className="self-stretch inline-flex justify-between items-start gap-3">
        <div className="flex-1 font-instrument text-[#193827] text-lg md:text-xl leading-tight">
          {title}
        </div>
        <div className="relative flex-shrink-0">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="border border-[#947534] p-1 rounded-full">
            <path d="M3.29591 20.6021L9.65991 14.2381M17.6739 11.4081L15.7689 17.1231C15.7385 17.2147 15.6865 17.2976 15.6172 17.3648C15.5479 17.432 15.4634 17.4815 15.3709 17.5091L3.69291 20.9801C3.5877 21.0113 3.47594 21.0131 3.36978 20.9853C3.26362 20.9574 3.16714 20.901 3.09084 20.8221C3.01453 20.7432 2.96132 20.6449 2.937 20.5379C2.91268 20.4308 2.91819 20.3192 2.95291 20.2151L6.74491 8.84108C6.77209 8.75942 6.81652 8.68455 6.87518 8.62157C6.93385 8.5586 7.00537 8.50898 7.08491 8.47608L12.4719 6.25808C12.5814 6.21285 12.7019 6.20106 12.8181 6.22419C12.9343 6.24733 13.0411 6.30436 13.1249 6.38808L17.5289 10.7941C17.6077 10.8729 17.663 10.972 17.6886 11.0805C17.7142 11.1889 17.7091 11.3024 17.6739 11.4081Z" stroke="#947534" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.7919 11.056L20.6199 8.22699C20.9948 7.85194 21.2055 7.34332 21.2055 6.81299C21.2055 6.28266 20.9948 5.77405 20.6199 5.39899L18.4999 3.27699C18.3142 3.09119 18.0937 2.9438 17.851 2.84324C17.6083 2.74268 17.3481 2.69092 17.0854 2.69092C16.8227 2.69092 16.5626 2.74268 16.3198 2.84324C16.0771 2.9438 15.8566 3.09119 15.6709 3.27699L12.8429 6.10599M11.7809 12.116C11.6416 11.9767 11.4762 11.8663 11.2941 11.7909C11.1121 11.7156 10.917 11.6768 10.72 11.6769C10.523 11.6769 10.328 11.7158 10.146 11.7912C9.96402 11.8666 9.79867 11.9772 9.6594 12.1165C9.52014 12.2558 9.40968 12.4212 9.33433 12.6032C9.25899 12.7853 9.22023 12.9803 9.22028 13.1773C9.22032 13.3743 9.25917 13.5694 9.3346 13.7514C9.41003 13.9334 9.52057 14.0987 9.6599 14.238C9.9413 14.5193 10.3229 14.6772 10.7208 14.6771C11.1186 14.677 11.5001 14.5189 11.7814 14.2375C12.0627 13.9561 12.2206 13.5745 12.2205 13.1766C12.2204 12.7788 12.0623 12.3973 11.7809 12.116Z" stroke="#947534" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-2 flex-grow">
        <Image
          priority
          src='/octicon_north-star-24(1).svg'
          alt='icon'
          width={16}
          height={16}
          className="w-4 h-4"
        />
        <div className="self-stretch font-dmsans text-[#193827] text-sm md:text-base font-light leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
}