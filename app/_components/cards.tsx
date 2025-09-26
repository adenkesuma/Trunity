import { Anvil, ShieldCheck, Sprout, UserStar } from "lucide-react";
import { HoverEffect } from "./card-hover-effect";
import Image from "next/image";
import Target from "@/public/assets/Target.png"
import BarsChart from "@/public/assets/Bars Chart.png"
import Champion from "@/public/assets/champion.png"
import Rocket from "@/public/assets/rocket.png"

export function Cards() {
  return (
    <div className="">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    description:
      "Bagi calon agen yang ingin mengembangan diri dan terobosan baru keuangan dalam berkarir",
    icon: <Image src={Target} className="w-32" alt="target" />
  },
  {
    description:
      "Mengembangkan dan memasterkan setiap potensi agen",
    icon: <Image src={Rocket} className="w-32" alt="rocket" />
  },
  {
    description:
      "Mengembangkan Leadership dan Menciptakan Pemimpin Baru ",
    icon: <Image src={BarsChart} className="w-32" alt="bars chart" />
  },
  {
    description:
      "Menjadi One Stop Solution for Insurance & Financial Growth ",
    icon: <Image src={Champion} className="w-32" alt="champion" />
  },
];
