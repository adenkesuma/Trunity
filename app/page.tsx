import { About } from "./_components/home/about";
import FAQ from "./_components/home/faq";
import Footer from "./_components/home/footer";
import Header from "./_components/home/header";
import Focus from "./_components/home/focus";
import Team from "./_components/home/team";
import { Testimonials } from "./_components/home/testimonials";
import { WhatWeDo } from "./_components/home/what-we-do";
import MapLocation from "./_components/map";
import SeoHead from "./_components/seo-head";
import { Services } from "./_components/services";

export default function Home() {
  return (
    <div>
      <SeoHead
        title="TRUITY Agency Insurance - Solusi Asuransi Terpercaya di Indonesia"
        description="TRUITY menyediakan asuransi jiwa, kesehatan, properti, dan kendaraan dengan premi kompetitif. Perlindungan finansial untuk keluarga dan bisnis Anda."
        pathname="/"
      />
      <Header />
      <About />
      <Focus />
      <WhatWeDo />
      <Services />
      <Team />
      <Testimonials />
      <MapLocation /> 
      <FAQ />
      <Footer />
    </div>
  );
}
