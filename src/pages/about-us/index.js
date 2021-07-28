import React from "react";

import "./index.css";
import setTitle from "../../tools.js";
import posterMobile from "../../assets/images/about-us/mobile-poster.png";
import image1 from "../../assets/images/about-us/image1.png";
import image2 from "../../assets/images/about-us/image2.png";

import FeaturedArticles from "../../components/FeaturedArticles";

class AboutUsPage extends React.Component {
  constructor() {
    super();
    this.isMobile = window.innerWidth <= 500;
    this.state = {};
  }
  componentDidUpdate() {
    setTitle("About Us");
  }

  render() {
    return (
      <div className="about-us-page">
        <div className="main-content">
          <video
            poster={this.isMobile ? posterMobile : false}
            src={
              this.isMobile
                ? "https://amplify-amplify6164c245e3204-staging-204824-deployment.s3.us-east-2.amazonaws.com/movies/rover-e-Bike-short-mobile.mp4"
                : "https://amplify-amplify6164c245e3204-staging-204824-deployment.s3.us-east-2.amazonaws.com/movies/rover-e-Bike-short.mp4"
            }
            autoPlay={true}
            muted={this.isMobile ? "muted" : false}
            onLoad
            playsInline
            webkit-playsinline
          ></video>
        </div>

        <div className="row">
          <div className="col col-image">
            <img src={image1} />
          </div>
          <div className="col col-text">
            <div>
              <h4>Why Rover?</h4>
              <p>
                We want to help create an E-Bike that helps you make the choice
                for a healthier lifestyle.
              </p>
              <br />
              <p>Our goal is to bind the social and physical in one product.</p>
            </div>
          </div>
        </div>

        <div className="white-content">
          <p>
            Our commitment: we believe in quality. From Shimano freewheels to
            torque sensor system, we work with industry leading companies to
            bring you highest quality e-bikes.
          </p>
          <a href="/product" class="button-dark" style={{ marginTop: "35px" }}>
            Explore our bikes
          </a>
        </div>

        <div className="row">
          <div className="col col-text">
            <div>
              <h4>We Listen</h4>
              <p>
                What customers desire, we deliver. Your feedback matters to us.
                Our biggest goal is to satisfy customers’ needs in every aspect.
              </p>
              <br />
              <p>We are keen to continuously strengthen our products.</p>
            </div>
          </div>
          <div className="col col-image">
            <div
              className="col col-image"
              style={{ backgroundImage: "url(" + image2 + ")" }}
            ></div>
          </div>
        </div>

        <FeaturedArticles
          items={[
            {
              title: "JOIN US ON OUR FIRST SOCIAL BIKE EVENT!",
              content:
                "Bring your bike and your smile. Join us on our 1st ever social 100 KM bike event. Together we will ride the world. <br/><br/>" +
                "Snacks and coffee will be provided at the meet up place! <br/><br/>" +
                "Date: September 11st, 2021" +
                "Location: Stanley Park",
            },
          ]}
        />
      </div>
    );
  }
}

export default AboutUsPage;
