import { Anvil, ShieldCheck, Sprout, UserStar } from "lucide-react";
import { HoverEffect } from "./card-hover-effect";

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
    icon: <Sprout size={"40px"} />
  },
  {
    description:
      "Mengembangkan dan memasterkan setiap potensi agen",
    icon: <Anvil size={"40px"} />
  },
  {
    description:
      "Mengembangkan Leadership dan Menciptakan Pemimpin Baru ",
    icon: <UserStar size={"40px"} />
  },
  {
    description:
      "Menjadi One Stop Solution for Insurance & Financial Growth ",
    icon: <ShieldCheck size={"40px"} />
  },
];
