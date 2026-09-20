import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

export default function AboutInfos() {
  return (
    <section className="w-screen bg-[#f7f7eb] py-[60px] px-5 sm:px-8 lg:px-20 flex flex-col gap-20">

      {/* Block 1 — Text left, Image right */}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[130px]">

        <BlurFade inView duration={0.7} delay={0}>
          <div className="w-full max-w-[593px] flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-[18px]">
              <p className="font-instrument italic text-[#947534] text-[32px] leading-[42px]">
                Extensive Range of
              </p>
              <h3 className="font-instrument uppercase text-[#193827] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.2] lg:leading-[55px]">
                Manufacturing
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-dmsans font-light text-[#193827] text-lg lg:text-xl leading-[26px]">
                Al-Ahad leather is one of the most trusted private label leather handbag manufacturers as well as private label leather wallet manufacturers. If you want to have your own designed bags manufactured, please contact us.
              </p>
              <p className="font-dmsans font-light text-[#193827] text-lg lg:text-xl leading-[26px]">
                We are the leather bag manufacturers making quality handmade leather goods, credit cards as leather promotional gifts, leather key chains as promotional gifts, leather wallets as promotional gifts, etc.
              </p>
            </div>
          </div>
        </BlurFade>

        <BlurFade inView duration={0.7} delay={0.2}>
          <Image
            priority
            src="/Manufacturer.jpg"
            alt="Leather manufacturing at Al-Ahad Exports"
            width={450}
            height={550}
            className="w-full max-w-[450px] h-[400px] lg:h-[550px] object-cover"
          />
        </BlurFade>
      </div>

      {/* Block 2 — Image left, Text right */}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-[130px]">

        <BlurFade inView duration={0.7} delay={0.2}>
          <Image
            priority
            src="/Manufacturer.jpg"
            alt="Leather craftsmanship at Al-Ahad Exports"
            width={450}
            height={550}
            className="w-full max-w-[450px] h-[400px] lg:h-[550px] object-cover"
          />
        </BlurFade>

        <BlurFade inView duration={0.7} delay={0}>
          <div className="w-full max-w-[593px] flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-[18px]">
              <p className="font-instrument italic text-[#947534] text-[32px] leading-[42px]">
                Great Quality
              </p>
              <h3 className="font-instrument uppercase text-[#193827] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.2] lg:leading-[55px]">
                Exciting Price
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-dmsans font-light text-[#193827] text-lg lg:text-xl leading-[26px]">
                We craft premium leather handbags, wallets, and accessories with exceptional finishing — all at competitive prices. Our skilled team handles every step, from design and pattern making to material selection, ensuring the highest standards.
              </p>
              <p className="font-dmsans font-light text-[#193827] text-lg lg:text-xl leading-[26px]">
                Trusted by national and international brands, we offer on-time delivery, global door-to-door shipping, and scalable production for small to large orders. Whether you&apos;re a start-up or an established retailer, we help bring your leather goods collection to life.
              </p>
            </div>
          </div>
        </BlurFade>
      </div>

    </section>
  );
}