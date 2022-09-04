import { createContext, useState } from 'react';

const DarkModeContext = createContext();

function DarkModeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || 'light'
  );
  const toggleDarkMode = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', JSON.stringify('dark'));
    } else if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', JSON.stringify('light'));
    }
  };

  return (
    <DarkModeContext.Provider value={{ theme, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeContext, DarkModeContextProvider };
