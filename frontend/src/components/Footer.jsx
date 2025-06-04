import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo.webp";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Email is required.");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      alert(data.message);
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Subscription failed.");
    }
  };

  return (
    <footer className="bg-black text-white py-10 px-4 md:px-16">
     
      <div className="flex flex-col items-center mb-10">
        <img src={logo} alt="Bullwork Mobility Logo" className="w-16 h-16" />
        <span className="text-2xl font-bold mt-2">BULLWORK MOBILITY</span>
      </div>

      
      <div className="grid md:grid-cols-3 gap-10 text-sm">
       
        <div className="space-y-6">
          <div>
            <p className="font-semibold mb-2">Connect with us on</p>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://www.facebook.com/bullworkmobility/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/bullworkmobility/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/BullworkEV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/bullworkmobility/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p>
              <strong>Sales:</strong> sales@bullworkmobility.com
            </p>
            <p>
              <strong>Info:</strong> info@bullworkmobility.com
            </p>
            <p>
              <strong>Call:</strong> 8123596969, 8123296969
            </p>
          </div>
        </div>

        <div className="space-y-4 md:col-start-3">
          <p className="font-semibold mb-2">
            Subscribe to receive the latest updates!
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="bg-transparent border border-white text-white px-3 py-2 rounded w-full sm:w-auto"
              required
            />
            <button
              type="submit"
              className="bg-white text-purple-700 font-bold px-4 py-2 mt-7 mb-7 rounded"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-10 text-center text-sm">
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <a href="/blogs" className="block hover:text-purple-400">
            Blogs
          </a>
          <a href="/about" className="block hover:text-purple-400">
            About Us
          </a>
          <a href="/careers" className="block hover:text-purple-400">
            Careers
          </a>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Products</h4>
          <a href="/products/electric-tractor" className="block hover:text-purple-400">
            Electric Tractor
          </a>
          <a href="/products/glx-e-loader" className="block hover:text-purple-400">
            GLX E-Loader
          </a>
          <a href="/products/vamana" className="block hover:text-purple-400">
            Vamana
          </a>
          <a href="/products/warrior" className="block hover:text-purple-400">
            Warrior
          </a>
          <a href="/products/ox-1" className="block hover:text-purple-400">
            OX-1
          </a>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Technology</h4>
          <a href="/technology" className="block hover:text-purple-400">
            Autonomy
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        © 2025 Bullwork Mobility. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;




