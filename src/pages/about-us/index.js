import React from "react";

import "./index.css";
import setTitle from "../../tools.js";
import promoVideo from "../../assets/movies/rover-e-Bike-short.mp4";
import image1 from "../../assets/images/about-us/image1.png";
import image2 from "../../assets/images/about-us/image2.png";

class AboutUsPage extends React.Component {
  constructor() {
    super();

    setTitle("Rover E-Bike | ", true);

    this.state = {};
  }

  render() {
    return (
      <div className="about-us-page">
        <div className="main-content">
          <video src={promoVideo} muted loop autoPlay></video>
        </div>

        <div className="row">
          <div className="col col-image">
            <img src={image1} />
          </div>
          <div className="col col-text">
            <h4>A unique experience</h4>
            <p>
              We believe in raising the standard of torque sensor system and
              promoting them.
            </p>
            <p>
              We keep on working to strengthen e-bike standard in the market
              with our unique collections.
            </p>
          </div>
        </div>

        <div className="white-content">
          <p>
            Our fashion trend is simple as we keep it technical and sport with
            charm. Our products are lifestyle e-bikes. Advantages are Fashion
            trend, greener way to ride, avoid traffic, looks like a normal bike.
          </p>
        </div>

        <div className="row">
          <div className="col col-text">
            <h4>Designed to impress</h4>
            <p>
              We take riding fashion trends very seriously. We are a team of
              riding enthusiasts who love riding from the depth of our hearts.
            </p>
            <p>It is one of the reasons for us to launch a brand for e-bike.</p>
          </div>
          <div className="col col-image">
            <div className="col col-image">
              <img src={image2} />
            </div>
          </div>
        </div>

        <div className="white-content">
          <p>
            Also, they are high technical e-bikes. Using one of a kind torque
            sensor system will help people enjoy riding. Since normal bike will
            hurt people’s knee and leg when riding long distance or uphill. Our
            torque sensor system will make long distance or uphill easily
            without any pain.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUsPage;
