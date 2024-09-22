import features from './data/featuresData';


function FeaturesGrid() {
  return (
    <div className="flex flex-col items-center w-full h-full gap-10 pt-10 pb-16 overflow-x-hidden overflow-y-hidden bg-transparent ">
          <div className='flex flex-col pt-4 lg:pt-10 md:pt-7 items-center h-full lg:min-w-[1600px]  md:min-w-[1400px] min-w-[850px] w-full gap-3 text-center bg-no-repeat bg-cover lg:min-h-56 md:min-h-44 min-h-32 lg:gap-8 md:gap-4' style={{backgroundImage: `url("/images/featuresbg2.1.svg")`}}>
              <h1 className="text-3xl font-semibold text-homeviolet lg:text-5xl md:text-4xl">Features</h1>
              <h1 className='w-2/5 px-1 font-sans text-sm font-semibold text-center md:px-1 md:w-1/3 lg:text-lg md:text-base text-textMain'>The Key Benefit Is You Can Save Money, Save Lots Of Time & Making Best Of Resources.</h1>
          </div>

          <div className='w-auto h-auto px-10 text-center bg-white sm:pt-14 lg:px-60 md:px-28'>
              <p className='text-sm md:text-sm lg:text-base'>Nepal WebStudio  is a comprehensive school management system that meets all your academic and administrative needs. From admissions to exams, fee collection, and payroll, Vidyalaya streamlines processes, making school management hassle-free.</p>
          </div>
        
        <div className="flex flex-col items-center justify-center -mt-28 md:mt-0 h-full lg:min-w-[1600px]  md:min-w-[1800px] min-w-[2200px] w-full gap-3 text-center bg-no-repeat bg-cover lg:min-h-[1000px] md:min-h-[950px] min-h-[1000px]" style={{backgroundImage: `url("/images/featuresbg1.svg")`}}>
          <div className="grid w-auto h-full grid-cols-1 gap-6 px-20 pt-60 lg:pt-48 md:pt-52 lg:gap-y-12 lg:gap-x-5 lg:grid-cols-4 md:grid-cols-2 md:gap-x-5 md:gap-y-5">
              {features.map((feature, index) =>(
                        <div key={index} className="p-3 transition-transform duration-500 ease-in-out border border-gray-500 rounded-md shadow-sm cursor-pointer h-28 w-[74vw] lg:h-80 lg:w-[19vw] md:h-44 md:w-72 hover:scale-105 transform-gpu hover:shadow-3xl hover:rotate-1 hover:-translate-y-3" style={{ backgroundColor: 'rgba(9, 251, 211, 0)' }}>
                          <div className='flex flex-row gap-5'>
                          <span className='text-black'>{feature.icon}</span>
                          <h2 className="text-base font-bold text-black lg:text-xl md:text-lg">{feature.title}</h2>
                          </div>

                          <p className='pt-3 text-xs text-left text-black lg:text-base md:text-sm'>{feature.description}</p>
                        </div>
              ))}
          </div>
          <div className='w-full py-10 lg:py-8 md:py-10'>
            <button className='w-40 h-10 text-white shadow-lg rounded-xl shadow-[#FB707073] bg-homeviolet text-base font-semibold'>Learn More</button>

          </div>
          </div>
        
    </div>
  );
}

export default FeaturesGrid;
