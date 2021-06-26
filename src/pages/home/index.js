import React from "react";

import "./index.css";
import setTitle from "../../tools.js";
import promoVideoSource from "../../assets/movies/rover-e-Bike-short.mp4";
import HomeProduct from "components/HomeProduct";
import Grid from "components/Grid";
import Reviews from "components/Reviews";

import sectionMovie1 from "../../assets/movies/3d_1_torque.mp4";
import sectionImage1 from "../../assets/images/homepage-image.png";
import sectionMovie2 from "../../assets/movies/3d_5_battery.mp4";
import gridBackgroundImage from "../../assets/images/home-page-grid-bg.png";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    setTitle("Rover E-Bike | Home", true);

    this.state = {};
    this.promoVideo = React.createRef();
    this.sectionVideo1 = React.createRef();
    this.sectionVideo2 = React.createRef();
  }

  componentDidMount() {
    this.promoVideo.current.play();
  }

  render() {
    return (
      <div className="home">
        <div className="main-content">
          <video
            ref={this.promoVideo}
            src={promoVideoSource}
            muted
            loop
            autoPlay
          ></video>
          <div className="header-title">
            <h4>CHANGE THE WAY YOU RIDE</h4>
            <a href="/product" className="learn-more-button">
              Learn More
            </a>
          </div>
        </div>

        <div className="offer-text">
            <p>
              EXCLUSIVE OFFER FOR A <span>LIMITED TIME ONLY</span> - FIRST 50
              ROVER E-BIKES ARE NOW ON SALE FOR <span>1,899 CAD!</span>
            </p>
        </div>
        <HomeProduct />

        <div
          className="section-wrapper"
          onMouseEnter={() => {
            this.sectionVideo1.current.play();
          }}
        >
          <div className="product-section-desc odd">
            <div>
              <h4>Rover Torque Sensor</h4>
              <p>
                Our fast responsive duel-sided torque sensor provides seemless
                power support and gives you the smoothest riding experience
              </p>
            </div>
          </div>

          <div className="product-section-image">
            <video ref={this.sectionVideo1} src={sectionMovie1} muted></video>
          </div>
        </div>

        <div className="section-wrapper">
          <div className="product-section-image">
            <img src={sectionImage1} />
          </div>

          <div className="product-section-desc even">
            <div>
              <h4>SHIMANO 7-Speed Freewheel</h4>
              <p>
                Ride anywhere with trustworthy Shimano TZ500 7-Speed 14-34t
                Freewheel.
              </p>
            </div>
          </div>
        </div>

        <div
          className="section-wrapper"
          onMouseEnter={() => {
            this.sectionVideo2.current.play();
          }}
        >
          <div className="product-section-desc odd">
            <div>
              <h4>High Capacity Battery</h4>
              <p>
                High Capacity Battery Detachable &amp; long lasting battery(36V, 14AH) 
                provides convenient charging experience (fully charged within 5hrs) 
                and allows riding up to 160km.
              </p>
            </div>
          </div>

          <div className="product-section-image">
            <video ref={this.sectionVideo2} src={sectionMovie2} muted></video>
          </div>
        </div>

        <Grid
          style={{
            backgroundImage: "url(" + gridBackgroundImage + ")",
            height: "890px",
          }}
          items={[
            {
              icon: "/img/icons/canadian-maple-leaf.svg",
              title: "Canadian Own",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              icon: "/img/icons/bike-rider.svg",
              title: "Smoothest Ride",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              icon: "/img/icons/carbon_skill-level-advanced.svg",
              title: "Upgradable",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              icon: "/img/icons/easy-fix.svg",
              title: "Easy Fix",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              icon: "/img/icons/sun-clock.svg",
              title: "Flexible Biking",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              icon: "/img/icons/shipping.svg",
              title: "Shipping Ready",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ]}
        />

        <div className="shipping-line">
          <div>
            <img src="/img/icons/shipping-truck.svg" />
            <div className="shipping-line-content">
              <h5>Free shipping and 7 days free return Canada wide.</h5>
              <p>
                Different rates will be applied for US. Head to UPS website for
                more an estimated delivery fee.
              </p>
            </div>
          </div>
        </div>

        <Reviews
          items={[
            {
              name: "Tess J.",
              image: "/img/reviews/review-1.png",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              name: "Devin W.",
              image: "/img/reviews/review-2.png",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              name: "Paul A.",
              image: "/img/reviews/review-3.png",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ]}
        />
      </div>
    );
  }
}

export default HomePage;
