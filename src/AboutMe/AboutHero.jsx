import { useState, useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaSquareBehance } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";

export default function AboutHero() {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div>

<div className='py-16 justify-center container mx-auto md:px-28  flex flex-col items-center'>

<div className='pt-12'>
      <img className='h-24 w-24 rounded-full object-cover' src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>

<h1 className='mt-8 text-green-700 font-bold'>Hi i'am Aswanth UP </h1>



<h1 className='font-semibold text-2xl  mb-5  md:text-3xl lg:text-5xl text-center w-[80%] text-gray-900'>
I’m Aswanth UP, a UI Designer and Developer creating seamless digital experiences with precision and creativity
    </h1>

    <h6 className='mt-6 w-5/6 font-medium text-slate-500 text-center'>A UI (User Interface) Developer plays a pivotal role in crafting the look and feel of digital applications, ensuring they are both visually appealing and highly functional.</h6>
 

  <div className="flex gap-5 mt-4">
  {/* Instagram */}
  <div className="relative group">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <AiFillInstagram className="text-3xl duration-500 hover:text-pink-700" />
    </a>
    <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 duration-300">
      Instagram
    </span>
  </div>

  {/* LinkedIn */}
  <div className="relative group">
    <a href="https://www.linkedin.com/in/aswanthup/" target="_blank" rel="noopener noreferrer">
      <TbBrandLinkedinFilled className="text-3xl duration-500 hover:text-blue-600" />
    </a>
    <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 duration-300">
      LinkedIn
    </span>
  </div>

  {/* Behance */}
  <div className="relative group">
    <a href="https://www.behance.net/ASWANTHUP" target="_blank" rel="noopener noreferrer">
      <FaSquareBehance className="text-[1.7rem] duration-500 hover:text-blue-600" />
    </a>
    <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 duration-300">
      Behance
    </span>
  </div>
</div>





<div className='flex gap-6 mt-8'>
<a href="/asset/1.webp" download>
    <button className='text-xs md:text-sm bg-indigo-700 py-3 px-5 rounded-lg flex items-center gap-3'>Download CV <HiOutlineDownload /></button>
</a>
    
    <button
    onClick={() => setIsOpen(true)}
    className="text-xs md:text-sm bg-slate-900 bg-opacity-5 hover:bg-opacity-10 py-3 px-5 rounded-lg duration-500 text-slate-900">
  Contact Now <i className="ri-arrow-right-up-long-fill"></i>
</button>
</div>



    

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)} // Click outside to close
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative transform transition-all scale-100"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black h-8 w-8 rounded-full bg-slate-200"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-bold text-gray-800">Get in Touch Now! 🎉</h2>
            <p className="mt-2 text-gray-700 text-sm font-semibold mb-4">
            I'm open to new projects and freelance opportunities! Whether you need a UI designer or front-end developer, let's collaborate and bring your ideas to life. Reach out today!
            </p>

            <div className="flex items-center justify-between">

            <div className="flex gap-4 items-center">

              <div className="h-14 w-14 text-emerald-800 rounded-full bg-slate-200 flex items-center justify-center">
                  <MdOutlinePhone className="w-6 h-6" />
              </div>

              <div>
                <h1 className="text-sm text-slate-800">Phone Number</h1>
                <h1 className="text-lg text-slate-800">+91 7559068970</h1>
              </div>
            </div>
            <button className="bg-emerald-700 h-9 text-white px-6 rounded-md">Call Now</button>
            </div>

            <div className="flex items-center justify-between py-6">

<div className="flex gap-4 items-center">

  <div className="h-14 w-14 text-emerald-800 rounded-full bg-slate-200 flex items-center justify-center">
      <MdOutlinePhone className="w-6 h-6" />
  </div>

  <div>
    <h1 className="text-sm text-slate-800">Phone Number</h1>
    <h1 className="text-lg text-slate-800">aswanthup06@gmail.com</h1>
  </div>
</div>
<button className="bg-emerald-700 h-9 text-white px-6 rounded-md">Call Now</button>
</div>

<div className="flex items-center justify-between">

<div className="flex gap-4 items-center">

  <div className="h-14 w-14 text-emerald-800 rounded-full bg-slate-200 flex items-center justify-center">
      <MdOutlinePhone className="w-6 h-6" />
  </div>

  <div>
    <h1 className="text-sm text-slate-800">Phone Number</h1>
    <h1 className="text-lg text-slate-800">+91 7559068970</h1>
  </div>
</div>
<button className="bg-emerald-700 h-9 text-white px-6 rounded-md">Call Now</button>
</div>
            {/* Close Button */}
            {/* <button
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Close
            </button> */}
          </div>
        </div>
      )}
 








</div>
    </div>
  )
}
