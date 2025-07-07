import Layout from "../Component/Layout";

const CaseStudyPage = () => {
  return (
    <div className="grid grid-cols-3 gap-2 text-zinc-800">
<div
  className="relative pt-[100%] rounded-md overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url(https://images.unsplash.com/photo-1749738415814-609109e30d84?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}
>
  {/* Gradient overlay with blur */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
  
  {/* Content container */}
  <div className="absolute left-0 bottom-0 w-full  text-white">
    <div className="p-4">
      <h1 className="font-bold text-xl mb-2">E Commerce</h1>
      <p className="text-sm leading-snug">
        The outer div's height is effectively zero (because it has no
        content in normal flow) The padding-top pushes the height to match
        the width (creating the square) The absolute positioned inner div
        then fills that padded space.
      </p>
    </div>
  </div>
</div>

<div
  className="relative pt-[100%] rounded-md overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url(https://images.unsplash.com/photo-1749738415814-609109e30d84?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}
>
  {/* Gradient overlay with blur */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
  
  {/* Content container */}
  <div className="absolute left-0 bottom-0 w-full  text-white">
    <div className="p-4">
      <h1 className="font-bold text-xl mb-2">DR ONE</h1>

<div className="flex gap-2 mb-3">

  <h1 className="text-xs  bg-red-500  py-1 px-3 rounded-full">Website</h1>
  <h1 className="text-xs backdrop-blur-sm bg-black/30 py-1 px-3 rounded-full">Admin Panel</h1>


</div>


      <p className="text-sm leading-snug">
        The outer div's height is effectively zero (because it has no
        content in normal flow) The padding-top pushes the height to match
        the width (creating the square) The absolute positioned inner div
        then fills that padded space.
      </p>
    </div>
  </div>
</div>

      <div className="relative pt-[100%] bg-gray-200 rounded-md overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-cover bg-center">
          <div className="text-white font-bold text-xl bg-black bg-opacity-50 px-4 py-2 rounded">
            ENVOC
          </div>
        </div>
      </div>

      <div
        className="relative pt-[100%] bg-gray-200 rounded-md "
      
      >
        <div className="absolute inset-0 flex items-center justify-center">
          ENVOC
        </div>
      </div>
      <div className="relative pt-[100%] bg-gray-200 rounded-md">
        <div className="absolute inset-0 flex items-center justify-center">
          DR ONE
        </div>
      </div>
      <div className="relative pt-[100%] bg-gray-200 rounded-md">
        <div className="absolute inset-0 flex items-center justify-center">
          HAPPY
        </div>
      </div>
      <div className="relative pt-[100%] bg-gray-200 rounded-md">
        <div className="absolute inset-0 flex items-center justify-center">
          Case Study Content 2
        </div>
      </div>
      <div className="relative pt-[100%] bg-gray-200 rounded-md">
        <div className="absolute inset-0 flex items-center justify-center">
          Case Study Content 3
        </div>
      </div>
      <div className="relative pt-[100%] bg-gray-200 rounded-md">
        <div className="absolute inset-0 flex items-center justify-center">
          Case Study Content 1
        </div>
      </div>
      <div className="relative pt-[100%] bg-gray-200 rounded-md">
        <div className="absolute inset-0 flex items-center justify-center">
          Case Study Content 2
        </div>
      </div>
      <div className="relative pt-[100%] bg-gray-200 rounded-md">
        <div className="absolute inset-0 flex items-center justify-center">
          Case Study Content 3
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
