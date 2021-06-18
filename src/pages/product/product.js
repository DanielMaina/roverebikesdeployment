import React from "react";

import "./product.css";
import setTitle from "../../tools.js";

import Product from "../../components/Product";

class ProductPage extends React.Component {
  constructor() {
    super();

    setTitle("Rover E-Bike | Product", true);

    this.state = {};
  }

  render() {
    return (
      <div className="product-page">
        <Product />
        <div className="bike-spec">
          <h3 className="header">
            COMPONENT<span>SPEC</span>
          </h3>

          <div className="spec-section">
            <div className="spec-item">
              <h3 className="section-header">FRAME</h3>
              <div className="spec-grid">
                <div className="spec-grid-item">
                  <h4>FRAME</h4>
                  <p>
                    Intelligent adjustment and powerful power output, specially
                    designed for high power and high torque output use
                    scenarios.
                  </p>
                </div>

                <div className="spec-grid-item">
                  <h4>FRAME SIZE</h4>
                  <p>
                    ROVER <span className="tx-red">X</span>
                    <span className="sm">45 - 49 cm</span>
                  </p>
                  <p>
                    ROVER <span className="tx-red">Y</span>
                    <span className="sm">49 - 53 cm</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="spec-item">
              <h3 className="section-header">MOTOR</h3>
              <div className="spec-grid">
                <div className="spec-grid-item">
                  <h4>
                    <span className="tx-red">M</span>080
                  </h4>
                  <p>
                    M080 26” rear motor with 7S cassette and disk brake 350W
                  </p>
                </div>

                <div className="spec-grid-item">
                  <h4>MOTOR</h4>
                  <p>
                    Power
                    <span className="sm">
                      <span className="tx-red">250</span>W
                      <span className="tx-red">350</span>W
                    </span>
                  </p>
                  <p>
                    Voltage
                    <span className="sm">
                      <span className="tx-red">36</span>V
                    </span>
                  </p>
                  <p>
                    Voltage
                    <span className="sm">
                      ≥<span className="tx-red">40</span>Nm
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="spec-item">
              <h3 className="section-header">TRANSMISSION | GEAR</h3>
              <div className="spec-grid">
                <div className="spec-grid-item">
                  <h4>SHIMANO</h4>
                  <p>
                    Shimano 6/7-SPEED SUPER SHORT CAGE, TOP-NORMAL, DIRECT
                    ATTACHENT TYPE
                  </p>
                </div>

                <div className="spec-grid-item">
                  <h4>RIGHT HANDLE TRANSMISSION</h4>
                  <p>Shimano 7-SPEED REVO SHIFTER 2500MM inner with O.G.D</p>
                </div>
              </div>
            </div>
            <div className="spec-item">
              <h3 className="section-header">BATTERY</h3>
              <div className="spec-grid">
                <div className="spec-grid-item">
                  <h4>BATTERY</h4>
                  <p>36V10AH-4036V10AH-40pcs cellpcs cell</p>
                </div>

                <div className="spec-grid-item">
                  <h4>LIFE TIME</h4>
                  <p>36V10AH-4036V10AH-40pcs cellpcs cell</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
