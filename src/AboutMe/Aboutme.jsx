import React from 'react'
import AboutHero from './AboutHero'
import Navbar from '../Component/Navbar'
import ExpSec from './ExpSec'
import Skill from './Skill'
import BackToTopButton from '../Component/BackToTopButton'


export default function Aboutme() {
  return (
    <div>


<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>


       <AboutHero/>
       <ExpSec />
       <Skill  />
       <BackToTopButton />






    </div>
  )
}
