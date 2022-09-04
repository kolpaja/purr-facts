import React, { useState } from 'react';
import { BsFileEarmarkCheckFill } from 'react-icons/bs';
import { FaCheckCircle, FaCopy } from 'react-icons/fa';

/**
 * @param {text} : to be copied
 * @returns returns only the text passed in
 */
const CopyText = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    window.navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch((error) => {
        console.log(error);
        setCopied(false);
      });

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  if (copied) {
    return (
      <div className='relative'>
        <BsFileEarmarkCheckFill />
        <span className='absolute -bottom-12 -right-8 flex items-center rounded-md px-2 py-1 bg-white border border-slate-400 '>
          <FaCheckCircle className='text-green-400 mr-2' /> Copied!
        </span>
      </div>
    );
  } else {
    return <FaCopy onClick={() => handleCopy(text)} />;
  }
};

export default CopyText;
