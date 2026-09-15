import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="relative w-full min-h-[880px] overflow-hidden bg-[#f7f7eb]">

      {/* Floating leather image — bottom center-right, per Figma spec */}
      <div
        aria-hidden
        className="hidden lg:block absolute pointer-events-none z-0"
        style={{
          width: 447,
          height: 596,
          left: "calc(50% - 447px/2 - 35px)",
          bottom: "-320px",
          transform: "rotate(6.98deg)",
        }}
      >
        <Image
          src="/Manufacturer.jpg"
          alt=""
          fill
          className="object-contain opacity-95"
        />
      </div>

      {/* Headline block — centered */}
      <div className="relative z-10 flex min-h-[880px] w-full flex-col items-center justify-center px-6">
        <BlurFade inView duration={0.7} delay={0}>
          <div className="flex flex-col items-center gap-0 max-w-[773px]">

            {/* Line 1 — upright serif, dark green */}
            <h1 className="text-center font-instrument uppercase text-[clamp(42px,5.5vw,68px)] font-normal leading-[88px] text-[#193827] -mb-[15px]">
              Transforming Spaces
            </h1>

            {/* Line 2 — italic serif, bronze */}
            <p className="text-center font-instrument italic text-[clamp(42px,5.5vw,68px)] font-normal leading-[88px] tracking-[-0.02em] text-[#947534]">
              with Premium Leather
            </p>

          </div>
        </BlurFade>
      </div>

      {/* Subhead — per Figma y=796 */}
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