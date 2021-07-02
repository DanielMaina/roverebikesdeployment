import React, { useContext, useState } from "react";
import Modal from "react-modal";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "../assets/styles/FeaturedProducts.css";

import { CartContext } from "../contexts/CartContext";
import { ProductsContext } from "../contexts/ProductsContext";

import modalImage from "../assets/images/modal.png";
import modalImageMobile from "../assets/images/modal-mobile.png";
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

const zoomOutProperties = {
  indicators: true,
  arrows: false,
  duration: 3000,
  pauseOnHover: false,
  transitionDuration: 500,
  indicators: (i) => <span href="#" className="reviews-pager"></span>,
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

  const getQuantityFromCart = (id) => {
    let item = cartItems.find((item) => item.id === id);
    return item && item.quantity > 1 ? "(" + item.quantity + "x)" : "";
  };

  function openModal(featuredProduct) {
    setModalModel(featuredProduct);
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const listItems = () => {
    return featuredProducts.map((featuredProduct) => (
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
        {/* {isInCart(featuredProduct.id) ? (
          <span
            className="add-to-cart added"
            onClick={() => increase(featuredProduct)}
          >
            Add One More {getQuantityFromCart(featuredProduct.id)}
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
        ></button> */}
      </div>
    ));
  };
  return (
    <div className="featured-products">
      <h4>FEATURED PRODUCTS</h4>

      <div className="items desktop">{listItems()}</div>
      <div className="items mobile">
        <Slide {...zoomOutProperties}>{listItems()}</Slide>
      </div>
      {/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img
          src={modalImage}
          className="featured-products-modal-image-desktop"
        />
        <img
          src={modalImageMobile}
          className="featured-products-modal-image-mobile"
        />
      </Modal> */}
    </div>
  );
};

export default FeaturedProducts;
