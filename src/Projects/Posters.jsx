import { useState, useEffect } from "react";

const PosterItem = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="aspect-square border shadow-lg overflow-hidden bg-gray-200 rounded-md group">
      {isLoading && <div className="w-full h-full animate-pulse" />}
      <img
        src={src}
        alt=""
        className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
          isLoading ? "hidden" : "block"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

const Posters = () => {
  return (
    <div className="grid grid-cols-3 gap-2 text-black">
      <PosterItem src="/asset/p2.webp" />
      <PosterItem src="/asset/p3.webp" />
      <PosterItem src="/asset/p1.webp" />
    </div>
  );
};

export default Posters;
