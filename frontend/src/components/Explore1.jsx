import { useLocation } from "react-router-dom";
import DieselSavings from "./DieselSavings";


import image1 from "/images/image copy 28.png";
import image2 from "/images/image copy 29.png";
import warriorVideo from "/images/tractor.mp4";

const Explore1 = () => {
  const { state } = useLocation();
  const product = state?.product || { name: "Beast" }; 

  return (
    <div className="p-6 space-y-12 bg-purple-50 min-h-screen">
     
      <img src={image1} alt="Hero" className="w-full rounded-xl shadow-lg" />

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-purple-900">{product.name}</h1>
        <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg">
          Meet India's first ground-up electric tractor, manufactured in Bangalore, setting new benchmarks in farming, warehousing, and construction with its innovative design.
          <br /><br />
          The versatile and cost-effective Beast electric tractor is built to handle tough and demanding projects with ease. It redefines efficiency with sustainable performance, cost savings, and high durability — powered by a robust motor and long-lasting battery.
        </p>
      </div>

      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-purple-900">Features of Beast</h2>
        <img src={image2} alt="Features" className="w-full rounded-xl shadow-md max-w-5xl mx-auto" />
      </div>

      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-green-700">Charging Ahead with Zero Emissions</h3>
      </div>

      <div className="flex justify-center">
        <video autoPlay muted loop playsInline className="rounded-xl shadow-lg w-full max-w-4xl">
          <source src={warriorVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:rotate-1 transition duration-300"
          >
            <h5 className="text-lg font-semibold text-purple-700">Power: 30–60 HP</h5>
            <p className="text-sm text-gray-600 mt-2">
              High-quality battery, the engine delivers super strength and adaptability.
            </p>
          </div>
        ))}
      </div>

   
      <div className="pt-10">
         <DieselSavings />
          
     
      </div>
    </div>
  );
};

export default Explore1;
