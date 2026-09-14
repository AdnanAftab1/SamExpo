import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#f7f7eb] pt-[88px]">
      <div className="relative z-10 flex min-h-[calc(100vh-88px)] w-full flex-col items-center justify-center px-6">
        <BlurFade inView duration={0.7} delay={0}>
          <div className="flex flex-col items-center gap-8">
            {/* Eyebrow */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 relative">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.43399 28L4.46732 11.9667C3.6451 12.1222 2.9171 11.9333 2.28332 11.4C1.64954 10.8667 1.3331 10.1778 1.33399 9.33333C1.33399 8.6 1.59532 7.97244 2.11799 7.45067C2.64065 6.92889 3.26821 6.66756 4.00065 6.66667C4.7331 6.66578 5.3611 6.92711 5.88465 7.45067C6.40821 7.97422 6.6691 8.60178 6.66732 9.33333C6.66732 9.64444 6.62288 9.93333 6.53399 10.2C6.4451 10.4667 6.31176 10.7111 6.13399 10.9333C6.62288 11.2222 7.11754 11.4613 7.61799 11.6507C8.11843 11.84 8.64599 11.9342 9.20065 11.9333C10.1784 11.9333 11.0842 11.6889 11.918 11.2C12.7518 10.7111 13.4015 10.0444 13.8673 9.2L14.7007 7.66667C14.2784 7.42222 13.9451 7.1 13.7007 6.7C13.4562 6.3 13.334 5.84444 13.334 5.33333C13.334 4.6 13.5953 3.97244 14.118 3.45067C14.6407 2.92889 15.2682 2.66756 16.0007 2.66667C16.7331 2.66578 17.3611 2.92711 17.8847 3.45067C18.4082 3.97422 18.6691 4.60178 18.6673 5.33333C18.6673 5.84444 18.5451 6.3 18.3007 6.7C18.0562 7.1 17.7229 7.42222 17.3007 7.66667L18.134 9.2C18.6007 10.0444 19.2509 10.7111 20.0847 11.2C20.9184 11.6889 21.8238 11.9333 22.8007 11.9333C23.3562 11.9333 23.8842 11.8444 24.3847 11.6667C24.8851 11.4889 25.3793 11.2556 25.8673 10.9667C25.6895 10.7444 25.5562 10.4947 25.4673 10.2173C25.3784 9.94 25.334 9.64533 25.334 9.33333C25.334 8.6 25.5953 7.97244 26.118 7.45067C26.6407 6.92889 27.2682 6.66756 28.0007 6.66667C28.7331 6.66578 29.3611 6.92711 29.8847 7.45067C30.4082 7.97422 30.6691 8.60178 30.6673 9.33333C30.6673 10.1778 30.3509 10.8667 29.718 11.4C29.0851 11.9333 28.3571 12.1222 27.534 11.9667L24.5673 28H7.43399ZM9.66732 25.3333H22.334L24.334 14.4667C24.0895 14.5111 23.834 14.5502 23.5673 14.584C23.3007 14.6178 23.0451 14.6342 22.8007 14.6333C21.4007 14.6333 20.1007 14.3 18.9007 13.6333C17.7007 12.9667 16.734 12.0333 16.0007 10.8333C15.2673 12.0333 14.3007 12.9667 13.1007 13.6333C11.9007 14.3 10.6007 14.6333 9.20065 14.6333C8.95621 14.6333 8.70065 14.6164 8.43399 14.5827C8.16732 14.5489 7.91176 14.5102 7.66732 14.4667L9.66732 25.3333Z" fill="#193827" />
                </svg>
              </div>
              <div className="font-dmsans text-[#193827] text-sm tracking-[0.2em] uppercase">
                Manufacturers &amp; Global Exporters Since 2015
              </div>
            </div>

            {/* Headline */}
            <h1 className="max-w-[900px] text-center font-instrument text-[clamp(42px,5.5vw,76px)] font-normal leading-[1.02] tracking-tight text-[#193827]">
              ELEVATING CRAFTSMANSHIP IN{" "}
              <span className="italic text-[#947534]">Leather Artistry</span>
            </h1>

            <p className="max-w-[640px] text-center font-dmsans text-xl font-light leading-normal text-[#193827]">
              From premium small leather goods to high-tensile industrial safety wear, Al-Ahad Exports builds, scales, and ships custom private-label leather products from Kolkata to global brand inventories.
            </p>
          </div>
        </BlurFade>

        {/* Double-border CTA */}
        <BlurFade inView duration={0.7} delay={0.2}>
          <div className="mt-12 sa-cta-outline w-[220px]">
            <Link href="#products" className="sa-cta-inner filled w-full text-base">
              Explore Portfolio
            </Link>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}