import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="w-screen h-screen bg-[#f7f7eb]">

      {/* Floating leather image */}
      <div className="absolute w-screen h-screen overflow-hidden">
      <div
        aria-hidden
        className="
          absolute pointer-events-none z-0 overflow-clip
          top-[30vh]
          w-screen h-[50vh]
        "
      >
        <Image src="/MainBag.png" alt="" fill className="upAndFade" />
      </div>
      </div>

      {/* Headline */}
      <div className="relative z-10 flex h-screen w-full flex-col items-center justify-center px-4 -mt-40 mb-18">
        <BlurFade inView duration={0.4} delay={0}>
          <div className="flex flex-col items-center gap-0 w-full">

            <h1 className="text-center font-instrument whitespace-nowrap uppercase text-[clamp(32px,7vw,68px)] font-normal leading-[1.15] text-[#193827] -mb-[0.15em]">
              Transforming Spaces
            </h1>

            <p className="text-center font-instrument whitespace-nowrap italic text-[clamp(32px,7vw,68px)] font-normal leading-[1.15] tracking-[-0.02em] text-[#947534]">
              with Premium Leather
            </p>

          </div>
        </BlurFade>
      </div>

      {/* Subhead */}
      <div className="size-full">
        <BlurFade inView duration={0.7} delay={0.2}>
          <p className="text-center font-dmsans text-[20px] leading-[26px] font-normal text-[#193827]">
            Discover the seamless fusion of elegance, durability, and eco-conscious design with our innovative leather products.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}