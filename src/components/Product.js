import React, { useState, useContext } from "react";

import "../assets/styles/Product.css";

import { CartContext } from "../contexts/CartContext";
import { ProductsContext } from "../contexts/ProductsContext";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import spotlightImage1 from "../assets/images/product/product-page-product-1.png";
import spotlightImage2 from "../assets/images/product/product-page-product-2.png";

import roverLogo from "../assets/images/product/rover_logo.svg";

const Product = () => {
  const { products } = useContext(ProductsContext);
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const product = products.find((p) => p.id === 1);

  const slideImages = [spotlightImage1, spotlightImage2];

  const [productIndex, setProductIndex] = useState(0);

  const productFrames = [
    {
      bodyLength: "170 - 175 cm",
      frameSize: "49 - 53 cm",
    },
    {
      bodyLength: "180 - 185 cm",
      frameSize: "51 - 54 cm",
    },
  ];
  const zoomOutProperties = {
    indicators: true,
    arrows: false,
    duration: 3000,
    pauseOnHover: false,
    transitionDuration: 500,
    indicators: (i) => <span href="#" className="spotlight-pager"></span>,
    onChange: function (oldIndex, ind) {
      console.log(ind);
      setProductIndex(ind);
    },
  };

  const addToCart = () => {
    addProduct(product);
  };

  return (
    <div className="main-product">
      <div className="slide-container">
        <Slide {...zoomOutProperties}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>
        </Slide>
      </div>

      <div className="main-product-information">
        <h5 className="product-heading">
          <span>|</span> It's your <span>world</span>, ride it!
        </h5>
        <h3 className="product-name">
          <img src={roverLogo} />
        </h3>
        <h4 className="product-price">
          <span className="product-old-price">CAD 2,895</span>
          CAD 1,899
        </h4>
        <div className="product-description">
          <p>
            Take on long distance and uphill adventures like a pro. With our
            innovative Torque Sensor System, you can make any challenging
            environment seems effortless
          </p>
          <p>
            Body length: {productFrames[productIndex].bodyLength}
            <br />
            Frame size: {productFrames[productIndex].frameSize}
          </p>
        </div>
        <div className="product-rotates">
          <div className="product-rotate rx" onClick={() => setProductIndex(0)}>
            <span>X</span>
          </div>
          <div className="product-rotate ry" onClick={() => setProductIndex(1)}>
            <span>Y</span>
          </div>
        </div>
        <div className="product-actions">
          <div
            className="product-action add-to-cart"
            onClick={() => addToCart()}
          >
            <div className="icon">
              <span></span>
            </div>
            <a href="#">Add to cart</a>
          </div>
          <div className="product-action check-out-now">
            <div className="icon">
              <span></span>
            </div>
            <a href="/checkout">Check out now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
