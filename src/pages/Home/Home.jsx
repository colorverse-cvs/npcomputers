import React from "react";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Services from "../../components/Services/Services";
import CTA from "../../components/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CTA />
      <Services />
    </>
  );
}
