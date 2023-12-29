import React from "react";
import { AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="flex flex-col md:flex-row bg-gray-800 text-white p-5">
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <h3 className="font-bold text-center md:text-left">Copyright © {year}</h3>
      </div>
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <h3 className="font-bold text-center md:text-left px-3">Designed and Developed by Kabin Shrestha </h3>
      </div>
      <div className="w-full md:w-1/4">
        <ul className="flex space-x-4 justify-center md:justify-end">
          <li>
            <a
              href="https://github.com/Kabin24"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <AiFillGithub size={30}/>
            </a>
          </li>
          
          <li>
            <a
              href="https://www.linkedin.com/in/kabin-shrestha-029062222/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
