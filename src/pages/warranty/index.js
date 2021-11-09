import React, { useEffect } from "react";

import "./index.css";
import setTitle from "../../tools.js";

import topImage from "../../assets/images/warranty-bg-top.png";
import bottomImage from "../../assets/images/warranty-bg-bottom.png";

const WarrantyPage = () => {
  useEffect(() => {
    setTitle("Warranty");
  }, []);

  return (
    <div className="warranty-page">
      <div
        className="main-content"
        style={{ backgroundImage: "url(" + topImage + ")" }}
      >
        <div className="center-wrapper">
          <div className="center-content">
            <h4>Warranty</h4>
            <p>
              ROVER E-BIKE guarantees each new ROVER e-bicycle frame against
              defects in workmanship and materials for five years. Shimano
              transmission part for two years. Headset, fork, hub, crankset, QR
              seat post, handle bar, stem, headset nut, seat clamp, brake
              system, droup out hanger, mudguard, kickstand, carrier, charger,
              monitor, F/light, R/light, throttle, speaker for one year.
              Battery, controller, cabel, motor, and sensor for 2 years.
              However, consumable parts do not have warranties.
            </p>

            <a
              href="/content/warranty-detail.pdf"
              className="button"
              download
            >
              Download detailed version
            </a>
          </div>
        </div>
      </div>
      <div className="shipping-line">
        <div>
          <img src="/img/icons/shipping-truck-white.svg" />
          <div className="shipping-line-content">
            <h5>Free shipping and 7 days free return Canada wide.</h5>
            <p>
              Different rates will be applied for US. Head to UPS website for
              more an estimated delivery fee.
            </p>
          </div>
        </div>
      </div>
      <div
        className="main-content"
        style={{ backgroundImage: "url(" + bottomImage + ")" }}
      >
        <div className="center-wrapper">
          <div className="center-content">
            <h4>Terms and conditions of use </h4>
            <p>
              By using or browsing this website (the “Site”), you acknowledge
              that you have read, understood and agree to be bound to these
              Terms and Conditions and all applicable laws and regulations. If
              you do not agree to be bound by these Terms and Conditions, then
              you must not use this Site. We may change these Terms and
              Conditions at any time and without any notice to you so we suggest
              that you periodically visit this page to review these Terms and
              Conditions. By using this Site after we post any changes, you
              agree to accept those changes, whether or not you actually
              reviewed them.
            </p>

            <a
              href="/content/terms-and-conditions-of-use.pdf"
              className="button"
              download
            >
              Download detailed version
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPage;
