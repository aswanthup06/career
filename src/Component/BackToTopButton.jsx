import React, { useState, useEffect } from "react";
import { BiSolidArrowToTop } from "react-icons/bi";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed text-white flex items-center justify-center bottom-5 right-5 h-12 w-12 rounded-full shadow-lg  transition duration-300  bg-indigo-700"
        >
        <BiSolidArrowToTop />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
