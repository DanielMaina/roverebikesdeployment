import React from "react";

import "./index.css";
import setTitle from "../../tools.js";

import HomeProduct from "components/HomeProduct";
import Grid from "components/Grid";
import Reviews from "components/Reviews";

import landingImage from "../../assets/images/home-page-landing.png";

import torqueVideo from "../../assets/movies/3d_1_torque.mp4";

import sectionImage1 from "../../assets/images/homepage-content_1.png";
import sectionBatteryImage from "../../assets/images/3d_5_battery.png";
import gridBackgroundImage from "../../assets/images/home-page-grid-bg.png";
import gridBackgroundImageMobile from "../../assets/images/home-page-grid-mobile-bg.png";
import homeproductbackground from "../../assets/images/homepage_product_background.png";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.isMobile = window.innerWidth <= 500;

    console.log(this.isMobile);
    this.state = {};
    this.promoVideo = React.createRef();
    this.sectionVideo1 = React.createRef();
    this.sectionVideo2 = React.createRef();
  }

  componentDidUpdate() {
    this.sectionVideo1.current.defaultMuted = true;
    this.sectionVideo1.current.muted = true;
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
            src={
              this.isMobile
                ? "https://amplify-amplify6164c245e3204-staging-204824-deployment.s3.us-east-2.amazonaws.com/movies/rover-e-Bike-homepage-mobile.mp4"
                : "https://amplify-amplify6164c245e3204-staging-204824-deployment.s3.us-east-2.amazonaws.com/movies/rover-e-Bike-homepage.mp4"
            }
            poster={landingImage}
            autoPlay={true}
            muted
            loop
            onLoad
            playsInline
            webkit-playsinline
          ></video>
          <div className="header-title">
            <h4>Introducing</h4>
            <h4>ROVER X/Y</h4>
            <a href="/product" className="learn-more-button">
              Discover ROVER X/Y
            </a>
          </div>
        </div>

        <div className="offer-text">
          <p>BLACK FRIDAY SALE</p><br/>
          <p>Reg. $2899.99</p><br/>
          <p>$1899.99</p><br/>
          <p>First 10 bikes only</p><br/>
          <a href="/product" className="buy-now-button">
            BUY NOW
          </a>
        </div>

        <div className="one-colum">
          <h4>"Find Your Adventure"</h4>
        </div>

        <div className="home-product">
          <img src={homeproductbackground} />
        </div>

        <div className="one-colum">
          <a href="/product" className="buy-now-button">
            View Item
          </a>
        </div>

        <div className="section-wrapper even">
          <div className="product-section-desc even">
            <div>
              <p>
                Go extra mile, let your bike give you a smile
              </p>
            </div>
          </div>

          <div className="product-section-image">
            <img src={sectionImage1} />
          </div>
        </div>

        <div
          className="section-wrapper"
          onMouseEnter={() => {
            this.sectionVideo1.current.play();
          }}
          onFocus={() => {
            this.sectionVideo1.current.play();
          }}
        >
          <div className="product-section-desc odd">
            <div>
              <h4>Mivice Dual-sided Torque Sensor</h4>
              <p>
                Our fast responsive dual-sided torque sensor provides seamless
                power support and gives you the smoothest riding experience
              </p>
            </div>
          </div>

          <div className="product-section-image">
            <video
              ref={this.sectionVideo1}
              src={torqueVideo}
              muted
              loop
              autoPlay
              playsInline
            ></video>
          </div>
        </div>

        <Grid
          style={{

            height: "890px",
          }}
          mobileStyle={{

            height: "500px",
          }}
          items={[
            {
              icon: "/img/icons/canadian-maple-leaf.svg",
              title: "Made in Canada",
              content: "Based here, designed here, serve here",
            },
            {
              icon: "/img/icons/bike-rider.svg",
              title: "Smoothest Ride",
              content:
                "Have the smoothest riding experience by our duel-sided torque sensor.",
            },
            {
              icon: "/img/icons/battery-image.svg",
              title: "Detachable Battery",
              content:
                "Our detachable battery allows you to charge anywhere, and lasts up to 160km.",
            },
            {
              icon: "/img/icons/carbon_skill-level-advanced.svg",
              title: "Upgradable",
              content:
                "Allows to program motor speed, upgrade accessories and more.",
            },
            {
              icon: "/img/icons/sun-clock.svg",
              title: "Weatherproof",
              content: "Weatherproof rated IP66, ride wherever, whenever.",
            },
            {
              icon: "/img/icons/shipping.svg",
              title: "Ship Ready",
              content: "Free shipping & 7-day free return Canada wide",
            },
          ]}
        />


        <Reviews
          items={[
            {
              name: "Frank F.",
              //image: "/img/reviews/review-1.png",
              content:
                "Love the bike! Torque sensor system makes the rides very smooth, and the back motor barely makes any noise. Everything cuts out right way when you stop pedaling and the bike gives amazing assistance whenever you need it.",
            },
            {
              name: "Zhe Z.",
              //image: "/img/reviews/review-2.png",
              content:
                "I really love the bike. Rover Y looks like a normal bike and can easily support me when I???m doing long-distance biking. I am going to buy a Rover X for my girlfriend as her birthday surprise.",
            },
            {
              name: "Site M.",
              //image: "/img/reviews/review-3.png",
              content:
                "I love the idea of biking, but I hate going uphill. However, after I bought Rover Y, I???m enjoying biking every day. Everyone has been asking me where I got the bike, and they are all surprised of how well it???s been built. All the parts are made from licensed and well-known manufacturer. I am extremely happy with my purchase.",
            },
          ]}
        />
      </div>
    );
  }
}

export default HomePage;
