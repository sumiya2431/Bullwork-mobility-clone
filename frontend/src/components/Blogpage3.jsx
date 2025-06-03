import React from "react";
import image1 from "/images/image copy 17.png"; 

const Blogpagem = () => {
  return (
    <div className="page-container p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">
        How Green Are Electric Vehicles?
      </h1>
      <p className="text-lg text-center mb-2">
        Electric vehicles (EVs) are often hailed as the champions of a greener future, but how green are they really?
      </p>
      <p className="text-sm text-center text-gray-600 mb-6">
        Posted on: 14-03-2025 | 4 min reading time
      </p>

      <div className="mb-6">
        <img src={image1} alt="Electric Vehicles" className="w-full rounded-xl shadow" />
      </div>

      <div className="text-base space-y-4 text-justify">
        <p>
          Electric vehicles (EVs) are often hailed as the champions of a greener future, but how green are they really? Unlike traditional internal combustion engine vehicles, EVs produce zero tailpipe emissions, reducing harmful pollutants like carbon monoxide and nitrogen oxides that degrade air quality. This immediate environmental benefit makes EVs a clear winner in urban areas plagued by smog and poor air quality.
        </p>
        <p>
          However, the true measure of their greenness lies in the entire lifecycle—from production to disposal. The manufacturing process of EVs, particularly the batteries, does raise concerns. Mining for materials like lithium, cobalt, and nickel can have significant environmental impacts, from habitat destruction to water pollution.
        </p>
        <p>
          However, technological advancements and ethical sourcing practices are helping to reduce these effects. Additionally, once on the road, EVs drastically outperform gas-powered vehicles in terms of overall carbon emissions. When powered by renewable energy sources like solar or wind, EVs can operate almost entirely emissions-free, offsetting the initial environmental cost of production over their lifetime.
        </p>
        <p>
          Beyond emissions, EVs contribute to sustainability by embracing recyclable components and extending the utility of spent batteries through second-life applications, such as energy storage systems. Governments and organizations worldwide are also working towards greener grids, which will further enhance the eco-friendliness of EVs as the energy transition progresses.
        </p>
        <p>
          These efforts not only make EVs greener but also align with global goals to combat climate change. In conclusion, while EVs are not perfect, they represent a significant step forward in creating a sustainable future.
        </p>
        <p>
          The shift to EVs is more than just a trend—it’s a necessity. With ongoing advancements in battery technology, recycling methods, and green energy infrastructure, the gap between EV aspirations and reality is narrowing. As drivers, policymakers, and industries, the responsibility lies with us to accelerate this transition and ensure EVs become as green as they promise to be.
        </p>
      </div>
    </div>
  );
};

export default Blogpagem;
