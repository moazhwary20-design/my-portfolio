import { ReactTyped } from 'react-typed';

export default function Home() {
    
  return (
    <>
    <section id='home' className=" bg-slate-50  px-3 md:px-5 lg:px-20 dark:bg-slate-950 flex md:gap-5 lg:gap-40 relative mt-15 md:mt-20">
        <div className="text py-7 md:py-10 lg:py-20 flex flex-col justify-center ">
            <div className=" animate__animated animate__zoomIn hellow-text fontFamily py-2 px-4 bg-zinc-300 dark:bg-slate-900/80 border border-slate-800  font-medium text-[20px] dark:text-slate-300 rounded-full w-fit">
                Hello,Im
            </div>
            <h2  data-aos="fade-up" data-aos-duration="800" className=" fontFamily font-extrabold text-[40px] dark:text-white w-fit mt-2.5 ">Moaz <span className="text-violet-500">EL-Hawary</span></h2>
            {/* <p className=" fontFamily font-medium text-[22px] dark:text-white mt-1.5">Front-End Developer</p> */}
                     <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="800" className="hero-section fontFamily font-bold text-[24px] md:text-[28px] dark:text-white mt-1.5">
                            <h1>
                                 _ {' '}
                              <ReactTyped
                                strings={[
                                  'Front-End Developer',
                                  'React Developer',
                                ]}
                                typeSpeed={70}
                                backSpeed={50}
                                loop
                              />
                            </h1>
                       </div>
             <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" className=" fontFamily font-normal text-[18px] dark:text-slate-500 mt-1 ">A detail-oriented Frontend Developer eager to build impactful web applications. <br />
             I turn creative designs into responsive code with a strong focus on usability and clean architecture.</p>
            <div data-aos="fade-up" data-aos-delay="450" data-aos-duration="800" className="flex btns gap-3 mt-6 ">
                <a href='#projects' className=' fontFamily view-project py-2 px-5 bg-indigo-700 rounded-full dark:text-white glow-btn'>view My Project</a>
                <a href='#contact' className=' fontFamily text-black contact py-2 px-5 bg-transparent border border-indigo-700 rounded-full dark:text-white glow-btn' >Contact Me</a>
            </div>
            <div  data-aos="fade-up" data-aos-delay="600" data-aos-duration="800" className="icons flex gap-5 mt-10 items-center ">
                <a className="dark:text-white" href="https://github.com/moazhwary20-design" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 64 64">
	                          <path d="M0 0h64v64H0z" fill="none" />
	                          <path fill="currentColor" d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15q0-6 3-9s-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9q3 3 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0" />
                           </svg>
                </a>

                <a className="" href="https://www.linkedin.com/in/moaz-hwary-753499402/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256">
	                        <path d="M0 0h256v256H0z" fill="none" />
	                        <path fill="#0a66c2" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" />
                    </svg>
               </a>

            </div>
        </div>
        <div className="image-portfolio object-cover ">
            <img className="w-120 h-full  hidden md:flex" src="/img-portfolio-removebg-preview.png" alt="my image" />
        </div>
    </section>
    
    </>
  )
}
