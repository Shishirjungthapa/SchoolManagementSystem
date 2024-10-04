import Navbar from "./navbar";

export default function AboutusBanner({ text }) {
  return (
    <div className="bg-gradient-to-r from-aboutbannerFirst to-aboutbannerSecond md:h-[60vh] h-[50vh] overflow-hidden">
      <Navbar />
      <div className="relative flex justify-center lg:px-[15%] md:px-[5%] px-[10%] lg:py-28 md:py-32 py-[40%]">
        <h1 className="text-xl text-center text-white lg:text-4xl md:text-3xl">
          {text}
        </h1>
      </div>
    </div>
  );
}
