import React, { useState, useEffect, useContext, useRef } from "react";
import Select from "react-select";
import "./index.css";
import setTitle from "../../tools.js";

import Paypal from "../../components/Paypal";
import { cities } from "../../services/data";

import { CartContext } from "../../contexts/CartContext";
import { formatNumber } from "../../helpers/utils";

import { DeleteOutline, Search } from "@material-ui/icons";
import mastercardIcon from "../../assets/icons/payment-methods/mastercard.png";
import visaIcon from "../../assets/icons/payment-methods/visa.png";
import maestroIcon from "../../assets/icons/payment-methods/maestro.png";
import americanexpressIcon from "../../assets/icons/payment-methods/americanexpress.png";
import paypalIcon from "../../assets/icons/payment-methods/paypal.png";

const CheckoutPage = () => {
  useEffect(() => {
    setTitle("Checkout");
  }, []);

  const { total, cartItems, increase, decrease, removeProduct } =
    useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState();
  const [processing, setProcessing] = useState(false);
  const [country, setCountry] = useState(false);
  const [selectedCity, setSelectedCity] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [cityData, setCityData] = useState([]);
  const [shippingAmount, setShippingAmount] = useState(0);
  const [taxValue, setTaxValue] = useState({ value: 0, amount: 0 });
  const [totalAmount, setTotalAmount] = useState(0);
  const submitButtonRef = useRef();
  const citySelectRef = useRef();

  const countryData = [
    { value: "canada", label: "Canada" },
    { value: "usa", label: "U.S.A" },
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      //borderBottom: "1px dotted pink",
      color: "black",
      textAlign: "left",
      //padding: 20,
    }),
  };

  const cityList = (_country) => {
    if (_country === "canada") {
      setCityData(
        cities.canada.items.map((city) => {
          return { value: city.name, label: city.name };
        })
      );
    } else if (_country === "usa") {
      let keys = Object.keys(cities.usa.items);
      let usaCityData = [];

      keys.forEach((key) => {
        let options;
        options = cities.usa.items[key].sort(function (a, b) {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        });

        options = options.map((item) => {
          return { label: item, value: item };
        });
        let cityObject = {
          label: key,
          options: options,
        };
        usaCityData.push(cityObject);
      });

      setCityData(usaCityData);
    }
  };
  const countryHandler = (e) => {
    setCountry(e.value);
    citySelectRef.current.select.clearValue();
    cityList(e.value);

    let _shippingAmount = cities[e.value].shipping;
    setShippingAmount(_shippingAmount);
    setTaxValue({
      amount: 0,
      value: 0,
    });

    if (e.value === "canada") {
      setTotalAmount(calculateTotal(e.value));
    } else {
      setTotalAmount(parseFloat(total) + parseFloat(_shippingAmount));
    }
  };
  const cityHandler = (e) => {
    let selectedCity = null;
    if (e) {
      setSelectedCity(e.value);

      if (country === "canada") {
        selectedCity = cities.canada.items.find(
          (city) => city.name === e.value
        );

        if (selectedCity) {
          setTaxValue({
            amount:
              (parseFloat(total) * parseFloat(selectedCity.taxPercantage)) /
              100,
            value: selectedCity.taxPercantage,
          });
          setTotalAmount(calculateTotal(country, selectedCity));
        }
      } else {
        setTaxValue({
          amount: 0,
          value: 0,
        });
        setTotalAmount(calculateTotal(country, selectedCity));
      }
    }
  };
  const calculateTotal = (country, selectedCity = null) => {
    let totalAmount = parseFloat(total);

    if (country === "canada") {
      let _taxAmount = 0;
      if (selectedCity) {
        _taxAmount =
          (parseFloat(totalAmount) * parseFloat(selectedCity.taxPercantage)) /
          100;
        totalAmount = totalAmount + _taxAmount + parseFloat(shippingAmount);
      } else {
        totalAmount = 0;
      }
    } else {
      totalAmount = totalAmount + parseFloat(shippingAmount);
    }
    return totalAmount;
  };

  const setFormValue = (input) => {
    let _formValues = formValues;
    _formValues[input.target.name] = input.target.value;
    setFormValues(_formValues);
  };

  const validateForm = () => {};

  return (
    <div className="checkout-page">
      <div className="checkout-wrapper">
        <div className="checkout-form">
          <h4>Shipping Details</h4>
          <form action="#" method={"POST"}>
            <div className="form-group">
              <label>*Email Address</label>
              <input
                name={"email"}
                type={"text"}
                onKeyUp={setFormValue}
              ></input>
            </div>
            <div className="form-group row">
              <div className="form-row">
                <label>*Name</label>
                <input
                  name={"name"}
                  type={"text"}
                  onKeyUp={setFormValue}
                ></input>
              </div>
              <div className="form-row">
                <label>*Last Name</label>
                <input
                  name={"last_name"}
                  type={"text"}
                  onKeyUp={setFormValue}
                ></input>
              </div>
            </div>

            <div className="form-group">
              <label>*Street and house number</label>
              <input name={"street"} type={"text"}></input>
            </div>
            <div className="form-group row">
              <div className="form-row">
                <label>*County</label>
                <Select
                  name={"country"}
                  isSearchable={false}
                  styles={customStyles}
                  options={countryData}
                  onChange={countryHandler}
                />
              </div>
              <div className="form-row">
                <label>*City</label>
                <Select
                  name={"city"}
                  ref={citySelectRef}
                  styles={customStyles}
                  options={cityData}
                  onChange={cityHandler}
                />
              </div>
            </div>
            <div className="form-group">
              <label>*Zip/Postal Code</label>
              <input
                name={"zip_code"}
                type={"text"}
                onKeyUp={setFormValue}
              ></input>
            </div>

            <h4>Billing Address</h4>
            <div className="dark-box">
              <div className="form-group row">
                <input
                  type="radio"
                  name="shipping-address"
                  id="shipping-address-1"
                  className="inherit"
                />
                <label for="shipping-address-1">
                  Same as shipping address.
                </label>
              </div>
              <div className="form-group row">
                <input
                  type="radio"
                  name="shipping-address"
                  id="shipping-address-2"
                  className="inherit"
                />
                <label for="shipping-address-2">
                  Different billing address.
                </label>
              </div>
            </div>

            <h4>Review and Place Order</h4>
            <div className="dark-box">
              <div className="form-group row">
                <input
                  type="radio"
                  name="review-approve"
                  id="review-approve"
                  className="inherit"
                />
                <label for="review-approve">
                  Please review the order details above, and when you're ready,
                  click Place Order.
                </label>
              </div>
              <div className="form-group row">
                <input
                  type="radio"
                  name="terms-approve"
                  id="terms-approve"
                  className="inherit"
                />
                <label for="terms-approve">
                  I agree to the Terms & Conditions,Privacy Policy and Return
                  Policy
                </label>
              </div>
            </div>
            <div className="payment-box">
              <h4>Payment</h4>
              <div className="form-group buttons">
                {totalAmount > 0 ? <Paypal amount={totalAmount} /> : null}
              </div>
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
                <span>CAD {formatNumber(shippingAmount)}</span>
              </div>
              <div className="item">
                <span>Tax (%{taxValue.value}) </span>
                <span>CAD {formatNumber(taxValue.amount)}</span>
              </div>
            </div>
            <div className="checkout-amount">
              <span>Total</span>
              <span>CAD {formatNumber(totalAmount)}</span>
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
