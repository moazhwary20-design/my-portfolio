import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Projects() {
    const myprojects = [
        {
            id: 1 ,
            proname:"AC Remote" ,
            proimg:"/acremote.webp" ,
            prodesc:"An interactive AC remote control Ui allowing users to manage temperatuers , power stataes, and modes dynamially using Vanilla javascript.",
            tech:["HTML" , "CSS" , "JavaScript"],
            aosAnimation: "fade-up-right",
            aosDelay: "100",
            link:"https://task-ac-remote-js.vercel.app/",
            linkgit:" https://github.com/moazhwary20-design/task-Ac-remote-js"
        },
        {
            id: 2 ,
            proname:"To-Do-List" ,
            proimg:"/todolist-2.jpg" ,
            prodesc:"A responsive To-Do List web app built with React and Tailwind CSS. Features local storage persistence, smooth task management (CRUD), and dynamic filtering for a seamless user experience.",
            tech:["React" , "Tailwind" , "JavaScript"],
            aosAnimation: "fade-up",
            aosDelay: "200",
            link:" https://todo-list-react-tau-one.vercel.app/",
            linkgit:"https://github.com/moazhwary20-design/Todo-list-react"
        },
        {
            id: 3 ,
            proname:"real-state" ,
            proimg:"/img-real-state.png" ,
            prodesc:"A modern, responsive real estate website built with HTML, CSS, and Bootstrap, featuring a clean design to explore properties seamlessly across all devices.",
            tech:["html" , "css" , "bootstrap"],
            aosAnimation: "fade-up-left",
            aosDelay: "300",
            link:"https://real-state-eight-iota.vercel.app/",
            linkgit:"https://github.com/moazhwary20-design/Real-state"
        }
     
    ]
 
  return (
    <>
    <section id="projects" className=" dark:bg-slate-900 overflow-hidden max-w-full  px-3 py-5 md:py-5 md:px-5 lg:py-15 lg:px-20 fontFamily">
        <h2 data-aos="fade-up" className="text-center mb-2 text-black dark:text-violet-600 text-[42px] md:8xl font-bold tracking-wider drop-shadow-lg">My Projects</h2>
        <p data-aos="fade-up" className="text-gray-600 dark:text-gray-400 mb-3 text-center text-base  mx-auto">
    A curated collection of web applications I’ve built, focusing on clean UI and modern web technologies.
  </p>
        {/* <TextReveal text="Construction Company System" /> */}
        <div className="carts grid md:grid-cols-2 lg:grid-cols-3  gap-5">
          {
              myprojects.map((el)=>{
                return(
                    <div key={el.id}  data-aos={el.aosAnimation} data-aos-delay={el.aosDelay} className="cart p-5 flex flex-col shrink bg-slate-50 dark:bg-neutral-900/80 backdrop-blur-md  border border-neutral-300 dark:border-neutral-800 dark:hover:border-violet-600 rounded-2xl w-full  transition-all duration-300 hover:shadow-xl hover:shadow-slate-600/20 dark:hover:shadow-violet-600/20  group">
                        <div className="overflow-hidden rounded-xl mb-4 w-full border-2 border-transparent transition-all duration-300 group-hover:border-violet-500">
                      <img className="h-46 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" src={el.proimg} alt="img-project" />

                        </div>
                      <h2 className="text-2xl font-bold text-black dark:text-white tracking-tight mb-2">{el.proname}</h2>
                       <div className="tols flex items-center gap-4 mb-2">
                          {
                        el.tech.map((t , index)=>{
                          return(

                            <div key={index} className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-[16px] font-normal text-black dark:text-white hover:bg-white dark:hover:bg-slate-900 rounded-full">{t}</div>
                            
                          )
                        })
                      }
                       </div>
                      <p className=" text-neutral-600 dark:text-neutral-400 text-base leading-relaxed mb-6">{el.prodesc}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <a href={el.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-medium text-base transition-colors ">
                           Live Demo
                       </a>
                        <a href={el.linkgit} target="_blank" rel="noopener noreferrer" className=" text-blue-500   hover:text-blue-700  dark:text-blue-300   dark:hover:text-white font-medium text-base transition-colors bg-slate-200 dark:bg-slate-800 px-3 py-2 border rounded-xl">Details</a>
                      </div>
                    </div>
                )
                
            })
          }
        </div>
    </section>
     
    </>
  )
}
