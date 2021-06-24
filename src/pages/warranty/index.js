import React from "react";

import "./index.css";
import setTitle from "../../tools.js";

import topImage from "../../assets/images/warranty-bg-top.png";
const WarrantyPage = () => {
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

            <a href="#" className="button">
              Download detailed version
            </a>
          </div>
        </div>
      </div>
      <div className="center-seperator">
        <h5>Free shipping and 7 days free return Canada wide.</h5>
        <p>
          Different rates will be applied for US. Head to UPS website for more
          an estimated delivery fee.
        </p>
      </div>
    </div>
  );
};

export default WarrantyPage;
