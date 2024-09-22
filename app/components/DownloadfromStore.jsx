import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

export default function DownloadFromStore() {
    return (
        <>
            <div className="flex flex-row cursor-pointer sm:w-[90%] w-3/4 sm:gap-2 gap-0 pt-2 pb-0 pl-2 bg-black rounded-lg shadow-2xl lg:gap-8 md:gap-3 lg:pt-1 md:pt-2 md:w-auto lg:w-64 hover:bg-white hover:text-black group hover:scale-110 transition-all duration-500 ease-in-out">
            <img src="/images/googleplay.svg" className='lg:size-10 md:size-8 sm:size-7 size-5'/>
            <div className="text-left text-white transition-all duration-500 ease-in-out group-hover:text-black">
            <p className='text-xs scale-75 sm:scale-90 md:scale-100'>GET IT ON</p>
            <p className='text-base font-semibold scale-75 sm:scale-90 md:scale-100 md:text-lg lg:text-xl'> Google play</p>
            </div>
            </div>

            <div className="flex flex-row cursor-pointer sm:w-[90%] w-3/4 sm:gap-2 gap-0 pt-2 pb-0 pl-2 bg-black rounded-lg shadow-2xl lg:pt-1 md:pt-2 lg:gap-8 md:gap-3 lg:w-64 md:w-auto hover:bg-white hover:text-black group hover:scale-110 transition-all duration-500 ease-in-out">
            <FontAwesomeIcon icon={faApple} style={{fontSize:'2.6rem'}} className="pb-1 text-white transition-all duration-500 ease-in-out size-6 sm:size-8 md:size-10 lg:size-11 group-hover:text-black" />
            <div className="flex flex-col text-left text-white transition-all duration-500 ease-in-out group-hover:text-black">
            <p className='text-xs scale-75 sm:scale-90 md:scale-100'>Download on the</p>
            <p className='text-base font-semibold scale-75 sm:scale-90 md:scale-100 lg:text-xl md:text-lg'>App Store</p>
            </div>
            </div>
            </>
    
)
}