'use client';

import Link from "next/link"; 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from "react";
import menus from "../data/menuData";
import LanguageSelect from "./SelectOption";
import DropdownMenu from "./Dropdown";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false); // Keep track of which dropdown is open

  const handleMouseEnter = (index) => {
    setDropdownOpen(index); // Open specific dropdown by index
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null); // Close the dropdown
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    // Cleanup function to reset the overflow style
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const handleMenuClick = (menu, index) => {
    // Check if the clicked menu has a secondary menu
    if (menu.secondaryMenu) {
      // Toggle the secondary menu open/close
      setSecondaryMenuOpen(secondaryMenuOpen === index ? null : index);
    } else {
      // Navigate to the link if no secondary menu
      setMenuOpen(false); // Close the mobile menu
      window.location.href = menu.link; // Use window.location for navigation
    }
  }

  return (
    <>
      <div className="absolute flex items-center justify-between w-full h-20 gap-6 px-8 overflow-hidden md:relative md:px-6 lg:px-10">
        <div className="relative z-10 flex flex-row items-center justify-between w-full text-center text-white ">
          <div className="flex items-center">
            <img src="/images/webstudionepal.png" className="h-10 cursor-pointer w-18 md:w-20 md:h-10 lg:w-28 lg:h-14" alt="logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:justify-center md:flex md:flex-grow">
            <div className="flex items-center justify-center gap-x-6 md:gap-x-2 lg:gap-x-3">
              {menus.map((menu, index) => (
                <div 
                  key={index}
                  className="relative"
                  onMouseEnter={menu.secondaryMenu ? () => handleMouseEnter(index) : null}
                  onMouseLeave={menu.secondaryMenu ? handleMouseLeave : null}
                >
                  {/* Render link */}
                  <Link href={menu.link} className="flex items-center justify-center cursor-pointer">
                    <span className="flex items-center justify-center">
                      <span className="ml-1 text-xl scale-90 cursor-pointer white font- md:text-sm lg:text-lg">{menu.title}</span>
                      <span className="-ml-1">{menu.secondIcon}</span>
                    </span>
                  </Link>

                  {/* Render dropdown if present and open */}
                  {menu.secondaryMenu && dropdownOpen === index && (
                    <DropdownMenu items={menu.secondaryMenu}/>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Login and Language Select */}
          <div className="items-center justify-center hidden gap-4 md:flex md:gap-1">
            <button className="w-20 h-10 pb-1 text-lg font-semibold bg-transparent border-2 duration-300 ease-in-out lg:w-20 lg:h-10 lg:text-base text-white rounded-lg shadow-xl hover:bg-gradient-to-r from-[#F5365C] to-[#FB6340] hover:text-white hover:scale-105 hover:shadow-xl md:w-14 md:h-9 md:text-xs">Login</button>
            <LanguageSelect/>
          </div>

          {/* Mobile Menu */}
          <div className="z-50 flex md:hidden">
            {menuOpen ? (
              <CloseIcon className="opacity-0"/>
            ) : (
              <MenuIcon className="mr-6 text-white scale-150 cursor-pointer sm:size-7 size-6" onClick={() => setMenuOpen(!menuOpen)} />
            )}
          </div>
        </div>
      </div>

      {/* Small Screen Menu */}
      <div className={`fixed inset-y-0 left-0 z-40 w-4/5 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out bg-white shadow-lg md:hidden`}>
        <div className="relative flex flex-col items-center w-auto h-auto pt-6">
          <CloseIcon className="absolute text-gray-700 scale-150 cursor-pointer sm:size-7 size-6 top-4 right-4" onClick={() => setMenuOpen(false)} />
          <div className="flex flex-col items-center w-full h-full max-h-[75vh] overflow-y-auto mt-10 gap-y-1">
            {menus.map((menu, index) => (
              <div key={index} className={`flex flex-col items-start justify-center w-full p-4 pl-0 text-xl font-semibold scale-90 rounded-xl hover:text-primary hover:bg-gray-200 `} onClick={() => handleMenuClick(menu,index)} >
                <div className="flex flex-row pl-[8%] justify-between items-center w-full">
                  <div className="flex flex-row gap-4">
                    <span className="mr-2">{menu.icon}</span>
                    <span>{menu.title}</span>
                  </div>
                  <span className="">{menu.secondIcon}</span>
                </div>

                {secondaryMenuOpen === index && menu.secondaryMenu && (
                  <div className="flex flex-col w-full pt-4 pl-4">
                    {menu.secondaryMenu.map((subMenu, subIndex) => (
                      <Link key={subIndex} href={subMenu.link} className="flex items-center w-full p-3 pl-8 text-lg font-semibold text-black scale-90 rounded-xl hover:text-primary hover:bg-gray-200">
                        {subMenu.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button className="w-32 h-12 pb-1 mt-3 text-lg text-white duration-500 rounded-lg bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:ease-in-out hover:transition-transform hover:shadow-xl">Login</button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-20 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
}

export default Navbar;
