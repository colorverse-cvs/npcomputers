import React from "react";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Services from "../../components/Services/Services";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import CTA from "../../components/CTA/CTA";
import AboutUs from "../../components/About/AboutUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutUs/>
      
      <WhyChooseUs/>
      <Services />
      <CTA />
    </>
  );
}
