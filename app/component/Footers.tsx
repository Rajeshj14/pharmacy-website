import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, Clock, Plus } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full bg-gray-100 py-13 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* About Pharamedic Column */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-gray-800">About Pharamedic</h3>
            <p className="text-sm text-gray-600 mb-4">
              Sagittis ligula fermentum et orci suscipit class letius massa. Lorem ornare massa phasellus cubilia consectetur integer volutpat.
            </p>
            <div className="flex items-start">
              <Clock className="text-teal-600 mr-2 h-5 w-5 mt-1" />
              <div>
                <p className="font-bold text-sm text-gray-800">Monday-Saturday</p>
                <p className="text-sm text-gray-600">08:00 am - 09:00 pm</p>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Quick Links</h3>
            <ul>
              {[
                'About Us',
                'Leadership',
                'Services',
                'Careers',
                'Legal Notice'
              ].map((item) => (
                <li key={item} className="flex items-center mb-2">
                  <Plus className="text-teal-600 mr-2 h-4 w-4" />
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support Column */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Help & Support</h3>
            <ul>
              {[
                'Help Center',
                'Ticket Support',
                'Locate Us',
                'Contact Us',
                'Faq'
              ].map((item) => (
                <li key={item} className="flex items-center mb-2">
                  <Plus className="text-teal-600 mr-2 h-4 w-4" />
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us Column */}
          <div className="w-full md:w-1/4 px-4">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Reach Us</h3>
            <ul className="mb-4">
              <li className="flex items-center mb-2">
                <MapPin className="text-teal-600 mr-2 h-5 w-5" />
                <span className="text-sm text-gray-600">789 Oak St, Smalltown, TX 23456</span>
              </li>
              <li className="flex items-center mb-2">
                <Mail className="text-teal-600 mr-2 h-5 w-5" />
                <span className="text-sm text-gray-600">info@yourdomain.com</span>
              </li>
              <li className="flex items-center mb-4">
                <Phone className="text-teal-600 mr-2 h-5 w-5" />
                <span className="text-sm text-gray-600">(555) 987-6543</span>
              </li>
            </ul>
            <div className="flex space-x-2">
              <button className="bg-teal-600 p-2 rounded text-white hover:bg-teal-700">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-teal-600 p-2 rounded text-white hover:bg-teal-700">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="bg-teal-600 p-2 rounded text-white hover:bg-teal-700">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="bg-teal-600 p-2 rounded text-white hover:bg-teal-700">
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}