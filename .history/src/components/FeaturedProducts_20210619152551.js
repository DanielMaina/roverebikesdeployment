import React from "react";
import { DispatchContext } from "../lib/providers/state"

import "../assets/styles/FeaturedProducts.css";

import featuredProductImage1 from "../assets/images/product/featured-product-1.svg";
import featuredProductImage2 from "../assets/images/product/featured-product-2.svg";
import featuredProductImage3 from "../assets/images/product/featured-product-3.svg";

const FeaturedProducts = React.memo((props) => {
  const dispatch = useContext(DispatchContext)


  return (
    <div className="featured-products">
      <h4>FEATURED PRODUCTS</h4>

      <div className="items">
        <div className="item">
          <h4>ROVER HELMET</h4>
          <h5 className="price">CAD 49.99</h5>
          <div className="image">
            <img src={featuredProductImage1} />
          </div>
          <a href="/" className="add-to-cart">
            Add to cart
            </a>
          <button className="plus"></button>
        </div>

        <div className="item">
          <h4>LED SCREEN DISPLAY</h4>
          <h5 className="price">CAD 100.00</h5>
          <div className="image">
            <img src={featuredProductImage2} />
          </div>
          <a href="/" className="add-to-cart">
            Add to cart
            </a>
          <button className="plus"></button>
        </div>

        <div className="item">
          <h4>ROVER BASKET</h4>
          <h5 className="price">CAD 35.89</h5>
          <div className="image">
            <img src={featuredProductImage3} />
          </div>
          <a href="/" className="add-to-cart">
            Add to cart
            </a>
          <button className="plus"></button>
        </div>
      </div>
    </div>
  )
})


export default FeaturedProducts;
