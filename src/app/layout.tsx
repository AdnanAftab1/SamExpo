import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans, Instrument_Serif, Cormorant_Garamond, Chathura } from "next/font/google";
import "./globals.css";
import Navbar from "@/portions/Navbar";
import Footer from "@/portions/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const chathura = Chathura({
  variable: "--font-chathura",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al-Ahad Exports | Premium Leather Products",
  description:
    "Al-Ahad Exports — manufacturer and merchant exporter of fine leather goods since 2015. Wallets, bags, and safety wear crafted in Kolkata, shipped worldwide.",
  keywords: ["Al-Ahad Exports", "leather manufacturer", "Kolkata leather", "premium leather goods"],
  openGraph: {
    title: "Al-Ahad Exports | Premium Leather Products",
    description: "Manufacturer and merchant exporter of fine leather goods since 2015.",
    url: "https://al-ahad-iota.vercel.app/",
    siteName: "Al-Ahad Exports",
    images: [{ url: "/Modern_glass_architecture.png", width: 1920, height: 1200, alt: "Al-Ahad Exports" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Ahad Exports | Premium Leather Products",
    description: "Fine leather goods, crafted in Kolkata, shipped worldwide.",
    images: ["/Modern_glass_architecture.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="ENxByqj_jVJB_cyuiSyj93xcp0hOPKCDLpbmt3xbEsU" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${instrumentSerif.variable} ${cormorant.variable} ${chathura.variable} bg-[#f7f7eb] scroll-smooth antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}