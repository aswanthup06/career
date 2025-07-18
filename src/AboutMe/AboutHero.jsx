import { useState, useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaSquareBehance } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";
import ContactModal from "../Component/ContactModal";

export default function AboutHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="py-16 justify-center container mx-auto flex flex-col items-center">
        <div className="pt-12">
          <img
            className="h-24 w-24 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <h1 className="mt-8 text-green-700 font-bold">Hi i'am Aswanth UP </h1>

        <h1 className="font-semibold text-2xl  mb-5  md:text-3xl lg:text-5xl text-center w-[80%] text-gray-900">
          I’m Aswanth UP, a UI Designer and Developer creating seamless digital
          experiences with precision and creativity
        </h1>

        <h6 className="mt-6 w-5/6 font-medium text-slate-500 text-center">
          A UI (User Interface) Developer plays a pivotal role in crafting the
          look and feel of digital applications, ensuring they are both visually
          appealing and highly functional.
        </h6>

        <div className="flex gap-4 mt-4">
          {/* Instagram */}

          {/* LinkedIn */}

          <div className="border  hover:text-blue-400 text-blue-600 hover:border-blue-400 border-blue-600 duration-500 h-10 w-10 rounded-full flex  justify-center items-center">
            <div className="relative group">
              <a
                href="https://www.linkedin.com/in/aswanthup/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandLinkedinFilled className="text-2xl" />
              </a>
              <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 duration-300">
                LinkedIn
              </span>
            </div>
          </div>

          <div className="border  hover:text-pink-500 text-pink-700 hover:border-pink-300 border-pink-500 duration-500 h-10 w-10 rounded-full flex  justify-center items-center">
            <div className="relative group">
              <a
                href="https://www.instagram.com/awnh_up/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="text-2xl " />
              </a>
              <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 duration-300">
                Instagram
              </span>
            </div>
          </div>

          {/* Behance */}
          <div className="border hover:text-blue-400 text-blue-600 hover:border-blue-400 border-blue-600 duration-500 h-10 w-10 rounded-full flex  justify-center items-center">
            <div className="relative group">
              <a
                href="https://www.behance.net/ASWANTHUP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareBehance className="text-[1.4rem]" />
              </a>
              <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 duration-300">
                Behance
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-6 mt-8">
          <a href="/asset/1.webp" download>
            <button className="text-xs md:text-sm bg-indigo-700 py-3 px-5 rounded-lg flex items-center gap-3">
              Download CV <HiOutlineDownload />
            </button>
          </a>

          <button
            onClick={() => setIsModalOpen(true)}
            className="text-xs md:text-sm bg-slate-900 bg-opacity-5 hover:bg-opacity-10 py-3 px-5 rounded-lg duration-500 text-slate-900"
          >
            Contact Now <i className="ri-arrow-right-up-long-fill"></i>
          </button>
        </div>

        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}
