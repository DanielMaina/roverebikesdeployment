import React, { useContext } from "react";
import "../assets/styles/HomeProduct.css";
import spotlightImage from "../assets/images/home_product.svg";
import { DispatchContext } from "../lib/providers/state"
import { Link } from 'react-router-dom'

const HomeProduct = React.memo((props) => {
  const dispatch = useContext(DispatchContext)
  const { title, price } = {
    title: "ROVER",
    price: "CAD 2,895"
  }
  const addToCartHandler = () => {

  }

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
          <span>|</span> It's your <span>world</span>, ride it!
          </h5>
        <h3 className="product-name">
          <a href="/product">{title}</a>
        </h3>
        <h4 className="product-price">{price}</h4>
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
            <p onClick={() => onAddToCart({ title, price })}>Add to cart</p>
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
  );
})


export default HomeProduct;
