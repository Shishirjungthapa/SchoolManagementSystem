import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

function Productss() {
    return (
        <>
            <div className="relative flex flex-col w-full h-full gap-0 pb-32 mt-10 mb-32 overflow-hidden">
                {/* Top Section */}
                <div className="relative z-10 flex flex-col items-center w-full gap-2 px-20 sm:px-10 md:gap-6 lg:px-48 md:px-10">
                    <h1 className="text-xl font-semibold text-center lg:text-3xl md:text-2xl text-homeblue">Our Product</h1>
                    <h1 className="text-xl font-semibold text-center lg:text-3xl md:text-2xl text-homeblue">
                        School App, Parent App & Management App
                    </h1>
                </div>

                {/* Full SVG Background */}
                <div className="absolute inset-0 w-[110vw] sm:w-[90vw] md:w-[90vw] h-[80vh] sm:h-auto md:h-auto lg:w-[90vw]">
                    <img src="images/product3.svg" className="object-cover w-full h-full" alt="Background Product SVG" />
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-16 pt-2 pl-0 sm:pt-16 lg:pt-10 md:pt-16">

                    {/* Divided Section */}
                    <div className="relative z-10 flex flex-col items-center w-full pt-4 sm:pl-0 sm:pt-10 sm:flex-row md:flex-row justify-evenly lg:pt-10 md:pt-20 lg:flex-row lg:pr-0 lg:pl-0 md:pl-0 md:pr-2">
                        {/* Left Side: Text */}
                        <div className="flex flex-col w-5/6 gap-0 pt-10 pl-0 pr-10 -ml-14 sm:-ml-0 sm:gap-12 sm:pl-2 sm:w-1/2 sm:pr-12 md:pr-24 lg:pl-16 md:pl-7 md:w-1/2 lg:w-1/2">
                            <h1 className="text-sm font-medium text-left text-white scale-90 sm:scale-100 lg:text-xl md:text-base">
                                The Ultimate School ERP With Mobile App For Modern School System
                            </h1>
                            <p className="w-3/4 pr-3 text-sm font-normal text-left text-white scale-90 sm:pr-0 sm:w-full sm:scale-100 lg:text-xl md:text-base">
                                Our web-based School ERP system simplifies school management, saving you time and money while integrating on-premises apps and data. With built-in features and a School App, it offers a seamless, tech-driven administration experience. Plus, our Management App puts the entire school in the palm of your hand for effortless management.
                            </p>
                            <div className='flex flex-col w-2/3 gap-3 pr-5 sm:gap-4 sm:pr-0'>
                                <div className="flex flex-row cursor-pointer sm:w-[90%] w-3/4 sm:gap-2 gap-0 pt-2 pb-0 pl-2 bg-black rounded-lg shadow-xl lg:gap-8 md:gap-3 lg:pt-1 md:pt-2 md:w-auto lg:w-64">
                                    <img src="images/googleplay.svg" className='lg:size-10 md:size-8 sm:size-7 size-5'/>

                                    <div className="text-left text-white">
                                    <p className='text-xs scale-75 sm:scale-90 md:scale-100'>GET IT ON</p>
                                    <p className='text-base font-semibold scale-75 sm:scale-90 md:scale-100 md:text-lg lg:text-xl'> Google play</p>
                                    </div>
                                     

                                </div>
                                <div className="flex flex-row cursor-pointer sm:w-[90%] w-3/4 sm:gap-2 gap-0 pt-2 pb-0 pl-2 bg-black rounded-lg shadow-xl lg:pt-1 md:pt-2 lg:gap-8 md:gap-3 lg:w-64 md:w-auto">
                                    <FontAwesomeIcon icon={faApple} style={{fontSize:'2.6rem'}} className="pb-1 text-white size-6 sm:size-8 md:size-10 lg:size-11" />
                                    <div className="flex flex-col text-left text-white">
                                    <p className='text-xs scale-75 sm:scale-90 md:scale-100'>Download on the</p>
                                    <p className='text-base font-semibold scale-75 sm:scale-90 md:scale-100 lg:text-xl md:text-lg'>App Store</p>
                                    </div>

                                </div>

                            </div>
      
                        </div>

                        {/* Right Side: Image */}
                        <div className="flex justify-start w-2/5 ml-56 mr-0 -mt-64 sm:-mt-12 sm:ml-0 sm:mr-0 sm:w-2/5 lg:pt-36 md:pt-0 md:w-1/2 lg:w-1/2">
                            <img src="images/iphoneimg.png" className="lg:size-3/5 md:size-4/5 size-full" alt="iPhone App" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Productss;
