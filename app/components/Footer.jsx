'use client';
import Image from "next/image";
import Tooltip from "./SocialmediaIcons";

function Footer() {
  return (
    <>
      <div className="relative">
        <div className="relative w-full bg-gradient-to-r from-primary to-secondary">
          <img
            src="/images/footerbg.svg"
            alt="Wave Background"
            className="w-full"
          />
        </div>

        <div className="flex flex-col px-0 py-8 text-white md:px-10 lg:px-20 bg-gradient-to-r from-primary to-secondary md:gap-y-16 gap-y-10">
          <div className="flex flex-row w-full h-auto gap-8 px-5 lg:gap-16 md:gap-8 justify-evenly lg:px-20 md:px-2">
            <div className="flex justify-start w-1/3 md:w-1/2">
              <Image
                src="/images/webstudionepal.png"
                alt="Web studio nepal"
                width={110}
                height={110}
                quality={100}
              />
            </div>
            <div className="w-2/3 md:w-1/2">
              <p className="text-sm lg:text-lg md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem deserunt voluptas aut tempore, omnis aperiam dolorum culpa officiis</p>
            </div>
          </div>
          
          {/* Flex container for sections */}
          <div className="container flex flex-col justify-between w-full gap-4 px-8 lg:gap-6 md:gap-4 lg:px-20 md:px-2 md:flex-row">
            <div className="flex flex-row flex-wrap justify-center w-full gap-0 md:w-2/3">
              <div className="w-1/4">
                <h2 className="mb-2 text-base font-bold lg:text-xl md:text-lg">Product</h2>
                <ul className="flex flex-col gap-1 text-xs lg:text-base md:text-sm">
                  <li><a href="#" className="hover:underline">About Us</a></li>
                  <li><a href="#" className="hover:underline">Careers</a></li>
                  <li><a href="#" className="hover:underline">Press</a></li>
                </ul>
              </div>
              <div className="w-1/4">
                <h2 className="mb-2 text-base font-bold lg:text-xl md:text-lg">Company</h2>
                <ul className="flex flex-col gap-1 text-xs lg:text-base md:text-sm">
                  <li><a href="#" className="hover:underline">About Us</a></li>
                  <li><a href="#" className="hover:underline">Careers</a></li>
                  <li><a href="#" className="hover:underline">Press</a></li>
                </ul>
              </div>
              <div className="w-1/4">
                <h2 className="mb-2 text-base font-bold lg:text-xl md:text-lg">Support</h2>
                <ul className="flex flex-col gap-1 text-xs lg:text-base md:text-sm">
                  <li><a href="#" className="hover:underline">Help Center</a></li>
                  <li><a href="#" className="hover:underline">Contact Us</a></li>
                </ul>
              </div>
              <div className="w-1/4">
                <h2 className="mb-2 text-base font-bold lg:text-xl md:text-lg">Downloads</h2>
                <ul className="flex flex-col gap-1 text-xs lg:text-base md:text-sm">
                  <li><a href="#" className="hover:underline">About Us</a></li>
                  <li><a href="#" className="hover:underline">Careers</a></li>
                  <li><a href="#" className="hover:underline">Press</a></li>
                </ul>
              </div>
            </div>
            
            {/* Subscribe Section */}
            <div className="mt-6 lg:w-1/3 md:w-1/3 md:mt-0">
              <div className="flex flex-col items-start w-full gap-3">
                <h2 className="text-base font-bold lg:text-xl md:text-lg">Subscribe to Our Newsletter</h2>
                <p className="text-xs lg:text-base md:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem deserunt voluptas aut tempore, omnis aperiam dolorum culpa officiis doloribus adipisci.</p>
                <input placeholder="Enter Your Email" type="Email" className="w-3/4 h-10 px-4 py-5 rounded-full md:w-4/5 md:py-6 focus:border-none" />
                <button className="px-6 py-1 text-sm transition-all duration-300 bg-blue-600 shadow-xl md:text-base md:py-2 rounded-3xl hover:bg-white hover:text-blue-600 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse items-center gap-8 px-10 justify-evenly md:gap-0 md:flex-row lg:px-20 md:px-6">
            <div className="w-full text-center md:w-3/4 md:text-left">
              <h1 className="text-xs lg:text-base md:text-sm">Copyright © 2022 WEB STUDIO NEPAL | All Rights Reserved</h1>
            </div>
            <div className="w-full md:w-1/4">
              <Tooltip />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
