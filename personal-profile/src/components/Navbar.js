import React, { useState } from "react";
import { Instagram, Linkedin, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 relative">
        {/* === Kiri: Logo === */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px]">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-2 border-white"
            />
          </div>
          <h1 className="font-semibold text-gray-800 text-lg">
            Nahdah Alifah Fitriani
          </h1>
        </div>

        {/* === Tengah: Menu (desktop only) === */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8 text-gray-600 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-blue-600 transition">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* === Kanan: Icons (desktop) & Hamburger (mobile) === */}
        <div className="flex items-center space-x-4 text-gray-600">
          {/* Social icons hanya tampil di desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Instagram className="w-5 h-5 hover:text-pink-600 cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
            <Mail className="w-5 h-5 hover:text-purple-600 cursor-pointer" />
          </div>

          {/* Hamburger hanya tampil di mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* === Dropdown Mobile === */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setIsOpen(false)}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>

            <div className="flex space-x-6 pt-2">
              <Instagram className="w-5 h-5 hover:text-pink-600 cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
              <Mail className="w-5 h-5 hover:text-purple-600 cursor-pointer" />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
