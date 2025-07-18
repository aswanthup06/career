import React, { useState, useEffect } from "react";
import {
  MdOutlinePermPhoneMsg,
  MdClose,
  MdExpandMore,
  MdExpandLess,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import ContactModal from "./ContactModal";
import { RiMenu3Fill } from "react-icons/ri";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

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

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
      setProjectsDropdownOpen(false);
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
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-slate-50 p-2 rounded-lg">
                <img
                  className="h-5 w-5 rounded-full object-cover"
                  src="/asset/globe.svg"
                  alt="Logo"
                />
              </div>

              <div>
                <h1 className="text-indigo-500 text-sm font-bold">
                  Aswanth Up
                </h1>
                <h1 className="text-indigo-500 text-xs">Portfolio</h1>
              </div>
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

              {/* Projects Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                  className="flex items-center gap-1 font-semibold text-gray-700 hover:text-blue-500"
                >
                  Projects
                  {projectsDropdownOpen ? (
                    <MdExpandLess size={20} />
                  ) : (
                    <MdExpandMore size={20} />
                  )}
                </button>

                {projectsDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <NavLink
                      to="/project/casestudy"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? "bg-indigo-100 text-indigo-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                      onClick={() => setProjectsDropdownOpen(false)}
                    >
                      Main Projects
                    </NavLink>
                    <NavLink
                      to="/project/uiux"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? "bg-indigo-100 text-indigo-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                      onClick={() => setProjectsDropdownOpen(false)}
                    >
                      UI/UX Designs
                    </NavLink>

                    <NavLink
                      to="/project/vectors"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? "bg-indigo-100 text-indigo-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                      onClick={() => setProjectsDropdownOpen(false)}
                    >
                      illustrations
                    </NavLink>
                    <NavLink
                      to="/project/posters"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? "bg-indigo-100 text-indigo-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                      onClick={() => setProjectsDropdownOpen(false)}
                    >
                      Posters
                    </NavLink>
                  </div>
                )}
              </div>
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-10 w-10 flex items-center justify-center text-gray-700 hover:text-indigo-700 transition-colors"
            >
              {mobileMenuOpen ? (
                <MdClose size={24} />
              ) : (
                <RiMenu3Fill size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full bg-white shadow-lg">
            <div className="flex flex-col items-center py-4 px-6 space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `w-full text-center py-2 rounded-lg  ${
                    isActive
                      ? "font-bold text-indigo-700"
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
                  `w-full text-center py-2 rounded-lg  ${
                    isActive
                      ? "font-bold text-indigo-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                About Me
              </NavLink>

              {/* Mobile Projects Dropdown */}
              <div className="w-full">
                <button
                  onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                  className={`w-full text-center py-2 rounded-lg flex items-center justify-center gap-1 ${
                    projectsDropdownOpen
                      ? "font-bold text-indigo-700"
                      : "text-gray-700"
                  }`}
                >
                  Projects
                  {projectsDropdownOpen ? (
                    <MdExpandLess size={20} />
                  ) : (
                    <MdExpandMore size={20} />
                  )}
                </button>

                {projectsDropdownOpen && (
                  <div className="w-full mt-2 space-y-2 pl-4">
                    <NavLink
                      to="/project/casestudy"
                      className={({ isActive }) =>
                        `block w-full text-center py-2 rounded-lg text-sm ${
                          isActive
                            ? "font-bold text-indigo-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setProjectsDropdownOpen(false);
                      }}
                    >
                      Main Projects
                    </NavLink>
                    <NavLink
                      to="/project/uiux"
                      className={({ isActive }) =>
                        `block w-full text-center py-2 rounded-lg text-sm ${
                          isActive
                            ? "font-bold text-indigo-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setProjectsDropdownOpen(false);
                      }}
                    >
                      UI/UX Designs
                    </NavLink>
                    <NavLink
                      to="/project/vectors"
                      className={({ isActive }) =>
                        `block w-full text-center py-2 rounded-lg text-sm ${
                          isActive
                            ? "font-bold text-indigo-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setProjectsDropdownOpen(false);
                      }}
                    >
                      illustrations
                    </NavLink>
                    <NavLink
                      to="/project/posters"
                      className={({ isActive }) =>
                        `block w-full text-center py-2 rounded-lg text-sm ${
                          isActive
                            ? "font-bold text-indigo-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setProjectsDropdownOpen(false);
                      }}
                    >
                      Posters
                    </NavLink>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-sm bg-indigo-700 py-3 px-5 rounded-lg flex items-center justify-center gap-3 text-white transition-colors"
              >
                Contact Now <MdOutlinePermPhoneMsg />
              </button>
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
