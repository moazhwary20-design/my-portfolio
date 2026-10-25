import Aos from "aos";
import { useEffect } from "react";

export default function Skils() {
    const myskils = [
        { id: 1,  skilsimg:"public/html2.png", altname:"Html" ,  Skilsname:"Html" , aosAnimation: "fade-up-right"},
        {  id: 2, skilsimg:"public/css3.jpeg", altname :"CSS" , Skilsname:"CSS" , aosAnimation: "fade-up"},
        {  id: 3, skilsimg:"public/android-chrome-512x512.png", altname:"BOOtStrap" , Skilsname:"BOOtStrap" , aosAnimation: "fade-up"},
        {  id: 4, skilsimg:"public/img-java-script.webp", altname:"JS" , Skilsname:"JS" , aosAnimation: "fade-up-left"},
        {  id: 5, skilsimg:"public/img-react.png", altname:"React" , Skilsname:"React" , aosAnimation: "fade-up-right"},
        {  id: 6, skilsimg:"public/img-tailwind.jpg", altname:"Tailwind" , Skilsname:"Tailwind" , aosAnimation: "fade-up"},
        {  id: 7, skilsimg:"public/img-typeScript.webp", altname:"TS" , Skilsname:"TS" , aosAnimation: "fade-up"},
        { id: 8 ,  skilsimg:"public/img-strapi.webp", altname:"strapi" , Skilsname:"strapi" , aosAnimation: "fade-up-left"},
    
    ];
       useEffect(() => {
        Aos.init({
          duration: 1000,  
          // once: true,      
        });
      }, []);
  return (
    <>

    <section id="skils" className=" bg-slate-50 dark:bg-black dark:text-white px-3 py-5 md:py-5 md:px-5 lg:py-10 lg:px-20 w-full fontFamily text-[24px] md:text-[30px] font-normal md:font-bold ">
        <h2  data-aos="fade-down" className="mb-1 text-center  text-black dark:text-violet-600 text-[42px] md:8xl font-bold tracking-wider drop-shadow-lg">My skills</h2>
       <p data-aos="fade-up" className="text-gray-600 dark:text-gray-400 mt-2 text-base text-center mx-auto">
            A collection of technologies and tools I use to design and build responsive, modern web applications.
       </p>
        <div className="group-skils  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-4  ">
        {
            myskils.map((el)=>{
                return(
            <div   data-aos={el.aosAnimation} key={el.id} className=" skill-card shrink-0 lg:mb-10">
               <img className=" w-72.5 h-52.5 sm:w-52.5 sm:h-52.5 rounded-2xl" src={el.skilsimg} alt={el.altname} />
               <h2 className="mt-3 lg:mt-6">{el.Skilsname}</h2>
           </div>
                )
            })
        }
        {/* <div className="skill-card shrink-0">
            <img className=" w-72.5 h-52.5 sm:w-52.5 sm:h-52.5 rounded-2xl " src="public/css3.jpeg" alt="css" />
            <h2 className="mt-3 lg:mt-6">CSS</h2>
        </div>
        <div className="skill-card shrink-0">
            <img className=" w-72.5 h-52.5 sm:w-52.5 sm:h-52.5 rounded-2xl" src="public/android-chrome-512x512.png" alt="bootstrap" />
            <h2 className=" mt-3 lg:mt-6">BOOtStrap</h2>
        </div>
        <div className="skill-card shrink-0">
            <img className=" w-72.5 h-52.5 sm:w-52.5 sm:h-52.5 rounded-2xl "  src="public/img-java-script.webp" alt="js" />
            <h2 className=" mt-3 lg:mt-6">JS</h2>
        </div> */}
    </div>
    {/* <div className="group-2 mt-7 md:mt-10 lg:mt-15  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center ">
        <div className=" skill-card shrink-0">
            <img className=" w-72.5 h-52.5 sm:w-52.5 sm:h-52.5 rounded-2xl " src="public/img-react.png" alt="react" />
            <h2 className="mt-3 lg:mt-6">React</h2>
        </div>
        <div className="skill-card shrink-0">
            <img className=" w-72.5 h-52.5 sm:w-52.5 sm:h-52.5 rounded-2xl" src="public/img-tailwind.jpg" alt="tailwind" />
            <h2 className="mt-3 lg:mt-6">Tailwind</h2>
        </div>
        <div className="skill-card shrink-0">
            <img className=" w-72.5 h-52.5 sm:w-52.5 sm:h-52.5 " src="public/img-typeScript.webp" alt="ts" />
            <h2 className="mt-3 lg:mt-6">TS</h2>
        </div>
        <div className="skill-card shrink-0 ">
            <img className=" w-72.5 h-52.5 sm:w-52.5 sm:h-52.5" src="public/img-strapi.webp" alt="strapy" />
            <h2 className="mt-3 lg:mt-6">strapi</h2>
        </div>
    </div> */}
    </section>
    
    </>
  )
}
