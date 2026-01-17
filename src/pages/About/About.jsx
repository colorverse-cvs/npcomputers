import "./About.css";
import logo from "../../assets/np-logo.webp";
import Specialize from "../../components/Specialize/Specialize";
import CTA from "../../components/CTA/CTA";
import OurStory from "../../components/OurStory/OurStory";



const About = () => {
  return (
    <section className="about-page">

      {/* SPECIALIZE SECTION */}
      <OurStory/>
      <Specialize />
      <CTA/>

    </section>
  );
};

export default About;
