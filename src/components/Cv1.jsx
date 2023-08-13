import React from "react";
import "./Cv1.css";

export default function Cv1() {
  return (
    <div id="cv1">
      <header>
        <h1>Your Name</h1>
        <h2>JOB TITLE OR AREA OF EXPERTIES</h2>
      </header>
      <div className="intro">
        <section id="contact">
          <h2>CONTACT</h2>
          <ul>
            <li>phone number</li>
            <li>address</li>
            <li>links</li>
          </ul>
        </section>
        <section id="summary">
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>
            As a dedicated and enthusiastic junior web developer, I am
            passionate about creating engaging and user-friendly web
            experiences. With a solid foundation in HTML, CSS, and JavaScript, I
            am eager to contribute my skills to a dynamic team focused on
            delivering high-quality projects. I am a quick learner with a strong
            attention to detail, always striving to stay updated with the latest
            industry trends and best practices. My goal is to leverage my
            technical skills and collaborate effectively to build innovative and
            responsive websites that exceed client expectations.
          </p>
        </section>
      </div>
      <section id="experience">
        <h2>EXPERIENCE</h2>
        <ul>
          <li>
            <h3>Job title</h3>
            <h3>Company</h3>
            <h3>Years</h3>
            <ul>
              <li>
                Proficient in HTML5, CSS3, and JavaScript, with a focus on
                writing clean and maintainable code.
              </li>
              <li>
                Experience in building responsive and mobile-friendly websites
                to ensure optimal user experiences across devices.
              </li>
              <li>
                Familiarity with front-end frameworks such as React.js, enabling
                the development of dynamic and interactive web applications.
              </li>
            </ul>
          </li>
          <li>
            <h3>Job title</h3>
            <h3>Company</h3>
            <h3>Years</h3>
            <ul>
              <li>
                Proficient in HTML5, CSS3, and JavaScript, with a focus on
                writing clean and maintainable code.
              </li>
              <li>
                Experience in building responsive and mobile-friendly websites
                to ensure optimal user experiences across devices.
              </li>
              <li>
                Familiarity with front-end frameworks such as React.js, enabling
                the development of dynamic and interactive web applications.
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section id="education">
        <h2>EDUCATION</h2>
        <ul>
          <li>
            <h3>Degree</h3>
            <h3>School</h3>
            <h3>Years</h3>
            <ul>
              <li>
                Proficient in HTML5, CSS3, and JavaScript, with a focus on
                writing clean and maintainable code.
              </li>
              <li>
                Experience in building responsive and mobile-friendly websites
                to ensure optimal user experiences across devices.
              </li>
              <li>
                Familiarity with front-end frameworks such as React.js, enabling
                the development of dynamic and interactive web applications.
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
}
