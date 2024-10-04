'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const Card = ({ 
     name='',
     annualPrice=0, 
     monthlyPrice=0, 
     description='',
     currency='$', 
     availableFeatures =[],
     unavailableFeatures =[],
     featured= false
     }) =>{
        const [isYearly, setIsYearly] = useState(false);

        const handleToggle = () => {
            setIsYearly(!isYearly);
          };
    return(        
        <div className={`w-full h-auto border border-homeviolet rounded-md shadow-xl cursor-pointer border-opacity-10 relative hover:scale-105 duration-500 ease-in-out ${featured ? 'bg-[#21232F] text-white border-2 border-opacity-100' : 'bg-white text-black border border-opacity-10'}`}>
    {/*featured section */}
    {/* {
        featured ? (
            <span className='absolute top-0 px-6 py-1 text-sm font-semibold text-white uppercase transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-homeviolet whitespace-nowrap left-1/2'>
                Most Popular
            </span>
        ):null
    } */}
          {/* Toggle Button
          <div className="absolute top-4 right-4">
        <button
          onClick={handleToggle}
          className={`px-4 py-2 text-sm font-semibold  rounded-full focus:outline-none focus:ring-2 focus:ring-homeviolet focus:ring-opacity-50 ${featured ? "bg-homeviolet text-white":"bg-homeviolet text-white"}`}
        >
          {isYearly ? 'Yearly' : 'Monthly'}
        </button>
      </div> */}




        {/* Crad Header*/}
        <div className="flex flex-col px-5 py-5 pl-12">
            <p className="mb-3 text-lg font-semibold text-left lg:text-2xl md:text-xl">{name}</p>
            <div className="flex flex-col items-start justify-start gap-y-1">
                <div className="flex items-start">
                    {/* <p className="text-xl font-medium lg:text-3xl md:text-2xl">{currency}</p>
                    <p className="text-2xl font-bold lg:text-5xl md:text-4xl">
                    {isYearly ? annualPrice : monthlyPrice}
                    </p> */}
                    {/* <p className={`lg:text-2xl md:text-xl text-lg ${featured ? "text-gray-300": "text-gray-500"}`}>/{isYearly ? 'year' : 'month'}</p> */}
                </div>
            <p className='text-sm font-medium lg:text-lg md:text-base'>{description}</p>
            </div>
        </div>
    
        {/* Crad Header*/}
        <div className={`flex flex-col pl-10 pr-10 gap-y-1 pb-7 pt-4 ${featured ? "bg-[#21232F]":"bg-white" }`}>
            <div className='flex flex-col gap-1'>
            <ul className="space-y-2 ">
                {availableFeatures.map((feature, index) => (
                                    <li key={index} className='flex flex-row items-center space-x-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='flex-shrink-0 scale-125 text-sky-400'/>
                                    <p className={`lg:text-lg md:text-base text-sm ${featured ? "text-gray-300": "text-gray-700"}`}>{feature}</p>
                                    </li>
                ))}
            </ul>
            <ul className="space-y-2">
                {unavailableFeatures.map((feature, index) => (
                                    <li key={index} className='flex flex-row items-center space-x-3'>
                                    <FontAwesomeIcon icon={faCircleXmark} className='flex-shrink-0 text-[#FA0169] scale-125'/>
                                    <p className={`lg:text-lg md:text-base text-sm ${featured ? "text-gray-300": "text-gray-700"}`}>{feature}</p>
                                    </li>
                ))}
            </ul>
            </div>
            <button className={`mt-6 w-full py-4 p-12 px-10 rounded-lg lg:text-lg md:text-base text-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus-ring-opacity-50 transition-all ${featured ? 'bg-homeviolet hover:bg-white hover:text-homeviolet text-white hover:scale-105 transform' : 'bg-homeviolet text-white hover:bg-homepink hover:text-white ease-in-out duration-500 hover:scale-105 transform'}`}>Start you free trial</button>
        </div>
    </div>
);
}

export default Card;