import Image from "next/image";
import Products from "@/portions/productsCarousel";
import { folderImagesMap } from "../../../../../imageData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BlurFade } from "@/components/ui/blur-fade";
type FolderNode = {
  files?: string[];
  [key: string]: FolderNode | string[] | undefined;
};

type Section = {
  name: string;
  files: string[];
};

function slugify(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9\-]/g, "");
}

function toPublicPath(pathValue: string) {
  const normalized = pathValue.replace(/\\/g, "/");
  const publicIndex = normalized.toLowerCase().indexOf("/public/");
  const webPath =
    publicIndex >= 0
      ? normalized.slice(publicIndex + "/public".length)
      : normalized;

  if (/^https?:\/\//i.test(webPath)) return webPath;
  return webPath.startsWith("/") ? webPath : `/${webPath}`;
}

function collectSections(node: FolderNode, label: string): Section[] {
  if (!node || typeof node !== "object") return [];

  if (Array.isArray(node.files)) {
    return [
      {
        name: label,
        files: node.files.map(toPublicPath),
      },
    ];
  }

  return Object.entries(node).flatMap(([key, value]) => {
    if (key === "files" || !value || Array.isArray(value)) return [];
    return collectSections(value as FolderNode, key);
  });
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = Object.entries(folderImagesMap.Women).find(([name]) => slugify(name) === slug);

  if (!entry) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <p className="text-white text-center text-6xl font-['DM_Sans'] font-semibold">
          Error 404
        </p>
      </div>
    );
  }

  const [categoryName, categoryNode] = entry;
  const sections = collectSections(categoryNode, categoryName);
  const mainImage = sections[0]?.files?.[0] ?? "/Leather_Pic.jpeg";

  return (
    <>
      <BlurFade inView={true} offset={0.2}>
      <div className="w-full flex gap-5 p-6 justify-center items-center max-md:flex-col min-h-screen bg-black">
        <div className="w-1/2 max-md:w-full inline-flex flex-col justify-start items-start gap-4 mt-10">
          <div className="w-full justify-center text-white text-lg font-normal font-['DM_Sans'] tracking-wider">
            WOMEN LEATHER COLLECTION
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="w-full justify-start text-white text-5xl font-semibold font-['DM_Sans']">
              {categoryName.replace(/_/g, " ")}
            </div>
            <div className="self-stretch justify-center text-white/80 text-2xl font-normal font-['DM_Sans']">
              Crafted from premium leather with timeless details and modern function. Explore all available styles in this section and swipe through each variation below.
            </div>
          </div>
        </div>
        <Image
          src={mainImage}
          alt={categoryName}
          height={1200}
          width={800}
          className="w-1/2 max-md:w-full m-6  mt-16 object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      </BlurFade>

      <div className="w- bg-black px-10 max-md:px-5 pb-16 flex flex-col gap-16">
        {sections.map((section, sectionIndex) => (
          <div key={`${section.name}-${sectionIndex}`} className="w-[90%] max-w-6xl self-center">
            <BlurFade inView={true} offset={0.2}>
            
            <Carousel opts={{ align: "start", loop: true }} className="w-full px-10 max-md:px-0">
              <CarouselContent>
                {section.files.map((file, index) => (
                  <CarouselItem key={`${file}-${index}`} className="md:basis-1/2 lg:basis-1/3">
                    <Image
                      src={file}
                      alt={section.name}
                      width={900}
                      height={1200}
                      loading="lazy"
                      className="w-full object-contain aspect-[2/3] "
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-14 max-md:ml-3" />
              <CarouselNext className="mr-14 max-md:mr-3" />
            </Carousel>
            </BlurFade>
            <p className="mt-4 text-center text-white text-2xl font-semibold font-['DM_Sans']">
              {section.name}
            </p>
          </div>
        ))}
      </div>

      <div className="h-full w-screen">
        <div className="w-full px-20 py-14 bg-gradient-to-b inline-flex flex-col justify-center items-center gap-2">
          <Products />
        </div>
      </div>
    </>
  );
}
