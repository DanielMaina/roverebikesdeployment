import React, { useContext } from "react";

import "../assets/styles/FeaturedProducts.css";

import { CartContext } from "../contexts/CartContext";
import { ProductsContext } from "../contexts/ProductsContext";

const FeaturedProducts = () => {
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  const featuredProducts = products.filter((item) => item.isFeatured === true);

  const isInCart = (id) => {
    return !!cartItems.find((item) => item.id === id);
  };

  return (
    <div className="featured-products">
      <h4>FEATURED PRODUCTS</h4>

      <div className="items">
        {featuredProducts.map((featuredProduct) => (
          <div className="item" key={featuredProduct.id}>
            <h4>{featuredProduct.name}</h4>
            <h5 className="price">CAD {featuredProduct.price}</h5>
            <div className="image">
              <img src={featuredProduct.image} />
            </div>
            {isInCart(featuredProduct.id) ? (
              <span
                className="add-to-cart"
                onClick={() => increase(featuredProduct)}
              >
                Add More
              </span>
            ) : (
              <span
                className="add-to-cart"
                onClick={() => addProduct(featuredProduct)}
              >
                Add to cart
              </span>
            )}
            <button className="plus"></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
