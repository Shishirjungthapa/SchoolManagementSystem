import AboutusBanner from "@/app/components/AboutusBanner";
import Footer from "../../components/Footer";
import whystudioData from "../../data/whystudioData";
import Faq from "../../Faq";
import Image from "next/image";
import DownloadFromStore from "@/app/components/DownloadfromStore";
import studioFeaturesData from "@/app/data/studiofeaturesData";
export const metadata = {
  title: 'Home - School Management System',
  description: 'Welcome to the School Management System About Us page.',
};

export default function WhyWebStudio(){
    return(

        <div className="flex flex-col w-full h-full gap-10 overflow-x-hidden">
            <AboutusBanner/>
            <div className="w-full h-full">
                <div className="flex flex-col items-center justify-center gap-20 px-5 lg:px-14 md:px-8">
                    <h1 className="text-xl font-semibold text-center lg:text-3xl md:text-2xl">Why Web Studio Nepal ERP Software?</h1>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-2 lg:gap-10 md:gap-8">
                        {whystudioData.map((data, index)=>(
                            <div key={index} className="relative z-10 flex flex-col items-center w-full h-full gap-5 px-3 py-5 transition-all duration-500 ease-in-out cursor-pointer hover:shadow-lg md:px-3 lg:px-2 lg:h-96 md:h-auto md:py-8 lg:py-10 rounded-2xl hover:scale-110 hover:bg-homeviolet group">
                                <Image src={data.image}
                                height={100}
                                width={100}  
                                alt={data.title} className="md:size-20 lg:size-24 size-14"/>
                                
                                <h1 className="text-sm font-semibold text-center text-black lg:text-lg md:text-base group-hover:text-white">{data.title}</h1>
                                <p className="text-xs text-center text-textMain lg:text-base md:text-sm group-hover:text-white">{data.description}</p>
                            </div>


                        ))}
                        

                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full gap-5 pt-10 mt-5 md:flex-row md:gap-0"> 
                    <div className="flex items-center justify-center w-full md:pb-24 md:pl-10 md:w-2/5">
                    <img src='/images/whystudiophone1.png' className="w-1/3 md:w-3/5" alt=""/>

                    </div>
                    <div className="flex flex-row w-[70%] h-full gap-2 md:flex-col md:pl-0 lg:w-auto md:w-[20%]">
                    <DownloadFromStore/>
                    </div>
                    <div className="flex items-center justify-center w-full md:pt-24 md:pr-10 md:w-2/5">
                    <img src='/images/whystudiophone2.png' className="w-1/3 md:w-3/5" alt=""/>

                    </div>

                </div>
                <div className="flex flex-col items-center justify-center gap-2 px-10 text-center lg:px-28 md:px-24 pt-14 ">
                    <h1 className="text-xl font-semibold md:text-2xl">Why Choose Web Studio Nepal School ERP Software?</h1>
                    <p className="text-xl font-medium md:text-2xl text-homeblue">What we Offer</p>
                    <p className="text-lg font-medium md:text-xl">The innovative school ERP software breaks the hurdles of traditional
                        learning making it an apt school for millennials. It has everything that will
                        manage both administrative and non-administrative tasks resulting in
                        increased productivity, efficiency, and ROI. The striking features of the
                        software make it a new buzzword in the education industry.
                    </p>
                </div>
                <div className="relative w-full h-full mt-16">
                    <div className="absolute inset-0 w-full h-[80vh] md:h-[100vh] lg:h-[150vh] overflow-hidden">
                        <img
                        src="/images/pricebg.svg"
                        className="object-cover w-full h-full"
                        alt="Background Product SVG"/>
                    </div>
                    <div className="relative grid h-full grid-cols-2 gap-5 px-6 pt-20 lg:gap-10 md:gap-8 lg:px-16 md:px-10 md:grid-cols-3">
                        {studioFeaturesData.map((data, index) =>(
                            <div key={index} className="flex flex-col items-center justify-center w-auto h-full gap-5 px-6 py-3 bg-white shadow-xl lg:py-8 md:py-6 rounded-xl md:h-72" >
                                <h1 className="text-sm font-semibold text-center md:text-base lg:text-xl">{data.title}</h1>
                                <p className="text-xs font-medium text-center lg:text-base md:text-sm">{data.description}</p>
                                </div>

                        ))}
                    </div>
                    
                </div>
            </div>
            <div className="relative"> 
                <Faq/>

            </div>
            <Footer/>
        </div>
    )
}