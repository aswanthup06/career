import React from "react";

export default function Skill() {
  const leftProgressData = [
    { label: "HTML", percentage: 90 },
    { label: "CSS", percentage: 89 },
    { label: "Javascript", percentage: 56 },
    { label: "React Js", percentage: 50 },
    { label: "Nest Js", percentage: 50 },
  ];

  const rightProgressData = [
    { label: "Figma", percentage: 80 },
    { label: "Adobe XD", percentage: 80 },
    { label: "Illustrator", percentage: 70 },
    { label: "After Effects", percentage: 60 },
    { label: "Photoshop", percentage: 60 },
  ];

  return (
    <div className="container overflow-hidden mb-20">
      <div className="text-center p-10">
        <h1 className="font-bold text-3xl text-zinc-800">Skills</h1>
        <h1 className="text-zinc-800">
          A UI (User Interface) Developer plays a pivotal
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32">
        <div className="space-y-6">
          <h1 className="text-zinc-800 font-bold">Technical Skills</h1>

          {leftProgressData.map((progress, index) => (
            <div key={index}>
              <div className="text-lg font-medium mb-2 text-zinc-800">
                {progress.label}
              </div>
              <div className="relative w-full h-2 bg-gray-300 overflow-hidden rounded-full">
                <div
                  className="h-full transition-all duration-500 rounded-full relative overflow-hidden"
                  style={{ width: `${progress.percentage}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 "></div>
                </div>
              </div>
            </div>
          ))}
        </div>

             <div className="space-y-6">
          <h1 className="text-zinc-800 font-bold">Creative Skills</h1>

          {rightProgressData.map((progress, index) => (
            <div key={index}>
              <div className="text-lg font-medium mb-2 text-zinc-800">
                {progress.label}
              </div>
              <div className="relative w-full h-2 bg-gray-300 overflow-hidden rounded-full">
                <div
                  className="h-full transition-all duration-500 rounded-full relative overflow-hidden"
                  style={{ width: `${progress.percentage}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 "></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
