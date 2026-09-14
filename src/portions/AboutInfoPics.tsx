import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ashzad Kamal",
    designation: "Operations Manager",
    image: "/Profiles/Ashzad Kamal.jpeg",
    description: "Managing operations and ensuring seamless production at Al-Ahad Exports.",
  },
  {
    id: 2,
    name: "Anas Kamal",
    designation: "Co Founder",
    image: "/Profiles/Anas Kamal.png",
    description: "Leading sales strategy and expanding global client relationships.",
  },
  {
    id: 3,
    name: "Adil Ayaz",
    designation: "Founder & CEO",
    image: "/Profiles/Adil Ayaz.png",
    description: "Founder & CEO driving Al-Ahad Exports' vision since 2015.",
  },
];

export default function AboutInfoPics() {
  return (
    <section className="w-full px-5 sm:px-8 lg:px-20 py-[80px] bg-[#193827] inline-flex flex-col justify-center items-center gap-8 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-center gap-14 max-w-[1280px] mx-auto w-full">

        <header className="flex flex-col justify-center items-center gap-2 text-center">
          <h2 className="font-instrument text-[#efc250] text-4xl sm:text-5xl max-md:text-3xl font-normal leading-none">
            Meet Our Leadership Team
          </h2>
          <p className="font-dmsans text-white/80 text-lg max-md:text-base font-light max-w-4xl">
            Our skilled, highly experienced Kolkata craftsmen are eager for challenging designs and are fully equipped to scale up production for projects of any size, volume, or technical complexity.
          </p>
        </header>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
          {teamMembers.map((member) => (
            <BlurFade inView={true} offset={0.2} key={member.id}>
              <Card
                title={member.name}
                description={member.designation}
                image={member.image}
                fullDescription={member.description}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  description,
  image,
  fullDescription,
}: {
  title?: string;
  description?: string;
  image?: string;
  fullDescription?: string;
}) {
  return (
    <div className="w-80 inline-flex flex-col m-2 justify-start items-start gap-5 bg-transparent p-4 border border-white/15 hover:border-[#efc250] transition-colors">

      {/* Photo frame with cream mat */}
      <div className="relative w-full h-90 overflow-hidden border-[6px] border-[#f7f7eb]">
        <Image
          src={image || "/Ryan_Gosling.jpg"}
          alt={title || "Al-Ahad Exports Team Member"}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          <div className="font-instrument text-white text-xl leading-tight">
            {title}
          </div>
          <div className="font-dmsans text-[#efc250] text-sm font-light tracking-wide">
            {description}
          </div>
          {fullDescription && (
            <p className="mt-2 font-dmsans text-white/70 text-sm font-light leading-relaxed">
              {fullDescription}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}