import { TypeAnimation } from "react-type-animation";
import React from 'react';

const AnimTitle = () => {

  <TypeAnimation
    sequence={[
      'I\'m a frontend developer',
      1000,
      'I\'m a backend developer',
      1000,
      'I\'m a fullstack developer',
      1000,
      () => {
        console.log('Sequence completed');
      },
    ]}
    speed={50}
    style={{ fontSize: '2em' }}
    repeat={Infinity}
  />

}

export default AnimTitle;