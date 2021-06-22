import React from "react";

import "../assets/styles/HomeProduct.css";

import spotlightImage from "../assets/images/home_product.svg";

class HomeProduct extends React.Component {
  render() {
    return (
      <div className="home-product">
        <div
          className="home-product-spotlight"
          style={{
            backgroundImage: "url(" + spotlightImage + ")",
          }}
        ></div>
        <div className="home-product-information">
          <h5 className="product-heading">
            <span>|</span> It's your <span>world</span>,
          </h5>
          <h3 className="product-name">
            <a href="/product">Ride it!</a>
          </h3>
          <h4 className="product-price">CAD 1,899</h4>
          <h5 className="product-old-price">CAD 2,299</h5>
          <a href="/product" className="explore-button">
            Explore our e-bikes
          </a>
          {/* <div className="product-description">
            <p>
              Take on long distance and uphill adventures like a pro. With our
              innovative Torque Sensor System, you can make any challenging
              environment seems effortless.
            </p>
          </div>
          <div className="product-rotates">
            <div className="product-rotate rx">
              <span>X</span>
            </div>
            <div className="product-rotate ry">
              <span>Y</span>
            </div>
          </div>
          <div className="product-actions">
            <div className="product-action add-to-cart">
              <div className="icon">
                <span></span>
              </div>
              <a href="/">Add to cart</a>
            </div>
            <div className="product-action check-out-now">
              <div className="icon">
                <span></span>
              </div>
              <a href="/checkout">Check out now</a>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default HomeProduct;
