import React from 'react';

function About() {
  return (
    <div className='w-[300px] sm:w-[500px] mx-auto  mt-32'>
      <h1 className='text-center text-xl sm:text-3xl mb-10'>
        About this little project
      </h1>

      <p className='text-lg sm:text-xl leading-[20px] leading-[40px]'>
        A full list of cat facts that were consumed from this open source api{' '}
        <a
          href='https://catfact.ninja/'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://catfact.ninja/
        </a>
        all right reserved from the api creator. <br />
        <br />
        The purpose of this website is just for learning intentions.
        <br />
        <br />
        Keep exploring guys and checkout me
        <a
          href='https://linktr.ee/kolpaja'
          target='_blank'
          rel='noopener noreferrer'
          className='mx-2 underline hover:text-sky-700'
        >
          CLICK HERE
        </a>
      </p>
    </div>
  );
}

export default About;
