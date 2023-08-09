import React from "react";
import "./App.css";
import Input from "./components/myInput.jsx";
import Card from "./components/Card";
import Add from "./components/Add";
import Link from "./components/Link";

function App() {
  return (
    <div className="app">
      <div className="inputs">
        <form>
          <section className="personal-info">
            <h1>Personal Information</h1>
            <div>
              <Input id="fname" name="First Name" />
              <Input id="lname" name="Last Name" />
              <Input id="job" name="Job Title" />
              <Input id="email" name="Email" />
              <Input id="phone" name="Phone Number" />
              <Input id="address" name="Address" />
            </div>
          </section>
          <section>
            <h1>Professional Summary</h1>
            <textarea />
          </section>
          <section>
            <h1>Education</h1>
            <Card />
            <Add />
          </section>
          <section>
            <h1>Work Experience</h1>
            <Card />
            <Add />
          </section>
          <section>
            <h1>Social Links</h1>
            <Link />
            <Add />
          </section>
        </form>
      </div>
      <div className="outputs"></div>
    </div>
  );
}

export default App;
