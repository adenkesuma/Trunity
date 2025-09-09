import { DotBackground } from "./_components/dot-background-header";
import { About } from "./_components/home/about";
import Header from "./_components/home/header";
import Resources from "./_components/home/resources";
import Services from "./_components/home/services";
import StepByStep from "./_components/home/step-by-step";
import Team from "./_components/home/team";
import { Testimoni } from "./_components/home/Testimoni";
import { WhatWeDo } from "./_components/home/what-we-do";
import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto mb-10">
        <Navbar />
        <div className="flex items-center gap-10">
          <Header />
          <DotBackground />
        </div>
      </div>
      <About />
      <div className="container mx-auto">
        <Services />
        {/* <Resources /> */}
      </div>
      <WhatWeDo />
      {/* <StepByStep /> */}
      {/* <div className="container mx-auto">
        <Testimoni />
      </div> */}
      <Team />
    </div>
  );
}
