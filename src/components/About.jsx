import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <div className="pb-1 mt-4">  
        <p className=" px-1 text-4xl font-bold inline border-b-4 border-gray-500">
            About
        </p>
    </div>

        <p className="text-2xl mt-6 md:mt-20 ">
        Hi there, I'm Kabin Shrestha, a front-end developer that is committed to creating interesting and user-focused
         websites. Having a solid background in JavaScript, HTML, CSS, and React, Nextjs My area of expertise is developing 
         imaginative concepts into useful, eye-catching websites.I've had the chance to work on a variety of projects. I enjoy taking on the challenges that come with contemporary frontend development, whether it's creating user interfaces that are intuitive and responsive or improving website performance.
        </p>

        <br />

        <p className="text-xl mt-4 md:mt-0">
          </p>
      </div>
    </div>
  );
};

export default About;
