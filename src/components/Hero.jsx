import React from 'react';
import catThrowsVase from '../assets/Cat-throwing-a-vase.svg';

function Hero() {
  return (
    <div className='flex flex-col justify-around sm:flex-row w-full m-auto mb-16'>
      <h1>Fun facts about cats</h1>
      <div>
        <img src={catThrowsVase} width='500' height='400' />
      </div>
    </div>
  );
}

export default Hero;
