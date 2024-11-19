import React, { useState } from 'react';
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // Controls the dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Change the language
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative">
      {/* Language icon */}
      <li 
        onClick={toggleDropdown} 
        className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-600 hover:opacity-100 hover:scale-125"
      >
        <IoLanguage />
      </li>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute mt-2 w-18 bg-black/70 shadow-lg rounded-md z-10">
          <li 
            onClick={() => changeLanguage('en')} 
            className="cursor-pointer px-4 py-2 opacity-70 text-3x1 font-medium hover:bg-gray-200/50"
          >
            EN
          </li>
          <li 
            onClick={() => changeLanguage('tr')} 
            className="cursor-pointer px-4 py-2 opacity-70 text-3x1 font-medium hover:bg-gray-200/50"
          >
            TR
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
