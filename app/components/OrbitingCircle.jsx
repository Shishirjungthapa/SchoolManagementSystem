import OrbitingCircles from "@/components/magicui/orbiting-circles";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex md:h-[800px] h-[600px] w-full flex-col items-center justify-center overflow-hidden">
      <span className="font-semibold leading-none text-center text-transparent whitespace-pre-wrap pointer-events-none bg-gradient-to-b from-black to-gray-300 bg-clip-text text-8xl dark:from-white dark:to-black">
        Clients
      </span>
      <div className="absolute border-2 rounded-full border-[#6640FF]" 
           style={{ width: '160px', height: '160px' }} // Set size based on radius
      ></div>
      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[65px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >

    <div className="flex items-end justify-center w-full h-16 overflow-hidden bg-[#EDF3E2] rounded-full ">
    <img src="/images/clientsimg1.png" alt="Image 1" className="object-cover w-auto h-auto" />
    </div>
    </OrbitingCircles>
      <OrbitingCircles
        className="size-[65px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
    <div className="flex items-end justify-center w-full h-16 overflow-hidden bg-[#FF77D9] rounded-full ">
    <img src="/images/clientsimg1.png" alt="Image 1" className="object-cover w-auto h-auto" />
    </div>
    </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <div className="absolute border-2 rounded-full border-[#6640FF]" 
           style={{ width: '380px', height: '380px' }} // Set size based on radius
      ></div>
      <OrbitingCircles
        className="size-[95px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
    <div className="flex items-end justify-center w-full h-24 overflow-hidden rounded-full bg-homeviolet ">
    <img src="/images/clientsimg1.png" alt="Image 1" className="object-cover w-auto h-auto" />
    </div>
     </OrbitingCircles>
      <OrbitingCircles
        className="size-[95px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
    <div className="flex items-end justify-center w-full h-24 overflow-hidden bg-[#6640FF] rounded-full ">
    <img src="/images/clientsimg1.png" alt="Image 1" className="object-cover w-auto h-auto" />
    </div>
    </OrbitingCircles>
    </div>
  );
}

