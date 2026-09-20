import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-screen bg-[#193827]">

      {/* Top decorative vector */}
      <div className="w-full h-16 border-t border-b border-[#efc250]/40 relative overflow-hidden">
        <svg className="w-full h-full text-[#efc250]/60" preserveAspectRatio="none" viewBox="0 0 1440 64" fill="none">
          <pattern id="footer-ornament-top" x="0" y="0" width="36" height="64" patternUnits="userSpaceOnUse">
            <path d="M0 32 L18 8 L36 32 L18 56 Z" stroke="#efc250" strokeWidth="0.8" fill="none" />
            <path d="M18 8 L18 56" stroke="#efc250" strokeWidth="0.5" opacity="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-ornament-top)" />
        </svg>
      </div>

      <div className="w-full px-6 py-16 sm:px-12 lg:px-[93px]">
        <div className="mx-auto flex w-full max-w-[1254px] flex-col gap-16 lg:gap-[100px]">

          {/* Main grid */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(300px,446px)_107px_107px_300px] lg:gap-8">

            {/* Column 1: Logo + social */}
            <section className="flex flex-col items-start gap-10">
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col items-center h-[105px] w-[135px]">
                                <Image priority src="/Group 6.svg" alt="" width={960} height={540} className="size-48 object-contain" />
                  
                </div>
              </div>

              <div className="flex flex-col items-start gap-3">
                <p className="font-dmsans text-sm font-light text-[#efc250]">Follow us on</p>
                <div className="flex items-center gap-4">
                  <Link href="/instagram" aria-label="Instagram" className="w-8 h-8 border border-[#efc250] flex items-center justify-center hover:bg-[#efc250]/10 transition">
                    <svg fill="#efc250" width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z" />
                    </svg>
                  </Link>
                  <Link href="/youtube" aria-label="YouTube" className="w-8 h-8 border border-[#efc250] flex items-center justify-center hover:bg-[#efc250]/10 transition">
                    <svg fill="#efc250" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </Link>
                  <Link href="/facebook" aria-label="Facebook" className="w-8 h-8 border border-[#efc250] flex items-center justify-center hover:bg-[#efc250]/10 transition">
                    <svg fill="#efc250" width="18" height="18" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>

            {/* Column 2: Quick links */}
            <nav aria-label="Quick links" className="flex flex-col items-start gap-6">
              <h2 className="font-dmsans text-xl font-semibold leading-5 text-[#efc250]">Quick links</h2>
              <div className="flex flex-col items-start gap-3">
                <Link href="/" className="font-dmsans text-base font-light leading-[18px] text-[#efc250] hover:underline">Home</Link>
                <Link href="/products" className="font-dmsans text-base font-light leading-[18px] text-[#efc250] hover:underline">Products</Link>
                <Link href="/about" className="font-dmsans text-base font-light leading-[18px] text-[#efc250] hover:underline">About us</Link>
                <Link href="/contact" className="font-dmsans text-base font-light leading-[18px] text-[#efc250] hover:underline">Contact us</Link>
              </div>
            </nav>

            {/* Column 3: Products */}
            <nav aria-label="Products" className="flex flex-col items-start gap-6">
              <h2 className="font-dmsans text-xl font-semibold leading-5 text-[#efc250]">Products</h2>
              <div className="flex flex-col items-start gap-3">
                <Link href="/products?category=Men" className="font-dmsans text-base font-light leading-[18px] text-[#efc250] hover:underline">Gents Bags</Link>
                <Link href="/products?category=Women" className="font-dmsans text-base font-light leading-[18px] text-[#efc250] hover:underline">Ladies Totes</Link>
                <Link href="/products" className="font-dmsans text-base font-light leading-[18px] text-[#efc250] hover:underline">Accessories</Link>
              </div>
            </nav>

            {/* Column 4: Contact */}
            <section className="flex flex-col items-start gap-6">
              <h2 className="font-dmsans text-xl font-semibold leading-5 text-[#efc250]">Contact us</h2>
              <address className="flex flex-col items-start gap-4 not-italic">

                <div className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#efc250" className="shrink-0 mt-0.5">
                    <path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Z" />
                  </svg>
                  <div className="flex flex-col gap-1">
                    <span className="font-dmsans text-base font-light text-[#efc250] leading-[18px]">+91 98765 43210</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#efc250" className="shrink-0">
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200Z" />
                  </svg>
                  <span className="font-dmsans text-base font-light text-[#efc250] leading-[18px]">exactglass@mail.com</span>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <h3 className="font-dmsans text-base font-medium text-[#efc250]">Regd address</h3>
                  <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#efc250" className="shrink-0 mt-0.5">
                      <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                    </svg>
                    <p className="font-dmsans text-base font-light leading-5 text-[#efc250] max-w-[272px]">1234 Glass Avenue, Sector 15, Noida, Uttar Pradesh, 201301, India</p>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <h3 className="font-dmsans text-base font-medium text-[#efc250]">Factory address</h3>
                  <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#efc250" className="shrink-0 mt-0.5">
                      <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                    </svg>
                    <p className="font-dmsans text-base font-light leading-5 text-[#efc250] max-w-[272px]">1234 Glass Avenue, Sector 15, Noida, Uttar Pradesh, 201301, India</p>
                  </div>
                </div>

              </address>
            </section>
          </div>

          {/* Bottom bar */}
          <div className="flex w-full flex-col items-center gap-8">
            <div className="h-px w-full max-w-[1220px] bg-[#efc250]/40" />
            <p className="font-dmsans text-center text-lg font-light text-[#efc250] leading-none">
              Copyright © 2026 Sam Exports | All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decorative vector */}
      <div className="w-full h-16 border-t border-b border-[#efc250]/40 relative overflow-hidden">
        <svg className="w-full h-full text-[#efc250]/60" preserveAspectRatio="none" viewBox="0 0 1440 64" fill="none">
          <pattern id="footer-ornament-bottom" x="0" y="0" width="36" height="64" patternUnits="userSpaceOnUse">
            <path d="M0 32 L18 8 L36 32 L18 56 Z" stroke="#efc250" strokeWidth="0.8" fill="none" />
            <path d="M18 8 L18 56" stroke="#efc250" strokeWidth="0.5" opacity="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-ornament-bottom)" />
        </svg>
      </div>

    </footer>
  );
}