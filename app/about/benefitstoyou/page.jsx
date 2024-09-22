import AboutusBanner from "@/app/components/AboutusBanner";
import Footer from "../../components/Footer";
import whystudioData from "../../data/whystudioData";
import Faq from "../../Faq";
import Image from "next/image";
import StarRateIcon from '@mui/icons-material/StarRate';

export const metadata = {
  title: 'Home - School Management System',
  description: 'Welcome to the School Management System About Us page.',
};

export default function BenefitsToYou(){
    return(

        <div className="flex flex-col w-full h-full gap-10 overflow-x-hidden">
            <AboutusBanner/>
            <div className="w-full h-full">
                <div className="flex flex-col items-center justify-center gap-3 lg:gap-0 px-2 pt-4 md:px-5 lg:px-[2%]">
                    <h1 className="text-2xl text-center md:text-3xl lg:text-4xl">Benefits of Student Management Software</h1>
                    <div className="flex flex-col items-center w-full h-full gap-2 px-1 py-2 lg:px-5 md:px-3 md:gap-0 lg:flex-row ">
                        <div className="w-full px-2 lg:w-3/5">
                            <p className="text-sm text-center lg:text-2xl md:text-lg">The school management system proposes a common automated
                                platform for the school administration, learners, tutors, and parents with
                                salient benefits. It provides a cost-effective solution for campus and
                                school management. The implementation of the latest communication
                                techniques eases the communication process between parents, school
                                management, and students. The cloud-based school management
                                system provides security and safety to the information. Advanced
                                features lay the foundation for new-age learning methods and can
                                enhance the brand reputation.
                                Web studio Nepal provides the complete system of student management
                                software. It manages the entire campus operations administration. It
                                provides an interactive platform for all stake holder of the school like
                                Students, Teachers, Parents, Administrator and Management needs in a
                                personalized way.</p>
                        </div>
                        <div className="flex justify-center w-full lg:w-2/5">
                            <img src="/images/benefitsofstudentsystem.png" className="w-auto md:w-2/3 lg:w-full " alt=""/>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-full mt-16">
                    <div className="absolute inset-0 w-full h-[80vh] md:h-[100vh] lg:h-[150vh] overflow-hidden">
                        <img
                        src="/images/pricebg.svg"
                        className="object-cover w-full h-full"
                        alt="Background Product SVG"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col items-center justify-center lg:px-[25%] text-center md:gap-10 gap-5 lg:pt-10 md:px-[20%] px-[10%]">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl">
                                Benefits For Management, Paperless Campus and Cost-Effective Solutions
                            </h1>
                            <p className="text-base lg:text-xl md:text-lg">Web Studio Nepal- a powerful online School Management Software that can provide several strategic advantages to your schools.</p>

                        </div>
                        <div className="flex flex-col-reverse items-center justify-center w-full h-full px-1 py-2 md:py-10 lg:py-2 lg:px-24 md:px-6 md:flex-row">
                            <div className="w-full px-2 lg:w-3/5">
                                <ul className="px-3 space-y-1 md:space-y-2 lg:px-10">
                                    {[
                                    "Multiple campus management through single software with less investment in management issues.",
                                    "Complete automation of all operations with best utilization of resources.",
                                    "Effective communication between teachers, parents, management and students.",
                                    "Integrated solution to manage academic, administrative and business processes.",
                                    "Instant access to the information required for decision making.",
                                    ].map((text, index) => (
                                    <li key={index} className="flex items-start justify-start gap-2 text-base lg:text-xl md:text-lg">
                                        <StarRateIcon className=" text-homepink" />
                                        <span>{text}</span>
                                    </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex justify-center w-full lg:w-2/5">
                                <img src="/images/benefitsforschoolsoftware.png"  className="w-2/3 md:w-2/3 lg:w-full" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-5 pt-20 text-center lg:px-[22%] md:px-[15%] px-[5%] md:gap-10">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl">Benefits For The Administrators, Simple Integration, Solutions</h1>
                            <p className="text-base lg:text-xl md:text-lg">Web Studio Nepal- Student information system(SIS) has been designed for effectively controlling and functioning of all departments of the school.</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col w-full h-full gap-4 px-5 pt-16 md:gap-0 lg:px-14 md:px-5"> 
                    <div className="flex flex-col items-center justify-center gap-5 lg:gap-10 md:gap-5 md:flex-row">
                        <div className="flex flex-col w-full gap-3 md:gap-32 md:w-1/4">
                            <div className="flex flex-row py-3 bg-white shadow-xl rounded-xl">
                                <img src="/images/benefitsofadmincard.png" alt="" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-3 text-center lg:px-2 md:px-2">
                                    <StarRateIcon className=" text-homepink lg:size-12 md:size-6 size-8" />
                                    <p className="text-sm lg:text-base">User-Freindly Interface which require minimal IT skills.</p>
                                </div>
                            </div>
                            <div className="flex flex-row py-3 bg-white shadow-xl rounded-xl">
                                <img src="/images/benefitsofadmincard.png" alt="" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-3 text-center lg:px-2 md:px-2">
                                    <StarRateIcon className=" text-homepink lg:size-12 md:size-6 size-8" />
                                    <p className="text-sm lg:text-base">User-Freindly Interface which require minimal IT skills.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/4">
                            <img src="/images/benefitsofadmin.png" alt="" className=""/>

                        </div>
                        <div className="flex flex-col w-full gap-3 md:gap-32 md:w-1/4">
                            <div className="flex flex-row py-3 bg-white shadow-xl rounded-xl">
                                <img src="/images/benefitsofadmincard.png" alt="" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-3 text-center lg:px-2 md:px-2">
                                    <StarRateIcon className=" text-homepink lg:size-12 md:size-6 size-8" />
                                    <p className="text-sm lg:text-base">User-Freindly Interface which require minimal IT skills.</p>
                                </div>
                            </div>
                            <div className="flex flex-row py-3 bg-white shadow-xl rounded-xl">
                                <img src="/images/benefitsofadmincard.png" alt="" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-3 text-center lg:px-2 md:px-2">
                                    <StarRateIcon className=" text-homepink lg:size-12 md:size-6 size-8" />
                                    <p className="text-sm lg:text-base">User-Freindly Interface which require minimal IT skills.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full md:px-[33%] px-0">
                            <div className="flex flex-row w-full py-3 bg-white shadow-xl md:w-auto rounded-xl">
                                <img src="/images/benefitsofadmincard.png" alt="" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-3 text-center lg:px-2 md:px-2">
                                    <StarRateIcon className=" text-homepink lg:size-12 md:size-6 size-8" />
                                    <p className="text-sm lg:text-base">User-Freindly Interface which require minimal IT skills.</p>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="pt-10">
                    <div className="flex flex-col items-center justify-center gap-5 px-[10%] text-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl">Benefit For Teachers, Accomplished, Secure Solutions</h1>
                        <p className="text-base lg:text-xl md:text-lg">Web Studio Nepal- student management software(SMS) helps teachers to focus more on academic tasks and less on Time-consuming administrative functions.</p>
                    </div>
                    
                </div>
                
            </div>
            
            <Faq/>
            <Footer/>
        </div>
    )
}