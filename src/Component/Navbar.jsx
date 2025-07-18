import React, { useState, useEffect } from "react";
import { MdOutlinePermPhoneMsg, MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ContactModal from "./ContactModal";
import { RiMenu3Fill } from "react-icons/ri";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || document.documentElement.scrollTop;
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

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <>
      {/* Navbar Container */}
      <div
        className={`w-full fixed top-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="backdrop-blur-lg flex justify-between items-center py-4 w-full mx-auto px-6 md:px-12 bg-white/5 shadow-sm">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="h-10 w-10 flex items-center justify-center text-gray-700 hover:text-indigo-700 transition-colors"
            >
              <RiMenu3Fill size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[999999999]">
            {/* Background Overlay */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Content */}
            <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg transition-transform duration-300">
              <div className="p-4 flex justify-between items-center border-b">
                <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <MdClose size={24} />
                </button>
              </div>
              
              <div className="flex flex-col p-4 space-y-4 bg-white">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `p-3 rounded-lg font-medium ${
                      isActive
                        ? "bg-indigo-100 text-indigo-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `p-3 rounded-lg font-medium ${
                      isActive
                        ? "bg-indigo-100 text-indigo-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Me
                </NavLink>
                <NavLink
                  to="/project"
                  className={({ isActive }) =>
                    `p-3 rounded-lg font-medium ${
                      isActive
                        ? "bg-indigo-100 text-indigo-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </NavLink>
                
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="mt-4 text-sm bg-indigo-700 py-3 px-5 rounded-lg flex items-center justify-center gap-3 text-white hover:bg-indigo-800 transition-colors"
                >
                  Contact Now <MdOutlinePermPhoneMsg />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}