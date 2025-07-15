import React, { useState, useEffect } from "react";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.scrollY || document.documentElement.scrollTop;
      if (currentScrollPos < 10) {
        setVisible(true);
      } else {
        setVisible(prevScrollPos > currentScrollPos);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      {/* Navbar Container - moved outside the modal root */}
      <div
        className={`w-full fixed top-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="hidden backdrop-blur-lg md:flex justify-between items-center py-4 w-full container mx-auto md:px-12 bg-white/5 shadow-sm">
          {/* Logo Section */}

          <a href="/">
            <div className="flex items-center gap-2">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1730941343980-5d81ce7c768b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Logo"
              />
              <h1 className="text-gray-700">aswanth</h1>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center">
            <div className="flex items-center gap-6 me-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-blue-500 border-blue-500"
                    : "font-semibold text-gray-700 hover:text-blue-500"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-blue-500 border-blue-500"
                    : "font-semibold text-gray-700 hover:text-blue-500"
                }
              >
                About Me
              </NavLink>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-blue-500 border-blue-500"
                    : "font-semibold text-gray-700 hover:text-blue-500"
                }
              >
                Projects
              </NavLink>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-xs md:text-sm bg-indigo-700 py-3 px-5 rounded-lg flex items-center gap-3 text-white hover:bg-indigo-800 transition-colors"
            >
              Contact Now <MdOutlinePermPhoneMsg />
            </button>
          </div>
        </div>
      </div>

      {/* Modal - rendered at root level */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
