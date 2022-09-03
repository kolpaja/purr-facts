import { createContext, useState } from 'react';

const DarkModeContext = createContext();

function DarkModeContextProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const toggleDarkMode = () => setIsDark((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeContext, DarkModeContextProvider };
