import React, { useContext } from "react";
import { DispatchContext } from "../lib/providers/state"
import { Link } from 'react-router-dom'

import "../assets/styles/Product.css";

import spotlightImage from "../assets/images/product/product1.svg";
import roverLogo from "../assets/images/product/rover_logo.svg";

const ProductsItem = React.memo((props) => {
  const {
    title,
    price,
    image,
    onAddToCart
  } = props
  const addToCartHandler = () => {

  }
  return (

    <div className="item">
      <h4>{title}</h4>
      <h5 className="price">{price}</h5>
      <div className="image">
        <img src={image} />
      </div>
      <button className="add-to-cart" onClick={() => onAddToCart({ title, price })}>
        Add to cart
            </button>
      <button className="plus"></button>
    </div>
  )
})
const Product = React.memo((props) => {
  const dispatch = useContext(DispatchContext)

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
          <span>|</span> It's your <span>world</span>, ride it!
          </h5>
        <h3 className="product-name">
          <img src={roverLogo} />
        </h3>
        <h4 className="product-price">CAD 2,895</h4>
        <div className="product-description">
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
            <button href="/" onClick={() => onAddToCart({ title, price })}>Add to cart</button>
          </div>
          <div className="product-action check-out-now">
            <Link to="/checkout" className="icon">
              <span></span>
            </Link>
            <Link to="/checkout">Check out now</Link>
          </div>
        </div>
      </div>
    </div>
  )
})


export default Product;
