import { BlurFade } from "@/components/ui/blur-fade"
import Image from "next/image"

export function InfoBlack() {
    return (
        <section className="w-full min-h-screen p-4 bg-[#193827] inline-flex flex-col justify-center items-center gap-2.5">
            <div className="w-full flex flex-row max-md:flex-col mt-28 justify-center items-center gap-8">
                {/* Left Column */}
                <div className="w-1/2 max-md:w-full inline-flex flex-col justify-center items-start gap-14">
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                        <BlurFade inView={true} duration={0.7} delay={0}>
                            <h2 className="font-instrument text-[#efc250] text-4xl sm:text-5xl pl-6 font-normal leading-none">
                                Why Partner With Us?
                            </h2>
                        </BlurFade>
                        <BlurFade inView={true} duration={0.7} delay={0.15}>
                            <p className="font-dmsans text-white/80 text-base pl-6 font-light leading-7">
                                Elevate Your Brand with Exquisite Custom Leather Goods
                            </p>
                        </BlurFade>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                        <BlurFade inView={true} duration={0.6} delay={0.2}>
                            <Card
                                title="Tailored Production"
                                description="Your exact tech packs and material specifications guide every single step of our customized manufacturing process."
                            />
                        </BlurFade>
                        <BlurFade inView={true} duration={0.6} delay={0.3}>
                            <Card
                                title="Premium Quality"
                                description="We source only the finest, sustainable leathers and REACH-compliant hardware for enduring elegance and high performance."
                            />
                        </BlurFade>
                        <BlurFade inView={true} duration={0.6} delay={0.4}>
                            <Card
                                title="Proven Expertise"
                                description="Our skilled production team delivers exceptional results across a wide range of retail goods and heavy-duty industrial wear."
                            />
                        </BlurFade>
                        <BlurFade inView={true} duration={0.6} delay={0.5}>
                            <Card
                                title="Global Compliance"
                                description="From meticulous edge-stitching to eco-conscious tanning practices, we ensure your inventory seamlessly meets international import standards."
                            />
                        </BlurFade>
                    </div>
                </div>

                {/* Right Column - Logo */}
                <BlurFade inView={true} duration={0.8} delay={0.3}>
                    <div className="w-1/2 max-md:w-full flex justify-center items-center">
                        <Image
                            priority
                            src="/LogoBig.svg"
                            alt="Al-Ahad Exports"
                            width={960}
                            height={540}
                            className="w-full max-w-[400px] h-auto object-contain"
                        />
                    </div>
                </BlurFade>
            </div>
        </section>
    )
}

function Card({ title, description }: { title?: string; description?: string }) {
    return (
        <div className="p-4 border border-white/15 rounded-none hover:border-[#efc250] transition-colors flex flex-row justify-start items-start gap-3 hover:bg-white/5">
            <div className="w-7 h-7 border border-[#efc250] rounded-full flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" fill="#efc250">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                </svg>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch font-instrument text-white text-lg sm:text-xl leading-7">
                    {title}
                </div>
                <div className="w-fit font-dmsans text-white/70 text-sm sm:text-base font-light">
                    {description}
                </div>
            </div>
        </div>
    )
}