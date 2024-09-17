"use client"

import { useEffect, useState } from "react";
import testimonials from "./data/testimonialData";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex === testimonials.length -1 ? 0 : prevIndex + 1));
    };
    
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex === 0 ? testimonials.length -1 :prevIndex -1 )
        );
    };
    
    useEffect(() =>{
        
    })

    return (
        <>
            <div className="flex flex-col items-center justify-center h-auto gap-10 pt-8 pb-10 font-semibold bg-white">
                {/* Header with Arrows */}
                <div className="flex items-center justify-center w-full gap-10">
                    <ArrowBackIosNewOutlinedIcon
                        className="cursor-pointer"
                        onClick={handlePrev}
                    />
                    <h1 className="text-2xl font-bold text-gray-600 md:text-3xl lg:text-4xl">
                        What Our Clients Say About Us
                    </h1>
                    <ArrowForwardIosOutlinedIcon
                        className="cursor-pointer"
                        onClick={handleNext}
                    />
                </div>

                {/* Subtitle
                <p className="w-2/5 text-center">
                    Learn about our success stories from our users who have become our family
                    members and been using our service from the beginning
                </p> */}

                {/* Testimonial Content */}
                <div className="flex flex-row justify-center w-full h-full py-20 overflow-hidden">
                <div
                        className="flex px-10 transition-transform duration-500 ease-in-out transform"
                        style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} // Move by one-third on each slide
                    >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-shrink-0 w-[35%] pl-0 pr-5 pb-0 transition-all duration-300 hover:scale-110"
                        >
                            <div className="flex flex-col items-center w-11/12 h-full pt-10 pb-10 bg-white rounded-lg shadow-xl gap-x-10 ">
                                <div className="flex items-center justify-center w-32 h-32 overflow-hidden bg-red-400 rounded-full">
                                <img
                                    src={testimonial.image}
                                    className="object-cover w-full h-full" 
                                    alt="Testimonial"
                                />
                                </div>

                                <div className="flex flex-col w-10/12 gap-3 pt-8 pl-2 text-center">
                                <p className="text-lg font-bold text-gray-600">{testimonial.name}</p>
                                <p className="text-black">{testimonial.position}</p>
                                <span className="font-serif text-homegreen text-8xl">“</span>
                                <p className="text-base text-black">{testimonial.quote}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </>
    );
}

export default Testimonial;
