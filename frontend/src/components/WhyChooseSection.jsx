
import React from "react";

import image1 from '/images/image copy 24.png';
import image2 from '/images/image copy 25.png';
import image3 from '/images/image copy 26.png';
import image4 from '/images/image copy 27.png';

const WhyChooseSection = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#43005a] mb-2">WHY CHOOSE BULLWORK MOBILITY</h2>
      <p className="text-lg text-gray-700 mb-10">Designed in Bharath, Made for the World</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <img src={image1} alt="Lowest Operational Cost" className="w-28 h-28 mb-4" />
          <h3 className="text-xl font-semibold text-[#43005a] mb-2">LOWEST OPERATIONAL COST</h3>
          <p className="text-gray-600">Electric Tractors save up to 80% on diesel expenses with our innovative solution</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={image2} alt="Next-Gen Technology" className="w-28 h-28 mb-4" />
          <h3 className="text-xl font-semibold text-[#43005a] mb-2">NEXT-GEN TECHNOLOGY</h3>
          <p className="text-gray-600">Autonomous and drive-by-wire system. Smart, data-driven and connected</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={image3} alt="Automation" className="w-28 h-28 mb-4" />
          <h3 className="text-xl font-semibold text-[#43005a] mb-2">AUTOMATION</h3>
          <p className="text-gray-600">Automating repetitive skilled tasks to enhance productivity</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={image4} alt="Save Environment" className="w-28 h-28 mb-4" />
          <h3 className="text-xl font-semibold text-[#43005a] mb-2">SAVE ENVIRONMENT</h3>
          <p className="text-gray-600">Reduces up to 10 tons of CO₂ annually per machine</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
