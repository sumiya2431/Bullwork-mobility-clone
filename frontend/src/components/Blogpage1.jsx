import React from "react";
import image1 from "/images/image copy 15.png"; 

const Blogpages = () => {
  return (
    <div className="page-container p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">
        GLX Bullwork: Smarter, Greener, and Ready to Perform
      </h1>
      <p className="text-lg text-center mb-2">
        Say goodbye to diesel hassles — introducing the GLX Bullwork, India’s first electric skid steer loader.
      </p>
      <p className="text-sm text-center text-gray-600 mb-6">
        Posted on: 28-03-2025 | 4 min reading time
      </p>

      <div className="mb-6">
        <img src={image1} alt="GLX Bullwork" className="w-full rounded-xl shadow" />
      </div>

      <div className="text-base space-y-4 text-justify">
        <p>
          Skid steer loaders are compact, highly maneuverable machines designed to perform a variety of tasks in construction, mining, quarrying, and warehousing sectors. Known for their agility and power, they can navigate tight spaces while efficiently handling different jobs.
       
          These versatile machines traditionally run on diesel, which leads to high fuel expenses and environmental concerns. Say goodbye to diesel hassles — introducing the GLX Bullwork, India’s first electric skid steer loader, built for efficiency, versatility, and sustainability.
       
          The GLX Bullwork is a powerhouse designed to handle tough jobs with ease. With a 350 kg loading capacity and 700 kg tipping load, it tackles heavy tasks effortlessly. What sets it apart is its quick-coupling system, allowing it to switch between 60+ attachments—from digging and grading to lifting and landscaping.
        
          It requires just 5 hours of charging to deliver 6 hours of intensive work, ensuring minimal downtime. This machine is perfect for compact construction sites, where space is limited, and operates with zero pollution and noise, making it an environmentally friendly choice.
        
          Beyond its strength, the GLX Bullwork is incredibly cost-effective. Unlike diesel loaders that burn fuel and demand heavy maintenance, the GLX runs at just ₹40 per hour. A 6-hour battery life ensures uninterrupted work, making it both reliable and budget-friendly.
        
          The GLX Bullwork isn’t just a leap in technology — it’s a shift in mindset. It redefines how work gets done, proving that power doesn’t have to come at the cost of pollution, noise, or heavy expenses.
      
          It’s a machine built for the future but designed to solve today’s challenges. Whether you're a farmer, a builder, or an industry leader, the GLX isn’t just an option — it’s the smarter choice. The future isn’t waiting. It’s charging up and ready to roll.
        </p>
      </div>
    </div>
  );
};

export default Blogpages;
