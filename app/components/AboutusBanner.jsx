import Navbar from "./navbar";

export default function AboutusBanner() {
    return (
        <div className="bg-gradient-to-r from-aboutbannerFirst to-aboutbannerSecond md:h-[60dvh] h-[50dvh]">
        <Navbar />
        <div className="relative flex justify-center lg:px-[25%] md:px-[5%] px-[10%] lg:py-28 md:py-32 py-48">
        <h1 className="text-xl text-center text-white lg:text-4xl md:text-3xl">
            Experience The Ultimate Wave Of Digitalization Through Web Studio Nepal School Software
        </h1>
        </div>
        </div>
    )
}