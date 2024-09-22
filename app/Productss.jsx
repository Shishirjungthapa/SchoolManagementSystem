
import DownloadFromStore from './components/DownloadfromStore';

function Productss() {
    return (
        <>
            <div className="relative flex flex-col w-full h-full gap-0 pb-32 mt-10 mb-32 overflow-hidden">
                {/* Top Section */}
                <div className="relative z-10 flex flex-col items-center w-full gap-2 px-[7%] sm:px-10 md:gap-6 lg:px-48 md:px-10">
                    <h1 className="text-xl font-semibold text-center lg:text-3xl md:text-2xl text-homeblue">Our Product</h1>
                    <h1 className="text-xl font-semibold text-center lg:text-3xl md:text-2xl text-homeblue">
                        School App, Parent App & Management App
                    </h1>
                </div>

                {/* Full SVG Background */}
                <div className="absolute inset-0 w-[110vw] sm:w-[90vw] md:w-[90vw] h-full sm:h-auto md:h-auto lg:w-[90vw]">
                    <img src="/images/product3.svg" className="object-cover w-full h-full" alt="Background Product SVG" />
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-16 pt-2 pl-0 sm:pt-16 lg:pt-10 md:pt-16">

                    {/* Divided Section */}
                    <div className="relative z-10 flex flex-col items-center w-full pt-0 sm:pl-0 sm:pt-10 sm:flex-row md:flex-row justify-evenly lg:pt-10 md:pt-20 lg:flex-row lg:pr-0 lg:pl-0 md:pl-0 md:pr-2">
                        {/* Left Side: Text */}
                        <div className="flex flex-col w-5/6 gap-0 pt-10 pl-0 pr-10 -ml-14 sm:-ml-0 sm:gap-8 sm:pl-2 sm:w-1/2 sm:pr-12 md:pr-24 lg:pl-16 md:pl-7 md:w-1/2 lg:w-1/2">
                            <h1 className="pr-[35%] text-sm font-medium text-justify text-white scale-90 md:text-left sm:scale-100 lg:text-xl md:text-base sm:pr-0 sm:mt-0 md:mt-0 mt-10">
                            The Ultimate School ERP With Mobile App For Modern School System
                            </h1>
                            <p className="w-3/4 pr-10 text-sm font-normal text-justify text-white scale-90 sm:pr-5 md:pr-0 lg:pr-0 sm:w-full sm:scale-100 lg:text-xl md:text-base">
                                Our web-based School ERP system simplifies school management, saving you time and money while integrating on-premises apps and data. With built-in features and a School App, it offers a seamless, tech-driven administration experience. Plus, our Management App puts the entire school in the palm of your hand for effortless management.
                            </p>
                            <div className='flex flex-col w-2/3 gap-3 pr-5 sm:gap-4 sm:pr-0'>
                                <DownloadFromStore/>
                            </div>
      
                        </div>

                        {/* Right Side: Image */}
                        <div className="flex justify-start w-2/5 ml-56 mr-0 -mt-64 sm:-mt-12 sm:ml-0 sm:mr-0 sm:w-2/5 lg:pt-36 md:pt-0 md:w-1/2 lg:w-1/2">
                            <img src="/images/iphoneimg.png" className="lg:size-3/5 md:size-4/5 size-full" alt="iPhone App" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Productss;
