import React from "react";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import CTA from "../../components/CTA/CTA";
import AboutUs from "../../components/About/AboutUs";
import ModelsCarousel from "../../components/ModelsCarousel/ModelsCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <ModelsCarousel/>
      {/* <Features /> */}
      <AboutUs/>
      <WhyChooseUs/>
      <Services />
      <CTA />
    </>
  );
}
