import { Car, ClipboardMinus, HeartPulse, House, ShieldPlus, UserCheck } from "lucide-react";
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
    title: "Car Insurance Service",
    description:
      "Drive with confidence knowing you're protected by our reliabe car insurance. We provide coverage for various needs, from basic protection",
    icon: <Car size={"30px"} />
  },
  {
    title: "Liability Insurance",
    description:
      "Protect Yourself and your assets with our liability insurance. We offer coverage for a range of situations providing peace of mind",
    icon: <ClipboardMinus size={"30px"} />
  },
  {
    title: "Private Health Insurance",
    description:
      "Stay covered with our flexible health insurance options designed to meet your unique needs. OUr plans offer extensive coverage and access",
    icon: <UserCheck size={"30px"} />
  },
  {
    title: "Legal Protection",
    description:
      "Navigate legal challanges with ease through our legal protection insurance. Our plans offer support",
    icon: <ShieldPlus size={"30px"} />
  },
  {
    title: "Household Content",
    description:
      "Safeguard your belongings with our household content insurance. We cover a wide range of items within your home",
    icon: <House size={"30px"} />
  },
  {
    title: "Term Life Insurance",
    description:
      "Our plans provide coverage for a specified term, offering protection and peace of mind during critical life stages",
    icon: <HeartPulse size={"30px"} />
  },
];
