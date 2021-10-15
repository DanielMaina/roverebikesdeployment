import React, { useState, useContext } from "react";
import Modal from "react-modal";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "../assets/styles/Product.css";

import FeaturedProducts from "../components/FeaturedProducts";

import { CartContext } from "../contexts/CartContext";
import { ProductsContext } from "../contexts/ProductsContext";

import spotlightImage1 from "../assets/images/product/product-page-product-1.png";
import spotlightImage2 from "../assets/images/product/product-page-product-2.png";

import roverLogo from "../assets/images/product/rover_logo.svg";

const customStyles = {
  overlay: {
    zIndex: 999,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Product = () => {
  const { products } = useContext(ProductsContext);
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const product = products.find((p) => p.id === 1);

  const slideImages = [spotlightImage1, spotlightImage2];

  const [productIndex, setProductIndex] = useState(0);

  const productFrames = [
    {
      bodyLength: "17.7''",
      frameSize: "5'2''-5'7''",
    },
    {
      bodyLength: "19.7''",
      frameSize: "5'8'' - 6'6''",
    },
  ];

  const zoomOutProperties = {
    indicators: true,
    arrows: false,
    duration: 3000,
    pauseOnHover: false,
    transitionDuration: 500,
    indicators: (i) => <span href="#" className="spotlight-pager"></span>,
    onChange: function (oldIndex, ind) {
      setProductIndex(ind);
    },
  };

  const addToCart = () => {
    addProduct(product);
    openModal();
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="main-product">
      <div className="slide-container">
        <Slide {...zoomOutProperties}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>
        </Slide>
      </div>

      <div className="main-product-information">
        <h5 className="product-heading">| It's your world, ride it!</h5>
        <h3 className="product-name">
          <img src={roverLogo} />
        </h3>
        <h4 className="product-price">
          <span className="product-new-price">CAD 2,899.99</span>
        </h4>
        <div className="product-description">
          <p>
            Take on long distance and uphill adventures like a pro. With our
            innovative Torque Sensor System, you can make any challenging
            environment seems effortless
          </p>
          <p>
            Steel frame {productFrames[productIndex].bodyLength}
            <br />
            For riders {productFrames[productIndex].frameSize}
          </p>
        </div>
        <div className="product-rotates">
          <div
            className={"product-rotate" + (productIndex === 0 ? " active" : "")}
            onClick={() => setProductIndex(0)}
          >
            <span>X</span>
          </div>
          <div
            className={"product-rotate" + (productIndex === 1 ? " active" : "")}
            onClick={() => setProductIndex(1)}
          >
            <span>Y</span>
          </div>
        </div>
        <div className="product-actions">
          <div
            className="product-action add-to-cart"
            onClick={() => addToCart()}
          >
            <div className="icon">
              <span></span>
            </div>
            <a href="#">Add to cart</a>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Featured Products Modal"
        >
          <div
            style={{
              position: "absolute",
              right: 0,
              margin: 10,
            }}
          >
            <button className="close-modal-button" onClick={closeModal}>
              Close
            </button>
          </div>
          <FeaturedProducts />
          <div className="product-actions modal">
            <div className="product-action check-out-now">
              <div className="icon">
                <span></span>
              </div>
              <a href="/checkout">Check out now</a>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Product;
