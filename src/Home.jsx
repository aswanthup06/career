import React from 'react'
import './home.css'
import Navbar from './Component/Navbar'
import Hero from './Home/Hero'
import Tech from './Home/Tech'
import Recentwork from './Home/Recentwork'
import About from './Home/About'
import Footer from './Component/Footer'
import BackToTopButton from './Component/BackToTopButton'
import WebAd from './Home/WebAd'

export default function Home() {
  return (

<div class="relative w-full bg-slate-950 overflow-hidden select-none">



<div class="absolute opacity-15 md:opacity-45 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]">
</div>


  
    <div class="absolute bottom-0 left-[-20%] right-0 top-[0%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
    </div>
    <div class="absolute bottom-0 right-[-20%] top-[0%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
    </div>

    <div class="absolute bottom-0 right-[0%] top-[1500px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
    </div>

    <div class="absolute bottom-0 left-[-20%] right-0 top-[1600px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
    </div>

  

        <div className='relative z-10'>
        <Hero />
        <Tech />
        <Recentwork />
        <About />
        <WebAd />
        <Footer />
        <BackToTopButton />
        </div>
</div>


  



  )
}
