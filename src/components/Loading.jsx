import React from 'react';
import { ImSpinner9 } from 'react-icons/im';

const Loading = () => {
  return (
    <div>
      <ImSpinner9 className='absolute top-1/2 left-1/2 animate-spin w-16 h-16' />
    </div>
  );
};

export default Loading;
