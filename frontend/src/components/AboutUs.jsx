import React from 'react';

const About = () => {
  return (
    <>
     
      <section className="bg-white py-8 md:py-16">
        <div>
          <img
            src="https://www.bullworkmobility.com/aboutus/teampic.webp"
            className="w-full h-[300px] md:h-[600px] object-cover"
            alt="Team Banner"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center mt-6">
          <h1 className="text-xl md:text-4xl font-bold leading-tight">
            WE WANT TO CHANGE THE WORLD,<br />
            WE THINK WE ARE CRAZY ENOUGH TO DO IT
          </h1>
        </div>
      </section>

      <section className="bg-[#f5f0f9] py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-10">
            OUR GUIDING PARTNER
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <img
              src="https://www.bullworkmobility.com/aboutus/mahesh%20shetty.webp"
              alt="Mr. Mahesh Shetty"
              className="w-64 md:w-80 rounded-xl shadow-md"
            />
            <div className="text-left max-w-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">MR. MAHESH SHETTY</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Joining in our journey to change the landscape of utility vehicles: 
                Multiplex Group has been our guiding partner with Mr. Mahesh Shetty 
                donning the role of Chairman to take the organization to its next level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-12">OUR CO-FOUNDERS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: 'Hemanth Kumar',
              title: 'CEO',
              img: 'https://www.bullworkmobility.com/aboutus/hemanth.webp',
              link: 'https://www.linkedin.com/in/hemanth-kumar-30a07b85/',
            },
            {
              name: 'Dr. Sriharsha Sheshanarayana',
              title: 'CTO',
              img: 'https://www.bullworkmobility.com/aboutus/harsha.webp',
              link: '#', 
            },
            {
              name: 'Vinay Raghuram',
              title: 'COO',
              img: 'https://www.bullworkmobility.com/aboutus/vinay.webp',
              link: '#', 
            }
          ].map((person, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={person.img}
                alt={person.name}
                className="w-52 h-52 object-cover rounded-full shadow-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">{person.name}</h3>
              <p className="text-sm font-medium text-gray-600">{person.title}</p>
              <a
                href={person.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">OUR R&D FACILITY</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Driving the forefront of technological advancement, our R&D facility is located in Nelamangala, Bangalore — where ideas are transformed into reality.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="h-[500px] md:h-[700px]">
            <img
              src="https://www.bullworkmobility.com/facility/facility3.webp"
              alt="Welding"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="h-[250px] md:h-[345px]">
              <img
                src="https://www.bullworkmobility.com/facility/facility1.webp"
                alt="Factory"
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="h-[250px] md:h-[345px]">
              <img
                src="https://www.bullworkmobility.com/facility/facility2.webp"
                alt="Team"
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
