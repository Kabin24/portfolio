import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>
        Copyright &copy; {year} | All Rights Reserved.
      </h4>

      <div className="footerLinks">
        <a href="https://github.com/Kabin24" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kabin-shrestha-029062222/"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/kabin-shrestha-029062222/"
          target="_blank"
        >
          <FaLinkedin />
        </a>

        <a href="mailTo:kabinshrestha377@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
