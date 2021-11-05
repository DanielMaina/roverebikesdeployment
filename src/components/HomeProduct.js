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
    duration: 10000,
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
    
    </div>
  );
};

export default HomeProduct;
