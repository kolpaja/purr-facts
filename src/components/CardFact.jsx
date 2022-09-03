import React, { useContext } from 'react';
import {
  FaCopy,
  FaInstagram,
  FaQuoteLeft,
  FaQuoteRight,
  FaVolumeUp,
} from 'react-icons/fa';
import { DarkModeContext } from '../context/themeContext';

const CardFact = React.forwardRef(({ fact, idx }, ref) => {
  const { isDark } = useContext(DarkModeContext);

  const cardBody = (
    <div
      className={` ${
        isDark ? 'bg-slate-100 text-black' : 'bg-sky-200'
      } shadow-xl  flex flex-col py-4 px-8 justify-between items-center rounded-md border border-sky-400 p-4 hover:scale-105 `}
    >
      <h2 className='quote-title font-bold text-2xl mb-4'>
        Cat Fact {idx + 1}{' '}
      </h2>

      <div className='quote flex mb-4'>
        <FaQuoteLeft className='mr-2 text-[12px] self-start' />
        <p className='text-xl'>{fact.fact}</p>
        <FaQuoteRight className='ml-2 text-[12px]  self-end' />
      </div>

      <div className='author flex items-center self-end mb-4'>
        <span className='mr-1 border-b w-[15px] h-[2px] border-slate-600' />
        <h3 className='italic'>People</h3>
      </div>

      <div className='actions w-full flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-slate-600'>
        <ul className='flex mb-4 sm:mb-0'>
          <li className='mr-2 rounded-full p-2 border border-slate-500'>
            <FaVolumeUp />
          </li>
          <li className='mr-2 rounded-full p-2 border border-slate-500'>
            <FaCopy />
          </li>
          <li className=' rounded-full p-2 border border-slate-500'>
            <FaInstagram />
          </li>
        </ul>

        {/* todo keep in mind when viewing a single cat fact, index +1 */}
        <a
          href={`/facts/${idx + 1}`}
          className='bg-sky-400 w-full sm:w-auto text-center px-2 sm:text-xl sm:px-4 py-2 rounded-xl font-bold text-white hover:bg-sky-700 hover:text-white hover:scale-105'
        >
          View Quote
        </a>
      </div>
    </div>
  );

  const content = ref ? (
    <div ref={ref}>{cardBody}</div>
  ) : (
    <article>{cardBody}</article>
  );

  return content;
});
export default CardFact;
