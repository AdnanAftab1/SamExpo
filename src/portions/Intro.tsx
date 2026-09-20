import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
<section className="relative w-full min-h-[880px] overflow-clip bg-[#f7f7eb]">
      {/* Floating leather image — bottom center-right */}
  <div
  aria-hidden
  className="
    absolute pointer-events-none z-0 overflow-hidden
    w-[240px] h-[320px]
    left-1/2 -translate-x-1/2
    top-[200px]
    sm:w-[320px] sm:h-[426px]
    lg:w-[447px] lg:h-[596px]
    lg:left-[calc(50%-447px/2-35px)] lg:translate-x-0
  "
>
  <Image src="/MainBag.png" alt="" fill className="upAndFade" />
</div>

      {/* Headline */}
      <div className="relative z-10 flex min-h-[880px] w-full flex-col items-center justify-center px-6 -mt-40">
        <BlurFade inView duration={0.4} delay={0}>
          <div className="flex flex-col items-center gap-0 max-w-[773px]">
            <h1 className="text-center font-instrument uppercase text-[clamp(42px,5.5vw,68px)] font-normal leading-[88px] text-[#193827] -mb-[15px]">
              Transforming Spaces
            </h1>
            <p className="text-center font-instrument italic text-[clamp(42px,5.5vw,68px)] font-normal leading-[88px] tracking-[-0.02em] text-[#947534]">
              with Premium Leather
            </p>
          </div>
        </BlurFade>
      </div>

      {/* Subhead */}
      <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 w-full max-w-[773px] px-6 z-10">
        <BlurFade inView duration={0.7} delay={0.2}>
          <p className="text-center font-dmsans text-[20px] leading-[26px] font-normal text-[#193827]">
            Discover the seamless fusion of elegance, durability, and eco-conscious design with our innovative leather products.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}