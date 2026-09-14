import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

export default function AboutInfos() {
  return (
    <section className="flex flex-col bg-[#f7f7eb]">

      {/* Section 1 — text left, image right */}
      <div className="w-full px-5 sm:px-8 lg:px-20 py-[80px] bg-[#f7f7eb] flex justify-center items-center">
        <div className="w-full max-w-[1280px] flex justify-center items-center flex-row max-md:flex-col gap-12 lg:gap-24">

          <BlurFade inView={true} duration={0.7} delay={0} offset={30}>
            <div className="w-full lg:max-w-[560px] inline-flex flex-col justify-center items-start gap-4">
              <h2 className="font-instrument text-[#193827] text-4xl sm:text-5xl max-md:text-3xl font-normal leading-[1.05]">
                Corporate Genesis &amp; Mission
              </h2>
              <p className="font-dmsans text-[#193827]/85 text-lg max-md:text-base font-light leading-relaxed">
                Al-Ahad Exports is a premier manufacturing and merchant export company with its own state-of-the-art leather production facilities in India, serving global markets since 2015. Our foundational objective is to offer a completely integrated production chain, handling everything from the sourcing of raw skin, processing into high-grade finished leather, to final luxury leather goods and safety wear manufacturing. With our scalable facility lines, large-scale custom corporate gifts and premium promotional giveaway production are also seamlessly executed.
              </p>
            </div>
          </BlurFade>

          <BlurFade inView={true} duration={0.7} delay={0.3} offset={30}>
            <div className="relative">
              <Image
                priority
                src="/Randompic.jpg"
                alt="Al-Ahad Exports Manufacturing Facility"
                width={600}
                height={600}
                className="w-full max-w-[420px] border-[10px] border-[#f7f7eb] rotate-3 shadow-xl shadow-[#193827]/20 object-cover"
              />
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Section 2 — image left, text right (flex-row-reverse) */}
      <div className="w-full px-5 sm:px-8 lg:px-20 py-[80px] bg-[#f7f7eb] flex justify-center items-center">
        <div className="w-full max-w-[1280px] flex justify-center items-center flex-row-reverse max-md:flex-col gap-12 lg:gap-24">

          <BlurFade inView={true} duration={0.7} delay={0} offset={30}>
            <div className="w-full lg:max-w-[560px] inline-flex flex-col justify-center items-start gap-4">
              <h2 className="font-instrument text-[#193827] text-4xl sm:text-5xl max-md:text-3xl font-normal leading-[1.05]">
                Factory Infrastructure &amp; Machinery
              </h2>
              <p className="font-dmsans text-[#193827]/85 text-lg max-md:text-base font-light leading-relaxed">
                We are deeply committed to fulfilling international compliance standards while actively promoting environmentally friendly, socially responsible, and sustainable leather production methods across our entire supply network. Our state-of-the-art facilities feature modern machinery for precision cutting, edge finishing, and quality assurance. Every production run undergoes raw skin sorting, mid-assembly stitch checks, and final hand cleaning, ensuring zero batch defects.
              </p>
            </div>
          </BlurFade>

          <BlurFade inView={true} duration={0.7} delay={0.3} offset={30}>
            <div className="relative">
              <Image
                priority
                src="/Randompic.jpg"
                alt="Al-Ahad Exports Factory Infrastructure"
                width={600}
                height={600}
                className="w-full max-w-[420px] border-[10px] border-[#f7f7eb] -rotate-3 shadow-xl shadow-[#193827]/20 object-cover"
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}