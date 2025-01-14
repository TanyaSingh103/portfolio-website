import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline'; 

const ThemeSwitcher: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Default to dark mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  
  return (
    <button
      type="button"
      onClick={toggleDarkMode} 
      className="border-transparent text-center p-2 px-1 transition-all duration-300 ease-in-out"
    >
      {isDarkMode ? (
        <SunIcon className="h-8 w-8 text-white" /> 
      ) : (
        <MoonIcon className="h-8 w-8 text-black" /> 
      )}
    </button>
  );
};

export default ThemeSwitcher;
