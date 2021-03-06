import React, { useEffect } from "react";

import "./index.css";
import setTitle from "../../tools.js";

import liveToRideImage from "../../assets/images/blog-page-live-to-ride.png";
import liveToRideImageMobile from "../../assets/images/blog-page-live-to-ride.png";
const BlogPage = () => {
  useEffect(() => {
    setTitle("Blog");
  }, []);

  return (
    <div className="blog-page">
      <div className="main-content">
        <div className="main-content-bg" alt="Main Content Asset" />
      </div>
      <div className="blog-area">
        <div className="blog-content">
          <div className="blog-wrapper">
            <div className="live-to-ride-mobile">
              <img src={liveToRideImageMobile} />
            </div>
            <strong>When:</strong> September 11 , 2021
            <br />
            <strong>Time:</strong> 12pm
            <br />
            <strong>Location:</strong> Stanley Park
            <p>
              There will be two different kinds of E-bike rentals for anyone who
              is interested in test riding: Rover X and Rover Y that can tailor
              to everyone’s body size. Free hot dogs and coffee will also be
              provided. Bring all your friends and family, enjoy the outdoor and
              have a great time.
            </p>
            <p>
              <strong>First 10 people</strong> that book the event will receive
              a secret gift.
            </p>
            <p>See you all there!</p>
          </div>
        </div>
      </div>
      <div className="live-to-ride">
        <img src={liveToRideImage} />
      </div>
    </div>
  );
};

export default BlogPage;
