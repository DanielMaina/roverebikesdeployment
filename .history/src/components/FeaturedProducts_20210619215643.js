import React, { useContext } from "react";
import { DispatchContext } from "../lib/providers/state"

import "../assets/styles/FeaturedProducts.css";

import featuredProductImage1 from "../assets/images/product/featured-product-1.svg";
import featuredProductImage2 from "../assets/images/product/featured-product-2.svg";
import featuredProductImage3 from "../assets/images/product/featured-product-3.svg";

const FeaturedProductItem = React.memo((props) => {
  const {
    title,
    price,
    image,
    onAddToCart
  } = props

  return (

    <div className="item">
      <h4>{title}</h4>
      <h5 className="price">{`${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'CAD' }).format(parseFloat(price))}`}</h5>
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

const FeaturedProducts = React.memo((props) => {
  const dispatch = useContext(DispatchContext)

  const addToCartHandler = ({ title, price }) => {
    dispatch.sync.checkout.addToCart({ title, price })

  }

  return (
    <div className="featured-products">
      <h4>FEATURED PRODUCTS</h4>
      <div className="items">

        <FeaturedProductItem
          title="ROVER HELMET"
          price="49.99"
          image={featuredProductImage1}
          onAddToCart={addToCartHandler}
        />
        <FeaturedProductItem
          title="LED SCREEN DISPLAY"
          price="100.00"
          image={featuredProductImage2}
          onAddToCart={addToCartHandler}
        />
        <FeaturedProductItem
          title="ROVER BASKET"
          price="35.89"
          image={featuredProductImage3}
          onAddToCart={addToCartHandler}
        />


      </div>
    </div>
  )
})


export default FeaturedProducts;
