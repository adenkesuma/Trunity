import { About } from "./_components/home/about";
import FAQ from "./_components/home/faq";
import Footer from "./_components/home/footer";
import Header from "./_components/home/header";
import Services from "./_components/home/services";
import Team from "./_components/home/team";
import { Testimonials } from "./_components/home/testimonials";
import { WhatWeDo } from "./_components/home/what-we-do";
import MapLocation from "./_components/map";
import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <WhatWeDo />
      <Team />
      <Testimonials />
      <MapLocation /> 
      <FAQ />
      <Footer />
    </div>
  );
}
