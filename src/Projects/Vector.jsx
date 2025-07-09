import React, { useState } from "react";

const VectorItem = ({ src, alt, sub, title, description }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="aspect-square border shadow-lg overflow-hidden bg-gray-200 rounded-md group relative">
      {/* Skeleton loader */}
      {isLoading && (
        <div className="w-full h-full animate-pulse bg-gray-300" />
      )}
      
      {/* Image */}
      <img 
        src={src} 
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
          isLoading ? 'hidden' : 'block'
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />

      <div className="absolute py-1 text-sm top-4 left-4 px-4 rounded-sm bg-slate-50">{sub}</div>
      
      {/* Hover overlay with title and description */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100">
        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default function Vector() {
  return (
    <div className="grid grid-cols-3 gap-2 text-black">
      <VectorItem 
        src="/asset/kadha.webp" 
        alt="Kadha illustration"
        sub="Vector Art"
        title="KADHAKALI THEYYAM"
        description="This is a vector design I made for a T-shirt print"
      />
      <VectorItem 
        src="/asset/r2.webp" 
        alt="RENT MY THING - LOGO"
         sub="Logo Design"
        title="RENT MY THING - LOGO"
        description="This logo was designed for our project, Rent My Thing"
      />
      <VectorItem 
        src="/asset/Pharmacy.webp" 
        alt="Kadha illustration"
         sub="Iconography"
        title="DR ONE - ICONS"
        description="This icon was designed for the pharmacy section of the Dr. One app"
      />
    </div>
  );
}