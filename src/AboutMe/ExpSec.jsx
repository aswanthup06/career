import React from "react";
import { HiLocationMarker } from "react-icons/hi";

export default function ExpSec() {
  const startDate = new Date(2023, 5, 5); // June 5, 2023 (Months are 0-based in JS)
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

  // Experience data array
  const experiences = [
    {
      id: 1,
      startDate: "5 June 2023",
      endDate: todayIST,
      duration: `${formattedExperience} Years Experience`,
      position: "UI Developer",
      company: "Chaavie Solutions",
      location: "Kozhikode, Kerala",
      description: "A UI Developer (User Interface Developer) is responsible for creating the visual aspects of a website or application that users interact with. Their primary focus is on building clean, responsive, and visually appealing interfaces using HTML, CSS, JavaScript, and various front-end frameworks. UI developers work closely with UX designers to ensure that the design",
      image: "/asset/chaavie.webp",
      website: "https://www.chaaviesolutions.com/"
    },
    {
      id: 2,
      startDate: "10 January 2025",
      endDate: todayIST,
      duration: "Contract Through Chaavie",
      position: "UI Developer",
      company: "6solve IT Services Pvt Ltd",
      location: "Tirunelveli, Tamil Nadu",
      description: "A UI Developer (User Interface Developer) is responsible for creating the visual aspects of a website or application that users interact with. Their primary focus is on building clean, responsive, and visually appealing interfaces using HTML, CSS, JavaScript, and various front-end frameworks. UI developers work closely with UX designers to ensure that the design",
      image: "/asset/6solve.webp",
      website: "https://6solve.com/careers-in-6solve"
    },
    {
      id: 3,
      startDate: "5 June 2023",
      endDate: todayIST,
      duration: "4 Months Internship",
      position: "UI Developer",
      company: "Futura Labs",
      location: "Kozhikode, Kerala",
      description: "A UI Developer (User Interface Developer) is responsible for creating the visual aspects of a website or application that users interact with. Their primary focus is on building clean, responsive, and visually appealing interfaces using HTML, CSS, JavaScript, and various front-end frameworks. UI developers work closely with UX designers to ensure that the design",
      image: "/asset/futura.webp",
      website: "https://thefuturalabs.com/"
    },
    {
      id: 4,
      startDate: "5 June 2023",
      endDate: todayIST,
      duration: "BSc Computer Science",
      position: "Calicut University",
      company: "Hi-Tech Arts and Science College",
      location: "Kallachi, Kerala",
      description: "A UI Developer (User Interface Developer) is responsible for creating the visual aspects of a website or application that users interact with. Their primary focus is on building clean, responsive, and visually appealing interfaces using HTML, CSS, JavaScript, and various front-end frameworks. UI developers work closely with UX designers to ensure that the design",
      image: "/asset/hi.webp",
      website: "https://admission.uoc.ac.in/CollegeDetails?key=605686"
    }
  ];

  return (
    <div className="container overflow-hidden">
      <div className="text-center p-10">
        <h1 className="font-bold text-3xl text-zinc-800">My Journey</h1>
        <h1 className="text-zinc-800">
          A UI (User Interface) Developer plays a pivotal
        </h1>
      </div>

      <div>
        {experiences.map((exp) => (
          <div key={exp.id} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 text-slate-800 py-6 border-b">
            <div>
              <h1 className="font-bold text-sm text-indigo-600 font-sora">
                {exp.startDate} - {exp.endDate}
              </h1>
              <h1 className="text-slate-600 text-2xl font-light font-sora">
                {exp.duration}
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative h-52 md:w-[36rem] overflow-hidden rounded-md border group">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={exp.image}
                  alt={exp.company}
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h1>{exp.position}</h1>
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-2xl">{exp.company}</h1>
                    <div className="font-bold text-sm text-indigo-600 flex items-center gap-1">
                      <HiLocationMarker />
                      <h1>{exp.location}</h1>
                    </div>
                  </div>

                  <h1>{exp.description}</h1>
                </div>

                <div>
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-sm flex gap-1 hover:gap-2 duration-500 rounded-md bg-teal-600 text-gray-50 py-2 px-4">
                      <h1>Visit Website</h1> <i className="ri-arrow-right-up-long-fill"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}