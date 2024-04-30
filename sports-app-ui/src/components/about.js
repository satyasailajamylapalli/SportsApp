import React from "react";
import AboutBackground from "../assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Welcome to Sports League
        </h1>
        <p className="primary-text">
        Catch all the action from the world of Sports right here. From thrilling matches to breaking news and expert analysis, we've got you covered.
        </p>
        <p className="primary-text">
        At Sports League, we're passionate about Sports and dedicated to bringing fans the ultimate experience.
        Explore our latest updates, team standings, player profiles, and more!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;