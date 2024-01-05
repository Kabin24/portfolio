import React from 'react'
import todolist from "../assets/Portfolia/todolist.png"

import travelandtour from "../assets/Portfolia/travelandtour1.png"
import ecommercesite from "../assets/Portfolia/landingpagr.jpg"

const Portfolia = () => {
  const portfolios = [
    {
      id: 1,
      src: todolist,
      demoLink:'https://storied-naiad-3812a3.netlify.app/',
      codeLink:'https://github.com/Kabin24/todolist',
    },
    {
      id: 2,
      src: ecommercesite,
      demoLink:'https://sastobazar24.netlify.app/',
      codeLink:'https://github.com/Kabin24/e-commerce-site',

    },
    {
      id: 3,
      src:travelandtour,
      demoLink:'https://ghumantenp.netlify.app/',
      codeLink:'https://github.com/Kabin24/Responsive-Tour-and-Travel-Website',

    }
  
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={codeLink} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolia;