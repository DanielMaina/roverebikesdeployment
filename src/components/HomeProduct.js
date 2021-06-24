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

          <h5 className="product-old-price">CAD 2,299</h5>
          <h4 className="product-price">CAD 1,899</h4>
          <a href="/product" className="explore-button">
            Explore more
          </a>
        </div>
      </div>
    );
  }
}

export default HomeProduct;
