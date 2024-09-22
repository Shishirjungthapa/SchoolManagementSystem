"use client";

import AccordionCommon from "./components/Accordion1";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccordionTechnical from "./components/Accordion2";
import relatedTopics from './data/relatedtopicData';
import Link from "next/link";

function Faq() {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center h-auto pt-8 pb-8 mt-10 font-semibold bg-white gap-9 md:mt-60">
                
                {/* Container for text positioning */}
                <div className="relative flex flex-col items-center justify-center w-full h-32">
                    {/* Large "Support" text in the background */}
                    <h1 className="absolute lg:pt-1 md:pt-5 pt-6 top-0 lg:text-8xl md:text-7xl text-6xl font-extrabold opacity-15 text-[#09FBD3]">
                        Support
                    </h1>

                    {/* Heading "How Can We Help?" positioned on top */}
                    <h1 className="relative z-10 text-xl font-bold text-gray-700 md:text-3xl">
                        How Can We Help?
                    </h1>
                </div>

                {/* Input Field with Icon */}
                <div className="relative z-10 w-3/5">
                    <input
                        placeholder="Ask a question"
                        type="text"
                        className="w-full px-4 py-4 text-base border rounded-md border-homepink focus:outline-none focus:ring-1 focus:ring-homeviolet"
                    />
                    <SearchOutlinedIcon
                        className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2"
                        fontSize="medium"
                    />
                </div>

                <div className="flex flex-col justify-center w-3/4 gap-16 pb-20 mt-12 md:flex-row">
                    {/* Card 1 */}
                    <div className="relative w-auto cursor-pointer md:w-1/3 group">
                        {/* Bottom Card (rotated) */}
                        <div className="absolute inset-0 z-0 w-full md:h-64 h-32 transform bg-transparent border border-[#651FFF] rounded-lg shadow-lg -rotate-6 mt-3"></div>
                        {/* Top Card */}
                        <div className="relative z-10 w-auto md:h-64 h-32 bg-transparent border border-[#651FFF] rounded-lg shadow-xl ml-4 group-hover:transform group-hover:rotate-3 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500 ease-in-out group-hover:bg-homeblue group-hover:bg-opacity-90">
                            <img 
                                src="/images/faqblog.svg" 
                                className="absolute h-24 transition-all duration-500 ease-in-out transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 lg:h-40 md:h-28 group-hover:scale-125"
                                style={{ top: '5%' }}
                            />
                            <div className="px-2 text-center pt-14 lg:pt-32 lg:px-5 md:pt-24 md:px-4">
                                <h3 className="md:text-lg text-base font-bold text-[#651FFF] transition-all duration-500 ease-in-out group-hover:text-[#651FFF]">Visit Our Blog</h3>
                                <p className="mt-2 text-xs text-gray-700 transition-all duration-500 ease-in-out md:text-sm group-hover:text-white">This is the top card content.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative w-auto cursor-pointer md:w-1/3 group">
                        {/* Bottom Card (rotated) */}
                        <div className="absolute inset-0 z-0 w-full md:h-64 h-32 transform bg-transparent border border-[#00E5FF] rounded-lg shadow-lg -rotate-6 mt-3"></div>
                        {/* Top Card */}
                        <div className="relative z-10 w-auto md:h-64 h-32 bg-transparent border border-[#00E5FF] rounded-lg shadow-xl ml-4 group-hover:transform group-hover:rotate-3 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500 ease-in-out group-hover:bg-[#651FFF] group-hover:bg-opacity-90">
                            <img 
                                src="/images/faqguide.svg" 
                                className="absolute h-24 transition-all duration-500 ease-in-out transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:h-28 lg:h-40 group-hover:scale-125"
                                style={{ top: '5%' }}
                            />
                            <div className="px-2 text-center pt-14 lg:pt-32 lg:px-5 md:pt-24 md:px-4 ">
                                <h3 className="md:text-lg text-base font-bold text-[#00E5FF] transition-all duration-500 ease-in-out group-hover:text-[#00E5FF]">Developer Guide</h3>
                                <p className="mt-2 text-xs text-gray-700 transition-all duration-500 ease-in-out md:text-sm group-hover:text-white">This is the top card content.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative w-auto cursor-pointer md:w-1/3 group">
                        {/* Bottom Card (rotated) */}
                        <div className="absolute inset-0 z-0 w-full md:h-64 h-32 transform bg-transparent border border-[#FF4081] rounded-lg shadow-lg -rotate-6 mt-3"></div>
                        {/* Top Card */}
                        <div className="relative z-10 w-auto md:h-64 h-32 bg-transparent border border-[#FF4081] rounded-lg shadow-xl ml-4 group-hover:transform group-hover:rotate-3 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500 ease-in-out group-hover:bg-homeviolet group-hover:bg-opacity-90">
                            <img 
                                src="/images/faqhelp.svg" 
                                className="absolute h-24 transition-all duration-500 ease-in-out transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:h-28 lg:h-40 group-hover:scale-125"
                                style={{ top: '5%' }}
                            />
                            <div className="px-2 text-center pt-14 lg:pt-32 lg:px-5 md:pt-24 md:px-4 ">
                                <h3 className="md:text-lg text-base font-bold text-[#FF4081] transition-all duration-500 ease-in-out group-hover:text-homepink">Ask For Help</h3>
                                <p className="mt-2 text-xs text-gray-700 transition-all duration-500 ease-in-out md:text-sm group-hover:text-white">This is the top card content.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Accordion Component */}
                <div className='relative flex flex-col w-full h-full px-10 py-0 pb-5 mt-0 md:py-20 md:px-10 lg:px-40 overflow-x-clip'>
                    <div className="absolute inset-0 w-[110vw] sm:w-[90vw] md:w-[99vw] h-[80vh] sm:h-auto md:h-auto lg:h-[160vh] lg:w-[98.9vw] overflow-x-hidden">
                        <img src="/images/pricebg.svg" className="object-cover w-full h-full" alt="Background Product SVG" />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-full gap-2 md:flex-row">
                        <div className="w-1/2 md:w-2/5">
                        <img src="/images/faqstudent.png" className="w-auto h-auto"/>

                        </div>
                        <div className="w-auto md:w-4/5">
                        <AccordionCommon />

                        </div>
                    </div>
                    <div className="flex flex-col-reverse items-center justify-center w-full h-full gap-2 lg:-mt-14 md:flex-row">
                        <div className="w-full md:w-2/5">
                            <div className="flex flex-col gap-4 pl-0 pr-2 text-textMain">
                            <h1 className="text-lg font-semibold text-gray-800 md:text-xl">Related Topic</h1>
                            
                            <div className="space-y-2">
                                {relatedTopics.map((relatedTopic, index)=> (
                                    <Link key={index} href={relatedTopic.link} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-4 text-base scale-100 cursor-pointer md:text-sm lg:text-lg hover:text-homeviolet">
                                        {relatedTopic.title}
                                    </Link>
                                ))}
 
                            </div>
                            </div>
                        </div>
                        <div className="w-auto md:w-4/5">
                        <AccordionTechnical/>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;
