import React from "react";
import BackToTopButton from "../Component/BackToTopButton";

export default function Blood() {
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

  return (
    <div className="bg-black">
         <BackToTopButton />
      {/* hero */}

      <div
        className="grid grid-cols-2 items-end px-24"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,1), transparent), url('/asset/bloodtop.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "700px", // Adjust as needed
          width: "100%",
          backgroundBlendMode: "multiply", // This helps blend the gradient with the image
        }}
      >
        {/* Rest of your content remains the same */}
        <div>
          <h1 className="text-white text-4xl">Connect to Donate and </h1>
          <h1 className="text-red-600 text-4xl mb-6">Request Blood</h1>

          <p>
            Introducing the Lifesaver App, a platform dedicated to making blood
            donation and requests effortless. Whether you need blood in an
            emergency or wish to donate and make a difference, this app bridges
            the gap between donors and recipients. With user-friendly features,
            instant notifications, and a community-driven approach, Lifesaver
            ensures that every drop counts. Join us in building a network of
            heroes saving lives one donation at a time!
          </p>

          <button className="bg-black py-3 px-6 flex items-center gap-4 rounded-md border border-white/20 mt-4">
            <img className="w-6" src="/asset/play.svg" alt="" />
           <h1 className="text-sm"> Download</h1>
            
            </button>

          <div className="flex pt-12 pb-12 gap-12">
            {Sub.map((su) => (
              <div key={su.id}>
                <h1 className="text-red-600">{su.title}</h1>
                <h1>{su.sub}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img className="" src="/asset/new2.png" alt="" />
        </div>
      </div>

      {/* hero */}





      

      <div className="h-screen"></div>
    </div>
  );
}
