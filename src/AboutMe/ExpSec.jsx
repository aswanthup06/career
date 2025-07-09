import React from "react";
import { HiLocationMarker } from "react-icons/hi";

export default function ExpSec() {
  const startDate = new Date(2023, 5, 5); // June 5, 2024 (Months are 0-based in JS)
  const today = new Date();

  // Calculate the total difference in days
  const totalDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

  // Convert days to years and months
  const years = Math.floor(totalDays / 365);
  const remainingDays = totalDays % 365;
  const months = Math.round((remainingDays / 365) * 12);

  // Format the experience in "years.months" format
  const formattedExperience = `${years}.${months}`;

  // Format today's date in IST
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Kolkata",
  };
  const todayIST = today.toLocaleDateString("en-IN", options);

  return (
    <div className="container px-4 md:px-28 overflow-hidden mx-auto">
      <div className="text-center p-10">
        <h1 className="font-bold text-3xl text-zinc-800">My Journey</h1>
        <h1 className="text-zinc-800">
          A UI (User Interface) Developer plays a pivotal
        </h1>
      </div>

      <div>
        <div className="grid grid-cols-[1fr_2fr] gap-4 text-slate-800 py-6  border-b">
          <div>
            <h1 className="font-bold text-sm text-indigo-600">
              5 June 2023 - {todayIST}
            </h1>
            <h1 className="text-slate-800 text-2xl">
              {formattedExperience} Years Experience
            </h1>
          </div>

          <div className="flex gap-6">
            <img
              className="h-52 w-36 object-cover rounded-md"
              src="/asset/chaavie.webp"
              alt=""
            />

            <div className="flex flex-col justify-between">
              <div>
                <h1>Ui Developer </h1>
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-2xl">Chaavie Solutions</h1>
                  <div className="font-bold text-sm text-indigo-600 flex items-center gap-1">
                    <HiLocationMarker />
                    <h1> Kozhikode,Kerala</h1>
                  </div>
                </div>

                <h1>
                  A UI Developer (User Interface Developer) is responsible for
                  creating the visual aspects of a website or application that
                  users interact with. Their primary focus is on building clean,
                  responsive, and visually appealing interfaces using HTML, CSS,
                  JavaScript, and various front-end frameworks. UI developers
                  work closely with UX designers to ensure that the design
                </h1>
              </div>

              <div>
                <a
                  href="https://www.chaaviesolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-sm flex gap-1 hover:gap-2 duration-500 rounded-md bg-teal-600 text-gray-50 py-2 px-4">
                   <h1>Visit Website</h1>  <i className="ri-arrow-right-up-long-fill"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_2fr] gap-4 text-slate-800 py-6  border-b">
          <div>
            <h1 className="font-bold text-sm text-indigo-600">
              10 January 2025 - {todayIST}
            </h1>
            <h1 className="text-slate-800 text-2xl">
              Contract Through Chaavie
            </h1>
          </div>

          <div className="flex gap-6">
            <img
              className="h-52 w-36 object-cover rounded-md"
              src="/asset/6solve.webp"
              alt=""
            />

            <div className="flex flex-col justify-between">
              <div>
                <h1>Ui Developer </h1>
               
<div className="flex justify-between items-center">
                  <h1 className="font-bold text-2xl">6solve IT Services Pvt Ltd</h1>
                  <div className="font-bold text-sm text-indigo-600 flex items-center gap-1">
                    <HiLocationMarker />
                    <h1> Tirunelveli,Tamil Nadu</h1>
                  </div>
                </div>





                <h1>
                  A UI Developer (User Interface Developer) is responsible for
                  creating the visual aspects of a website or application that
                  users interact with. Their primary focus is on building clean,
                  responsive, and visually appealing interfaces using HTML, CSS,
                  JavaScript, and various front-end frameworks. UI developers
                  work closely with UX designers to ensure that the design
                </h1>
              </div>

              <div>
                <a
                  href="https://6solve.com/careers-in-6solve"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   <button className="text-sm flex gap-1 hover:gap-2 duration-500 rounded-md bg-teal-600 text-gray-50 py-2 px-4">
                   <h1>Visit Website</h1>  <i className="ri-arrow-right-up-long-fill"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_2fr] gap-4 text-slate-800 py-6  border-b">
          <div>
            <h1 className="text-slate-800">5 June 2024 - {todayIST}</h1>
            <h1 className="text-slate-800">
              {formattedExperience} Years Experience
            </h1>
          </div>

          <div className="flex gap-6">
            <img
              className="h-52 w-36 object-cover rounded-md"
              src="https://images.unsplash.com/photo-1736192252876-e086cd9fa39b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />

            <div className="flex flex-col justify-between">
              <div>
                <h1>Ui Developer </h1>
                <h1 className="font-bold text-2xl">Chaavie Solutions</h1>
                <h1>
                  A UI Developer (User Interface Developer) is responsible for
                  creating the visual aspects of a website or application that
                  users interact with. Their primary focus is on building clean,
                  responsive, and visually appealing interfaces using HTML, CSS,
                  JavaScript, and various front-end frameworks. UI developers
                  work closely with UX designers to ensure that the design
                </h1>
              </div>

              <div>
                <button className="text-sm rounded-md bg-teal-600 text-gray-50 py-2 px-4">
                  Visit Website
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_2fr] gap-4 text-slate-800 py-6  border-b">
          <div>
            <h1 className="text-slate-800">5 June 2024 - {todayIST}</h1>
            <h1 className="text-slate-800">
              {formattedExperience} Years Experience
            </h1>
          </div>

          <div className="flex gap-6">
            <img
              className="h-52 w-36 object-cover"
              src="https://images.unsplash.com/photo-1736192252876-e086cd9fa39b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />

            <div>
              <h1>Ui Developer </h1>
              <h1>Chaavie Solutions</h1>
              <h1>
                A UI Developer (User Interface Developer) is responsible for
                creating the visual aspects of a website or application that
                users interact with. Their primary focus is on building clean,
                responsive, and visually appealing interfaces using HTML, CSS,
                JavaScript, and various front-end frameworks. UI developers work
                closely with UX designers to ensure that the design
              </h1>
              <div>
                <button>Visit Website</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
