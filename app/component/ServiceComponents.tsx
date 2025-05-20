
"use client"

import React from 'react';
import { Camera, Pill, Heart, Activity, User, FileText, Store } from "lucide-react";

const HealthcareServicesGrid = () => {
  // Healthcare services data
  const services = [
    {
      id: 1,
      title: 'Generic Medicine',
      icon: <Pill size={32} className="text-[#47A2A3]" />,
      description: 'Dignissim libero donec accumsan cubilia consectetuer lobortis ornare si vehicula amet fames'
    },
    {
      id: 2,
      title: 'Health Checks & Screening',
      icon: <Heart size={32} className="text-[#47A2A3]" />,
      description: 'Dignissim libero donec accumsan cubilia consectetuer lobortis ornare si vehicula amet fames'
    },
    {
      id: 3,
      title: 'Vaccination',
      icon: <Activity size={32} className="text-[#47A2A3]" />,
      description: 'Dignissim libero donec accumsan cubilia consectetuer lobortis ornare si vehicula amet fames'
    },
    {
      id: 4,
      title: 'Medicine Consultation',
      icon: <User size={32} className="text-[#47A2A3]" />,
      description: 'Dignissim libero donec accumsan cubilia consectetuer lobortis ornare si vehicula amet fames'
    },
    {
      id: 5,
      title: 'Doctor Receipt',
      icon: <FileText size={32} className="text-[#47A2A3]" />,
      description: 'Dignissim libero donec accumsan cubilia consectetuer lobortis ornare si vehicula amet fames'
    },
    {
      id: 6,
      title: 'Pharmacy Store',
      icon: <Store size={32} className="text-[#47A2A3]" />,
      description: 'Dignissim libero donec accumsan cubilia consectetuer lobortis ornare si vehicula amet fames'
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <p className="text-[#47A2A3] font-medium text-sm sm:text-base mb-2 sm:mb-3">What we offer</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Live happily, Live healthily
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-6 sm:p-7 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-gray-100"
            >
              <div className="flex justify-center mb-4 sm:mb-5">
                <div className="p-3 bg-green-50 rounded-full">
                  {React.cloneElement(service.icon, { 
                    size: 28,
                    className: "text-[#47A2A3]" 
                  })}
                </div>
              </div>
              <h3 className="text-md sm:text-lg md:text-xl font-bold text-slate-800 mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base flex-grow">{service.description}</p>
              <div className="mt-4 pt-2 border-t border-gray-100">
                <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center transition-colors">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareServicesGrid;