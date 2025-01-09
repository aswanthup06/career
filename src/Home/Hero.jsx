import React from 'react'

export default function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2  pt-28 container mx-auto md:px-28 '>
    <div >

    <div className='flex flex-col items-center md:items-start'>
    <h1 className='text-indigo-600 font-bold'>Personal Protfolio</h1>
    <h1 className="text-3xl md:text-6xl font-bold text-transparent leading-[0px] bg-gradient-to-r from-white to-gray-600 bg-clip-text max-w-full">
    Welcome to
</h1>
<h1 className="text-3xl md:text-6xl font-bold text-transparent leading-[0px] bg-gradient-to-r from-white to-gray-600 bg-clip-text max-w-full">
    Design World
</h1>

    <h6 className='mt-6 w-5/6 font-medium text-slate-500 text-center md:text-start'>A UI (User Interface) Developer plays a pivotal role in crafting the look and feel of digital applications, ensuring they are both visually appealing and highly functional.</h6>
    {/* <button className='bg-slate-900 mt-6 text-zinc-50 px-9 py-3 rounded-xl'>Contact</button> */}
    <button className="shiny-cta mt-6">
        <span>Contact Now</span>
    </button>
    </div>

    <div className='flex justify-center md:justify-start'>

    <div className=' n w-fit'>

    <div className='flex gap-4 items-center pt-12'>
        <div className='w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 hover:border-purple-800 border-2 p-2 duration-500'>
            <img src="asset/ui.png" alt=""/>
        </div>
        <div>
            <h1 className='font-bold'>UI/UX Design</h1>
            <h1 className='font-medium text-zinc-700'> Intuitive interface design</h1>
        </div>
    </div>

    <div className='flex gap-4 items-center pt-8'>
        <div className='w-11 h-11 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-indigo-300 border p-2'>
            <img src="asset/code.png" alt=""/>
            </div>
        <div>
            <h1 className='font-bold'>UI Development</h1>
            <h1 className='font-medium text-zinc-700'> Precise web implementation</h1>
        </div>
    </div>

    <div className='flex gap-4 items-center pt-8'>
        <div className='w-11 h-11 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-indigo-300 border p-2'>
            <img src="asset/gra.png" alt=""/>
            </div>
        <div>
            <h1 className='font-bold'>Graphic Design</h1>
            <h1 className='font-medium text-zinc-700'>Outstanding visual creations</h1>
        </div>
    </div>

    </div>
    </div>

    </div>

    <div className='flex items-center justify-center'>


        <div className='relative'>
        <img className='' src="asset/new2.png" alt="" />
        <img className='absolute h-auto w-auto top-60 left-[-100px]' src="asset/blo1.png" alt="" />
        </div>
       
        </div>
   
   
    </div>
  )
}
