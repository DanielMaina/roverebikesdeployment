import React, { useContext, useRef } from "react";

import "./index.css";
import setTitle from "../../tools.js";
import headerImage from "../../assets/images/checkout-page-header.png";
import { DispatchContext, StoreContext } from "../../lib/providers/state"

import { DeleteOutline, Search } from "@material-ui/icons";

const CheckoutPage = React.memo((props) => {
  const store = useContext(StoreContext)
  const { cart, itemCount, cartValue } = store.state.checkout
  const dispatch = useContext(DispatchContext)

  const removeItemHandler = (key, quantity) => {
    dispatch.sync.checkout.removeItem({ key: key, quantityToRemove: quantity })
  }
  setTitle("Rover E-Bike | Checkout", true);

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

            {cart.map((item) => {
              const { key, title, model, color, price, quantity } = item
              return (<div className="checkout-item">
                <div className="product">
                  <span>{`${quantity}x ${title}`}</span>
                  <span>{`${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'CAD' }).format(parseFloat(price))}`}</span>
                </div>
                <div className="action" onClick={() => removeItemHandler(key, quantity)}>
                  <DeleteOutline />
                </div>
              </div>
              )
            })}
            {itemCount === 0 && (<div className="checkout-item">
              <div className="product">
                <span> Add an item to your cart</span>
              </div>
            </div>)}

            <div className="checkout-payment-info">
              <div className="item">
                <span>Subtotal</span>
                <span>{`${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'CAD' }).format(parseFloat(cartValue))}`}</span>
              </div>
              <div className="item">
                <span>Shipping</span>
                <span>{`${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'CAD' }).format(parseFloat('100'))}`}</span>
              </div>
              <div className="item">
                <span>Tax</span>
                <span>{`${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'CAD' }).format(parseFloat('100'))}`}</span>
              </div>
            </div>
            <div className="checkout-amount">
              <span>Total</span>
              <span>{`${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'CAD' }).format((parseFloat(cartValue) + 100 + 100))}`}</span>
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
})

export default CheckoutPage;
