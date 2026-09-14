import Image from "next/image";
import Link from "next/link";
import { List } from "@/data/list";
import { BlurFade } from "@/components/ui/blur-fade";

interface ProductProps {
    category: string
}

export default function ProductsCategories({ category }: ProductProps) {
    const products = category === 'Women' ? List.Women : List.Men;

    return (
        <div className="w-full py-20 px-5 bg-black inline-flex flex-col justify-center items-center gap-10 overflow-hidden">
            <div className="w-full flex flex-col justify-start items-center gap-8">
                {/* Header */}
                <BlurFade inView={true} duration={0.7} delay={0}>
                    <div className="w-full flex flex-col justify-start items-center gap-14">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <div className="justify-center text-center text-white text-5xl font-semibold font-['DM_Sans']">
                                Explore Our Products
                            </div>
                            <div className="text-center justify-center text-white/90 text-xl font-normal font-['DM_Sans']">
                                Passionate professionals dedicated to transforming spaces with innovative glass solutions and personalized service
                            </div>
                        </div>
                    </div>
                </BlurFade>

                {/* Category Buttons */}
                <BlurFade inView={true} duration={0.7} delay={0.2}>
                    <div className="inline-flex justify-start items-center gap-7">
                        <div className={`w-36 h-11 bg-gradient-to-bl ${category !== 'Women' ? 'from-amber-300 to-yellow-500' : 'text-white outline-1 outline-white'} rounded-[100px] flex justify-center items-center gap-4`}>
                            <Link href="/products/men" className="text-center justify-start text-base font-medium font-['DM_Sans'] leading-snug">
                                Men&apos;s
                            </Link>
                        </div>
                        <div className={`w-36 h-11 bg-gradient-to-bl ${category === 'Women' ? 'from-amber-300 to-yellow-500' : 'text-white outline-1 outline-white'} rounded-[100px] flex justify-center items-center gap-4`}>
                            <Link href="/products/women" className="text-center justify-start text-base font-medium font-['DM_Sans'] leading-snug">
                                Women&apos;s
                            </Link>
                        </div>
                    </div>
                </BlurFade>

                {/* Products Grid */}
                <div className="w-full flex flex-wrap justify-center items-center gap-4">
                    {products.map((item, index) => (
                        <BlurFade 
                            key={index}
                            inView={true} 
                            duration={0.7} 
                            delay={0.3 + (index * 0.1)}
                            offset={20}
                        >
                            <Link href={item.nextLink} className="w-96 p-4 bg-white/0 inline-flex flex-col justify-start items-start gap-5 hover:bg-white/5 transition-colors rounded-lg">
                                <Image
                                    priority={index < 4}
                                    src={item.picLink}
                                    alt={item.name}
                                    height={720}
                                    width={480}
                                    className="w-full h-64 object-contain"
                                />
                                <div className="w-full flex flex-col justify-start items-start gap-3">
                                    <div className="w-full flex flex-col justify-start items-start gap-1">
                                        <div className="justify-center text-white text-xl font-semibold font-['DM_Sans']">
                                            {item.name}
                                        </div>
                                        <div className="justify-center text-white/60 text-base font-normal font-['DM_Sans']">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </div>
    );
}