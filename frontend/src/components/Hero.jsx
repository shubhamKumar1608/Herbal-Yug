// import React from "react";
// import { assets } from "../assets/assets";

// const Hero = () => {
//   return (
//     <div className="flex flex-col sm:flex-row border border-gray-400">
//       {/* Hero Left Side */}
//       <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
//         <div className="text-[#414141]">
//           <div className="flex items-center gap-2">
//             <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
//             <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
//           </div>
//           <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
//             Latest Arrivals
//           </h1>
//           <div className="flex items-center gap-2">
//             <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
//             <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
//           </div>
//         </div>
//       </div>

//       {/* Hero Right Side */}
//       <img className="w-full sm:w-1/2" src={assets.hero_img} alt="hero_img" />
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-200">
      {/* Left: Text Section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-6 sm:px-10">
        <div className="text-[#2f2f2f] max-w-md">
          <div className="flex items-center gap-2 mb-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#2f2f2f]"></p>
            <p className="font-medium text-sm md:text-base uppercase">
              Our Bestsellers
            </p>
          </div>

          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-snug">
            Latest Arrivals
          </h1>

          <div className="flex items-center gap-2 mt-4 cursor-pointer group">
            <p className="font-semibold text-sm md:text-base group-hover:underline transition-all">
              Shop Now
            </p>
            <p className="w-8 md:w-11 h-[2px] bg-[#2f2f2f]"></p>
          </div>
        </div>
      </div>

      {/* Right: Image Section */}
      <img
        className="w-full sm:w-1/2 object-cover"
        src={assets.hero_img}
        alt="hero"
      />
    </div>
  );
};

export default Hero;
