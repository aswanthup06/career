import React from 'react'

export default function About() {
  return (

<div className=''>
<div className='text-center p-10'>
    <h1 className='font-bold text-3xl '>About Me</h1>
    <h1>A UI (User Interface) Developer plays a pivotal</h1>
</div>


<div className="container m-auto px-6 md:px-20 lg:px-28 grid gap-8 grid-cols-1 md:grid-cols-[1fr_2fr] py-20">
  <div className=" flex items-center flex-col">
  <div>
      <img className='h-24 w-24 rounded-full object-cover' src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  </div>
  <h1 className='mt-6'>Aswanth Up</h1>
  <h6 className='mt-6 w-5/6 font-medium text-slate-500 text-center'>A UI (User Interface) Developer plays a pivotal role in crafting the look and feel of digital applications, ensuring they are both visually appealing and highly functional.</h6>
  </div>
  <div className=" ">
  <h1 className='text-indigo-600 font-bold mb-1 md:mb-3'>Personal Protfolio</h1>
    <h1 className='text-2xl   md:text-3xl lg:text-5xl'>
         I’m Bentos Walker, a product designer crafting user-centric design with pixel-perfect precision.
    </h1>
   
<div className='flex flex-col md:flex-row gap-6 py-8'>

  <div className='flex items-center gap-2'>
    <div className='h-3 w-3 bg-green-600 rounded-full'></div>
    <h1>Available for Freelancing</h1>
  </div>

  <div className='flex items-center gap-2'>
    <div className='h-3 w-3 bg-green-600 rounded-full'></div>
    <h1>Available for Full Time Job</h1>
  </div>

</div>

<div className='flex gap-8'>
    <button className='bg-indigo-700 py-3 px-5 rounded-lg'>Download CV</button>
    <button className=''>Explore More <i class="ri-arrow-right-up-long-fill"></i> </button>
</div>

  </div>
</div>



</div>
  )
}
