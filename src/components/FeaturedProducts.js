import React, { useContext, useState } from "react";
import Modal from "react-modal";

import "../assets/styles/FeaturedProducts.css";

import { CartContext } from "../contexts/CartContext";
import { ProductsContext } from "../contexts/ProductsContext";

import modalImage from "../assets/images/modal.png";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const FeaturedProducts = () => {
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  const featuredProducts = products.filter((item) => item.isFeatured === true);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalModel, setModalModel] = useState(null);
  const isInCart = (id) => {
    return !!cartItems.find((item) => item.id === id);
  };

  function openModal(featuredProduct) {
    setModalModel(featuredProduct);
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="featured-products">
      <h4>FEATURED PRODUCTS</h4>

      <div className="items">
        {featuredProducts.map((featuredProduct) => (
          <div className="item" key={featuredProduct.id}>
            <h4>{featuredProduct.name}</h4>
            <h5 className="price">CAD {featuredProduct.price}</h5>
            <div
              className="image"
              onClick={() => {
                openModal(featuredProduct);
              }}
            >
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
            <button
              className="plus"
              onClick={() => {
                openModal(featuredProduct);
              }}
            ></button>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={modalImage} />
      </Modal>
    </div>
  );
};

export default FeaturedProducts;
