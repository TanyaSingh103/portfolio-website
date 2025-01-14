import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

const ThemeSwitcher: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    } else {
      // Default to dark mode
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
    setIsInitialized(true); // Prevent showing the wrong icon before the state is initialized
  }, []);

  useEffect(() => {
    if (isInitialized) {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDarkMode, isInitialized]);

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="border-transparent text-center p-2 px-1 transition-all duration-300 ease-in-out"
    >
      {isDarkMode ? (
        <SunIcon className="h-8 w-8 text-white" /> // Sun icon for light mode
      ) : (
        <MoonIcon className="h-8 w-8 text-black" /> // Moon icon for dark mode
      )}
    </button>
  );
};

export default ThemeSwitcher;