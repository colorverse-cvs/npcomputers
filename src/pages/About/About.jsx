import "./About.css";
import logo from "../../assets/np-logo.webp";
import Specialize from "../../components/Specialize/Specialize";
import CTA from "../../components/CTA/CTA";
import OurStory from "../../components/OurStory/OurStory";
import ProjectStart from "../../components/ProjectStart/ProjectStart";

const About = () => {
  return (
    <section className="about-page">

      {/* SPECIALIZE SECTION */}
      <OurStory/>
      <Specialize />
      <CTA/>
          <ProjectStart
      title={<>Delivering reliable and affordable<br /> technology solutions. </>}
      buttonLabel="Contact Us"
    />
    </section>
  );
};

export default About;
