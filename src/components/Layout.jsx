import React, { useContext, useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import { DarkModeContext } from '../context/themeContext';

function Layout({ children }) {
  const { theme, toggleDarkMode } = useContext(DarkModeContext);
  const [scrolled, setScrolled] = useState(false);

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
  }, [theme, scrolled]);

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

      <div className='px-8 md:px-20 lg:px-30 min-h-screen'>{children}</div>

      <Footer />

      {/* Scrolling to top btn */}
      <a
        href='#'
        className={` ${
          scrolled ? 'visible' : 'invisible'
        } z-10 flex flex-col items-center fixed right-4 bottom-8`}
      >
        <FaArrowAltCircleUp />
        Go to top
      </a>
    </div>
  );
}

export default Layout;
