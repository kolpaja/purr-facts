import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CatFactsContext } from '../context/catFactsContext';
import Loading from '../components/Loading';
import { FaVolumeUp, FaCopy, FaInstagram, FaRegTrashAlt } from 'react-icons/fa';
import playfulCat from '../assets/Playful-cat.svg';
import catLogo from '../assets/cat-icon.png';
import inboxCleanup from '../assets/Inbox-cleanup.svg';
import { DarkModeContext } from '../context/themeContext';
import CopyText from '../components/CopyText';

function POSTS() {
  const [fact, setFact] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  const { factId } = useParams();
  const navigate = useNavigate();

  const { catFacts, deleteFact, isLoading } = useContext(CatFactsContext);
  const { theme } = useContext(DarkModeContext);

  const handleDelete = (id) => {
    const message = deleteFact(id);
    console.log({ message });

    setIsDeleted(true);

    const timeout = setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  useEffect(() => {
    const foundFactCat = catFacts.find((fact) => fact.id === factId);
    if (foundFactCat) setFact(foundFactCat);
  }, [isLoading]);

  if (isLoading) return <Loading />;

  if (isDeleted)
    return (
      <div className='grid'>
        <div className='place-self-center'>
          <h1 className='text-center text-3xl font-semiBold'>
            Successfully deleted the Fact
          </h1>
          <img src={inboxCleanup} alt='clean' width='500' height='500' />
        </div>
      </div>
    );

  return (
    <div className='w-full p-10 flex flex-col justify-center items-center m-auto'>
      <h1 className='text-3xl mb-10'>Did you know?</h1>

      <div className='fact-message mb-10 relative w-[500px] h-[300px] '>
        <div className='w-[300px] grid p-8  h-[175px] rounded-3xl bg-white border border-slate-300 absolute top-0 left-[100px] sm:left-[190px]'>
          <p
            className={`${
              theme === 'dark' ? 'text-black' : ''
            } text-xl place-self-center text-center'`}
          >
            {fact && fact.fact}
          </p>
        </div>

        <div className='ring-2 absolute left-[180px] sm:left-[50px] -bottom-[25px] sm:bottom-0  w-[100px] h-[100px] rounded-full ring-green-400'>
          <img
            src={catLogo}
            className='absolute z-10 bottom-0 rounded-full  '
            width='100'
            height='100'
            alt='cat logo'
          />
        </div>

        {/* small circles */}
        <div className='absolute z-20 left-[125px] sm:left-[170px] bottom-[100px] bg-white border border-slate-400 w-6 h-6 rounded-full' />
        <div className='absolute z-20 left-[150px] sm:left-[150px] bottom-[80px] bg-white border border-slate-400 w-4 h-4 rounded-full' />
        <div className='absolute z-20 left-[175px] sm:left-[130px] bottom-[60px] bg-white border border-slate-400 w-3 h-3 rounded-full' />
      </div>

      <div className='actions w-full flex flex-col sm:flex-row justify-between items-center pb-4 px-8 border-b border-slate-300'>
        <ul className='flex mb-4 sm:mb-0'>
          <li className='mr-2 rounded-full p-2 border border-slate-500'>
            <FaVolumeUp />
          </li>
          <li className='mr-2 rounded-full p-2 border border-slate-500'>
            <CopyText text={`${fact && fact.fact} -by people`} />
          </li>
          <li className=' rounded-full p-2 border border-slate-500'>
            <FaInstagram />
          </li>
        </ul>
        <button
          className='ring ring-red-300 rounded-xl px-4 py-2 flex items-center'
          onClick={() => handleDelete(factId)}
        >
          <FaRegTrashAlt className='mr-2 text-pink-400' /> delete
        </button>
      </div>

      <img src={playfulCat} width='500' height='500' alt='playful cat' />
    </div>
  );
}

export default POSTS;
