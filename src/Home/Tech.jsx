import React from 'react';

export default function Tech() {
  const technologies = [
    { name: 'Bootstrap', src: 'asset/boot.svg', height: 'h-5' },
    { name: 'Tailwind CSS', src: 'asset/tailcss.svg', height: 'h-4' },
    { name: 'React', src: 'asset/react.svg', height: 'h-6' },
    { name: 'Photoshop', src: 'asset/adp.svg', height: 'h-7' },
  ];

  return (
    <div className='py-10 mt-6 flex flex-wrap items-center justify-center gap-7'>
      {technologies.map((tech, index) => (
        <div
          key={index}
          className='flex items-center opacity-50 hover:opacity-100 duration-500'
        >
          <img className={`${tech.height} me-3`} src={tech.src} alt={tech.name} />
          <h1 className='font-bold'>{tech.name}</h1>
        </div>
      ))}
    </div>
  );
}
