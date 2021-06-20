import React, { useContext } from "react";
import { DispatchContext } from "../lib/providers/state"

import "../assets/styles/FeaturedProducts.css";

import featuredProductImage1 from "../assets/images/product/featured-product-1.svg";
import featuredProductImage2 from "../assets/images/product/featured-product-2.svg";
import featuredProductImage3 from "../assets/images/product/featured-product-3.svg";

const FeaturedProductsItem = React.memo((props) => {
  const {
    title,
    price,
    image,
    onAddToCart
  } = props

  return (

    <div className="item">
      <h4>{title}</h4>
      <h5 className="price">{price}</h5>
      <div className="image">
        <img src={image} />
      </div>
      <button className="add-to-cart" onClick={onAddToCart}>
        Add to cart
            </button>
      <button className="plus"></button>
    </div>
  )
})

const FeaturedProducts = React.memo((props) => {
  const dispatch = useContext(DispatchContext)

  const addToCartHandler = () => {

  }

  return (
    <div className="featured-products">
      <h4>FEATURED PRODUCTS</h4>

      <div className="items">
        <FeaturedProductsItem
          title="ROVER HELMET"
          price="CAD 49.99"
          image={featuredProductImage1}
          onAddToCart={addToCartHandler}
        />

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
