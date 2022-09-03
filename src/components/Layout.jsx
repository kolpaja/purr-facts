import React, { useContext, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { DarkModeContext } from '../context/themeContext';

function Layout({ children }) {
  const { isDark, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {}, [isDark]);

  return (
    <div
      id='top'
      className={`${
        isDark ? 'bg-slate-700 text-white' : 'bg-white'
      } flex flex-col relative`}
    >
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <div className='py-10 px-8 md:px-20 lg:px-30 min-h-screen'>
        {children}
      </div>
      <a href='#top' className='goToTop absolute right-4 bottom-4'>
        Go to top
      </a>
      <Footer />
    </div>
  );
}

export default Layout;
