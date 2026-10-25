import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { LuSend } from "react-icons/lu";
import { LuShare2 } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function Contactme() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_bg43pca',   // استبدل بـ Service ID
        'template_oqmflhd',  // استبدل بـ Template ID
        formRef.current,
        'GRyM-YZ7A94ZEZBho'    // استبدل بـ Public Key
      )
       

      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          e.target.reset(); // مسح الخانات بعد الإرسال
        },
        (error) => {
          setLoading(false);
          alert('حدث خطأ أثناء الإرسال، حاول مرة أخرى.');
          console.log(error.text);
        }
      );
  };

  return (
    <section id='contact' className="py-12 bg-gray-50 dark:bg-black fontFamily overflow-hidden">
      <h2   className='text-center mb-5 text-black dark:text-violet-600 text-[42px] md:8xl font-bold tracking-wider drop-shadow-lg'> Let's Contact</h2>
      <div 
      data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
      className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-md">
        <h2  className="text-2xl font-bold text-black dark:text-violet-500 tracking-tight mb-2 flex items-center justify-between">Get in Touch <span><LuShare2 /></span></h2>
        <p className='text-neutral-600 dark:text-neutral-400 text-base leading-relaxed  mb-4 '>Have something to discuss? Send me a message and let's talk.</p>
        
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center w-full">
              <div >
            <input  type="text" name="name" required placeholder='Your Name' className="inputs-proberaty" />
          </div>

          <div>
            <input type="email" name="email" required placeholder='Your Email' className="inputs-proberaty" />
          </div>
        </div>


          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">
            {/* <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label> */}
            <input type="tel" name="phone" placeholder='Phone' required className="inputs-proberaty" />
          </div>

          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            {/* <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label> */}
            <textarea name="message" rows="4" required placeholder='Message' className="inputs-proberaty"></textarea>
          </div>

          <button
            data-aos="fade-up" data-aos-delay="450" data-aos-duration="800"
            type="submit"
            disabled={loading}
            className="w-full py-3 text-[20px] font-medium mt-5 px-4 bg-linear-to-r from-[#a855f7] to-[#6366f1]  text-white rounded-xl flex items-center justify-center gap-2 hover:gap-3 hover:bg-violet-700 transition "
          >
           <LuSend />  {loading ? 'Sending...' : '  Send Message'}
          </button>

          {success && (
            <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>
          )}
          
          <hr className='mt-10 text-neutral-300 dark:text-white' />
          <div className='group-connect border-2 border-transparent p-6 mt-5 bg-slate-200/70 dark:bg-gray-800/55 rounded-2xl'>
            <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="800" className="whatsap flex gap-5 items-center px-3 py-5 text-black dark:text-white border border-slate-400 rounded-xl hover:bg-green-400/80 transition-all duration-300 ease-in-out">
                <a href='https://Wa.me/201270203880' target='_blank' rel='noopener noreferrer' className="icon"><BsWhatsapp  size={35} /></a>
              <div className="text">
                <h2 className='text-[22px] font-medium '>WhatsApp</h2>
                <p className='text-[14px] font-light'>On WhatsApp</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="750" data-aos-duration="800" className="linked-in flex gap-5 items-center px-3 py-5 text-black dark:text-white border border-slate-400 rounded-xl hover:bg-blue-400/80 transition-all duration-300 ease-in-out mt-5">
                <a href='https://www.linkedin.com/in/moaz-hwary-753499402/' target='_blank' className="icon text-blue-500"><FaLinkedin  size={35} /></a>
              <div className="text">
                <h2 className='text-[22px] font-medium '>Linked In</h2>
                <p className='text-[14px] font-light'>On Linked In</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}