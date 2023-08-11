import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/myInput.jsx";
import Card from "./components/Card";
import Add from "./components/Add";
import Link from "./components/Link";

function App() {
  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    job: "",
    email: "",
    phone: "",
    address: "",
  });
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState([
    { degree: "", school: "", start: "", end: "", highlights: [""] },
  ]);
  const [experience, setExperience] = useState([
    {
      job: "",
      company: "",
      start: "",
      end: "",
      highlights: [""],
    },
  ]);
  const [links, setLinks] = useState([{ label: "", link: "" }]);

  const handleInfoChange = (e) => {
    const { id, value } = e.target;
    setInfo((prevInfo) => {
      return { ...prevInfo, [id]: value };
    });
  };
  const handleEducationChange = (e, index, highlightIndex) => {
    const { id, value } = e.target;
    setEducation((prevEducation) => {
      return prevEducation.map((elem, i) => {
        if (i === index) {
          return { ...elem, [id]: value };
        }
        return elem;
      });
    });
  };
  const handleEducationHighlightChange = (e, index, highlightIndex) => {
    const { value } = e.target;
    setEducation((prevEducation) => {
      const updatedEducation = prevEducation.map((edu, i) => {
        if (i === index) {
          const updatedHighlights = edu.highlights.map((highlight, j) => {
            if (j === highlightIndex) {
              return value;
            }
            return highlight;
          });
          return { ...edu, highlights: updatedHighlights };
        }
        return edu;
      });
      return updatedEducation;
    });
  };
  const addEducationHighlight = (e, index) => {
    setEducation((prevEducation) => {
      const updatedEducation = prevEducation.map((edu, i) => {
        if (i === index) {
          const updatedHighlights = edu.highlights.concat([""]);
          return { ...edu, highlights: updatedHighlights };
        }
        return edu;
      });
      return updatedEducation;
    });
  };
  const addEducationCard = (e) => {
    setEducation((prevEducation) => {
      return prevEducation.concat([
        {
          degree: "",
          school: "",
          start: "",
          end: "",
          highlights: [""],
        },
      ]);
    });
  };
  const handleExperienceChange = (e, index, highlightIndex) => {
    const { id, value } = e.target;
    setExperience((prevExperience) => {
      return prevExperience.map((elem, i) => {
        if (i === index) {
          return { ...elem, [id]: value };
        }
        return elem;
      });
    });
  };
  const handleExperienceHighlightChange = (e, index, highlightIndex) => {
    const { value } = e.target;
    setExperience((prevExperience) => {
      const updatedExperience = prevExperience.map((edu, i) => {
        if (i === index) {
          const updatedHighlights = edu.highlights.map((highlight, j) => {
            if (j === highlightIndex) {
              return value;
            }
            return highlight;
          });
          return { ...edu, highlights: updatedHighlights };
        }
        return edu;
      });
      return updatedExperience;
    });
  };
  const addExperienceHighlight = (e, index) => {
    setExperience((prevExperience) => {
      const updatedExperience = prevExperience.map((edu, i) => {
        if (i === index) {
          const updatedHighlights = edu.highlights.concat([""]);
          return { ...edu, highlights: updatedHighlights };
        }
        return edu;
      });
      return updatedExperience;
    });
  };
  const addExperienceCard = (e) => {
    setExperience((prevExperience) => {
      return prevExperience.concat([
        {
          job: "",
          company: "",
          start: "",
          end: "",
          highlights: [""],
        },
      ]);
    });
  };
  const handleLinkChange = (e, index) => {
    const { id, value } = e.target;
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.map((link, i) => {
        i === index ? { [id]: value } : link;
      });
      return updatedLinks;
    });
  };
  const addLink = (e) => {
    setLinks((prevLinks) => {
      return prevLinks.concat([{ label: "", link: "" }]);
    });
  };

  useEffect(() => {
    console.log(experience);
  }, [experience]);
  return (
    <div className="app">
      <div className="inputs">
        <form>
          <section className="personal-info">
            <h1>Personal Information</h1>
            <div>
              <Input
                id="fname"
                label="First Name"
                handleInfoChange={handleInfoChange}
              />
              <Input
                id="lname"
                label="Last Name"
                handleInfoChange={handleInfoChange}
              />
              <Input
                id="currentJobTitle"
                label="Current Job Title"
                handleInfoChange={handleInfoChange}
              />
              <Input
                id="email"
                label="Email"
                handleInfoChange={handleInfoChange}
              />
              <Input
                id="phoneNumber"
                label="Phone Number"
                handleInfoChange={handleInfoChange}
              />
              <Input
                id="address"
                label="Address"
                handleInfoChange={handleInfoChange}
              />
            </div>
          </section>
          {/*----------------------------------------------------------------- */}
          <section>
            <h1>Professional Summary</h1>
            <textarea onChange={(e) => setSummary(e.target.value)} />
          </section>
          {/*----------------------------------------------------------------- */}
          <section>
            <h1>Education</h1>
            {education.map((card, index) => (
              <Card
                prefix="education"
                key={index}
                index={index}
                title={"Degree"}
                location={"School"}
                start={"Start Year"}
                end={"End Year"}
                highlights={card.highlights}
                handleInfoChange={handleEducationChange}
                handleHighlightChange={handleEducationHighlightChange}
                addHighlight={addEducationHighlight}
              />
            ))}
            <Add add={addEducationCard} />
          </section>
          {/*----------------------------------------------------------------- */}
          <section>
            <h1>Work Experience</h1>
            {experience.map((card, index) => (
              <Card
                prefix="experience"
                key={index}
                index={index}
                title={"Job Title"}
                location={"Company"}
                start={"Start Year"}
                end={"End Year"}
                highlights={card.highlights}
                handleInfoChange={handleExperienceChange}
                handleHighlightChange={handleExperienceHighlightChange}
                addHighlight={addExperienceHighlight}
              />
            ))}
            <Add add={addExperienceCard} />
          </section>
          {/*----------------------------------------------------------------- */}
          <section>
            <h1>Social Links</h1>
            {links.map((link, index) => (
              <Link
                key={index}
                index={index}
                link={link}
                handleInfoChange={handleLinkChange}
              />
            ))}
            <Add add={addLink} />
          </section>
        </form>
      </div>
      <div className="outputs"></div>
    </div>
  );
}

export default App;
