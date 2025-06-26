import React, { useState, useEffect } from 'react';

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex justify-end items-center min-h-[10vh] p-4 bg-[#cbd5d9] dark:bg-gray-800">
      <div
        onClick={() => setDarkMode(!darkMode)}
        className={`w-14 h-8 flex items-center p-1 rounded-full cursor-pointer transition-colors duration-300 ${darkMode ? 'bg-gray-300' : 'bg-black'}`}
      >
        <div
          className={`w-6 h-6 bg-[#cbd5d9] dark:bg-gray-800 rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : ''}`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleButton;
