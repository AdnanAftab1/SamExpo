import { BlurFade } from "@/components/ui/blur-fade";

export default function AboutUsIntro() {
  return (
    <section
      className="w-full flex flex-col justify-center items-center gap-8 bg-[#193827]"
      style={{ padding: "120px 80px 80px" }}
    >
      <BlurFade inView duration={0.7} delay={0}>
        <div className="flex flex-col items-center gap-6 max-w-[800px] text-center">

          <h2 className="font-instrument italic text-[#efc250] text-[32px] leading-[42px]">
            About Al-Ahad Exports
          </h2>

          <p className="font-instrument text-white uppercase text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.3] lg:leading-[55px]">
            Al-Ahad Exports is a family-run leather company with its own production factory in India. With us, promotional give-away production is also possible. Our objective is to meet all the needs that support environmentally friendly and sustainable production.
          </p>

          <p className="font-instrument text-white uppercase text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.3] lg:leading-[55px] mt-6">
            We have a state-of-the-art tannery for the leather. Also, we have a complete production chain including the purchase of raw skin, making leather, leather goods.
          </p>

        </div>
      </BlurFade>
    </section>
  );
}