"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  // Close overlay on route change
  useEffect(() => {
    setIsOpen(false);
    setIsProductsOpen(false);
  }, [path]);

  // Lock body scroll while overlay is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ============ FIXED TOP BAR ============ */}
      <header className="w-full fixed top-0 z-40">
        <div className="flex h-[88px] w-full items-center bg-[#193827] px-4 sm:px-8 lg:px-[11.6%] border-b border-white/[0.08]">
          <nav className="grid w-full max-w-[1280px] mx-auto grid-cols-[1fr_auto_1fr] items-center">

            {/* Left: Menu / Close */}
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="nav-overlay"
              className="inline-flex items-center gap-1 justify-self-start opacity-80 hover:opacity-100 transition-opacity font-dmsans text-base font-light text-[#efc250]"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#efc250">
                  <path d="M256-200l-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#efc250">
                  <path d="M100.78-212.3v-106h758.44v106H100.78Zm0-214.7v-106h758.44v106H100.78Zm0-214.7v-106h758.44v106H100.78Z" />
                </svg>
              )}
              <span className="max-sm:hidden">{isOpen ? "Close" : "Menu"}</span>
            </button>

            {/* Center: Logo */}
            <Link href="/" aria-label="Al-Ahad Exports, since 2015" className="flex flex-col items-center h-[61px] w-[100px]">
              <Image priority src="/Group 6.svg" alt="" width={960} height={540} className="size-24 object-contain" />
            </Link>

            {/* Right CTAs */}
            <div className="flex justify-self-end gap-3 max-lg:hidden">
              <div className="sa-cta-outline w-[160px]">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button type="button" className="sa-cta-inner w-full">Our Products</button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-[#193827] text-[#efc250] border border-[#efc250]/40">
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="hover:!bg-[#193827]">
                        <Link href="/products?category=Men" className={cn("font-dmsans w-full", path.startsWith("/products?category=Men") ? "text-[#efc250]" : "text-white")}>
                          Gents Premium Collection
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:!bg-[#193827]">
                        <Link href="/products?category=Women" className={cn("font-dmsans w-full", path.startsWith("/products?category=Women") ? "text-[#efc250]" : "text-white")}>
                          Ladies Fashion Line
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="sa-cta-outline w-[160px]">
                <Link href="/contact" className="sa-cta-inner filled w-full">Get a Quote</Link>
              </div>
            </div>

            {/* Mobile CTA */}
            <Link href="/contact" className="lg:hidden justify-self-end sa-cta-outline w-[120px]">
              <span className="sa-cta-inner filled w-full text-sm">Get a Quote</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* ============ FULL-SCREEN OVERLAY ============ */}
      <div
        id="nav-overlay"
        aria-hidden={!isOpen}
        className={cn(
          "fixed inset-0 z-30 bg-[#193827] transition-all duration-500 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Floating decorative images */}
        {/* Top-left */}
        <div
          aria-hidden
          className={cn(
            "absolute hidden md:block w-[200px] h-[267px] transition-all duration-700 ease-out",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          )}
          style={{ left: "80px", top: "116px" }}
        >
          <Image
            src="/Manufacturer.jpg"
            alt=""
            width={200}
            height={267}
            className="object-cover rotate-[-6deg] border-[6px] border-[#f7f7eb] shadow-2xl shadow-black/40"
          />
        </div>

        {/* Bottom-right */}
        <div
          aria-hidden
          className={cn(
            "absolute hidden md:block w-[200px] h-[267px] transition-all duration-700 ease-out delay-150",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ right: "80px", bottom: "80px" }}
        >
          <Image
            src="/Leather_Pic.jpeg"
            alt=""
            width={200}
            height={267}
            className="object-cover rotate-[8deg] border-[6px] border-[#f7f7eb] shadow-2xl shadow-black/40"
          />
        </div>

        {/* Optional accents — top-right & bottom-left, smaller */}
        <div
          aria-hidden
          className={cn(
            "absolute hidden lg:block w-[140px] h-[187px] transition-all duration-700 ease-out delay-300",
            isOpen ? "opacity-90 translate-x-0" : "opacity-0 translate-x-8"
          )}
          style={{ right: "140px", top: "140px" }}
        >
          <Image
            src="/Randompic.jpg"
            alt=""
            width={140}
            height={187}
            className="object-cover rotate-[5deg] border-[6px] border-[#f7f7eb] shadow-xl shadow-black/40"
          />
        </div>

        {/* ============ CENTERED LINKS ============ */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6">
          <nav
            aria-label="Main navigation"
            className={cn(
              "flex flex-col items-center gap-6 transition-all duration-500",
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {navLinks.map((link, i) => {
              const isActive = path === link.href || (link.href !== "/" && path.startsWith(link.href));
              const isProducts = link.label === "Products";

              if (isProducts) {
                return (
                  <div key={link.label} className="flex flex-col items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsProductsOpen((v) => !v)}
                      className={cn(
                        "font-instrument uppercase text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight transition-colors",
                        path.startsWith("/products") ? "text-[#efc250]" : "text-white hover:text-[#efc250]"
                      )}
                      style={{
                        transitionDelay: isOpen ? `${i * 80}ms` : "0ms",
                      }}
                    >
                      {link.label}
                    </button>
                    <div
                      className={cn(
                        "flex flex-col items-center gap-2 overflow-hidden transition-all duration-300",
                        isProductsOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <Link href="/products?category=Men" className={cn("font-dmsans uppercase tracking-widest text-sm", path.startsWith("/products?category=Men") ? "text-[#efc250]" : "text-white/70 hover:text-[#efc250]")}>
                        Gents Premium Collection
                      </Link>
                      <Link href="/products?category=Women" className={cn("font-dmsans uppercase tracking-widest text-sm", path.startsWith("/products?category=Women") ? "text-[#efc250]" : "text-white/70 hover:text-[#efc250]")}>
                        Ladies Fashion Line
                      </Link>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "font-instrument uppercase text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight transition-colors",
                    isActive ? "text-[#efc250]" : "text-white hover:text-[#efc250]"
                  )}
                  style={{
                    transitionDelay: isOpen ? `${i * 80}ms` : "0ms",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Bottom meta row */}
          <div
            className={cn(
              "absolute bottom-8 w-full max-w-[1280px] px-6 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-500 delay-500",
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-center gap-6 font-dmsans text-sm text-[#efc250]">
              <span>Follow us on</span>
              <div className="flex gap-3">
                <a href="https://instagram.com" aria-label="Instagram" className="w-8 h-8 border border-[#efc250] flex items-center justify-center hover:bg-[#efc250]/10 transition">
                  <svg fill="#efc250" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"/>
                  </svg>
                </a>
                <a href="https://youtube.com" aria-label="YouTube" className="w-8 h-8 border border-[#efc250] flex items-center justify-center hover:bg-[#efc250]/10 transition">
                  <svg fill="#efc250" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" aria-label="Facebook" className="w-8 h-8 border border-[#efc250] flex items-center justify-center hover:bg-[#efc250]/10 transition">
                  <svg fill="#efc250" width="16" height="16" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 font-dmsans text-sm text-[#efc250]">
              <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
              <a href="mailto:sales@al-ahadexports.com" className="hover:underline">sales@al-ahadexports.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}