import React from 'react'

export default function WebAd() {
  return (
    <div className='container mx-auto md:px-28'>
        
        
        <div className='h-80 rounded-2xl relative  bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden'>

            <div className='absolute'>
            <div className='relative h-96 w-96 border border-white/10 rounded-full'>
                   <img className='scale-90 absolute border-8 border-white/10 top-12 left-1 rounded-full h-16 w-16 object-cover' src="https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            </div>


            <div className='absolute'>
            <div className='relative h-[36rem]  w-[36rem] border border-white/10 rounded-full'>
         

            <img className='absolute border-8 border-white/10 top-[22rem] right-[-1.1rem] rounded-full h-16 w-16 object-cover' src="/asset/1.webp" alt=""/>
            <img className='absolute border-8 border-white/10 top-80 left-[-1.6rem] rounded-full h-16 w-16 object-cover' src="/asset/2.webp" alt=""/>
            </div>
            </div>

            <div className='absolute opacity-70'>
            <div className='relative h-[52rem]  w-[52rem] border border-white/10 rounded-full'>
         

            <img className=' absolute border-8 border-white/10 top-[22rem] right-[-2rem] rounded-full h-16 w-16 object-cover' src="   https://images.unsplash.com/photo-1514626585111-9aa86183ac98?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
            <img className='absolute border-8 border-white/10 top-80 left-[-1.6rem] rounded-full h-16 w-16 object-cover' src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
            </div>
            </div>

            <div className='absolute flex flex-col items-center'>
                <h1 className='text-2xl text-white/75 font-semibold'>Let’s Create Something </h1>
                <h1 className='text-2xl  text-white/75 font-light' >Amazing Together!</h1>
                <button className='mt-6 h-12 w-36 bg-white text-black rounded-md'>Contact Now</button>
            </div>



       



        </div>
        
        
    </div>
  )
}
