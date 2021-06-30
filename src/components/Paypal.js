import React, { useRef, useEffect, useContext } from "react";

import { CartContext } from "../contexts/CartContext";

const Paypal = () => {
  const paypal = useRef();

  const { total, handleCheckout, totalAmount } = useContext(CartContext);
  useEffect(() => {
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
                  value: totalAmount,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
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
