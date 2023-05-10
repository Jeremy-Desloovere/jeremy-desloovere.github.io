import { TypeAnimation } from "react-type-animation";
import React from 'react';
import Social from "../Social/Social";
import picture from "../../assets/work.png";
import tache from "../../assets/tache.png";


const Banner = () => {

  return (

    <section id='home '
      className="relative" >
      <div className=" flex flex-col items-center   md:w-3/4 ld:w-1/2  mx-auto font-bold text-2xl md:text-6xl ">
        <img src={tache} className="md:w-3/4 absolute z-1  md:top-3.5	lg:top-32 -top-5 left-3 md:-left-2 lg:-left-4" alt="tache" />
        <span className="z-50 md:text-4xl xl:text-5xl px-16 md:mb-3"
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
          className="z-50 h-7 md:h-20  md:text-3xl xl:text-5xl uppercase  font-bold"
          wrapper="span"
          repeat={Infinity}
        />

      </div>

      <div className="flex md:w-1/2 flex-col items-center mt-24 md:mt-0">
        <img
          className="w-3/4 "
          src={picture} alt="Jeremy's with a computer" />
        <Social />
      </div>

    </section>
  )
}

export default Banner;
