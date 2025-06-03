import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import WhyChooseSection from "./components/WhyChooseSection";
import IntroBhai from "./components/IntroBhai";
import Blogs from "./components/Blogs";
import Logos from "./components/Logos";
import ImageGallery from "./components/ImageGallery";
import FAQ from "./components/FAQ";
import Join from "./components/Join";

import ExplorePage from "./components/ExplorePage";

// Pages
import Productspage from "./components/Productspage";
import OrderForm from "./components/OrderForm";
import TechnologySection from "./components/TechnologySection";
import AboutUs from "./components/AboutUs";
import Careers from "./components/Careers";

// Blog Pages
import Blogpage1 from "./components/Blogpage1";
import Blogpage2 from "./components/Blogpage2";
import Blogpage3 from "./components/Blogpage3";


import Explore1 from "./components/Explore1";
import Explore2 from "./components/Explore2";
import Explore3 from "./components/Explore3";
import Explore4 from "./components/Explore4";
import Explore5 from "./components/Explore5";


// Home Page Layout
function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <WhyChooseSection />
      <IntroBhai />
      <Blogs />
      <Logos />
      <ImageGallery />
      <FAQ />
      {/* <Join /> */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/product" element={<Productspage />} />
          <Route path="/technology" element={<TechnologySection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/explore/:id" element={<ExplorePage />} />


          <Route path="/blog1" element={<Blogpage1 />} />
          <Route path="/blog2" element={<Blogpage2 />} />
          <Route path="/blog3" element={<Blogpage3 />} />

          {/* {nnnnnn} */}

          <Route path="/explore1" element={<Explore1 />} />
          <Route path="/explore2" element={<Explore2 />} />
          <Route path="/explore3" element={<Explore3 />} />
          <Route path="/explore4" element={<Explore4 />} />
          <Route path="/explore5" element={<Explore5 />} />
        

        </Routes>
      </div>
      <Join/>
      <Footer />
    </Router>
  );
}

export default App;


