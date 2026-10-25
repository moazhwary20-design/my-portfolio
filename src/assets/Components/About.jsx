import React from 'react'

export default function About() {
  return (
  <>
  
  <section id='About' className='bg-white dark:bg-slate-900  px-3 py-5 md:py-5 md:px-5 lg:py-10 lg:px-20 fontFamily'> 
    <h2 data-aos="fade-up" className='text-black  dark:text-violet-600 mb-3 text-center text-[42px] md:8xl font-bold tracking-wider drop-shadow-lg'>About Me </h2>
   <div className=" flex flex-col justify-center items-center gap-3 md:flex-row md:gap-20">
      <div data-aos="zoom-in" className="img">
    <img className='max-h-100' src="public/Image-about.png" alt="imgAbout" />
   </div>
      <div className="textAboutMe w-full md:max-w-3xl text-center space-y-8 text-lg md:text-xl leading-relaxed text-slate-300">

   
   {/* <h2 className='text-3xl md:text-4xl font-bold  text-black dark:text-slate-300'>Who Am I?</h2> */}
   <p data-aos="fade-up" className=' text-black dark:text-slate-300 leading-relaxed'>
  MIS student and passionate <span className='text-blue-600'>Front-End Developer</span>. I bridge the gap between business logic and user experience by turning complex ideas into sleek, responsive, and interactive web interfaces. I focus on writing clean, scalable code to deliver exceptional user experiences. Always eager to learn, build, and grow within a professional team.
   </p>

   {/* <p className=' text-black dark:text-slate-300 leading-relaxed'>
    Im currently focused on Front-End development, and Im learning React tobecome a better developer and build real-world projects.
   </p> */}

  </div>
   </div>
  </section>
  
  </>
  )
}
