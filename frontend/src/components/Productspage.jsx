import React from 'react';
import { Link } from 'react-router-dom';

import image1 from '/images/beast.webp';
import image2 from '/images/Warrior.webp';
import image3 from '/images/glx.webp';
import image4 from '/images/vamana.webp';
import image5 from '/images/ox.webp';

const blogs = [
  {
    image: image1,
    title: 'BEAST',
    path: 'explore1',
  },
  {
    image: image2,
    title: 'WARRIOR',
    path: 'explore2',
  },
  {
    image: image3,
    title: 'GLX',
    path: 'explore3',
  },
  {
    image: image4,
    title: 'VAMANA',
    path: 'explore4',
  },
  {
    image: image5,
    title: 'OX-1',
    path: 'explore5',
  }
];

export default function BlogSection() {
  return (
 <section className="p-6 bg-white rounded-xl mb-0">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
    {blogs.map((blog, index) => (
      <div
        key={index}
        className="w-full max-w-xs bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-40 object-cover rounded-t-xl"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-[#43005a]">{blog.title}</h3>
          <Link
            to={blog.path}
            className="inline-block bg-[hsl(285,89%,25%)] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition focus:outline-none"
          >
            Explore →
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>



  );
};