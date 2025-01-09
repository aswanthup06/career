import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center" >

    <div className="absolute z-50 hidden md:flex justify-between items-center py-5 w-full container mx-auto md:px-12">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1730941343980-5d81ce7c768b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Logo"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center">
        <div className="flex items-center gap-6 me-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-500 border-b-2 border-blue-500 pb-1"
                : "font-semibold text-gray-700 hover:text-blue-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-500 border-b-2 border-blue-500 pb-1"
                : "font-semibold text-gray-700 hover:text-blue-500"
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-500 border-b-2 border-blue-500 pb-1"
                : "font-semibold text-gray-700 hover:text-blue-500"
            }
          >
            Projects
          </NavLink>
        </div>

        {/* Call-to-Action Button */}
        <button className="shiny-cta">
          <span>Contact Now</span>
        </button>
      </div>
    </div>

</div>

  );
}
