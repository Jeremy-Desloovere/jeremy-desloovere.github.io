import { TypeAnimation } from "react-type-animation";
import React from 'react';
import Social from "../Social/Social";
import picture from "../../assets/work.png";


const Banner = () => {

  return (

    <section id='home' >

      <div className="flex flex-col justify-center container   md:h-44   mx-auto font-bold text-2xl md:text-6xl ">
        <span className="
        md:text-4xl 
        xl:text-5xl 
        md:bg-gradient-to-r from-verydarkcolor via-darkcolor to-transparent
        "
        >I am a </span>
        <TypeAnimation
          sequence={[
            'frontend developer',
            3000,
            'backend developer',
            3000,
            'fullstack developer',
            3000,
          ]}
          speed={25}
          className="h-7 md:h-20  md:text-3xl xl:text-5xl text-fill-darkcolor text-anim font-bold"
          wrapper="span"
          repeat={Infinity}
        />

      </div>

      <div className="flex flex-col items-center">
        <img
          className="w-80 md:w-3/4"
          src={picture} alt="Jeremy's with a computer" />
        <Social />
      </div>

    </section>
  )
}

export default Banner;