import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const featured: Post = {
  id: 1,
  title: "The Al-Ahad Production Ecosystem",
  description:
    "Based in the historic leather manufacturing hub of Kolkata, India, Al-Ahad Exports was established in 2015 to bridge the gap between traditional Indian leather bench-craft and strict international corporate compliance.",
  image: "/Manufacturer.jpg",
  link: "/about",
};

const articles: Post[] = [
  {
    id: 2,
    title: "Custom Design & Tech Packs",
    description:
      "We translate your design intent into floor-ready leather goods, from pattern making through final polish.",
    image: "/Manufacturer.jpg",
    link: "/products",
  },
  {
    id: 3,
    title: "Sustainable Leather Sourcing",
    description:
      "Every hide we source meets REACH and international sustainability standards, verified end to end.",
    image: "/Leather_Pic.jpeg",
    link: "/about",
  },
  {
    id: 4,
    title: "Export Logistics & Compliance",
    description:
      "Direct access to Kolkata port hubs, secure packaging, and complete export documentation.",
    image: "/Randompic.jpg",
    link: "/contact",
  },
];

export default function InfoLong() {
  return (
    <section className="w-full bg-[#f7f7eb] py-[60px] pb-[80px] px-5 sm:px-8 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[60px]">

        {/* Header */}
        <BlurFade inView duration={0.7} delay={0}>
          <header className="flex flex-col items-center gap-1 text-center max-w-[800px]">
            <h2 className="font-instrument uppercase text-[42px] max-md:text-3xl leading-[55px] text-[#193827]">
              The Al-Ahad Production Ecosystem
            </h2>
            <p className="font-dmsans text-base font-light leading-[21px] text-[#193827] max-w-[800px]">
              From traditional craftsmanship to global brand inventories — our integrated chain handles every step.
            </p>
          </header>
        </BlurFade>

        {/* Blog content — featured + 3 posts */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">

          {/* Featured post */}
          <BlurFade inView duration={0.7} delay={0.15}>
            <article className="flex flex-col gap-8 w-full lg:w-[696px]">
              <div className="relative w-full h-[280px] lg:h-[460px] bg-[#f0f1e5] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-start justify-between gap-8">
                <div className="flex flex-col gap-2 max-w-[590px]">
                  <h3 className="font-instrument uppercase text-[24px] leading-[31px] text-[#193827]">
                    {featured.title}
                  </h3>
                  <p className="font-dmsans text-[14px] font-light leading-[18px] text-[#193827]">
                    {featured.description}
                  </p>
                  <Link
                    href={featured.link}
                    className="mt-3 font-dmsans text-base font-light underline text-[#947534] hover:text-[#193827] transition-colors w-fit"
                  >
                    Read More
                  </Link>
                </div>

                {/* Icon collection — 42×48 per Figma */}
                <svg
                  width="42"
                  height="48"
                  viewBox="0 0 42 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <rect x="1" y="1" width="40" height="46" stroke="#193827" strokeWidth="1" />
                  <path d="M8 12h26M8 20h26M8 28h18" stroke="#193827" strokeWidth="1" />
                  <path d="M8 38h26" stroke="#193827" strokeWidth="1" />
                </svg>
              </div>
            </article>
          </BlurFade>

          {/* 3 small posts */}
          <div className="flex flex-col gap-8 flex-1 w-full lg:w-[552px]">
            {articles.map((post, i) => (
              <BlurFade
                key={post.id}
                inView
                duration={0.6}
                delay={0.25 + i * 0.08}
              >
                <article className="flex flex-row items-center gap-8">
                  <div className="relative w-[160px] h-[160px] shrink-0 bg-[#f0f1e5] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-w-0">
                    <h3 className="font-instrument uppercase text-[24px] leading-[31px] text-[#193827]">
                      {post.title}
                    </h3>
                    <p className="font-dmsans text-[14px] font-light leading-[18px] text-[#193827]">
                      {post.description}
                    </p>
                    <Link
                      href={post.link}
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
  );
}