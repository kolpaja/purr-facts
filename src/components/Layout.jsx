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
      } flex flex-col`}
    >
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <div className='px-8 md:px-20 lg:px-30 min-h-screen'>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
