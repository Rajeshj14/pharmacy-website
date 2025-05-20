import React from 'react';
import { Activity } from "lucide-react";

export default function CopyrightFooter() {
  return (
    <div className="w-full bg-teal-700 py-4 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Policy Links */}
        <div className="flex flex-wrap mb-2 md:mb-0">
          <a href="#" className="text-white hover:text-gray-200 text-sm mr-4 mb-1">Terms of Service</a>
          <span className="text-white mr-4 mb-1">|</span>
          <a href="#" className="text-white hover:text-gray-200 text-sm mr-4 mb-1">Privacy Policy</a>
          <span className="text-white mr-4 mb-1">|</span>
          <a href="#" className="text-white hover:text-gray-200 text-sm">Cookie Policy</a>
        </div>
        
        {/* Middle - Logo */}
        <div className="flex items-center text-white font-medium mb-2 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <div className="bg-white rounded-full p-1 mr-2">
            <Activity className="text-teal-700 h-5 w-5" />
          </div>
          <span className="text-xl">Pharamedic</span>
        </div>
        
        {/* Right Side - Copyright */}
        <div className="text-white text-sm">
          Copyright © 2025 Pharamedic by TBWBThemes
        </div>
      </div>
    </div>
  );
}