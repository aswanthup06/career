import React from "react";

export default function Envoc() {
  return (
    <div className="text-black">
     <div className="w-full relative">
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
  
  <div className="absolute top-[40%] px-24 z-20">
    {/* <h1 className="text-white text-4xl">Connect to Donate and </h1> */}
    <h1 className="text-red-600 text-4xl mb-6">ENVOC</h1>

    <p className="mb-4 w-1/2 text-white">
      Flowers are one of nature's most beautiful creations, known for
      their vibrant colors, delicate petals, and sweet fragrances. They
      play a vital role in the ecosystem by attracting pollinators like
      bees, butterflies, and birds, helping plants reproduce. Beyond their
      biological function, flowers hold deep symbolic meaning in many
      cultures—often representing love, purity, growth, or remembrance.
      Whether blooming in a garden, given as a gift, or used in
      celebrations and rituals, flowers bring joy and a sense of peace,
      reminding us of the simple beauty that exists in the natural world
    </p>
  </div>

  {/* Data mapping for the bottom section */}
  <div className="absolute bottom-10 px-24 grid grid-cols-4 gap-6 w-full z-20">
    {[
      { title: "Duration", value: "3 Months" },
      { title: "My Responsibility", value: "UI Development" },
      { title: "Screens", value: "50 +" },
      { title: "Tech Used", value: "Nest JS & Tailwind CSS" }
    ].map((item, index) => (
      <div key={index} className="border border-white/30 px-6 py-2">
        <h1 className="text-white font-extralight">{item.title}</h1>
        <h1 className="text-white text-2xl">{item.value}</h1>
      </div>
    ))}
  </div>

  <img
    className="w-full h-screen object-cover"
    src="/asset/envo.webp"
    alt="Blood donation banner"
  />
</div>

      <div className="px-24 py-16">
        <h1 className="text-4xl mb-4">
          The Beauty, Symbolism, and Importance of Flowers in Nature, Culture,
          and Human Emotions
        </h1>
        <p className=" mb-4">
          Flowers are one of nature's most beautiful creations, known for their
          vibrant colors, delicate petals, and sweet fragrances. They play a
          vital role in the ecosystem by attracting pollinators like bees,
          butterflies, and birds, helping plants reproduce. Beyond their
          biological function, flowers hold deep symbolic meaning in many
          cultures—often representing love, purity, growth, or remembrance.
          Whether blooming in a garden, given as a gift, or used in celebrations
          and rituals, flowers bring joy and a sense of peace, reminding us of
          the simple beauty that exists in the natural world
        </p>

        <div className="bg-slate-200 h-[500px]"></div>
      </div>

      <div className="px-24 py-16">
        <h1 className="text-4xl mb-4">Module 1 - Export</h1>
        <p className=" mb-4">
          Flowers are one of nature's most beautiful creations, known for their
          vibrant colors, delicate petals, and sweet fragrances. They play a
          vital role in the ecosystem by attracting pollinators like bees,
          butterflies, and birds, helping plants reproduce. Beyond their
          biological function, flowers hold deep symbolic meaning in many
          cultures—often representing love, purity, growth, or remembrance.
          Whether blooming in a garden, given as a gift, or used in celebrations
          and rituals, flowers bring joy and a sense of peace, reminding us of
          the simple beauty that exists in the natural world
        </p>

        <div className="bg-slate-200 h-[500px]"></div>
      </div>

      <div className="px-24 py-16">
        <h1 className="text-4xl mb-4">Module 2 - Import</h1>
        <p className=" mb-4">
          Flowers are one of nature's most beautiful creations, known for their
          vibrant colors, delicate petals, and sweet fragrances. They play a
          vital role in the ecosystem by attracting pollinators like bees,
          butterflies, and birds, helping plants reproduce. Beyond their
          biological function, flowers hold deep symbolic meaning in many
          cultures—often representing love, purity, growth, or remembrance.
          Whether blooming in a garden, given as a gift, or used in celebrations
          and rituals, flowers bring joy and a sense of peace, reminding us of
          the simple beauty that exists in the natural world
        </p>

        <div className="bg-slate-200 h-[500px]"></div>
      </div>

      <div className="px-24 py-16">
        <h1 className="text-4xl mb-4">Module 3 - Maintenance and Repair</h1>
        <p className=" mb-4">
          Flowers are one of nature's most beautiful creations, known for their
          vibrant colors, delicate petals, and sweet fragrances. They play a
          vital role in the ecosystem by attracting pollinators like bees,
          butterflies, and birds, helping plants reproduce. Beyond their
          biological function, flowers hold deep symbolic meaning in many
          cultures—often representing love, purity, growth, or remembrance.
          Whether blooming in a garden, given as a gift, or used in celebrations
          and rituals, flowers bring joy and a sense of peace, reminding us of
          the simple beauty that exists in the natural world
        </p>

        <div className="bg-slate-200 h-[500px]"></div>
      </div>
    </div>
  );
}
