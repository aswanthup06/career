import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ContactModal from "../Component/ContactModal";

export default function WebAd() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const backgroundColors = {
    "/": "bg-indigo-800/10",
    "/about": "bg-slate-500/20",
  };

  const roundColors = {
    "/": "border-white/10",
    "/about": "border-black/10",
  };

  const currentBgColor =
    backgroundColors[location.pathname] || "bg-gray-800/10";
  const roundColor = roundColors[location.pathname] || "bg-gray-800/10";

  return (
    <div className="container  relative">
      {/* Main content */}
      <div
        className={`h-80 rounded-2xl relative ${currentBgColor} backdrop-blur-sm flex items-center justify-center overflow-hidden`}
      >
        {/* Your circular elements */}
        <div className="absolute">
          <div
            className={`relative h-64 w-64  md:h-96 md:w-96 border ${roundColor} rounded-full`}
          >
            <img
              className="scale-90 absolute border-8 border-white/10 md:top-12 md:left-1 rounded-full h-16 w-16 object-cover opacity-60"
              src="https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>

        <div className="absolute">
          <div
            className={`relative h-[36rem] w-[38rem] border ${roundColor} rounded-full`}
          >
            <img
              className="absolute border-8 border-white/10 top-[22rem] right-[-1.1rem] rounded-full h-16 w-16 object-cover"
              src="/asset/1.webp"
              alt=""
            />
            <img
              className="absolute border-8 border-white/10 top-80 left-[-1.6rem] rounded-full h-16 w-16 object-cover"
              src="/asset/2.webp"
              alt=""
            />
          </div>
        </div>

        <div className="absolute opacity-70">
          <div
            className={`relative h-[52rem] w-[52rem] border ${roundColor} rounded-full`}
          >
            <img
              className="absolute border-8 border-white/10 top-[22rem] right-[-2rem] rounded-full h-16 w-16 object-cover"
              src="https://images.unsplash.com/photo-1514626585111-9aa86183ac98?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="absolute border-8 border-white/10 top-80 left-[-1.6rem] rounded-full h-16 w-16 object-cover"
              src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>

        <div className="absolute flex flex-col items-center">
          <h1 className="text-2xl text-white/75 font-semibold">
            Let's Create Something
          </h1>
          <h1 className="text-2xl text-white/75 font-light">
            Amazing Together!
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 h-12 w-36 bg-white text-black rounded-md hover:bg-white/90 transition-colors"
          >
            Contact Now
          </button>
        </div>
      </div>

      {/* Modal - moved outside the main container */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
