"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Navbar() {
  const path = usePathname();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopProductsOpen, setIsDesktopProductsOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false); setIsProductsOpen(false); setIsDesktopProductsOpen(false);
  }, [path]);

  const closeAll = () => { setIsMobileMenuOpen(false); setIsProductsOpen(false); };
  const closeDesktop = () => setIsDesktopProductsOpen(false);

  return (
    <header className="w-full fixed top-0 z-30">
      <div className="flex h-[88px] w-full items-center border-b border-white/10 bg-[#193827] px-6 py-4 sm:px-12 lg:px-[11.6%]">
        <nav className="grid w-full max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center mx-auto">

          {/* Left: Menu button */}
          <button
            type="button"
            className="inline-flex items-center gap-1 justify-self-start opacity-80 hover:opacity-100 transition-opacity font-dmsans text-base font-light text-[#efc250]"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#efc250">
              <path d="M100.78-212.3v-106h758.44v106H100.78Zm0-214.7v-106h758.44v106H100.78Zm0-214.7v-106h758.44v106H100.78Z" />
            </svg>
            <span className="max-sm:hidden">Menu</span>
          </button>

          {/* Center: Al-Ahad Wordmark (Saiham-style stacked logo) */}
          <Link href="/" aria-label="Al-Ahad Exports, since 2015" className="flex flex-col items-center justify-start h-[61px] w-[96px]">
            <Image priority src="/Logo.svg" alt="" aria-hidden width={960} height={540}
              className="h-[35px] w-[40px] object-contain" />
            <span className="mt-1 font-cormorant text-[10px] leading-[10px] text-white whitespace-nowrap">
              AL-AHAD EXPORTS
            </span>
            <span className="font-chathura text-[7px] leading-[11px] text-white whitespace-nowrap">
              SINCE 2015
            </span>
          </Link>

          {/* Right: double-border CTA pair */}
          <div className="flex justify-self-end gap-3 max-lg:hidden">
            <div className="sa-cta-outline w-[162px]">
              <DropdownMenu open={isDesktopProductsOpen} onOpenChange={setIsDesktopProductsOpen}>
                <DropdownMenuTrigger asChild>
                  <button type="button" className="sa-cta-inner w-full">
                    Our Products
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-[#193827] text-[#efc250] border border-[#efc250]/40">
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="hover:!bg-[#193827]" onClick={closeDesktop}>
                      <Link href="/products/men" className={cn("font-dmsans w-full", path.startsWith("/products/men") ? "text-[#efc250]" : "text-white")}>
                        Gents Premium Collection
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:!bg-[#193827]" onClick={closeDesktop}>
                      <Link href="/products/women" className={cn("font-dmsans w-full", path.startsWith("/products/women") ? "text-[#efc250]" : "text-white")}>
                        Ladies Fashion Line
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="sa-cta-outline w-[162px]">
              <Link href="/contact" className="sa-cta-inner filled w-full">
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Mobile trigger */}
          <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <DropdownMenuTrigger asChild className="lg:hidden justify-self-end">
              <button type="button" aria-label="Open menu" className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#efc250">
                  <path d="M100.78-212.3v-106h758.44v106H100.78Zm0-214.7v-106h758.44v106H100.78Zm0-214.7v-106h758.44v106H100.78Z" />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-[#193827] text-white border border-[#efc250]/30">
              <DropdownMenuGroup>
                <DropdownMenuItem className="hover:!bg-[#193827]/80" onClick={closeAll}>
                  <Link href="/" className={cn("font-dmsans w-full py-1", path === "/" ? "text-[#efc250]" : "text-white")}>Home</Link>
                </DropdownMenuItem>
                <div className="py-1 border-b border-white/10">
                  <button
                    onClick={(e) => { e.stopPropagation(); setIsProductsOpen(!isProductsOpen); }}
                    className={cn("w-full flex items-center justify-between font-dmsans py-1", path.startsWith("/products") ? "text-[#efc250]" : "text-white")}
                  >
                    <span>Product Portfolio</span>
                    {isProductsOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                  <div className={cn("overflow-hidden transition-all duration-300", isProductsOpen ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0")}>
                    <div className="pl-4 border-l-2 border-[#efc250]/40 space-y-1">
                      <Link href="/products/men" onClick={closeAll} className={cn("block font-dmsans text-sm py-1.5", path.startsWith("/products/men") ? "text-[#efc250]" : "text-white/80")}>- Gents Premium Collection</Link>
                      <Link href="/products/women" onClick={closeAll} className={cn("block font-dmsans text-sm py-1.5", path.startsWith("/products/women") ? "text-[#efc250]" : "text-white/80")}>- Ladies Fashion Line</Link>
                    </div>
                  </div>
                </div>
                <DropdownMenuItem className="hover:!bg-[#193827]/80" onClick={closeAll}>
                  <Link href="/about" className={cn("font-dmsans w-full py-1", path === "/about" ? "text-[#efc250]" : "text-white")}>About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:!bg-[#193827]/80" onClick={closeAll}>
                  <Link href="/contact" className={cn("font-dmsans w-full py-1", path === "/contact" ? "text-[#efc250]" : "text-white")}>Contact B2B</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}   