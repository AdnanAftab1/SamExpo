import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

const infoRow1 = [
  {
    title: "CUSTOM DESIGN",
    desc: "We have the trusted expertise and experience to deliver your project cost-efficiently and to your exact specifications.",
  },
  {
    title: "PREMIUM MATERIALS",
    desc: "Sustainably sourced leathers and REACH-compliant hardware for enduring elegance and high performance.",
  },
  {
    title: "EXPORT READY",
    desc: "Direct pipeline access to Kolkata port hubs ensures secure transit from our floors into container vessels.",
  },
];

const infoRow2 = [
  {
    title: "QUALITY CONTROL",
    desc: "Our three-tier QC system ensures process integrity, flawless stitching, and full international compliance.",
  },
  {
    title: "SKILLED CRAFTSMEN",
    desc: "Kolkata craftsmen eager for challenging designs, fully equipped to scale production to any size.",
  },
  {
    title: "GLOBAL COMPLIANCE",
    desc: "All process chemicals, premium hardware, and leather treatments strictly match European REACH guidelines.",
  },
];

export function Info() {
  return (
    <>
      {/* ============ Section 3: Why Partner ============ */}
      <section className="w-full bg-[#f7f7eb] py-[60px] px-5 sm:px-8 lg:px-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[60px]">

          <BlurFade inView duration={0.7} delay={0}>
            <header className="flex flex-col items-center gap-1 text-center max-w-[522px]">
              <h2 className="font-instrument uppercase text-[42px] max-md:text-3xl leading-[55px] text-[#193827]">
                Why Partner With Us
              </h2>
              <p className="font-dmsans text-base font-light leading-[21px] text-[#193827]">
                From premium small leather goods to high-tensile industrial safety wear, we deliver worldwide.
              </p>
            </header>
          </BlurFade>

          {/* Two rows of three info cards */}
          <div className="flex flex-col gap-8 w-full">
            {[infoRow1, infoRow2].map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="flex flex-wrap justify-center items-center gap-8 lg:gap-[120px]"
              >
                {row.map((item, i) => (
                  <BlurFade
                    key={item.title}
                    inView
                    duration={0.6}
                    delay={0.1 + rowIdx * 0.15 + i * 0.08}
                  >
                    <InfoCard title={item.title} desc={item.desc} />
                  </BlurFade>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Section 4: About Us Split ============ */}
      <section className="w-full bg-[#f7f7eb] py-[60px] px-5 sm:px-8 lg:px-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[130px]">

          {/* Left: text */}
          <BlurFade inView duration={0.7} delay={0}>
            <div className="w-full max-w-[593px] flex flex-col items-start gap-10">
              <div className="flex flex-col items-start gap-[18px]">
                <p className="font-instrument italic text-[#947534] text-[32px] leading-[42px] -mb-[2px]">
                  Elevate Your Brand with
                </p>
                <h2 className="font-instrument uppercase text-[#193827] text-[42px] max-md:text-3xl leading-[55px]">
                  Exquisite Custom Leather Goods
                </h2>
              </div>
              <p className="font-dmsans text-[#193827] text-[20px] leading-[26px] font-normal max-w-[593px]">
                As a leading custom leather goods manufacturer, we expertly transform your private-label vision into reality. From sophisticated wallets to complex designs, trust our experience and craftsmanship for exceptional, cost-effective results.
              </p>

              <div className="sa-cta-outline w-[160px]">
                <Link href="/contact" className="sa-cta-inner filled w-full">
                  Get a Quote
                </Link>
              </div>
            </div>
          </BlurFade>

          {/* Right: image */}
          <BlurFade inView duration={0.7} delay={0.2}>
            <div className="relative w-full max-w-[450px] h-[400px] lg:h-[550px]">
              <Image
                src="/Manufacturer.jpg"
                alt="Custom leather goods craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <article className="w-[320px] min-h-[183px] border border-white/25 hover:border-[#efc250] transition-colors p-4 flex flex-col items-center justify-center gap-[18px] text-center">
      {/* Nib icon — Figma's iconoir:design-nib */}
      <div className="w-10 h-10 flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.95 23.05L15.45 16.55M23.75 13.65L21.79 19.52C21.76 19.61 21.7 19.7 21.63 19.77C21.56 19.84 21.47 19.89 21.37 19.92L9.35 23.49C9.24 23.52 9.12 23.52 9.01 23.49C8.9 23.46 8.8 23.4 8.72 23.32C8.64 23.24 8.58 23.14 8.56 23.03C8.53 22.92 8.54 22.8 8.58 22.7L12.47 10.97C12.5 10.89 12.54 10.81 12.6 10.75C12.66 10.68 12.73 10.63 12.81 10.6L18.36 8.32C18.47 8.27 18.6 8.26 18.72 8.28C18.84 8.31 18.95 8.37 19.03 8.46L23.57 13C23.65 13.08 23.71 13.18 23.74 13.29C23.76 13.4 23.76 13.52 23.72 13.63Z"
            stroke="#193827"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="font-dmsans uppercase text-[16px] font-semibold leading-[21px] text-[#193827]">
        {title}
      </h3>
      <p className="font-dmsans text-[14px] font-light leading-[18px] text-[#193827] max-w-[288px]">
        {desc}
      </p>
    </article>
  );
}