import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { folderImagesMap } from "../../../../../imageData";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

type FolderNode = {
  files?: string[];
  title?: string;
  subtitle?: string;
  description?: string;
  [key: string]: FolderNode | string[] | string | undefined;
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

function getWomenEntry(slug: string): [string, FolderNode] | undefined {
  const womenMap = folderImagesMap.Women as Record<string, FolderNode>;
  return Object.entries(womenMap).find(([name]) => slugify(name) === slug);
}

function collectSections(node: FolderNode, label: string): Section[] {
  if (!node || typeof node !== "object") return [];
  if (Array.isArray(node.files)) {
    const sectionName = typeof node.title === "string" ? node.title : label;
    return [{ name: sectionName, files: node.files.map(toPublicPath) }];
  }
  return Object.entries(node)
    .filter(([key]) => !["files", "title", "subtitle", "description"].includes(key))
    .flatMap(([key, value]) => {
      if (!value || typeof value !== "object" || Array.isArray(value)) return [];
      return collectSections(value as FolderNode, key);
    });
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getWomenEntry(slug);

  if (!entry) {
    return (
      <main className="w-full min-h-screen flex items-center justify-center bg-[#f7f7eb] pt-[88px]">
        <p className="font-instrument text-[#193827] text-6xl uppercase">Error 404</p>
      </main>
    );
  }

  const [categoryName, categoryNode] = entry;
  const sections = collectSections(categoryNode, categoryName);
  const allImages = sections.flatMap((s) => s.files);
  const mainImage = allImages[0] ?? "/Leather_Pic.jpeg";
  const title = categoryNode.title ?? categoryName.replace(/_/g, " ");
  const subtitle = categoryNode.subtitle ?? "WOMEN LEATHER COLLECTION";
  const description =
    categoryNode.description ??
    "Crafted from premium leather with timeless details and modern function. Each piece is hand-finished by our Kolkata atelier and built to last a lifetime of daily use.";

  const thumbnails = allImages.slice(0, 4);
  const productCode = `AA-${slug.toUpperCase().slice(0, 6)}-${(title.length * 7).toString().padStart(3, "0")}`;
  const tags = ["Women", "Bag"];
  const swatches = ["#205158", "#5D2B1C", "#484D3F", "#000000"];
  const relatedProducts = allImages.slice(0, 5);

  return (
    <main className="w-full bg-[#f7f7eb] pt-[88px]">

      {/* ============ SECTION 1: Hero / Product Info ============ */}
      <section
        className="w-full bg-[#f7f7eb] px-5 sm:px-8 lg:px-20"
        style={{ paddingTop: 150, paddingBottom: 60 }}
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[130px]">

          {/* Left: thumbnails + main image */}
          <BlurFade inView duration={0.7} delay={0}>
            <div className="flex flex-row gap-6 w-full max-w-[624px] justify-center">

              {/* Thumbnail column */}
              <div className="flex flex-col gap-6 shrink-0">
                {thumbnails.map((thumb, i) => (
                  <div
                    key={`thumb-${i}`}
                    className={cn(
                      "w-[100px] h-[100px] flex items-center justify-center bg-[#f0f1e5] overflow-hidden",
                      i === 0 && "border border-[#193827]"
                    )}
                  >
                    <Image
                      src={thumb}
                      alt={`${title} view ${i + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Main image */}
              <div className="w-[500px] h-[500px] flex items-center justify-center bg-[#f0f1e5] overflow-hidden">
                <Image
                  src={mainImage}
                  alt={title}
                  width={1000}
                  height={1000}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </BlurFade>

          {/* Right: Product details */}
          <BlurFade inView duration={0.7} delay={0.15}>
            <div className="flex flex-col w-full max-w-[550px] gap-10">

              {/* Details block */}
              <div className="flex flex-col gap-6">

                {/* Title + code */}
                <div className="flex flex-col gap-1">
                  <h1 className="font-instrument uppercase text-[#193827] text-[42px] max-md:text-3xl leading-[55px]">
                    {title}
                  </h1>
                  <p className="font-dmsans text-[14px] font-light text-[#193827] leading-[18px]">
                    Product Code: {productCode}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-3">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center justify-center px-[14px] py-2 rounded-full border border-[#193827] bg-[#193827]/5"
                    >
                      <span className="font-dmsans uppercase text-[14px] text-[#193827] leading-[18px]">
                        {tag}
                      </span>
                    </span>
                  ))}
                </div>

                {/* Color swatches */}
                <div className="flex items-center gap-3">
                  {swatches.map((color) => (
                    <button
                      key={color}
                      type="button"
                      aria-label={`Color ${color}`}
                      className="w-10 h-10 rounded-full border border-[#193827] flex items-center justify-center p-1 hover:scale-105 transition-transform"
                    >
                      <span
                        className="w-8 h-8 rounded-full"
                        style={{ background: color }}
                      />
                    </button>
                  ))}
                </div>

                {/* Description */}
                <p className="font-dmsans text-[16px] font-light leading-[21px] text-[#193827]">
                  {description}
                </p>
              </div>

              {/* Bottom row: link + CTA */}
              <div className="flex flex-row justify-between items-center gap-4">
                <Link
                  href="/contact"
                  className="font-dmsans text-[16px] font-light text-[#947534] underline underline-offset-4 hover:text-[#193827] transition-colors"
                >
                  Enquire
                </Link>

                <div className="sa-cta-outline w-[160px]">
                  <Link href="/contact" className="sa-cta-inner filled w-full">
                    Get a Quote
                  </Link>
                </div>
              </div>

            </div>
          </BlurFade>
        </div>
      </section>

      {/* ============ SECTION 2: Related Products ============ */}
      <section
        className="w-full bg-[#f7f7eb] px-5 sm:px-8 lg:px-20 flex flex-col items-center gap-8"
        style={{ paddingTop: 80, paddingBottom: 60 }}
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[60px]">

          <BlurFade inView duration={0.7} delay={0}>
            <header className="flex flex-col items-center gap-1 text-center max-w-[522px]">
              <h2 className="font-instrument uppercase text-[42px] max-md:text-3xl leading-[55px] text-[#193827]">
                More From This Collection
              </h2>
              <p className="font-dmsans text-base font-light leading-[21px] text-[#193827]">
                Explore other pieces in the same line.
              </p>
            </header>
          </BlurFade>

          <div className="flex flex-wrap items-start justify-center gap-8 w-full">
            {relatedProducts.map((img, i) => (
              <BlurFade
                key={`related-${i}`}
                inView
                duration={0.6}
                delay={0.1 + i * 0.08}
              >
                <Link
                  href={mainImage}
                  className="group flex flex-col items-center w-[220px] hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-[220px] h-[220px] flex items-center justify-center bg-[#f0f1e5] overflow-hidden">
                    <Image
                      src={img}
                      alt={`${title} related ${i + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="mt-2 font-dmsans uppercase text-base font-light text-[#193827] text-center leading-[21px]">
                    {title}
                  </span>
                </Link>
              </BlurFade>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to page ${i + 1}`}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  i === 2 ? "bg-[#1b3a29]" : "bg-[#f0f1e5] hover:bg-[#1b3a29]/40"
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: Related Articles / Blog ============ */}
      <section className="w-full bg-[#f7f7eb] py-[60px] pb-[80px] px-5 sm:px-8 lg:px-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[60px]">

          <BlurFade inView duration={0.7} delay={0}>
            <header className="flex flex-col items-center gap-1 text-center max-w-[800px]">
              <h2 className="font-instrument uppercase text-[42px] max-md:text-3xl leading-[55px] text-[#193827]">
                Stories & Craft Notes
              </h2>
              <p className="font-dmsans text-base font-light leading-[21px] text-[#193827] max-w-[800px]">
                Learn how this piece is made, sourced, and finished.
              </p>
            </header>
          </BlurFade>

          <div className="flex flex-col lg:flex-row gap-8 w-full">

            <BlurFade inView duration={0.7} delay={0.15}>
              <article className="flex flex-col gap-8 w-full lg:w-[696px]">
                <div className="relative w-full h-[280px] lg:h-[460px] bg-[#f0f1e5] overflow-hidden">
                  <Image src={mainImage} alt={title} fill className="object-cover" />
                </div>
                <div className="flex items-start justify-between gap-8">
                  <div className="flex flex-col gap-2 max-w-[590px]">
                    <h3 className="font-instrument uppercase text-[24px] leading-[31px] text-[#193827]">
                      {title} — The Making
                    </h3>
                    <p className="font-dmsans text-[14px] font-light leading-[18px] text-[#193827]">
                      A behind-the-scenes look at how we source, cut, and stitch every {title.toLowerCase()} in our Kolkata atelier.
                    </p>
                    <Link
                      href="/about"
                      className="mt-3 font-dmsans text-base font-light underline text-[#947534] hover:text-[#193827] transition-colors w-fit"
                    >
                      Read More
                    </Link>
                  </div>
                  <svg width="42" height="48" viewBox="0 0 42 48" fill="none" className="shrink-0">
                    <rect x="1" y="1" width="40" height="46" stroke="#193827" strokeWidth="1" />
                    <path d="M8 12h26M8 20h26M8 28h18" stroke="#193827" strokeWidth="1" />
                    <path d="M8 38h26" stroke="#193827" strokeWidth="1" />
                  </svg>
                </div>
              </article>
            </BlurFade>

            <div className="flex flex-col gap-8 flex-1 w-full lg:w-[552px]">
              {[
                {
                  title: "Leather Selection",
                  description:
                    "We choose each hide for grain, temper, and finish — only the top 15% makes it into a finished product.",
                  image: allImages[0] ?? mainImage,
                },
                {
                  title: "Edge Finishing",
                  description:
                    "Every edge is burnished, waxed, and polished by hand over three passes for a lifetime of wear.",
                  image: allImages[1] ?? mainImage,
                },
                {
                  title: "Export Packaging",
                  description:
                    "Each piece is wrapped, dust-bagged, and boxed to survive international door-to-door transit.",
                  image: allImages[2] ?? mainImage,
                },
              ].map((post, i) => (
                <BlurFade key={post.title} inView duration={0.6} delay={0.25 + i * 0.08}>
                  <article className="flex flex-row items-center gap-8">
                    <div className="relative w-[160px] h-[160px] shrink-0 bg-[#f0f1e5] overflow-hidden">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <h3 className="font-instrument uppercase text-[24px] leading-[31px] text-[#193827]">
                        {post.title}
                      </h3>
                      <p className="font-dmsans text-[14px] font-light leading-[18px] text-[#193827]">
                        {post.description}
                      </p>
                      <Link
                        href="/about"
                        className="mt-2 font-dmsans text-base font-light underline text-[#947534] hover:text-[#193827] transition-colors w-fit"
                      >
                        Read More
                      </Link>
                    </div>
                  </article>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWomenEntry(slug);

  if (!entry) {
    return {
      title: "Product Not Found | Al Ahad",
      description: "The requested product could not be found.",
    };
  }

  const [categoryName, categoryNode] = entry;
  const title = categoryNode.title ?? categoryName;
  const description = categoryNode.description ?? `Explore premium leather ${title} from Al Ahad.`;
  const mainImage = collectSections(categoryNode, categoryName).flatMap((s) => s.files)[0] ?? "/Leather_Pic.jpeg";

  return {
    title: `${title} | Al Ahad Leather`,
    description,
    keywords: [title],
    openGraph: {
      title: `${title} | Al Ahad Leather`,
      description,
      images: [{ url: mainImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Al Ahad Leather`,
      description,
      images: [mainImage],
    },
  };
}