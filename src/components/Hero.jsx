import React from 'react';
import { useContext } from 'react';
import catThrowsVase from '../assets/Cat-throwing-a-vase.svg';
import { CatFactsContext } from '../context/catFactsContext';

function Hero() {
  const { total } = useContext(CatFactsContext);
  return (
    <div className='flex flex-col h-screen relative items-center justify-around sm:flex-row w-full m-auto mb-16'>
      <div className='left'>
        <h1 className='text-3xl font-bold mb-10'>
          Welcome to <s>Cat Facts</s> Purr Facts
        </h1>

        <h3 className='text-xl font-semiBold mb-10'>
          Yeah! You want to pet me, <br />
          but how much do you know me?
        </h3>

        <a
          href='/#facts'
          className='text-xl py-2 pl-4 pr-8 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500'
        >
          Explore
        </a>
      </div>
      <div>
        <img src={catThrowsVase} width='500' height='400' />
      </div>
    </div>
  );
}

export default Hero;
