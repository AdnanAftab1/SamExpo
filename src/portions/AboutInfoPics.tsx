import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: "Rahul Sharma", role: "Co-Founder & Director", image: "/Profiles/Adil Ayaz.png" },
  { id: 2, name: "Rahul Sharma", role: "Co-Founder & Director", image: "/Profiles/Anas Kamal.png" },
  { id: 3, name: "Rahul Sharma", role: "Co-Founder & Director", image: "/Profiles/Ashzad Kamal.jpeg" },
  { id: 4, name: "Rahul Sharma", role: "Co-Founder & Director", image: "/Profiles/Adil Ayaz.png" },
];

export default function AboutInfoPics() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-8 bg-[#193827] py-[80px] px-5 sm:px-8 lg:px-20">
      <div className="mx-auto w-full max-w-[1280px] flex flex-col items-center gap-[60px]">

        <BlurFade inView duration={0.7} delay={0}>
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-instrument uppercase text-[#efc250] text-[36px] sm:text-[42px] leading-[55px]">
              Behind the Scenes
            </h2>
            <p className="font-dmsans font-light text-white text-sm sm:text-base max-w-[546px] leading-[21px]">
              Passionate professionals dedicated to transforming spaces with innovative glass solutions and personalized service
            </p>
          </div>
        </BlurFade>

        <div className="w-full flex flex-wrap justify-between items-center gap-8">
          {teamMembers.map((m, i) => (
            <BlurFade key={m.id} inView duration={0.6} delay={0.1 + i * 0.1}>
              <div className="flex flex-col items-start gap-4 w-[250px]">
                <div className="relative w-[250px] h-[250px] bg-[#f7f7eb] overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="flex flex-col items-start gap-[2px]">
                  <h3 className="font-instrument uppercase text-white text-[18px] leading-[23px]">
                    {m.name}
                  </h3>
                  <p className="font-dmsans uppercase text-[#efc250] text-[10px] leading-[13px]">
                    {m.role}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

      </div>
    </section>
  );
}