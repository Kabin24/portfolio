import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    Ghumante: {
      Desc: "Ghumante:  This website is your gateway to extraordinary journeys, curated for those who seek more from travel. It's my first project and deployed on Netlify.",
      Github: "https://github.com/Kabin24/Ghumante_goto_travel",
      Website: "https://ghumantenp.netlify.app/",
    },
    HD_Movie_Hub: {
      Desc: "HD Movie Website based on web application that allows users to explore and discover high-definition movies. Users can browse through a vast collection of movies, view details, and even watch trailers.",
      Github: "https://github.com/Kabin24/HD_movie_hub",
      Website: "https://hdmovie0.netlify.app/",
    },
    SastoBazar: {
      Desc: "This is also web based project build  in react sasto Bazar your go-to destination for affordable and quality shopping in the  online marketplaces.",
      Github: "https://github.com/Kabin24/sastobazar",
      Website: "https://sastobazar24.netlify.app/",
    },
    Data_analysis_in_Excel: {
      Desc: "Vrinda Store Data Analysis  Interactive Dashboard creation using MS Excel",
      Github: "https://github.com/Kabin24/Vrinda-store-2023-Analysis",
      Website: "https://github.com/Kabin24/Vrinda-store-2023-Analysis",
    }
   
  };

  const projectDetails = desc[projectName];

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <p>{projectDetails?.Desc}</p> {/* Render the description */}
        <br />
        <a
          href={projectDetails?.Github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>
        <a
          href={projectDetails?.Website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
