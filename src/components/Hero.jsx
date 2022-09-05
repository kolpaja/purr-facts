import React, { useEffect, useContext } from 'react';
import catThrowsVase from '../assets/Cat-throwing-a-vase.svg';
import { CatFactsContext } from '../context/catFactsContext';
import { FaArrowDown } from 'react-icons/fa';

function Hero() {
  const { total, isLoading } = useContext(CatFactsContext);

  useEffect(() => {}, [isLoading, total]);

  return (
    <div className='flex flex-col lg:flex-row h-screen relative items-center justify-start lg:justify-around  w-full m-auto mb-16'>
      <div className='left'>
        <h1 className='text-3xl font-bold mb-10'>
          Welcome to <s>Cat Facts</s> Purr Facts
        </h1>

        <h3 className='text-xl sm:text-2xl font-semiBold mb-10'>
          Yeah! You want to pet me, <br />
          but how much do you know me?
        </h3>

        <div className='total text-xl sm:text-3xl font-semiBold mb-10'>
          <h1>
            Explore a total of <span>{total - 1} facts</span>
          </h1>
        </div>

        <a
          href='/#facts'
          className='text-xl py-2 px-4 inline-flex w-[190px] items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500'
        >
          <span> Explore Now</span>
          <FaArrowDown className='ml-4' />
        </a>
      </div>

      <div className='mt-10 lg:mt-0 contain'>
        <img src={catThrowsVase} width='500' height='400' />
      </div>
    </div>
  );
}

export default Hero;
