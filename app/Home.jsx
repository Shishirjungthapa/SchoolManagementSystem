import Navbar from "./components/navbar";
import FeaturesGrid from "./Feature"; 
import PriceList from "./Pricing";
import Faq from "./Faq";
import Testemonial from "./Testimonial";
import Service from "./Service";
import Productss from "./Productss";
import Footer from "./components/Footer";

export const metadata = {
  title: 'School Management System',
  description: 'Welcome to the School Management System home page.',
  // Add more metadata here as needed
};
function Home() {

    return (
      <>
      <div className="">
        <div className="w-full h-screen overflow-hidden bg-center bg-no-repeat bg-cover gap-y-10" style={{backgroundImage: `url("/images/wavebg.svg")`}}>
        <Navbar/>
            <div className="relative flex flex-col-reverse w-full h-full pb-12 mt-10 overflow-x-hidden md:-mt-4 md:h-4/5 justify-evenly md:flex-row lg:flex-row md:justify-evenlly">
              <div className="relative z-0 flex flex-col pl-6 pr-4 text-center text-white md:pr-0 md:pl-8 pt-7 md:pt-28 h-2/3 lg:w-4/5 md:w-4/5 lg:h-full md:h-2/3 lg:gap-y-10 md:gap-y-6 gap-y-5">
                <div className="flex flex-row items-center gap-3 md:gap-5">
                  <h1 className="text-base font-normal text-left text-white md:text-lg lg:text-xl">Education is Our Priority</h1>
                  <img src='/images/scholar.svg' className="lg:size-10 md:size-7 size-6" alt="scholar icon"/>
                </div>
                <h1 className="w-full text-2xl font-normal text-left text-white md:text-3xl lg:text-5xl lg:w-full md:w-auto">School Management System With Secure Cloud Storage</h1>
                <h1 className="w-full text-sm font-light text-left text-white md:text-base lg:text-lg md:w-3/4 lg:w-full">Appropriate and suitable for all kinds of schools, college, university, institution and learners, teachers and instructors.</h1>
                <div className="flex flex-row md:flex-row gap-x-8">
                <button className="flex flex-row items-center gap-5 px-2 py-1 text-base font-medium lg:text-xl md:text-base rounded-3xl hover:bg-white hover:text-primary md:w-52 lg:w-56" > <img src='images/Group.svg' className=" text-[#9C27B0] lg:size-11 md:size-9 size-8 " alt="Group icon"/> WATCH VIDEO</button>
                <button className="h-10  lg:text-lg text-sm font-medium text-white bg-homepink duration-500 ease-in-out rounded-3xl w-32 md:text-base lg:w-40 lg:h-12 md:w-32 md:h-11 shadow-md hover:bg-gradient-to-r from-[#F5365C] to-[#FB6340] hover:text-white hover:shadow-xl shadow-slate-500 hover:scale-110 hover:transition-transform">GET STARTED</button>
                </div>
              </div>
              <div className="w-auto pt-3 overflow-hidden lg:mt-10 md:mt-0 h-1/3 lg:h-auto md:h-auto md:w-3/5 lg:w-2/5">
                <img src='/images/student.svg' className="w-full h-full scale-90 md:scale-110" alt="Student illustration"/>
              </div>
            </div>
        </div>
        <div className="flex flex-col w-auto h-full min-w-full gap-10 pt-1 pb-12 pl-4 pr-3 overflow-hidden bg-center bg-no-repeat bg-cover md:pl-5 md:gap-8 lg:gap-14 lg:pl-10" style={{backgroundImage: `url("/images/scalebusiness.svg")`}}>
              <div className="flex flex-row justify-center gap-2">
                <h1 className="text-3xl text-center lg:text-5xl md:text-4xl text-slate-600">Scale Your</h1>
                <h1 className="text-3xl text-center lg:text-5xl md:text-4xl text-homeviolet">Business</h1>
              </div>
              <div className="flex justify-center w-full pl-1 pr-2 lg:pl-3 lg:pr-8 md:pl-2 md:pr-5">
                <p className="w-5/6 text-center md:w-2/3">Nepal Web Studio's School Management System revolutionizes education with cutting-edge, user-friendly technology, trusted by 1600+ global clients for over 22 years. Our software combines essential features with affordability to elevate educational institutions.</p>
              </div>
              <div className="flex flex-row justify-center gap-0">
                <div className="flex flex-col items-center gap-2 p-2 border-t-2 border-r-2 border-gray-300 md:gap-4 lg:p-7 md:p-4 ">
                  <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl ">20+</h1>
                  <h1 className="text-sm text-center md:text-base lg:text-xl">Successful Years</h1>
                </div>
                <div className="flex flex-col items-center gap-2 p-2 border-t-2 border-gray-300 md:gap-4 lg:p-7 md:p-4 ">
                  <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">96%</h1>
                  <h1 className="text-sm text-center md:text-base lg:text-xl">Client Retention</h1>
                </div>
                <div className="flex flex-col items-center gap-2 p-2 border-t-2 border-l-2 border-gray-300 md:gap-4 lg:p-7 md:p-4">
                  <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">2500+</h1>
                  <h1 className="text-sm text-center md:text-base lg:text-xl">Verified Reviews</h1>
                </div>
                <div className="flex flex-col items-center gap-2 p-2 border-t-2 border-l-2 border-gray-300 md:gap-4 lg:p-7 md:p-4">
                  <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">1600+</h1>
                  <h1 className="text-sm text-center md:text-base lg:text-xl">Happy Clients</h1>
                </div>
              </div>
        </div>
        <FeaturesGrid/>
        <Service/>
        <Productss/>
        <PriceList/>
        <Faq/>
        <Testemonial/>
        <Footer/>
      </div>  
      </>
    )
  }
  
  export default Home;