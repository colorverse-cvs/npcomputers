import React from "react";
import "./ProjectStart.css";

const ProjectStart = ({
  title = (
    <>
      We Like To Start Your <br />
      Project With Us
    </>
  ),
}) => {
  return (
    <section className="project-start-section">
      <div className="project-start-container">
        <h2 className="project-start-text">{title}</h2>

        <button className="project-start-btn">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default ProjectStart;
