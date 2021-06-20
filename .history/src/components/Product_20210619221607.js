import React, { useContext } from "react";
import { DispatchContext } from "../lib/providers/state"
import { Link } from 'react-router-dom'

import "../assets/styles/Product.css";

import spotlightImage from "../assets/images/product/product1.svg";
import roverLogo from "../assets/images/product/rover_logo.svg";

const ProductItem = React.memo((props) => {
  const {
    title,
    price,
    image,
    onAddToCart
  } = props
  const [selectedModel, setModel] = useState('X')
  const selectModelHandler = (model) => {
    setModel(model)
  }
  return (

    <div className="main-product-information">
      <h5 className="product-heading">
        <span>|</span> It's your <span>world</span>, ride it!
          </h5>
      <h3 className="product-name">
        <img src={image} />
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

const Product = React.memo((props) => {
  const dispatch = useContext(DispatchContext)

  const addToCartHandler = ({ title, price, model, color }) => {

    dispatch.sync.checkout.addToCart({ title, price, model, color })
  }

  return (
    <div className="main-product">
      <div
        className="main-product-spotlight"
        style={{
          backgroundImage: "url(" + spotlightImage + ")",
        }}
      ></div>
      <ProductItem
        title="ROVER"
        price="CAD 2,895"
        image={roverLogo}
        onAddToCart={addToCartHandler}
      />
    </div>
  )
})


export default Product;
