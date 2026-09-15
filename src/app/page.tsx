import Intro from "@/portions/Intro";
import Products from "@/portions/productsCarousel";
import { Info } from "@/portions/info";
import { InfoBlack } from "@/portions/InfoBlack";
import InfoLong from "@/portions/InfoLong";

export default function Home() {
  return (
    <main className="flex w-full flex-col bg-[#f7f7eb] pt-[88px]">
      <Intro />
      <Products />
      <Info />
      <InfoBlack />
      <InfoLong />
    </main>
  );
}