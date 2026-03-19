import React, { useState } from "react";
import "./ProjectStart.css";
import InquiryPopup from "../InquiryPopup/InquiryPopup";

const ProjectStart = ({

  title = (
    <>
      Start your digital journey with <br />
      NP Computer today.
    </>
  ),
}) => {
const [openPopup, setOpenPopup] = useState(false);

  return (
    <section className="project-start-section">
      <div className="project-start-container">
        <h2 className="project-start-text">{title}</h2>

        <button className="project-start-btn" onClick={() => setOpenPopup(true)} >
          Get In Touch
        </button>
      </div>
      <InquiryPopup
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />
    </section>
  );
};

export default ProjectStart;
