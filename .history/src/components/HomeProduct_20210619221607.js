import React, { useContext, useState } from "react";
import "../assets/styles/HomeProduct.css";
import spotlightImage from "../assets/images/home_product.svg";
import { DispatchContext } from "../lib/providers/state"
import { Link } from 'react-router-dom'
import roverLogo from "../assets/images/product/rover_logo.svg";

const ProductItem = React.memo((props) => {
  const {
    title,
    price,
    onAddToCart
  } = props
  const [selectedModel, setModel] = useState('X')
  const selectModelHandler = (model) => {
    setModel(model)
  }
  return (
    <div className="home-product-information">
      <h5 className="product-heading">
        <span>|</span> It's your <span>world</span>, ride it!
          </h5>
      <h3 className="product-name">
        <img src={roverLogo} />
      </h3>
      <h4 className="product-price">{`${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'CAD' }).format(parseFloat(price))}`}</h4>
      <div className="product-description">
        <p>
          Take on long distance and uphill adventures like a pro. With our
          innovative Torque Sensor System, you can make any challenging
          environment seems effortless.
            </p>
      </div>
      <div className="product-rotates">
        <div className={`product-rotate ${selectedModel === 'X' ? 'rx' : 'ry'}`} onClick={() => selectModelHandler('X')}>
          <span>X</span>
        </div>
        <div className={`product-rotate ${selectedModel === 'Y' ? 'rx' : 'ry'}`} onClick={() => selectModelHandler('Y')}>
          <span>Y</span>
        </div>
      </div>
      <div className="product-actions">
        <div className="product-action add-to-cart">
          <div className="icon">
            <span></span>
          </div>
          <a onClick={() => onAddToCart({ title, price, model: selectedModel, color: 'BLACK' })}>Add to cart</a>
        </div>
        <div className="product-action check-out-now">
          <Link to="/checkout" className="icon">
            <span></span>
          </Link>
          <Link to="/checkout">Check out now</Link>
        </div>
      </div>
    </div>
  )
})

const HomeProduct = React.memo((props) => {
  const dispatch = useContext(DispatchContext)

  const addToCartHandler = ({ title, price, model, color }) => {

    dispatch.sync.checkout.addToCart({ title, price, model, color })
  }

  return (
    <div className="home-product">
      <div
        className="home-product-spotlight"
        style={{
          backgroundImage: "url(" + spotlightImage + ")",
        }}
      ></div>
      <ProductItem
        title="ROVER"
        price="2895"
        onAddToCart={addToCartHandler}
      />
    </div>
  );
})


export default HomeProduct;
