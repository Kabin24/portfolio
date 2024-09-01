import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
import profilePic from "../images/profile.jpg"
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Kabin Shrestha</b> and I am from Kathmandu,
            Nepal. I'm a <b> web developer</b> and a third year student enrolled in
            <b> IIMS College </b> pursuing a  <b> Bachelor </b> degree <b> in Computer Science</b>. <br />
            <br />
            I love to create projects with beautiful designs and put my own
            twists on it, you can check out some of my work in the projects
            section.
            <br />
            
            <br />
            My interest in Web Development started back in 2019 when I created tables and words in HTML for the first time in browser. From there, i have always tried to polish my web development skills.
          </p>
          <a href="Kabinshrestha_CV.pdf" download className="resume-btn">
            <button>

              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>
        <div className="AboutPhoto">
            <img src={profilePic} alt="Kabin Shrestha" />
          </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="C++" />
        <Skills skill="Figma" />
        <Skills skill="Npm" />
      </div>
    </>
  );
};

export default About;