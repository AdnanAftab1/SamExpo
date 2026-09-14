import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

export default function AboutUsIntro() {
  return (
    <section className="relative w-full min-h-screen bg-[#f7f7eb] pt-[88px] overflow-hidden">
      <BlurFade inView={true} offset={0.2}>
        <div className="relative z-10 flex min-h-[calc(100vh-88px)] w-full flex-col items-center justify-center px-6">
          <div className="flex flex-col items-center gap-8 max-w-[900px]">

            {/* Eyebrow icon */}
            <svg width="72" height="72" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.3076 8.4942C37.6624 9.20217 37.7541 10.5416 38.4945 11.2261L39.1164 11.8007L37.133 18.9169C35.9416 23.1908 35.054 25.9381 34.9102 25.7953C34.7788 25.6648 33.697 23.8155 32.5064 21.6858C30.579 18.2387 30.3709 17.7366 30.6085 17.1116C31.0484 15.954 29.8426 15.0501 28.9889 15.8977C28.5087 16.3744 28.6112 17.0774 29.2233 17.503C29.7238 17.8512 29.8008 18.3005 30.0796 22.4998C30.2479 25.0375 30.3154 27.157 30.2295 27.2099C30.1432 27.2627 28.5752 26.1288 26.7448 24.6904C23.8455 22.4118 23.4168 21.9768 23.4168 21.3137C23.4168 20.7185 23.2728 20.5168 22.7563 20.3879C21.9494 20.1869 21.2592 20.6929 21.3673 21.4064C21.4427 21.905 21.7891 22.1929 22.6283 22.4544C22.8573 22.5259 23.9601 24.942 25.2567 28.2123L27.4907 33.8473L29.1991 33.8459C32.4488 33.8439 35.7287 32.4783 38.4177 30.0071L39.903 28.6423L40.3992 29.19C41.1141 29.9794 43.8316 31.8541 45.3634 32.6145C47.066 33.4597 49.211 33.9159 50.9733 33.8073L52.3776 33.7207L54.6529 28.1102C56.5989 23.3111 57.0137 22.4878 57.5199 22.4163C58.3121 22.3046 58.7434 21.4896 58.3736 20.8036C57.86 19.8508 56.5338 20.2355 56.5338 21.3372C56.5338 21.9721 56.0727 22.4348 53.246 24.6364C51.4377 26.0445 49.8228 27.242 49.6573 27.2971C49.4436 27.3686 49.4031 26.9913 49.5174 25.9923C49.6057 25.2197 49.7595 23.0924 49.8586 21.2655C50.0286 18.1361 50.076 17.9195 50.6742 17.5304C51.4001 17.0581 51.4056 16.191 50.6857 15.7429C49.9135 15.2625 49.2943 15.8692 49.3687 17.0336C49.4207 17.848 49.0181 18.7574 47.0368 22.3014C45.7195 24.6576 44.5562 26.4879 44.4513 26.3692C44.3462 26.2502 43.5751 23.6871 42.7371 20.6731C41.8992 17.6591 41.0022 14.4585 40.7441 13.5608L40.2744 11.9283L40.9133 11.1744C41.6493 10.306 41.7279 9.4258 41.1431 8.59702C40.6166 7.8507 38.9492 7.79016 38.3076 8.4942Z"
                fill="#193827"
              />
            </svg>

            {/* Eyebrow label */}
            <p className="font-dmsans text-[#193827] text-sm tracking-[0.2em] uppercase text-center">
              Our Story · Since 2015
            </p>

            {/* Headline */}
            <h1 className="max-w-[900px] text-center font-instrument text-[clamp(42px,5.5vw,76px)] font-normal leading-[1.02] tracking-tight text-[#193827]">
              ABOUT{" "}
              <span className="italic text-[#947534]">Al-Ahad Exports</span>
            </h1>

            {/* Subhead */}
            <p className="max-w-[640px] text-center font-dmsans text-xl max-md:text-lg font-light leading-normal text-[#193827]">
              Al-Ahad Exports began operations in 2015 with a foundational core mission: to export top-tier leather goods by merging traditional bench-craft with modern quality controls. By focusing on processing transparency and material integrity, we provide international brands with a reliable production partner in India.
            </p>
          </div>
        </div>
      </BlurFade>

      <Image
        priority
        src="/Bg_image_leather.jpg"
        alt=""
        width={1920}
        height={1080}
        className="absolute top-0 -z-0 h-full w-full object-cover opacity-[0.08]"
      />
    </section>
  );
}