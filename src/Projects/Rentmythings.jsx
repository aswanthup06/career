import React from "react";
import BackToTopButton from "../Component/BackToTopButton";

const Sub = [
  {
    id: 1,
    title: "My Responsibility",
    sub: "UI&UX Design",
  },
  {
    id: 2,
    title: "Industry",
    sub: "Health Care",
  },
  {
    id: 2,
    title: "Platform",
    sub: "IOS & Android",
  },
  {
    id: 2,
    title: "Year",
    sub: "2024",
  },
];

export default function Rentmythings() {
  return (
    <div className="text-black p-36 h-screen">
      <BackToTopButton />
      <div className="text-center flex justify-center flex-col mb-14">
        <h1 className="text-5xl mb-6 font-bold text-slate-800">
          Discover Rent My Things – The Next-Gen App for
        </h1>
        <h1 className="text-5xl font-light text-slate-800/60">
          Easy & Secure Product Rentals
        </h1>
      </div>
      <div className="flex">
        <div className="flex-1 pt-40">
          <div className="flex flex-col gap-6">
            {Sub.map((su) => (
              <div key={su.id}>
                <h1 className="text-red-600">{su.title}</h1>
                <h1>{su.sub}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          <img className="z-10" src="/asset/new2.png" alt="" />

          <div className="absolute left-[-100px] h-96 w-96 bg-slate-400 rounded-full z-0"></div>
        </div>
        <div className="flex-1 pt-40">
          <h1 className="text-4xl mb-4">Rent My Things</h1>

          <p>
            Rent My Things is an innovative peer-to-peer rental platform
            designed to make borrowing and lending everyday products effortless.
            Whether you need tools, electronics, fashion, or outdoor gear, our
            app connects users to rent items nearby—saving money and reducing
            waste. With a sleek, user-friendly interface, secure payment
            options, and a trusted review system, Rent My Things brings
            convenience and sustainability to the sharing economy. Join the
            future of rentals today
          </p>
        </div>
      </div>
      Rentmythings
    </div>
  );
}
