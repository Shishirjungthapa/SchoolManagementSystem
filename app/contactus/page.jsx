import React from 'react'
import AboutusBanner from '../components/AboutusBanner'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMessage } from '@fortawesome/free-regular-svg-icons'
import {faPhone, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import  Link  from 'next/link'

const ContactUs = () => {
  return (
    <div className='w-full h-full overflow-hidden'>
        <AboutusBanner text="We are a leading Software Company with expertise in software development, web development, SEO, digital marketing and app development"/>
        <div className='relative flex flex-col w-full h-full px-5 py-20 md:py-20 md:flex-row lg:flex-row'>
            <div className='flex flex-col w-full gap-5 px-2 md:pl-10 md:pr-5 md:w-3/5'>
                <div className='flex flex-col justify-between w-full gap-5 lg:flex-row md:flex-col'>
                    <div className='flex flex-col w-full gap-3'>
                        <label className='text-lg md:text-xl'>First Name</label>
                        <input type='text' className='w-auto pl-4 border-2 border-gray-300 rounded-md lg:h-14 md:h-12 h-10 focus:outline-none focus:border-[#9E29B2] focus:ring-0'  placeholder='Enter Your First Name' required></input>
                    </div>
                    <div className='flex flex-col w-full gap-3'>
                        <label className='text-lg md:text-xl'>Last Name</label>
                        <input type='text' className='w-auto pl-4 border-2 border-gray-300 rounded-md lg:h-14 md:h-12 h-10 focus:outline-none focus:border-[#9E29B2] focus:ring-0' placeholder='Enter Your Last Name' required></input>
                    </div>
                </div>
                <div className='flex flex-col w-full gap-3'>
                    <label className='text-lg md:text-xl'>Email</label>
                    <input type='email' className='w-auto pl-4 border-2 border-gray-300 rounded-md lg:h-14 md:h-12 h-10 focus:outline-none focus:border-[#9E29B2] focus:ring-0' placeholder='Enter Your Email' required></input>
                </div>
                <div className='flex flex-col w-full gap-3'>
                    <label className='text-lg md:text-xl'>Phone Number</label>
                    <input type='tel' className='w-auto pl-4 border-2 border-gray-300 rounded-md lg:h-14 md:h-12 h-10 focus:outline-none focus:border-[#9E29B2] focus:ring-0' placeholder='Enter Your Phone Number' required></input>
                </div>
                <div className='flex flex-col w-full gap-3'>
                    <label className='text-lg md:text-xl'>Message</label>
                    <textarea type='text' className='border-2 pl-4 pt-4 border-gray-300 rounded-md focus:outline-none focus:border-[#9E29B2] focus:ring-0' rows="8"></textarea>
                </div>
                <div className='w-full h-full'>
                    <button className='w-full text-white text-lg md:text-xl bg-[#9E29B2] shadow-xl shadow-white rounded-md lg:h-14 md:h-12 h-10 hover:bg-[#ac42be] hover:text-white hover:shadow-lg'>Send Message</button>
                </div>
            </div>
            <div className='flex flex-col w-full gap-16 px-2 pt-10 md:w-2/5 lg:px-10 md:px-5 lg:pt-1'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-5 '>
                        <h1 className='text-xl text-black md:text-2xl'>Chat With Us</h1>
                        <p className='text-base md:text-lg text-textMain'>Speak to our friendly team via email or facebook</p>
                    </div>
                    <div className='flex flex-col gap-2 text-base'>
                        <a href="mailto:enquiry@webstudionepal.com" target='_blank' rel='noopener noreferrer'>
                            <p className='flex flex-row items-center gap-3 font-semibold text-gray-800 hover:text-[#9E29B2]'> <FontAwesomeIcon icon={faEnvelope} className='text-xl'/>enquiry@webstudionepal.com</p>
                        </a>
                        <Link href="https://m.me/webstudionepal" target="_blank" rel="noopener noreferrer">
                            <p className='flex flex-row items-center gap-3 font-semibold text-gray-800 hover:text-[#9E29B2]'> 
                                <FontAwesomeIcon icon={faMessage} className='text-xl'/>Message us on Facebook
                            </p>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-5 '>
                        <h1 className='text-xl text-black md:text-2xl'>Call Us</h1>
                        <p className='text-base md:text-lg text-textMain'>Call us for enquiry</p>
                    </div>
                    <div className='flex flex-col gap-1 text-base'>
                        <a href='tel:+9779802346665'>
                         <p className='flex flex-row items-center gap-3 font-semibold text-gray-800 hover:text-[#9E29B2]'><FontAwesomeIcon icon={faPhone}  className='text-lg'/> +977 9802346665</p>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-5 '>
                        <h1 className='text-xl text-black md:text-2xl'>Visit Us</h1>
                        <p className='text-base md:text-lg text-textMain'>Chat with us in person</p>
                    </div>
                    <div className='flex flex-col gap-1 text-base'>
                        <a href='https://www.google.com/maps/place/Web+Studio+Nepal/@27.7032056,85.336288,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb191dae356c53:0xb89491eebb0b9963!8m2!3d27.7032056!4d85.3388629!16s%2Fg%2F11y75qk39w?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D'
                        target="_blank" rel="noopener noreferrer">
                        <p className='flex flex-row items-center gap-3 font-semibold text-gray-800 hover:text-[#9E29B2]'><FontAwesomeIcon icon={faLocationDot} className='text-xl'/> Web Studio Nepal, Baneshwor</p>
                        </a>
                    </div>
                </div>


            </div>

        </div>
        <Footer/>
      
    </div>
  )
}

export default ContactUs

