import AboutusBanner from "@/app/components/AboutusBanner";
import Footer from "../../components/Footer";
import { OrbitingCirclesDemo } from "../../components/OrbitingCircle";
import studioData from "../../data/aboutstudioData";
import Faq from "../../Faq";
export const metadata = {
  title: 'Home - School Management System',
  description: 'Welcome to the School Management System About Us page.',
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col w-full h-full gap-10">
      {/* Banner Section */}
      <AboutusBanner/>
      {/* About Section */}
      <div className="flex flex-col gap-10 pb-10">
        <div className="flex flex-row justify-start lg:gap-5 md:gap-4 gap-2 lg:pl-[8%] md:pl-[6%] pl-[3%] pt-14">
          <h1 className="text-2xl font-medium text-textMain lg:text-6xl md:text-5xl">About</h1>
          <h1 className="text-2xl font-medium text-homeviolet lg:text-6xl md:text-5xl">Web Studio Nepal</h1>
        </div>
        <div className="lg:px-[8%] md:px-[5%] px-[3%] flex md:gap-10 gap-5 flex-col">
          {studioData.map((data, index) => (
            <div key={index} className={`flex ${data.alternate ? "md:flex-row flex-col" : "md:flex-row-reverse flex-col"}`}>
              <div className="flex justify-center w-full md:w-1/3">
                <img src={data.image} className="object-contain w-3/5 h-3/5 md:h-full md:w-full" alt={data.title} />
              </div>
              <div className="flex flex-col w-full gap-1 px-4 py-1 text-center md:w-2/3 lg:py-5 md:py-3 lg:gap-4 md:gap-3 lg:px-10 md:px-4 rounded-xl bg-opacity-15 bg-aboutgreen">
                <h1 className="text-xl font-medium lg:text-4xl md:text-2xl text-homeviolet">{data.title}</h1>
                <p className="text-xs font-medium text-justify lg:text-xl md:text-sm">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative mt-40">
        <div className="absolute inset-0 w-full h-[80vh] md:h-[100vh] lg:h-[160vh] overflow-hidden">
          <img
            src="/images/pricebg.svg"
            className="object-cover w-full h-full"
            alt="Background Product SVG"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center h-full">
          <img
            src="/images/aboutchoose.png"
            className="object-cover w-full h-auto -mt-20 md:-mt-44"
            alt="Why Choose Us"
          />
          <div className="absolute bottom-0 px-5 py-2 -mb-12 text-center bg-white rounded-md shadow-md md:mt-0 lg:mt-0 lg:mb-10 md:mb-0 lg:py-8 md:py-5 md:px-16 lg:px-28 md:rounded-xl">
            <p className="text-xs font-semibold lg:text-xl md:text-lg">Why Choose Web Studio Nepal</p>
          </div>
        </div>
        <div className="flex flex-col w-full h-full gap-0 pt-20 pb-10 md:pb-0 md:gap-10 lg:pt-10 md:pt-14">
          <div className="flex flex-col w-full h-full gap-4 py-10 md:flex-row lg:gap-0 md:gap-5">
            <div className="flex flex-row w-full gap-20 px-5 md:flex-col md:w-2/5 lg:gap-32 md:gap-24 lg:px-20 md:px-10">
              <div className="flex flex-col items-center gap-3 md:items-end">
                <img src="/images/whychoosefeature.png" className="lg:size-10 md:size-8 size-5"/>
                <h1 className="text-sm font-semibold text-center uppercase md:text-right lg:text-lg md:text-base">Unlimited features</h1>
                <p className="text-xs text-center md:text-right lg:text-base md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sapiente consequatur atque distinctio modi</p>
              </div>
              <div className="flex flex-col items-center gap-3 md:items-end">
                <img src="/images/whychooseui.png" className="lg:size-10 md:size-8 size-5"/>
                <h1 className="text-sm font-semibold text-center uppercase md:text-right lg:text-lg md:text-base">Awesome UI Design</h1>
                <p className="text-xs text-center md:text-right lg:text-base md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sapiente consequatur atque distinctio modi</p>
              </div>
            </div>
            
            <div className="z-10 flex flex-col items-center justify-start w-auto md:w-1/5">
            <img src="/images/whychooseapp.png" className="drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] h-full lg:w-52 md:w-40 w-24"/>
            </div>
            
            <div className="flex flex-row w-full gap-20 px-5 md:w-2/5 md:flex-col lg:gap-32 md:gap-24 lg:px-20 md:px-10">
              <div className="flex flex-col items-center gap-3 md:items-start">
                <img src="/images/whychoosephone.png" className="lg:size-10 md:size-8 size-5"/>
                <h1 className="text-sm font-semibold text-center uppercase md:text-left lg:text-lg md:text-base">Ios and Android Version</h1>
                <p className="text-xs text-center md:text-left lg:text-base md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sapiente consequatur atque distinctio modi</p>
              </div>
              <div className="flex flex-col items-center gap-3 md:items-start">
                <img src="/images/whychoosescanner.png" className="lg:size-10 md:size-8 size-5"/>
                <h1 className="text-sm font-semibold text-center uppercase md:text-left lg:text-lg md:text-base">Retina Ready Graphics</h1>
                <p className="text-xs text-center md:text-left lg:text-base md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sapiente consequatur atque distinctio modi</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center lg:px-[38%] md:px-[27%] px-[20%] gap-3">
            <img src="/images/whychoosesupport.png" className="lg:size-10 md:size-8 size-5"/>
            <h1 className="text-sm font-semibold uppercase lg:text-lg md:text-base" >24/7 Support</h1>
            <p className="text-xs text-center lg:text-base md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sapiente consequatur atque distinctio modi</p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col mt-20">
        <div className="flex justify-center pt-10">
          <h1 className="text-2xl font-semibold text-black lg:text-5xl md:text-4xl">What Our Client Think About Us?</h1>
        </div>
        <div className="relative">
          <div className="absolute inset-0 w-full h-[80vh] md:h-[100vh] lg:h-[160vh] overflow-hidden">
            <img
              src="/images/aboutclientbg.svg"
              className="object-cover w-full h-full"
              alt="Background Product SVG"
            />
          </div>
          <div className="relative z-10">
            <OrbitingCirclesDemo/>
          </div>
        </div>
        <div className="relative w-full h-full lg:px-[30%] md:px-[20%] px-[10%]">
          <div className="flex flex-col items-center bg-white justify-center gap-2 shadow-xl py-[4%] pl-[3%] pr-[2%]">
          <p className="text-sm text-center md:text-base text-textMain">Build your financial literacy within a transparent community. Follow other investors, share insights with people from different professional backgrounds, and never be alone.</p>
          <p className="text-base font-bold md:text-lg">John Scotty</p>
          <p className="text-sm font-semibold md:text-base">Ui Designer</p>
          </div>
        </div>
      </div>
      <div className="-mt-20">
      <Faq/>
      </div>
      <Footer/>
    </div>
  );
}
