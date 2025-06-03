import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blogs.css';
import blog1 from "../assets/twenty.webp";
import blog2 from "../assets/ninteen.webp";
import blog3 from "../assets/twentyone.webp";

const blogs = [
  {
    image: blog1,
    title: 'GLX Bullwork: Smarter, Greener, and Ready to Perform',
    description: 'Say goodbye to diesel hassles—introducing the GLX Bullwork, India’s first electric skid steer loader.',
    path: '/blog1',
  },
  {
    image: blog2,
    title: 'The Bullwork BEAST: Indias First Electric Autonomous Tractor',
    description: 'Bullwork BEAST, India’s first electric autonomous ground-up inbuilt electric tractor',
    path: '/blog2',
  },
  {
    image: blog3,
    title: 'How Green Are Electric Vehicles?',
    description: 'Electric vehicles (EVs) are often hailed as the champions of a greener future, but how green are they really?',
    path: '/blog3',
  }
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <h2 className="blog-heading">READ OUR BLOGS</h2>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <Link to={blog.path}>
                <button className="read-more">Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}






