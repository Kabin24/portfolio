import React from "react";
import ProjectBox from "./ProjectBox";
import HDmovie from "../images/hdmovie.png";
import sastobazar from "../images/sasto.png";
import Ghumante from "../images/Ghumante.png";
import  analysis from "../images/data.png"

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={Ghumante} projectName="Ghumante" />
        <ProjectBox projectPhoto={HDmovie} projectName="HD_Movie_Hub" />
        <ProjectBox projectPhoto={sastobazar} projectName="SastoBazar" />
        <ProjectBox projectPhoto={analysis} projectName="Data_analysis_in_Excel" />
      </div>
    </div>
  );
};

export default Projects;
