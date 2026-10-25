import About from './assets/Components/About';
import Home from './assets/Components/Home';
import { useEffect, useState } from 'react'
import Skils from './assets/Components/Skils';
import Projects from './assets/Components/Projects';
import Lenis from 'lenis';
import Aos from 'aos';
import Contactme from './assets/Components/Contactme';
import { IoMdHome } from "react-icons/io";
import { FaIdCard } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";

export default function App() {
 
 
  const [isdark , setdark]= useState(()=>{
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() =>{
    if(isdark){

      localStorage.setItem("theme" ,"dark" );
    } else {
      localStorage.setItem("theme" ,"light" );

    }
  } , [isdark])

  const [isopen , setisopen] = useState(false);

  const closeMenu = () => {
    setisopen(false);
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,    
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  
      smoothWheel: true, 
    });

  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
      useEffect(() => {
      Aos.init({
        duration: 1000,  
        // once: true,      
      });
    }, []);

  return (

   <>
   <div className={`${isdark ? "dark" : ""} dark:bg-black`}>

   {/* <Heder/> */}
    <header >
<div className="parent bg-white/70 dark:bg-[#0f172a] p-2 lg:px-20 md:p-4 flex justify-between fixed top-0 left-0 z-50 w-full ">
      <div className="logo flex justify-center items-center">
        <div>
         <svg width="80" height="40" viewBox="20 15 130 90" fill="none" xmlns="http://www.w3.org/2000/svg">
         <defs>
           <linearGradient id="color-m" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#6366F1" />
             <stop offset="100%" stopColor="#4F46E5" />
           </linearGradient>

    
           <linearGradient id="color-h" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#6366F1" />
             <stop offset="100%" stopColor="#4F46E5" />
           </linearGradient>
         </defs>       

         <g id="MH-Logo">

           <path d="M 25 20 
                    H 43 
                    L 60 62 
                    L 77 20 
                    H 95 
                    V 100 
                    H 77 
                    V 52 
                    L 65 82 
                    H 55 
             L 43 52 
                    V 100 
                    H 25 
                    Z" 

                 fill="url(#color-m)" />
           <path d="M 77 20 
                    H 95 
                    V 51 
                    H 125 
                    V 20 
                    H 143 
                    V 100 
                    H 125 
                    V 69 
                    H 95 
                    V 100 
                    H 77 
                    Z" 
                 fill="url(#color-h)" />
            </g>
          </svg>
        </div>

        <h2 className=" text-xl fontFamily font-bold bg-linear-to-r from-[#a855f7] hidden md:flex to-[#6366f1]  bg-clip-text text-transparent">
         Moaz Elhawary
        </h2>
    </div>
 
   <nav className="no-underline fontFamily text-black  dark:text-indigo-600 hidden md:flex md:gap-1 lg:gap-7.5  items-center font-medium text-[20px]">
    <a  className='hover-link ' href="#home">Home</a>
    <a className='hover-link' href="#About">About</a>
    <a className='hover-link'href="#skils">Skills</a>
    <a className='hover-link' href="#projects">Projects</a>
    <a  className='hover-link'href="#contact">Contact</a>
   </nav>
   <div className="icons  flex gap-2 items-center ">
    <div className="light-dark">
    <button className="p-1 rounded-lg bg-gray-300 dark:bg-violet-800" onClick={() =>{ 
     setdark(!isdark)
    }}>{
         isdark ?  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 36 36">
	                  <path d="M0 0h36v36H0z" fill="none" />
	                  <path fill="currentColor" d="M29.2 26.72a12.07 12.07 0 0 1-6.3-22.28A13.7 13.7 0 0 0 19.49 4a14 14 0 0 0 0 28a13.82 13.82 0 0 0 10.9-5.34a12 12 0 0 1-1.19.06" className="clr-i-solid clr-i-solid-path-1" />
	                  <path fill="none" d="M0 0h36v36H0z" />
                 </svg>

 : <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 64 64">
	      <path d="M0 0h64v64H0z" fill="none" />
	       <path fill="#ffe62e" d="m20.5 59.7l7-7.2c-2.5-.5-4.8-1.5-6.9-2.9zm23-55.4l-7 7.2c2.5.5 4.8 1.5 6.9 2.9zM4.3 43.5l10.1-.1C13 41.3 12 39 11.5 36.5zm55.4-23l-10.1.1c1.3 2.1 2.3 4.4 2.9 6.9zm-55.4 0l7.2 7c.5-2.5 1.5-4.8 2.9-6.9zm55.4 23l-7.2-7c-.5 2.5-1.5 4.8-2.9 6.9zM20.5 4.3l.1 10.1c2.1-1.3 4.4-2.3 6.9-2.9zm23 55.4l-.1-10.1C41.3 51 39 52 36.5 52.5z" />
	        <g fill="#ffce31">
		        <path d="m14.8 44l-4 9.3l9.3-4C18 47.8 16.2 46 14.8 44m34.4-24l4-9.3l-9.2 4c2 1.5 3.8 3.3 5.2 5.3m-37.8 8.3L2 32l9.4 3.7c-.3-1.2-.4-2.4-.4-3.7s.1-2.5.4-3.7m41.2 7.4L62 32l-9.4-3.7c.2 1.2.4 2.5.4 3.7c0 1.3-.1 2.5-.4 3.7M20 14.8l-9.3-4l4 9.3c1.5-2.1 3.3-3.9 5.3-5.3m24 34.4l9.3 4l-4-9.3C47.8 46 46 47.8 44 49.2m-8.3-37.8L32 2l-3.7 9.4c1.2-.2 2.5-.4 3.7-.4s2.5.1 3.7.4m-7.4 41.2L32 62l3.7-9.4c-1.2.3-2.4.4-3.7.4s-2.5-.1-3.7-.4" />
		        <circle cx="32" cy="32" r="19" />
	        </g>
    </svg>

      }</button>
    </div>
    <div onClick={()=>{setisopen(!isopen)}} className="menu dark:text-white md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
	          <path d="M0 0h24v24H0z" fill="none" />
	          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
       </svg>
    </div>
   </div>
    <div className={`flex flex-col absolute top-20 gap-2 p-3  md:hidden bg-slate-300 dark:bg-mist-800 dark:text-white overflow-hidden transition-all duration-300 ease-in-out w-full ${isopen?"max-h-96 opacity-100 py-4" :"h-0 opacity-0 py-0 mt-0"}`}>
      <a  onClick={()=>{closeMenu()}} className='links-mobile-design' href="#home"> <IoMdHome size={30} /> Home</a>
    <a onClick={()=>{closeMenu()}} className='links-mobile-design' href="#About"> <FaIdCard size={30} /> About</a>
    <a onClick={()=>{closeMenu()}} className='links-mobile-design'href="#skils">  <FiCpu size={30} /> Skils</a>
    <a onClick={()=>{closeMenu()}} className='links-mobile-design' href="#projects"> <FaLayerGroup size={30}/> Projects</a>
    <a onClick={()=>{closeMenu()}} className='links-mobile-design'href="#contact "> <FaEnvelope size={30} /> Contact</a>
    </div>
</div>
 </header>
    <Home/>
   <About/>
   <Skils/>
   <Projects/>
  <Contactme/>

   </div>

   </>




  )
}