import React, { useContext } from "react";

import "./index.css";

import { CartContext } from "../../contexts/CartContext";
import { formatNumber } from "../../helpers/utils";

import setTitle from "../../tools.js";
import headerImage from "../../assets/images/checkout-page-header.png";

import { DeleteOutline, Search } from "@material-ui/icons";

const CheckoutPage = () => {
  const { total, cartItems, increase, decrease, removeProduct } =
    useContext(CartContext);

  return (
    <div className="checkout-page">
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
          <div className="checkout-items">
            <h4>Your Cart</h4>
            {cartItems.map((ci) => (
              <div key={"checkout-item-" + ci.id} className="checkout-item">
                <div className="product">
                  <span>
                    {ci.quantity}x {ci.name}
                  </span>
                  <span>CAD {formatNumber(ci.price * ci.quantity)}</span>
                </div>
                <div className="action">
                  <div
                    className="product-action decrease-quantity"
                    onClick={() => {
                      decrease(ci);
                    }}
                  >
                    -
                  </div>
                  <div className="product-action quantity">{ci.quantity}</div>
                  <div
                    className="product-action increase-quantity"
                    onClick={() => {
                      increase(ci);
                    }}
                  >
                    +
                  </div>
                  <span
                    className="product-action remove"
                    onClick={() => {
                      removeProduct(ci);
                    }}
                  >
                    <DeleteOutline />
                  </span>
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
          <div className="checkout-information">
            <p>
              All SALES are pre-sale only. All new purchases will be shipped out
              MID-AUGUST.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
