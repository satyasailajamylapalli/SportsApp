import React from 'react';
import BannerBackground from "../assets/home-banner-background.png";
import Navbar from "./Navbar";
import Footer from './Footer'
import About from './about'
import Contact from './Contact'
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Watch Your Favourate Sport League
          </h1>
          <p className="primary-text">
            Get Sports details and add your Favourate sports to wishlist.
          </p>
         <a href="/search"> <button className="secondary-button">
            Search Now <FiArrowRight />{" "}
          </button></a>
        </div>
        <div className="home-image-section">
        </div>
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home
