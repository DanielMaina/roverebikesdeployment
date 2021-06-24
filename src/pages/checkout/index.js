import React, { useContext } from "react";

import "./index.css";

import { CartContext } from "../../contexts/CartContext";
import { formatNumber } from "../../helpers/utils";

import setTitle from "../../tools.js";
import headerImage from "../../assets/images/checkout-page-header.png";

import { DeleteOutline, Search } from "@material-ui/icons";

const CheckoutPage = () => {
  /* constructor() {
    super();

    setTitle("Rover E-Bike | Checkout", true);

    this.state = {};
  } */

  const {
    total,
    cartItems,
    itemCount,
    clearCart,
    checkout,
    handleCheckout,
    decrease,
  } = useContext(CartContext);

  console.log(cartItems);
  return (
    <div className="checkout-page">
      <div className="rover-xy-menu">
        <a href="#">RoverX</a>
        <a href="#">RoverY</a>
      </div>

      <div className="checkout-wrapper">
        <div className="checkout-form">
          <h4>Personal Information</h4>
          <form action="/" method={"POST"}>
            <div className="form-group">
              <label>*Email Address</label>
              <input type={"text"}></input>
            </div>
            <div className="form-group row">
              <div className="form-row">
                <label>*Name</label>
                <input type={"text"}></input>
              </div>
              <div className="form-row">
                <label>*Last Name</label>
                <input type={"text"}></input>
              </div>
            </div>
            <div className="form-group">
              <label>*Message</label>
              <textarea></textarea>
            </div>
            <div className="form-group">
              <label>*Street and house number</label>
              <input type={"text"}></input>
            </div>
            <div className="form-group">
              <label>*Zip/Postal Code</label>
              <input type={"text"}></input>
            </div>
            <div className="form-group row">
              <div className="form-row">
                <label>*City</label>
                <select>
                  <option></option>
                  <option>Toronto</option>
                  <option>Montréal</option>
                  <option>Vancouver</option>
                </select>
              </div>
              <div className="form-row">
                <label>*County</label>
                <select>
                  <option></option>
                  <option>Canada</option>
                  <option>England</option>
                  <option>France</option>
                  <option>Norway</option>
                  <option>Turkey</option>
                  <option>U.S.A</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <button type={"submit"}>Submit</button>
            </div>
          </form>
        </div>
        <div className="checkout-details">
          <h4>Your Cart</h4>
          <div className="checkout-items">
            {cartItems.map((ci) => (
              <div className="checkout-item">
                <div className="product">
                  <span>
                    {ci.quantity}x {ci.name}
                  </span>
                  <span>CAD {formatNumber(ci.price * ci.quantity)}</span>
                </div>
                <div
                  className="action"
                  onClick={() => {
                    decrease(ci);
                  }}
                >
                  <DeleteOutline />
                </div>
              </div>
            ))}

            <div className="checkout-payment-info">
              <div className="item">
                <span>Subtotal</span>
                <span>CAD {formatNumber(total)}</span>
              </div>
              <div className="item">
                <span>Shipping</span>
                <span>CAD {formatNumber(total > 0 ? 100 : 0)}</span>
              </div>
              <div className="item">
                <span>Tax</span>
                <span>CAD {formatNumber(total > 0 ? 300 : 0)}</span>
              </div>
            </div>
            <div className="checkout-amount">
              <span>Total</span>
              <span>CAD {formatNumber(parseFloat(total) + 400)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="center-content">
        <div>
          <h4>
            Hello,
            <br />
            how can we help?{" "}
          </h4>
        </div>
        <div className="search-form">
          <p>
            FAQs, quick fixes, and official info about Rover E-bike. Just a
            search away.
          </p>

          <form action="">
            <div className="form-group">
              <input type={"text"}></input>
              <div className="icon">
                <Search style={{ color: "#000" }} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
