import "./OurStory.css";
import storyImg from "../../assets/our-story.png"; // replace with your image

const OurStory = () => {
  return (
    <section className="our-story-section">
      <div className="our-story-container">

        {/* IMAGE */}
{/* IMAGE */}
<div className="our-story-image">
  <img src={storyImg} alt="NP Computer Our Story" />

  {/* Overlay Info */}
  <div className="story-overlay">
    <h3>10+ Years</h3>
    <p>IT Experience</p>

    <span className="divider"></span>

    <p className="founder">
      Founded by <strong>Mr. Nikhil Prabat</strong>
    </p>
  </div>
</div>


        {/* CONTENT */}
        <div className="our-story-content">
          <h2>Our <span>Story</span></h2>
          <span className="line"></span>

          <p>
            NP Computer was founded with a simple mission — to make technology
            reliable, affordable, and accessible for everyone. What started as
            a small computer repair service has grown into a trusted IT
            solutions provider.
          </p>

          <p>
            Over the years, we have helped thousands of customers with computer
            repairs, networking solutions, data recovery, and IT support. Our
            success is built on honesty, technical expertise, and long-term
            customer relationships.
          </p>

          <p>
            Today, NP Computer continues to evolve with modern technology while
            staying committed to quality service and customer satisfaction.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
