import React from "react";

export default function Happy() {
  return (
    <div className="text-black container  pt-28">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold">HAPPY ERP</h1>
          <h1 className="text-red-600 text-4xl mb-6 font-semibold">
            Flowers are one of nature's most beautiful creations, known for
            their vibrant colors, delicate petals, and sweet fragrances
          </h1>

          <p className="mb-4 ">
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

        <div className="">
          <img className="rounded-2xl" src="/asset/happy.webp" alt="" />

          <div className="flex justify-between gap-2 w-full mt-10">
            {[
              { title: "Duration", value: "3 Months" },
              { title: "My Responsibility", value: "UI Design & Development" },
              { title: "Screens", value: "50 +" },
              { title: "Tech Used", value: "React" },
            ].map((item, index) => (
              <div key={index} className="w-fit">
                <h1 className="text-xs font-medium">{item.title}</h1>
                <h1 className="font-semibold font-sora">{item.value}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 gap-8 mt-16">
        <div className="flex items-center">
          <img
            className="rounded-2xl w-full object-cover h-[450px]"
            src="/asset/happy2.webp"
            alt=""
          />
        </div>

        <div className="flex items-center">
          <div>
            <h1 className="font-bold">HAPPY ERP</h1>
            <h1 className="text-red-600 text-4xl mb-6 font-semibold">
              Flowers are one of nature's most beautiful creations, known for
              their vibrant colors, delicate petals, and sweet fragrances
            </h1>

            <p className="mb-4 ">
              Flowers are one of nature's most beautiful creations, known for
              their vibrant colors, delicate petals, and sweet fragrances. They
              play a vital role in the ecosystem by attracting pollinators like
              bees, butterflies, and birds, helping plants reproduce. Beyond
              their biological function, flowers hold deep symbolic meaning in
              many cultures—often representing love, purity, growth, or
              remembrance. Whether blooming in a garden, given as a gift, or
              used in celebrations and rituals, flowers bring joy and a sense of
              peace, reminding us of the simple beauty that exists in the
              natural world
            </p>
          </div>
        </div>
      </div>

<div className="w-full h-[500px] rounded-2xl bg-slate-200 mt-28">

</div>

<div className="w-full h-[100px] rounded-2xl ">

</div>





    </div>
  );
}
