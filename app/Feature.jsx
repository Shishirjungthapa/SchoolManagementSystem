"use client"
import React, { useEffect } from 'react';
import features from './data/featuresData';
import { useRouter } from 'next/navigation';


function FeaturesGrid() {
  const router = useRouter();

  const handleNavigate = (id) => {
      router.push(`/features#${id}`);
  };

  
  return (
    <div className="flex flex-col items-center w-full h-full gap-10 pt-10 pb-16 overflow-x-hidden overflow-y-hidden bg-transparent">
      <div
        className="flex flex-col pt-4 lg:pt-10 md:pt-7 items-center h-full lg:min-w-[1600px] md:min-w-[1400px] min-w-[850px] w-full gap-3 text-center bg-no-repeat bg-cover lg:min-h-56 md:min-h-44 min-h-32 lg:gap-8 md:gap-4"
        style={{ backgroundImage: `url("/images/featuresbg2.1.svg")` }}
      >
        <h1 className="text-3xl font-semibold text-homeviolet lg:text-5xl md:text-4xl">
          We Provide
        </h1>
        <p className="px-1 font-sans text-2xl font-semibold text-center md:px-1 lg:text-4xl md:text-3xl text-homeviolet">
          Everything You Need
        </p>
      </div>

      <div className="flex flex-col w-auto h-auto gap-5 px-10 text-center bg-white sm:pt-14 lg:px-60 md:px-28">
        <p className="px-1 font-sans text-sm font-semibold text-center md:px-1 lg:text-lg md:text-base text-textMain">
          The Key Benefit Is You Can Save Money, Save Lots Of Time & Making Best
          Of Resources.
        </p>
        <p className="text-sm md:text-sm lg:text-base">
          Nepal WebStudio is a comprehensive school management system that meets
          all your academic and administrative needs. From admissions to exams,
          fee collection, and payroll, Out Software streamlines processes, making
          school management hassle-free.
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full h-full gap-3 pb-10 text-center lg:pt-20">
        <div className="absolute inset-0 w-full h-full md:h-[120vh] lg:h-[160vh] overflow-hidden">
          <img
            src="/images/featuresbg1.svg"
            className="object-cover w-full h-full"
            alt="Background Product SVG"
          />
        </div>
        <div className="grid w-auto h-full grid-cols-1 gap-6 px-4 pt-72 lg:px-16 md:px-14 lg:pt-48 md:pt-56 lg:gap-y-12 lg:gap-x-5 lg:grid-cols-4 md:grid-cols-2 md:gap-x-5 md:gap-y-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col lg:gap-1 md:gap-2 gap-0 lg:pb-1 md:pb-2 text-center transition-transform duration-500 ease-in-out border lg:pt-5 border-gray-500 rounded-md shadow-sm cursor-pointer lg:w-auto lg:h-64 md:w-[40vw] md:h-full w-full h-[98%] hover:scale-105 transform-gpu hover:shadow-3xl hover:rotate-1 hover:-translate-y-3"
              style={{ backgroundColor: 'rgba(9, 251, 211, 0)' }}
            >
              <span className="text-xl text-black">{feature.icon}</span>
              <h2 className="text-sm font-bold text-black lg:text-lg md:text-base">
                {feature.title}
              </h2>
              <p className="pt-2 text-xs text-black md:px-2 lg:text-sm md:text-xs">
                {feature.description}
              </p>
              <div className="w-full py-4 lg:py-4 md:py-1">
                <button
                  onClick={() => handleNavigate(feature.id)}
                  className="lg:w-32 lg:h-9 md:w-28 md:h-8 h-7 w-24 text-white shadow-lg rounded-lg shadow-[#FB707073] bg-homeviolet md:text-sm text-xs font-semibold hover:bg-white hover:text-homeviolet hover:scale-110 transition-all ease-in-out duration-500 hover:shadow-slate-100"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesGrid;
