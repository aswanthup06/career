import React from 'react'

export default function Navbar() {
  return (
    <div className='hidden md:flex justify-between items-center py-5 w-full  container mx-auto px-10'>

    <div className='flex items-center'>
        <img className='h-12 w-12 rounded-full object-cover' src="https://images.unsplash.com/photo-1730941343980-5d81ce7c768b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>


<div className='flex items-center'>
<div className='flex items-center gap-6 me-6'>
    <button className='font-semibold'>Home</button>
    <button className='font-semibold'>Projects</button>
    <button className='font-semibold'>About Me</button>
</div>

<button className="shiny-cta">
            <span>Contact Now</span>
        </button>

</div>


</div>
  )
}
