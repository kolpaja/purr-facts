import React, { useContext, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { DarkModeContext } from '../context/themeContext';

function Layout({ children }) {
  const { theme, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {}, [theme]);

  return (
    <div
      id='top'
      className={`${
        theme === 'dark' ? 'bg-slate-700 text-white' : 'bg-white'
      } flex flex-col relative`}
    >
      <Header theme={theme} toggleDarkMode={toggleDarkMode} />
      <div className='px-8 md:px-20 lg:px-30 min-h-screen'>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
