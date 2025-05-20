// app/components/Header.tsx
'use client';

import React, { useState } from 'react';
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-10 w-10 bg-[#47A2A3] rounded-full flex items-center justify-center mr-2">
            <div className="text-white font-bold text-xl">+</div>
          </div>
          <span className="text-navy-800 text-xl font-bold">medipharma</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-[#47A2A3] hover:text-green-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-[#47A2A3]">About Us</a>
          <a href="#" className="text-gray-700 hover:text-[#47A2A3]">Service</a>
          <a href="#" className="text-gray-700 hover:text-[#47A2A3]">Contact us</a>
          <a href="#" className="text-gray-700 hover:text-[#47A2A3]">Page</a>
          <button className="bg-[#47A2A3] hover:bg-[#3a8a8b] text-white px-6 py-2 rounded-md font-medium">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a href="#" className="text-[#47A2A3] py-2 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-700 py-2 hover:text-[#47A2A3]">About Us</a>
            <a href="#" className="text-gray-700 py-2 hover:text-[#47A2A3]">Service</a>
            <a href="#" className="text-gray-700 py-2 hover:text-[#47A2A3]">Contact us</a>
            <a href="#" className="text-gray-700 py-2 hover:text-[#47A2A3]">Page</a>
            <button className="bg-green-600 hover:bg-[#47A2A3] text-white w-full py-2 rounded-md font-medium">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
