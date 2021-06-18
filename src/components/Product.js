import React from "react";

import "../assets/styles/Product.css";

import spotlightImage from "../assets/images/e-bike.svg";

class Product extends React.Component {
  render() {
    return (
      <div className="main-product">
        <div
          className="main-product-spotlight"
          style={{
            backgroundImage: "url(" + spotlightImage + ")",
          }}
        ></div>
        <div className="main-product-information">
          <h5 className="product-heading">
            | ELITE <span>ROAD PERFORMANCE</span>
          </h5>
          <h3 className="product-name">
            <a href="/product">
              M080 <span>MOTOR</span>
            </a>
          </h3>
          <h4 className="product-price">CAD 2,895</h4>
          <div className="product-description">
            <p>
              Intelligent adjustment and powerful power output, specially
              designed for high power and high torque output use scenarios.
            </p>
            <p>
              Continuous power output can reach 350W; maximum torque output
              ≥80Nm, easy to deal with various complex road conditions and
              mountain terrain.
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
            <a href="/" className="product-action add-to-cart"></a>
            <a href="/" className="product-action check-out-now"></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
