
import { MdArrowOutward } from "react-icons/md";

const caseStudies = [
  {
    id: 1,
    title: "DR ONE",
    href: "/project/drone",
    image: "/asset/dr.webp",
    tags: ["UI Design & Development"],
    categories: [
      { label: "Dashboard", bgColor: "bg-red-500" },
      { label: "App", bgColor: "backdrop-blur-sm bg-blue-500"},
      { label: "Website", bgColor: "backdrop-blur-sm bg-black/30" }
    ],
    description: "The outer div's height is effectively zero (because it has no content in normal flow) The padding-top pushes the height to match the width (creating the square) The absolute positioned inner div then fills that padded space."
  },
  {
    id: 2,
    title: "NVOCC",
    href: "/project/nvocc",
    image: "/asset/ship.webp",
    tags: ["UI Development"],
    categories: [
      { label: "Dashboard", bgColor: "bg-red-500" },
      { label: "Report", bgColor: "backdrop-blur-sm bg-black/30" }
    ],
    description: "The outer div's height is effectively zero (because it has no content in normal flow) The padding-top pushes the height to match the width (creating the square) The absolute positioned inner div then fills that padded space."
  },
  {
    id: 3,
    title: "E - Commerce",
    href: "/project/ecommerce",
    image: "/asset/ec.webp",
    tags: ["UI Design & Development"],
    categories: [
      { label: "Dashboard", bgColor: "bg-red-500" },
      { label: "Website", bgColor: "backdrop-blur-sm bg-black/30" }
    ],
    description: "The outer div's height is effectively zero (because it has no content in normal flow) The padding-top pushes the height to match the width (creating the square) The absolute positioned inner div then fills that padded space."
  },
  {
    id: 4,
    title: "HAPPY - ERP",
    href: "/project/happy",
    image: "/asset/toy.webp",
    tags: ["UI Design & Development"],
    categories: [
      { label: "Dashboard", bgColor: "bg-red-500" },
      { label: "Website", bgColor: "backdrop-blur-sm bg-black/30" }
    ],
    description: "The outer div's height is effectively zero (because it has no content in normal flow) The padding-top pushes the height to match the width (creating the square) The absolute positioned inner div then fills that padded space."
  }
];

const CaseStudyPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-zinc-800 pb-10">
      {caseStudies.map((study) => (
        <a
          key={study.id}
          href={study.href}
          className="group relative pt-[100%] rounded-md overflow-hidden block cursor-pointer transform-gpu will-change-transform"
        >
          {/* Background image with scale effect */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110 transform-gpu"
            style={{ backgroundImage: `url(${study.image})` }}
          ></div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none transform-gpu"></div>

          <div className="absolute py-1 text-xs font-semibold top-4 left-4 px-4 rounded-sm bg-slate-50 transform-gpu">
            {study.tags[0]}
          </div>

          {/* Content container */}
          <div className="absolute left-0 bottom-0 w-full text-white transform-gpu">
            <div className="p-4">
              <h1 className="font-bold text-xl mb-2">{study.title}</h1>
              <div className="flex gap-2 mb-3 transform-gpu will-change-transform">
                {study.categories.map((category, index) => (
                  <h1 
                    key={index}
                    className={`text-xs ${category.bgColor.replace('backdrop-blur-sm', '')} py-1 px-3 rounded-full transform-gpu`}
                  >
                    {category.label}
                  </h1>
                ))}
              </div>
              <p className="text-sm leading-snug line-clamp-5 transform-gpu">
                {study.description}
              </p>
            </div>

            {/* Read More button */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-gpu">
              <button className="bg-white flex items-center gap-2 text-black py-2 px-6 rounded-md font-medium hover:bg-gray-100 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300 transform-gpu">
                <h1>Read More </h1>
                <MdArrowOutward />
              </button>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CaseStudyPage;