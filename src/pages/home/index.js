import React from "react";

import "./index.css";
import setTitle from "../../tools.js";
import promoVideo from "../../assets/movies/rover-e-Bike-short.mp4";
import componentImage from "../../assets/images/home_product_component.svg";
import footerSlide1 from "../../assets/images/home_footer_slider/slide_1.svg";
import footerSlide2 from "../../assets/images/home_footer_slider/slide_2.svg";
import footerSlide3 from "../../assets/images/home_footer_slider/slide_3.svg";
import footerSlide4 from "../../assets/images/home_footer_slider/slide_4.svg";
import iconStar from "../../assets/icons/star.svg";
import FindStore from "components/FindStore";
import HomeProduct from "components/HomeProduct";
import Brands from "components/Brands";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class HomePage extends React.Component {
  constructor() {
    super();

    setTitle("Rover E-Bike | Home", true);

    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <div className="main-content">
          {/* <div
            className="main-content-item"
            style={{
              backgroundImage: "url(" + promoVideo + ")",
            }}
            alt="Main Content Asset"
          /> */}
          <video src={promoVideo} muted loop autoPlay></video>
        </div>

        <HomeProduct />

        <div
          className="product-component"
          style={{
            backgroundImage: "url(" + componentImage + ")",
          }}
        >
          <div className="product-component-description">
            <h4>Make it smart</h4>
            <p>
              Accessorize your ROVER e-bike with a full-colour{" "}
              <span>LED screen display</span>.
            </p>
          </div>
        </div>

        <FindStore />
        <Brands />

        <div className="home-footer">
          <OwlCarousel
            className="owl-theme"
            items={1}
            loop
            autoPlay={true}
            autoplayTimeout={100}
            autoplaySpeed={100}
            autoplayHoverPause={false}
            dots={false}
            height="100%"
          >
            <div className="item">
              <img src={footerSlide2} />
            </div>
            <div className="item">
              <img src={footerSlide3} />
            </div>
            <div className="item">
              <img src={footerSlide4} />
            </div>
            <div className="item">
              <img src={footerSlide1} />
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default HomePage;
