import React, { useContext, useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import { DarkModeContext } from '../context/themeContext';

function Layout({ children }) {
  const { theme, toggleDarkMode } = useContext(DarkModeContext);
  const [scrolled, setScrolled] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 800) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [theme, scrolled, setScrolled, handleScroll]);

  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-slate-700 text-white' : 'bg-white'
      } flex flex-col relative`}
    >
      <Header
        theme={theme}
        toggleDarkMode={toggleDarkMode}
        scrolled={scrolled}
      />

      <div className='px-8 mt-[90px] md:px-20 lg:px-30 min-h-screen'>
        {children}
      </div>

      {/* Scrolling to top btn */}
      <a
        href='#'
        className={` ${scrolled ? 'visible' : 'invisible'} ${
          theme === 'dark' ? 'bg-slate-500 p-2 rounded-md text-white' : ''
        } z-10 flex flex-col items-center fixed right-4 bottom-4`}
      >
        <FaArrowAltCircleUp />
        Go to top
      </a>

      <Footer />
    </div>
  );
}

export default Layout;
