import React from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import catLogo from '../assets/cat-icon.png';

function Header({ theme, toggleDarkMode, scrolled }) {
  return (
    <nav
      className={`${scrolled ? 'bg-slate-100 header-bg' : ''} ${
        theme === 'dark' ? 'bg-slate-700' : 'bg-slate-100'
      } flex  text-2xl flex-row w-screen fixed z-30 shadow-md justify-between px-4 sm:px-16 py-4 border-b border-slate-100 mb-4`}
    >
      <Link className='logo flex items-center' to='/'>
        <img src={catLogo} className='contain w-[40px] h-[40] mr-1' />
        <h2>Purr Facts</h2>
      </Link>
      <ul className='flex items-center'>
        <li className='mr-10'>
          <a href='/'>Facts</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul>
      <div
        className='toggle-dark-mode rounded-full grid  border border-slate-500  w-8 h-8 hover:cursor-pointer'
        onClick={() => toggleDarkMode()}
      >
        {theme === 'dark' ? (
          <MdLightMode className='text-[20px] place-self-center' />
        ) : (
          <MdDarkMode className='text-[20px] place-self-center' />
        )}
      </div>
    </nav>
  );
}

export default Header;
