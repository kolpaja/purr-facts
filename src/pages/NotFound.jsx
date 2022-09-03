import React from 'react';
import error404Cat from '../assets/404-Error-cat-bro.svg';

function NotFound() {
  return (
    <div className='grid'>
      <img
        src={error404Cat}
        width='500'
        height='500'
        className='place-self-center'
        alt='error 404 not found'
      />
    </div>
  );
}

export default NotFound;
