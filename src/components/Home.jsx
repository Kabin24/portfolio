import React from 'react'
import Heroimg from "../assets/HeroImg.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Home = () => {
  return (
    <div  name="home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
  >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full"> 
                <h2 className="text-4xl sm:text-7xl font-bold text-white"> I'm a front-end Developer</h2>
                <p className="text-gray-500 py-4 max-w-md">dsfjdiosjfdslfkjldfkjdlfjlkdjf sjdfhksjdf sdfljhlds fkdsjfhsldf fjhdskfjh asdlfhldjjsfl</p>
                <div>
               
          </div>
        </div>

        <div>
          <img
            src={Heroimg}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Home