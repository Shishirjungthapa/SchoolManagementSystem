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
            <AboutusBanner text="Web Studio Nepal- A Complete Student Management Software System"/>
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
                            <img src="/images/benefitsofstudentsystem.png" className="w-auto md:w-2/3 lg:w-full " alt="benefits for students"/>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-full mt-16">
                    <div className="absolute inset-0 w-full h-[80vh] md:h-[100vh] lg:h-[160vh] overflow-hidden">
                        <img
                        src="/images/pricebg.svg"
                        className="object-cover w-full h-full"
                        alt="benefits for schools"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col items-center justify-center lg:px-[10%] text-center md:gap-10 gap-5 lg:pt-10 md:px-[10%] px-[5%]">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl">Benefits For Management...</h1>
                                <p className="text-2xl md:text-3xl lg:text-4xl">Paperless Campus and Cost-Effective Solutions</p>
                            </div>
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
                                    <li key={index} className="flex items-start justify-start gap-2 text-base tracking-wide lg:text-xl md:text-lg ">
                                        <StarRateIcon className=" text-homepink" />
                                        <span>{text}</span>
                                    </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex justify-center w-full lg:w-2/5">
                                <img src="/images/benefitsforschoolsoftware.png"  className="w-2/3 md:w-2/3 lg:w-full" alt="benefits for schools" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-5 pt-20 text-center lg:px-[10%] md:px-[10%] px-[5%] md:gap-10">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl">Benefits For The Administrators...</h1>
                                <p className="text-2xl md:text-3xl lg:text-4xl">Simple Integration, Solutions</p>
                            </div>
                            <p className="text-base lg:text-xl md:text-lg">Web Studio Nepal- Student information system(SIS) has been designed for effectively controlling and functioning of all departments of the school.</p>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col w-full h-full gap-4 px-5 pt-16 md:gap-0 lg:px-14 md:px-5"> 
                    <div className="flex flex-col items-center justify-center gap-5 lg:gap-10 md:gap-5 md:flex-row">
                        <div className="flex flex-col w-full gap-3 md:gap-32 md:w-1/4">
                            <div className="flex flex-row py-3 bg-white shadow-xl rounded-xl">
                                <img src="/images/benefitsofadmincard.png" alt="benefits for administrator" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-3 text-center lg:px-2 md:px-2">
                                    <StarRateIcon className=" text-homepink lg:size-12 md:size-6 size-8" />
                                    <p className="text-sm lg:text-base">User-Freindly Interface which require minimal IT skills.</p>
                                </div>
                            </div>
                            <div className="flex flex-row py-3 bg-white shadow-xl rounded-xl">
                                <img src="/images/benefitsofadmincard.png" alt="benefits for administrator" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-3 text-center lg:px-2 md:px-2">
                                    <StarRateIcon className=" text-homepink lg:size-12 md:size-6 size-8" />
                                    <p className="text-sm lg:text-base">User-Freindly Interface which require minimal IT skills.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/4">
                            <img src="/images/benefitsofadmin.png" alt="benefits for administrator" className=""/>

                        </div>
                        <div className="flex flex-col w-full gap-3 md:gap-32 md:w-1/4">
                            <div className="flex flex-row py-3 bg-white shadow-xl rounded-xl">
                                <img src="/images/benefitsofadmincard.png" alt="benefits for administrator" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-3 text-center lg:px-2 md:px-2">
                                    <StarRateIcon className=" text-homepink lg:size-12 md:size-6 size-8" />
                                    <p className="text-sm lg:text-base">User-Freindly Interface which require minimal IT skills.</p>
                                </div>
                            </div>
                            <div className="flex flex-row py-3 bg-white shadow-xl rounded-xl">
                                <img src="/images/benefitsofadmincard.png" alt="benefits for administrator" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-3 text-center lg:px-2 md:px-2">
                                    <StarRateIcon className=" text-homepink lg:size-12 md:size-6 size-8" />
                                    <p className="text-sm lg:text-base">User-Freindly Interface which require minimal IT skills.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full md:px-[35%] px-0">
                            <div className="flex flex-row w-full py-3 bg-white shadow-xl md:w-auto rounded-xl">
                                <img src="/images/benefitsofadmincard.png" alt="benefits for administrator" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-3 text-center lg:px-2 md:px-2">
                                    <StarRateIcon className=" text-homepink lg:size-12 md:size-6 size-8" />
                                    <p className="text-sm lg:text-base">User-Freindly Interface which require minimal IT skills.</p>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="pt-10">
                    <div className="flex flex-col items-center justify-center gap-5 md:px-[10%] px-[5%] text-center">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl">Benefit For Teachers...</h1>
                            <p className="text-2xl md:text-3xl lg:text-4xl">Accomplished, Secure Solutions</p>
                        </div>
                        <p className="text-base lg:text-xl md:text-lg">Web Studio Nepal- student management software(SMS) helps teachers to focus more on academic tasks and less on Time-consuming administrative functions.</p>
                    </div>
                </div>
                <div className="relative flex flex-col w-full h-full gap-4 pt-20 md:gap-14">
                    <div className="flex items-center justify-center w-full lg:px-[41%] md:px-[38%] px-5">
                            <div className="flex flex-col items-center justify-center w-full gap-0 py-3 bg-white shadow-xl md:py-3 md:gap-2 md:w-auto rounded-xl">
                                <img src="/images/benefitsforteachericon.png" alt="benefits for admin" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-1 py-1 text-center lg:px-2 md:px-2">
                                    <p className="text-lg text-black md:text-2xl">1</p>
                                    <p className="text-sm lg:text-base">Manage online exams, assignment, projects, and forums..</p>
                                </div>
                            </div>
                    </div>
                     
                    <div className="relative flex flex-col items-center justify-center gap-5 lg:gap-10 md:gap-5 md:flex-row">
                    <div className="absolute inset-0 w-full h-[60vh] md:h-[100vh] lg:h-[160vh] overflow-hidden">
                            <img
                            src="/images/pricebg.svg"
                            className="object-cover w-full h-full"
                            alt="benefits for schools"/>
                    </div>

                        <div className="relative flex flex-col w-full gap-3 md:gap-32 md:w-1/4 lg:px-[3%] md:ml-10 ml-0 px-5">
                            <div className="flex flex-col items-center justify-center py-3 bg-white shadow-xl rounded-xl">
                                <img src="/images/benefitsforteachericon.png" alt="benefits for administrator" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-1 text-center lg:px-2 md:px-2">
                                    <p className="text-lg text-black md:text-2xl">2</p>
                                    <p className="text-sm lg:text-base">Manage online exams, assignment, projects, and forums.</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center py-3 bg-white shadow-xl rounded-xl">
                                <img src="/images/benefitsforteachericon.png" alt="" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-1 text-center lg:px-2 md:px-2">
                                    <p className="text-lg text-black md:text-2xl">3</p>
                                    <p className="text-sm lg:text-base">User-Freindly Interface which require minimal IT skills.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-2/4">
                            <img src="/images/benefitsforteacher.png" alt="benefits for teachers" className="w-10/12"/>
                        </div>

                        <div className="relative flex flex-col w-full gap-3 md:gap-32 md:w-1/4 lg:px-[3%] md:mr-10 mr-0 px-5">
                            <div className="flex flex-col items-center justify-center py-3 bg-white shadow-xl rounded-xl">
                                <img src="/images/benefitsforteachericon.png" alt="" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-1 text-center lg:px-2 md:px-2">
                                    <p className="text-lg text-black md:text-2xl">4</p>
                                    <p className="text-sm lg:text-base">Manage online exams, assignment, projects, and forums.</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center py-3 bg-white shadow-xl rounded-xl">
                                <img src="/images/benefitsforteachericon.png" alt="" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-1 text-center lg:px-2 md:px-2">
                                    <p className="text-lg text-black md:text-2xl">5</p>
                                    <p className="text-sm lg:text-base">User-Freindly Interface which require minimal IT skills.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative items-center justify-center w-full lg:px-[41%] md:px-[38%] px-5">
                            <div className="flex flex-col items-center justify-center w-full py-3 bg-white shadow-xl md:w-auto rounded-xl">
                                <img src="/images/benefitsforteachericon.png" alt="" className="lg:size-24 md:size-16 size-20"/>
                                <div className="flex flex-col items-center justify-center px-1 text-center lg:px-2 md:px-2">
                                    <p className="text-lg text-black md:text-2xl">6</p>
                                    <p className="text-sm lg:text-base">User-Freindly Interface which require minimal IT skills.</p>
                                </div>
                            </div>
                    </div>
                    <div className="pt-36">
                        <div className="flex flex-col items-center justify-center gap-5 md:px-[10%] px-[5%] text-center">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl">Benefit For Parents...</h1>
                                <p className="text-2xl md:text-3xl lg:text-4xl">Reliable, Hand Solutions</p>
                            </div>
                            <p className="text-base lg:text-xl md:text-lg px-[3%]">Using the online portal increases direct interaction with school by which
                                parents can get necessary information any time anywhere. Parent Portal
                                also saves time, money, and satisfy the need for a complete student
                                information system (SIS).
                            </p>
                        </div>

                    </div>
                </div>
                <div className="relative flex flex-col">
                    <div className="relative flex flex-col-reverse items-center justify-center w-full h-full px-1 py-2 md:pt-10 md:pb-4 lg:pb-2 lg:pt-10 lg:px-20 md:px-2 md:flex-row-reverse">
                                <div className="w-full px-2 lg:w-3/5">
                                    <ul className="px-3 space-y-1 md:space-y-2 lg:px-10">
                                        {[
                                        "Active participation in school activities.",
                                        "Get detail school events and holidays calendar.",
                                        "Regular instant update on child attendance, progress, and fee payment.",
                                        "Tracking of child assignment.",
                                        "Prompt updates of circular, blog, news, discussion forums, image gallery."
                                        ].map((text, index) => (
                                        <li key={index} className="flex items-start justify-start gap-2 text-base tracking-wide lg:text-xl md:text-lg">
                                            <StarRateIcon className=" text-homepink" />
                                            <span>{text}</span>
                                        </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex justify-center w-full lg:w-2/5">
                                    <img src="/images/benefitsforparents.png"  className="w-2/3 md:w-2/3 lg:w-full" alt="benefits for parents" />
                                </div>
                    </div>
                    <div className="relative inset-0 w-full h-auto overflow-hidden">
                        <img
                        src="/images/benefitsforyouwave1.svg"
                        className="object-cover w-auto h-auto -mt-3"
                        alt="benefits for parents"/>
                    </div>
                </div>
                <div className="flex flex-col -mt-10 md:-mt-10 lg:-mt-32 ">
                    <div className="">
                        <div className="flex flex-col items-center justify-center gap-5 md:px-[10%] px-[5%] text-center">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl">Benefit For Students...</h1>
                                <p className="text-2xl md:text-3xl lg:text-4xl">Timely, Convenient Solutions</p>
                            </div>
                            <p className="text-base lg:text-xl md:text-lg px-[3%]">With Web studio Nepal student data management system ,
                                 we provide an easy and user-friendly way to access to the most accurate
                                  and up-to-date information in real time.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="relative flex flex-col">
                            <div className="relative flex flex-col-reverse items-center justify-center w-full h-full px-1 py-2 md:pt-10 md:pb-4 lg:pb-2 lg:pt-10 lg:px-20 md:px-2 md:flex-row">
                                    <div className="w-full px-2 lg:w-3/5">
                                        <ul className="px-3 space-y-1 md:space-y-2 lg:px-10">
                                            {[
                                            "Enhanced interaction with teachers and peers",
                                            "Online submission of homework, assignments, and projects.",
                                            "Information regarding school calendar, announcements, news.",
                                            "Get connected with alumni.",
                                            "Access to attendance, timetable, marks, grades, examination schedule and books catalog",
                                            "Liberty to publish articles and views, and participate in discussion forums."
                                            ].map((text, index) => (
                                            <li key={index} className="flex items-start justify-start gap-2 text-base tracking-wide lg:text-xl md:text-lg">
                                                <StarRateIcon className=" text-homepink" />
                                                <span>{text}</span>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex justify-center w-full lg:w-2/5">
                                        <img src="/images/benefitsforstudents.png"  className="w-2/3 md:w-2/3 lg:w-full" alt="benefits for parents" />
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="relative w-full h-full bg-[#6551D4] bg-opacity-15 md:mt-4 mt-10">
                    <div className="w-full">
                        <img
                            src="/images/benefitsforyouwave2.svg"
                            alt="Wave Background"
                            className="w-full"
                        />

                    </div>
                    <div className="flex flex-row items-center justify-center py-10">
                        <div className="flex items-center justify-center w-1/3 -mt-5 md:w-1/2">
                            <img src="/images/callusnowimg.png" className=" md:size-3/4 size-full" alt="">
                            </img>
                        </div>
                        <div className="flex flex-col items-start pl-3 md:pl-0 justify-center text-left md:w-1/2 w-2/3 gap-2 lg:gap-5 md:gap-3 md:px-[2%] px-1">
                        <h1 className="text-lg font-semibold md:text-xl lg:text-3xl">Join Hands With Nepal's Top-Rated Student Management System (SMS)</h1>
                        <p className="text-base md:text-lg lg:text-2xl">Schedule a Free Demo today!</p>
                        <button className="md:w-40 w-32 md:h-8 h-7 text-white shadow-lg rounded-xl shadow-[#FB707073] bg-homeviolet md:text-base text-sm font-semibold hover:bg-white hover:text-homeviolet hover:scale-110 transition-all ease-in-out duration-500 hover:shadow-slate-100">Call Now</button>
                        

                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className="-mt-5 lg:-mt-36 md:-mt-24">
            <Faq/>
            <Footer/>

            </div>
            

        </div>
    )
}