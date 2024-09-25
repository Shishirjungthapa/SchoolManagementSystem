import React from 'react'
import AboutusBanner from '../components/AboutusBanner'
import { experienceData, platformData, securityData, toolsData } from '../data/featuresdescribedData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { Radius } from 'lucide-react'

const featureDetails = () => {
  return (
    <div>
      <AboutusBanner text="The Key Benefit Is You Can Save Money, Save Lots Of Time & Making Best Of Resources."/>
      <div className='relative flex flex-col w-full h-full overflow-x-hidden overflow-y-hidden'>
        <div className="absolute inset-0 w-full h-[80vh] md:h-[100vh] mt-[30%] lg:h-[160vh] overflow-hidden">
                        <img
                        src="/images/pricebg.svg"
                        className="object-cover w-full h-full"
                        alt="Background Product SVG"/>
                    </div>
        <div className='relative flex flex-col gap-8 py-10'>
          <div className='flex flex-row items-center justify-center gap-2 md:gap-3'>
            <h1 className='text-xl font-semibold lg:text-4xl text-featuresTextMain md:text-3xl'>We Provide</h1>
            <h1 className='text-xl font-semibold lg:text-4xl md:text-3xl text-secondary'>Everything you need</h1>
          </div>
          <div className='flex flex-col w-full h-full gap-5 px-2 md:px-3 md:gap-0 md:flex-row'>
            <div className='relative flex justify-center w-auto h-auto md:w-1/2'>
            <img src='/images/featureimg1.png' className='md:size-[100%] size-1/2' alt='Complete Tools Image'/>

            </div>
            <div className='flex flex-col justify-center w-auto h-full px-5 md:px-2 md:w-1/2'>
             <div className='flex flex-col items-start justify-center gap-4 lg:pt-12 lg:px-2'>
                <h1 className='text-xl lg:text-3xl md:text-2xl text-textMain'>01 <span className="font-bold text-featuresTextMain ">Complete Tools</span>
                </h1>
                <p className='text-sm tracking-wide lg:text-lg md:text-base text-featuresTextMain '>This setup ensures smooth operations across all aspects of school management.</p>
                <div className='flex flex-col items-center justify-center'>
                <ul className="h-auto space-y-1 md:pt-0 lg:space-y-5 md:space-y-3">
                                        {toolsData.map((text, index) => (
                                            <div key={index} className='flex flex-row gap-3 pt-4'>
                                              <div className='flex items-center justify-center p-5 rounded-full md:p-6 bg-secondary lg:size-14 md:size-10 size-6'>
                                                <span className='text-base text-white lg:text-xl md:text-lg'>{text.image}</span>
                                              </div>
                                              <div className='flex flex-col w-full gap-1 tracking-wide lg:gap-3 md:gap-1'>
                                                <span className='text-sm font-semibold text-featuresTextMain lg:text-base md:text-sm'>{text.title}</span>
                                                <span className='text-xs text-textMain lg:text-sm md:text-xs'>{text.description}</span>
                                              </div>
                                            </div>

                                        ))}
                                    </ul>
              </div>

             </div>


            </div>

          </div>
        </div>
        

        <div className='px-3 md:px-[3.8rem]'>
        <div className='relative flex flex-col w-full h-full gap-5 bg-opacity-100 md:gap-0 md:flex-row'>
            <div className='relative z-20 flex justify-center w-auto h-auto overflow-visible bg-[#09FBD3] bg-opacity-20 md:w-[45%]'>
              <img src='/images/featureimg2.png' className='relative w-[120%] mb-3 h-auto md:w-[150%] md:h-auto md:scale-110 md:-right-8' alt='Complete Tools Image'/>
            </div>
            <div className='relative flex flex-col justify-center w-auto h-auto px-5 md:px-2 md:w-[55%] bg-[#EBFAF4]'>
               <div className='absolute h-full md:pl-[30%] pl-[25%]'>
                <img src='/images/featurebg2.svg'className='object-cover h-full'/>
               </div>
                <div className='relative flex flex-col items-start justify-center gap-4 lg:pt-0 lg:px-2 lg:pl-14 md:pl-10'>
                    <h1 className='text-xl lg:text-3xl md:text-2xl text-textMain'>02 <span className="font-bold text-featuresTextMain ">User Friendly</span>
                    </h1>
                    <p className='text-sm tracking-wide lg:text-lg md:text-base text-featuresTextMain '>This setup ensures smooth operations across all aspects of school management.</p>
                    <div className='flex flex-col items-center justify-center pb-4'>
                    <ul className="h-auto space-y-1 md:pt-0 lg:space-y-5 md:space-y-3">
                                            {experienceData.map((text, index) => (
                                                <div key={index} className='flex flex-row gap-3 pt-4'>
                                                  <div className='flex items-center justify-center p-5 rounded-full md:p-6 bg-secondary lg:size-14 md:size-10 size-6'>
                                                    <span className='text-base text-white lg:text-xl md:text-lg'>{text.image}</span>
                                                  </div>
                                                  <div className='flex flex-col w-full gap-1 tracking-wide lg:gap-3 md:gap-1'>
                                                    <span className='text-sm font-semibold text-featuresTextMain lg:text-base md:text-sm'>{text.title}</span>
                                                    <span className='text-xs text-textMain lg:text-sm md:text-xs'>{text.description}</span>
                                                  </div>
                                                </div>

                                            ))}
                                        </ul>
                  </div>

                </div>


            </div>

          </div>
          
        </div>
        <div className='relative flex flex-col py-10'>
          <div className='flex flex-col items-center justify-center gap-3 px-3 md:px-5'>
          <h1 className='text-xl lg:text-3xl md:text-2xl text-textMain'>03 <span className="font-bold text-featuresTextMain">Multi Platform Access</span></h1>
          <p className='text-sm tracking-wide text-center text-featuresTextMain lg:text-lg md:text-base'>This ensures flexibilty, real-time functionality, and seamless access on any device.</p>
          </div>
          <div className='grid grid-cols-1 px-5 pt-14 lg:grid-cols-3 md:grid-cols-2 md:px-14 md:gap-x-6 md:gap-y-6 gap-y-5'>
              {platformData.map((data, index) =>(
                  <div key={index} className='flex flex-row bg-[#EBFAF4] bg-opacity-60 rounded-xl lg:px-5 lg:py-8 md:px-3 md:py-5 px-1 py-3'>
                      <div className='md:w-[20%] w-[15%] flex justify-center'>
                        <span className='lg:size-11 md:size-10 size-8'>{data.image}</span>
                      </div>
                      <div className='flex flex-col md:w-[80%] w-[85%] md:pr-0 pr-3 lg:gap-6 md:gap-5 gap-3'>
                          <h1 className='text-lg tracking-wider lg:text-xl md:text-lg text-featuresTextMain'>{data.title}</h1>
                          <p className='text-xs text-justify lg:text-sm md:text-sm text-featuresTextMain'>{data.description}</p>
                      </div>

                  </div>

              ))}


          </div>
          <div className="relative inset-0 w-full h-auto overflow-hidden">
                        <img
                        src="/images/benefitsforyouwave1.svg"
                        className="object-cover w-auto h-auto -mt-2 md:-mt-5"
                        alt="benefits for parents"/>
            </div>

          
        </div>
        <div className='relative flex flex-col md:-mt-[15%] -mt-[10%] md:flex-row px-10'>
          <div className='flex flex-col items-center justify-center w-auto h-auto gap-6 pl-5 md:w-1/2'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-xl lg:text-3xl md:text-2xl text-textMain'>04 <span className="font-bold text-featuresTextMain">Customizable Features</span></h1>
              <p className='text-sm tracking-wide text-featuresTextMain lg:text-lg md:text-base'>This customization ensures that schools have a flexible, tailored solution that perfectly matches their educational and administrative requirements.</p>
            </div>
            <div className='flex flex-col items-start justify-start'>
                <ul className="space-y-1 md:space-y-2">
                                        {[
                                        "Active participation in school activities.",
                                        "Get detail school events and holidays calendar.",
                                        "Regular instant update on child attendance, progress, and fee payment.",
                                        "Tracking of child assignment.",
                                        "Prompt updates of circular, blog, news, discussion forums, image gallery."
                                        ].map((text, index) => (
                                        <li key={index} className="flex items-start justify-start gap-2 text-base tracking-wide lg:text-xl md:text-lg">
                                            <FontAwesomeIcon icon={faCircle} className='text-[#00D285] pt-1'/>
                                            <span>{text}</span>
                                        </li>
                                        ))}
                 </ul>
            </div>
          </div>
          <div className='relative flex justify-center w-auto h-auto md:w-1/2'>
            <img src='/images/featureimg3.png' className='md:size-[100%] size-1/2 md:ml-[20%]' alt='Customizable Features'
            />
          </div>

        </div>

        <div className='w-full h-full px-5 py-10 md:px-14'>
          <div className='flex flex-row md:gap-4 gap-2 lg:gap-6 w-full h-full bg-[#09FBD3] bg-opacity-15 lg:p-10 md:p-8 p-5'>
          <div>
            <h1 className='text-xl lg:text-3xl md:text-2xl text-textMain'>05</h1>
          </div>
          <div className='flex flex-col gap-4 pr-10 lg:gap-6 md:gap-5'>
            <h1 className='text-xl font-bold lg:text-3xl md:text-2xl text-featuresTextMain'>Secure</h1>
            <p className='text-xs tracking-wide text-featuresTextMain lg:text-base md:text-sm'>This ensures flexibilty, real-time functionality, and seamless access on any device.</p>
            <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-x-10 gap-y-7'>
              {securityData.map((data, index)=>(
                <div key={index} className='flex flex-col items-center justify-center bg-white px-7 rounded-xl'>
                  <span>{data.icon}</span>
                  <p>{data.title}</p>
                  <p>{data.description}</p>
                </div>
              ))}
            </div>
          </div>
         </div>

        </div>


      </div>
      
    </div>
  )
}

export default featureDetails
