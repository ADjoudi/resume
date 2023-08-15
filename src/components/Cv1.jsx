import React from "react";
import "./Cv1.css";

export default function Cv1({ outputs }) {
  const { info, summary, experience, education, links } = outputs;
  const { fname, lname, currentJobTitle, email, phoneNumber, address } = info;
  return (
    <div id="cv1">
      <header>
        <h1>{fname || lname ? fname + " " + lname : "Your Name"}</h1>
        <h2>
          {currentJobTitle
            ? currentJobTitle.toUpperCase()
            : "JOB TITLE OR AREA OF EXPERTIES"}
        </h2>
      </header>
      <div className="intro">
        <section id="contact">
          <h2>CONTACT</h2>
          <ul>
            <li>{phoneNumber ? phoneNumber : "Phone Number"}</li>
            <li>{email ? email : "Email"}</li>
            <li>{address ? address : "Address"}</li>
            {links[0].label &&
              links.map((link, index) => (
                <li key={index}>
                  <a href={link.link}>{link.label}</a>
                </li>
              ))}
          </ul>
        </section>
        <section id="summary">
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>{summary}</p>
        </section>
      </div>
      <section id="experience">
        <h2>EXPERIENCE</h2>
        <ul>
          {experience.map((exp, index) => {
            const { "job title": job, company, start, end, highlights } = exp;
            return (
              <li key={index}>
                <h3>{job ? job : "Job Title"}</h3>
                <h4>{company ? company : "Company"}</h4>
                <h4>{start || end ? start + " - " + end : "Years"}</h4>
                <ul>
                  {highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </section>
      <section id="education">
        <h2>EDUCATION</h2>
        <ul>
          {education.map((edu, index) => {
            const { degree, school, start, end, highlights } = edu;
            return (
              <li key={index}>
                <h3>{degree ? degree : "Job Title"}</h3>
                <h4>{school ? school : "Company"}</h4>
                <h4>{start || end ? start + " - " + end : "Years"}</h4>
                <ul>
                  {highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
