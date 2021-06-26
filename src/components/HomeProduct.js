import React, { useState } from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "../assets/styles/HomeProduct.css";

import spotlightImage1 from "../assets/images/product/home-page-product-1.png";
import spotlightImage2 from "../assets/images/product/home-page-product-2.png";

const HomeProduct = (props) => {
  const [productIndex, setProductIndex] = useState(0);
  const slideImages = [spotlightImage1, spotlightImage2];

  const zoomOutProperties = {
    indicators: true,
    arrows: false,
    duration: 3000,
    pauseOnHover: false,
    transitionDuration: 500,
    indicators: (i) => <span href="#" className="spotlight-pager"></span>,
    onChange: function (oldIndex, ind) {
      setProductIndex(ind);
    },
  };

  return (
    <div className="home-product">
      <div className="home-product-spotlight">
        <Slide {...zoomOutProperties}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>
        </Slide>
      </div>
      <div className="home-product-information">
        <h5 className="product-heading">
          <span>|</span> It's your <span>world</span>,
        </h5>
        <h3 className="product-name">
          <a href="/product">Ride it!</a>
        </h3>

        <h5 className="product-old-price">CAD 2,299</h5>
        <h4 className="product-price">CAD 1,899</h4>
        <a href="/product" className="explore-button">
          Explore more
        </a>
      </div>
    </div>
  );
};

export default HomeProduct;
