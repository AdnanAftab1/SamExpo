import { BlurFade } from "@/components/ui/blur-fade"
import Image from "next/image"

export default function InfoLong() {
  return (
    <section className="w-full bg-[#193827] py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">

        {/* Header */}
        <BlurFade inView={true} duration={0.7} delay={0}>
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="font-instrument text-[#efc250] text-4xl sm:text-5xl lg:text-6xl font-normal leading-none">
              The Al-Ahad Production Ecosystem
            </h2>
            <p className="font-dmsans text-white/85 text-base sm:text-lg lg:text-xl font-light max-w-3xl">
              Based in the historic leather manufacturing hub of Kolkata, India, Al-Ahad Exports was established in 2015 to bridge the gap between traditional Indian leather bench-craft and strict international corporate compliance.
            </p>
          </div>
        </BlurFade>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">

          {/* Left Column (Features) */}
          <div className="flex flex-col gap-8 w-full lg:w-1/2">
            <BlurFade inView={true} duration={0.7} delay={0.1}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 border border-white/15 rounded-none p-5 hover:border-[#efc250] hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[#efc250] rounded-none">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#efc250">
                    <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-instrument text-white text-lg sm:text-xl leading-relaxed">
                    Integrated Manufacturer &amp; Merchant Exporter
                  </h3>
                  <p className="font-dmsans text-white/75 text-sm sm:text-base font-light leading-relaxed">
                    We operate as an integrated manufacturer and merchant exporter, translating raw tech packs into floor-ready, custom-branded inventory collections.
                  </p>
                </div>
              </div>
            </BlurFade>

            <BlurFade inView={true} duration={0.7} delay={0.2}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 border border-white/15 rounded-none p-5 hover:border-[#efc250] hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[#efc250] rounded-none">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#efc250">
                    <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520Z"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-instrument text-white text-lg sm:text-xl leading-relaxed">
                    Two Distinct Production Specialties
                  </h3>
                  <p className="font-dmsans text-white/75 text-sm sm:text-base font-light leading-relaxed">
                    Unlike generic suppliers, our production tracks are divided into high-finish, retail-ready luxury fashion accessories and high-tolerance industrial safety apparel.
                  </p>
                </div>
              </div>
            </BlurFade>

            <BlurFade inView={true} duration={0.7} delay={0.3}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 border border-white/15 rounded-none p-5 hover:border-[#efc250] hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[#efc250] rounded-none">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#efc250">
                    <path d="m216-160-56-56 464-464H360v-80h320v320h-80v-264L216-160Z"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-instrument text-white text-lg sm:text-xl leading-relaxed">
                    Luxury Fashion Accessories
                  </h3>
                  <p className="font-dmsans text-white/75 text-sm sm:text-base font-light leading-relaxed">
                    High-finish, retail-ready products including Bags, Wallets, and Travel Cases for discerning global brands.
                  </p>
                </div>
              </div>
            </BlurFade>

            <BlurFade inView={true} duration={0.7} delay={0.4}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 border border-white/15 rounded-none p-5 hover:border-[#efc250] hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[#efc250] rounded-none">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#efc250">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-560q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v560q0 33-23.5 56.5T680-120H280Zm0-80h400v-560H280v560Zm160-40h80v-80h-80v80Z"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-instrument text-white text-lg sm:text-xl leading-relaxed">
                    Industrial Safety Apparel
                  </h3>
                  <p className="font-dmsans text-white/75 text-sm sm:text-base font-light leading-relaxed">
                    High-tolerance protective wear built to withstand demanding field conditions.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right Column (Images) */}
          <div className="relative w-full lg:w-1/2 h-[500px] md:h-[600px]">
            <BlurFade inView={true} duration={0.7} delay={0.2}>
              <div className="absolute top-0 left-0 z-[1] rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                <Image
                  priority
                  src="/Manufacturer.jpg"
                  alt="Al-Ahad Exports Manufacturing Facility"
                  width={300}
                  height={400}
                  className="w-56 md:w-72 border-[10px] border-[#f7f7eb] shadow-xl shadow-black/50 object-cover"
                />
              </div>
            </BlurFade>

            <BlurFade inView={true} duration={0.7} delay={0.4}>
              <div className="absolute top-16 left-46 z-[2] -rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                <Image
                  priority
                  src="/Manufacturer.jpg"
                  alt="Leather Craftsmanship at Al-Ahad Exports"
                  width={300}
                  height={400}
                  className="w-56 md:w-72 border-[10px] border-[#f7f7eb] shadow-xl shadow-black/50 object-cover"
                />
              </div>
            </BlurFade>

            <BlurFade inView={true} duration={0.7} delay={0.6}>
              <div className="absolute top-52 left-32 z-[3] rotate-[5deg] hover:rotate-0 transition-transform duration-300">
                <Image
                  priority
                  src="/Manufacturer.jpg"
                  alt="Kolkata Leather Manufacturing Hub"
                  width={300}
                  height={400}
                  className="w-56 md:w-72 border-[10px] border-[#f7f7eb] shadow-xl shadow-black/50 object-cover"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}