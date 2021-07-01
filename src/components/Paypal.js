import React, { useRef, useEffect, useContext } from "react";

import { CartContext } from "../contexts/CartContext";

const Paypal = (props) => {
  const paypal = useRef();

  const { total, handleCheckout } = useContext(CartContext);
  useEffect(() => {
    console.log(props.amount.toFixed(2));
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "ROVER E-Bike",
                amount: {
                  currency_code: "CAD",
                  value: parseFloat(props.amount),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default Paypal;
