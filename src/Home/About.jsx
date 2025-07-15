import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaSquareBehance } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";

export default function About() {
  return (

<div className=''>
<div className='text-center p-10'>
    <h1 className='font-bold text-3xl '>About Me</h1>
    <h1>A UI (User Interface) Developer plays a pivotal</h1>
</div>


<div className="container m-auto px-6 md:px-20 lg:px-28 grid gap-8 grid-cols-1 md:grid-cols-[1fr_2fr] md:py-20 ">
  <div className=" flex items-center flex-col">
  <div>
      <img className='h-24 w-24 rounded-full object-cover' src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  </div>
  <h1 className='mt-6 font-bold'>Aswanth Up</h1>
  <h1 className='text-emerald-500/80'>Kozhikode - Kerala</h1>
  <h6 className='mt-6 w-5/6 font-medium text-slate-500 text-center'>A UI (User Interface) Developer plays a pivotal role in crafting the look and feel of digital applications, ensuring they are both visually appealing and highly functional.</h6>
 

  <div className="flex gap-4 mt-4">
  {/* Instagram */}
 
  <div className='border-2 text-white/55  hover:text-pink-700 hover:border-pink-700 duration-500 border-white/10 h-10 w-10 rounded-full flex  justify-center items-center'>

  <div className="relative group">
    <a href="https://www.instagram.com/awnh_up/" target="_blank" rel="noopener noreferrer">
      <AiFillInstagram className="text-2xl " />
    </a>
    <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 duration-300">
      Instagram
    </span>
  </div>
  </div>
  {/* LinkedIn */}

  <div className='border-2 text-white/55  hover:text-blue-600 hover:border-blue-600 duration-500 border-white/10 h-10 w-10 rounded-full flex  justify-center items-center'>

 
  <div className="relative group">
    <a href="https://www.linkedin.com/in/aswanthup/" target="_blank" rel="noopener noreferrer">
      <TbBrandLinkedinFilled className="text-2xl" />
    </a>
    <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 duration-300">
      LinkedIn
    </span>
  </div>

  </div>

  {/* Behance */}
  <div className='border-2 text-white/55  hover:text-blue-600 hover:border-blue-600 duration-500 border-white/10 h-10 w-10 rounded-full flex  justify-center items-center'>

  <div className="relative group">
    <a href="https://www.behance.net/ASWANTHUP" target="_blank" rel="noopener noreferrer">
      <FaSquareBehance className="text-[1.4rem]" />
    </a>
    <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 duration-300">
      Behance
    </span>
  </div>
</div>
</div>
  </div>
  <div className=" ">
  <h1 className='text-indigo-600 font-bold mb-1 md:mb-3'>UI/UX Developer</h1>
    <h1 className='text-2xl   md:text-3xl lg:text-4xl'>
    I’m Aswanth UP, a UI Designer and Developer creating seamless digital experiences with precision and creativity
    </h1>
   
<div className='flex flex-col md:flex-row gap-6 py-8'>

  <div className='flex items-center gap-2'>
    <div className='blink h-3 w-3 bg-green-600 rounded-full'></div>
    <h1 className='opacity-65 '>Available for Freelancing</h1>
  </div>

  <div className='flex items-center gap-2'>
    <div className='blink h-3 w-3 bg-green-600 rounded-full'></div>
    <h1 className='opacity-65 '>Available for Full Time Job</h1>
  </div>

</div>

<div className='flex gap-6'>
    <button className='text-xs md:text-sm bg-indigo-700 py-3 px-5 rounded-lg flex items-center gap-3'>Download CV <HiOutlineDownload /></button>
    <a href="/about" className="text-xs md:text-sm bg-indigo-300 bg-opacity-5 hover:bg-opacity-10 py-3 px-5 rounded-lg duration-500">
  Explore More <i className="ri-arrow-right-up-long-fill"></i>
</a>
</div>

  </div>
</div>



</div>
  )
}
