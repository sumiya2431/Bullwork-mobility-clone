import { useLocation } from "react-router-dom";
import DieselSavings from "./DieselSavings";

import image1 from "/images/image copy 20.png";
import image2 from "/images/image copy 21.png";
import warriorVideo from "/images/warrior.mp4";

const Explore2 = () => {
  const { state } = useLocation();
  const product = state?.product || { name: "Warrior" };

  return (
    <div className="p-6 space-y-12 bg-purple-50 min-h-screen">
     
      <img src={image1} alt="Bullwork Warrior" className="w-full rounded-xl shadow-lg" />

     
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-purple-900">{product.name}</h1>
      
        <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg">
          The Self Propelled Boom Sprayer, the ultimate game-changer for safe and efficient agricultural spraying. This revolutionary 4WD electric Boom sprayer, the Warrior, is designed with our farmers in mind, ensuring effective operation even in muddy soil.
          <br /><br />
          Combining advanced technology with remote control capabilities for precise pesticide and fertiliser application, dramatically reducing health risks for our healthy farmers.
          <br /><br />
          Warrior boom sprayer promotes healthier crops, higher yields, and significantly lower operational costs making work easier and faster. Step into the future of farming with Bullwork's boom sprayer, joining the zero-emission revolution for safer, more productive agriculture.
        </p>
      </div>

      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-purple-900">Features of Warrior</h2>
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

export default Explore2;
