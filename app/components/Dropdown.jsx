import React from 'react';

const DropdownMenu = ({ items, className }) => {
  return (
    <div className={`fixed z-30 py-2 pr-20 mt-2 bg-[#C293CB] rounded-lg shadow-lg ${className}`}>
      <div className="absolute -top-2 left-[17%] transform -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#C293CB]"></div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="block px-3 py-1 text-sm text-left text-white scale-100 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
