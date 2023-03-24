import { TypeAnimation } from "react-type-animation";
import React from 'react';
import Social from "../Social/Social";
import picture from "../../assets/work.png";


const Banner = () => {

  return (

    <section>

      <div className="container  mx-auto font-bold text-2xl md:text-6xl">
        <span className="block">I am a </span>
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
          className="text-anim "
          wrapper="span"
          repeat={Infinity}
        />

      </div>

      <div className="flex-col">
        <img
          className="w-100  "
          src={picture} alt="Jeremy's with a computer" />
        <Social />
      </div>

    </section>
  )
}

export default Banner;