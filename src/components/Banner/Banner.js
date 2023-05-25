import { TypeAnimation } from "react-type-animation";
import React from 'react';
import Social from "../Social/Social";
import picture from "../../assets/work.png";
import tache from "../../assets/tache.png";


const Banner = () => {

  return (

    <section
      className="md:flex" >
      <div className="relative flex flex-col items-center   md:w-3/4 ld:w-1/2  mx-auto font-bold text-2xl md:text-6xl ">
        <img src={tache} className="" alt="tache" />
        <span className=" absolute top-[35%]  left-[40%] text-3xl z-50 md:text-4xl xl:text-5xl "
        >I am a</span>
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
          className="absolute top-[50%] z-50 text-2xl md:text-3xl xl:text-5xl uppercase  font-bold"
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
// md: w - 3 / 4 absolute   md: top - 3.5	lg: top - 32 - top - 5 left - 3 md: -left - 2 lg: -left - 4