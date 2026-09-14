import AboutInfoPics from "@/portions/AboutInfoPics";
import AboutUsIntro from "@/portions/AboutUsIntro";
import AboutInfos from "@/portions/aboutInfos";

export default function About() {
  return (
    <main className="flex w-full flex-col bg-[#f7f7eb]">
      <AboutUsIntro />
      <AboutInfos />
      <AboutInfoPics />
    </main>
  );
}