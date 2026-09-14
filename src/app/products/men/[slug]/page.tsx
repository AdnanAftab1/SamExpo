import Image from "next/image";
import Products from "@/portions/productsCarousel";
import { folderImagesMap } from "../../../../../imageData";
import type { Metadata } from "next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BlurFade } from "@/components/ui/blur-fade";

type ProductNode = {
  files?: string[];
  title?: string;
  subtitle?: string;
  description?: string;
  [key: string]: unknown;
};

type Section = {
  name: string;
  files: string[];
};

function slugify(name: string) {
  return name.toLowerCase().trim().replace(/\s+/g, "").replace(/[^a-z0-9\-]/g, "");
}

function toPublicPath(pathValue: string) {
  const normalized = pathValue.replace(/\\/g, "/");
  const publicIndex = normalized.toLowerCase().indexOf("/public/");
  const webPath = publicIndex >= 0 ? normalized.slice(publicIndex + "/public".length) : normalized;
  if (/^https?:\/\//i.test(webPath)) return webPath;
  return webPath.startsWith("/") ? webPath : `/${webPath}`;
}

function getMenEntry(slug: string): [string, ProductNode] | undefined {
  const menMap = folderImagesMap.Men as Record<string, ProductNode>;
  return Object.entries(menMap).find(([name]) => slugify(name) === slug);
}

function collectSections(node: ProductNode, label: string): Section[] {
  if (!node || typeof node !== "object") return [];

  if (Array.isArray(node.files)) {
    const sectionName = typeof node.title === "string" ? node.title : label;
    return [{ name: sectionName, files: node.files.map(toPublicPath) }];
  }

  return Object.entries(node)
    .filter(([key]) => !["files", "title", "subtitle", "description"].includes(key))
    .flatMap(([key, value]) => {
      if (!value || typeof value !== "object" || Array.isArray(value)) return [];
      return collectSections(value as ProductNode, key);
    });
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getMenEntry(slug);

  if (!entry) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <p className="text-white text-center text-6xl font-['DM_Sans'] font-semibold">Error 404</p>
      </div>
    );
  }

  const [categoryName, categoryNode] = entry;
  const sections = collectSections(categoryNode, categoryName);
  const imageFiles = sections.flatMap((section) => section.files);
  const mainImage = imageFiles[0] ?? "/Leather_Pic.jpeg";
  const title = categoryNode.title ?? categoryName;
  const subtitle = categoryNode.subtitle ?? "MEN LEATHER COLLECTION";
  const description =
    categoryNode.description ??
    "Crafted from premium leather with timeless details and modern function. Explore all available styles in this section and swipe through each variation below.";

  return (
    <>
      {/* Hero Section */}
      <div className="w-full flex gap-[3vw] p-[4vw] justify-center items-center max-md:flex-col min-h-screen bg-black">
        <BlurFade inView={true} duration={0.7} delay={0}>
          <div className="w-[46vw] max-md:w-full inline-flex flex-col justify-start items-start gap-[2vw] mt-[4vw] max-md:mt-[6vw]">
            <div className="w-full justify-center mt-4 text-white text-[clamp(0.9rem,1.4vw,1.25rem)] font-normal font-['DM_Sans'] tracking-wider">
              {subtitle}
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="w-full justify-start text-white text-[clamp(2rem,4.5vw,3.5rem)] font-semibold font-['DM_Sans']">
                {title}
              </div>
              <div className="self-stretch justify-center text-white/80 text-[clamp(1.05rem,2.2vw,1.75rem)] font-normal font-['DM_Sans']">
                {description}
              </div>
            </div>
          </div>
        </BlurFade>

        <BlurFade inView={true} duration={0.7} delay={0.3}>
          <Image
            src={mainImage}
            alt={title}
            height={1200}
            width={800}
            className="w-[46vw] max-md:w-[88vw] m-[2vw] h-[70vh] max-md:h-auto mt-[4vw] max-md:mt-[6vw] aspect-[2/3] object-contain"
            priority 
          />
        </BlurFade>
      </div>

      {/* Carousel Sections */}
      <div className="w-full bg-black px-[4vw] max-md:px-[4vw] pb-[8vw] flex flex-col gap-[6vw]">
        {sections.map((section, sectionIndex) => (
          <div key={`${section.name}-${sectionIndex}`} className="w-[95vw] max-w-6xl ">
            <BlurFade inView={true} duration={0.7} delay={sectionIndex * 0.2}>
              <Carousel 
                opts={{ 
                  align: "center", 
                  loop: true 
                }} 
                className="w-[90vw] max-md:px-3"
              >
                <CarouselContent>
                  {section.files.map((file, index) => (
                    <CarouselItem 
                      key={`${file}-${index}`} 
                      className="basis-full md:basis-1/2 xl:basis-1/3"
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center bg-white/5 outline outline-1 outline-white/10 hover:bg-white/10 transition p-4 sm:p-6 rounded-lg">
                        <div className="flex-1 flex items-center justify-center w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
                          <Image
                            src={file}
                            alt={section.name}
                            width={500}
                            height={500}
                            loading="lazy"
                            className="w-full h-auto max-h-[50vh] sm:max-h-[55vh] object-contain"
                          />
                        </div>
                        <h3 className="text-white text-base sm:text-lg md:text-xl text-center mt-4 px-4 font-medium">
                          {section.name}
                        </h3>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="-left-5" />
                <CarouselNext className="-right-5" />
              </Carousel>
            </BlurFade>
          </div>
        ))}
      </div>

      {/* Products Carousel */}
      <div className="h-full w-screen">
        <BlurFade inView={true} duration={0.7} delay={0.5}>
          <div className="w-full px-[6vw] py-[5vw] bg-gradient-to-b inline-flex flex-col justify-center items-center gap-[2vw]">
            <Products />
          </div>
        </BlurFade>
      </div>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getMenEntry(slug);

  if (!entry) {
    return {
      title: "Product Not Found | Al Ahad",
      description: "The requested product could not be found.",
    };
  }

  const [categoryName, categoryNode] = entry;
  const title = categoryNode.title ?? categoryName;
  const description = categoryNode.description ?? `Explore premium leather ${title} from Al Ahad.`;
  const mainImage = collectSections(categoryNode, categoryName).flatMap((section) => section.files)[0] ?? "/Leather_Pic.jpeg";

  return {
    title: `${title} | Al Ahad Leather`,
    description,
    keywords: [title],
    openGraph: {
      title: `${title} | Al Ahad Leather`,
      description,
      images: [
        {
          url: mainImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Al Ahad Leather`,
      description,
      images: [mainImage],
    },
  };
} 