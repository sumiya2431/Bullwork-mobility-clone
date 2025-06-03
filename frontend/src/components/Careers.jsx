import React from "react";
import { FiArrowRight } from "react-icons/fi";
import '../styles/Career.css';
import CareersPage from "./CareersPage";

import image1 from '/images/image copy 3.png';
import image2 from '/images/image copy 4.png';
import image3 from '/images/image copy 5.png';
import image4 from '/images/image copy 6.png';
import image5 from '/images/image copy 7.png';
import image6 from '/images/image copy 8.png';

import gallery1 from '/images/image copy 10.png';
import gallery2 from '/images/image copy 11.png';
import gallery3 from '/images/image copy 12.png';
import gallery4 from '/images/image copy 13.png';
import gallery5 from '/images/image copy 14.png';

const Careers = () => {
  return (
    <div className="page-container p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Life @ BullWork Mobility</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <img src={image1} alt="Career 1" className="w-full rounded-xl shadow" />
          <img src={image2} alt="Career 2" className="w-full rounded-xl shadow" />
          <img src={image3} alt="Career 3" className="w-full rounded-xl shadow" />
        </div>
        <div className="flex flex-col gap-6">
          <img src={image4} alt="Career 4" className="w-full rounded-xl shadow" />
          <img src={image5} alt="Career 5" className="w-full rounded-xl shadow" />
          <img src={image6} alt="Career 6" className="w-full rounded-xl shadow" />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-4">JOIN OUR AWESOME TEAM</h2>
        <p className="text-center text-lg mb-4">
          At Bullwork Mobility, we are on the lookout for individuals who are driven and dedicated to making a difference and contribute to the acceleration of innovative solutions in sustainable agriculture and construction.
        </p>
        <div className="text-center">
          <a href="mailto:contact@bullworkmobility.com">
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Apply Now
            </button>
          </a>
        </div>
      </div>

      <div className="gallery-container p-6 mt-16">
        <h1 className="text-3xl font-bold text-center mb-1">BullWork Gallery</h1>
        <p className="text-lg font-bold text-center mb-3">
          A sneak peek into life at Bullwork Mobility
        </p>
        <div className="marquee-wrapper overflow-hidden">
          <div className="marquee flex animate-marquee space-x-4">
            <img src={gallery1} alt="gallery1" className="w-auto rounded-xl shadow" />
            <img src={gallery2} alt="gallery2" className="w-auto rounded-xl shadow" />
            <img src={gallery3} alt="gallery3" className="w-auto rounded-xl shadow" />
            <img src={gallery4} alt="gallery4" className="w-auto rounded-xl shadow" />
            <img src={gallery5} alt="gallery5" className="w-auto rounded-xl shadow" />
          </div>
        </div>
      </div>

      <CareersPage />
      <div className="mt-20 border border-gray-300 shadow-lg rounded-lg p-6 bg-white">
        <div className="text-center font-bold text-2xl">
          Think you have what it takes to innovate with us?
        </div>
        <div className="mt-4 text-center font-semibold text-xl">
          Mail us at
        </div>
        <div className="mt-3 text-lg text-center">
          <a
            href="mailto:jobs@bullworkmobility.com"
            className="text-blue-600 hover:underline inline-flex items-center gap-2"
          >
            jobs@bullworkmobility.com <FiArrowRight className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;
