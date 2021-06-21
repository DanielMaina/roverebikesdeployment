import React from "react";

import "./index.css";
import setTitle from "../../tools.js";

import Product from "../../components/Product";
import FeaturedProducts from "../../components/FeaturedProducts";

import sectionImage1 from "../../assets/images/product/section-1.svg";
import sectionImage2 from "../../assets/images/product/section-2.svg";
import sectionImage3 from "../../assets/images/product/section-3.svg";
import sectionImage4 from "../../assets/images/product/section-4.svg";
import sectionImage5 from "../../assets/images/product/section-5.svg";
import promoVideo from "../../assets/movies/rover-e-Bike-short.mp4";

class ProductPage extends React.Component {
  constructor() {
    super();

    setTitle("Rover E-Bike | Product", true);

    this.state = {};
  }

  render() {
    return (
      <div className="product-page">
        <div className="top-message">
          <p>
            EXCLUSIVE OFFER FOR A <span>LIMITED TIME ONLY</span> - FIRST 50
            ROVER E-BIKES ARE NOW ON SALE FOR <span>1,899 CAD!</span>
          </p>
        </div>
        <Product />

        <div className="product-section-white">
          <div className="product-section-desc">
            <h4>One of a kind torque sensor system.</h4>
            <p>Guarantees the smoothest rides under any road condition.</p>
          </div>
          <div className="product-section-image">
            <img src={sectionImage1} width={707} />
          </div>
        </div>

        <div
          className="product-section-black"
          style={{ backgroundImage: "url(" + sectionImage2 + ")" }}
        >
          <div className="product-section-desc">
            <h4>Shock Lock</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="product-section-white">
          <div className="product-section-desc">
            <h4>Just a tiny twist with your thumb.</h4>
            <p>
              The REVOSHIFT shifter allows riders to maintain a secure and
              stable grip on the handlebar.
            </p>
          </div>
          <div className="product-section-image">
            <img src={sectionImage3} width={617} />
          </div>
        </div>

        <div
          className="product-section-black"
          style={{ backgroundImage: "url(" + sectionImage4 + ")" }}
        >
          <div className="product-section-desc">
            <h4>Powerful, light and quiet. </h4>
            <p>
              With IP65 protection level, our motors are protected against water
              jets at any angle.
            </p>
          </div>
        </div>

        <div className="product-section-white">
          <div className="product-section-desc">
            <h4>Double tension rear derailleur.</h4>
            <p>
              Made to last with high-quality aluminium alloy to provide
              stability during sudden speed change.
            </p>
          </div>
          <div className="product-section-image">
            <img src={sectionImage5} width={664} />
          </div>
        </div>

        <div className="product-section-video">
          <video src={promoVideo} muted loop autoPlay></video>
        </div>

        <div className="bike-spec">
          <h3 className="header">
            COMPONENT<span>SPEC</span>
          </h3>

          <div className="spec-section">
            <div className="spec-item">
              <h3 className="section-header">FRAME</h3>
              <div className="spec-grid">
                <div className="spec-grid-item">
                  <h4>Frame</h4>
                  <p>Radically compact frame made of high quality aluminium</p>
                  <p>
                    Colour: Matte Black
                    <br />
                    Weight: 20kg
                  </p>
                </div>

                <div className="spec-grid-item">
                  <h4>Frame Size</h4>
                  <h5>
                    ROVER <span className="tx-red">X</span>
                  </h5>
                  <p className="sm">
                    Body length: 165 - 170 cm
                    <br />
                    Frame size: 45 - 49 cm
                  </p>
                  <h5>
                    ROVER <span className="tx-red">Y</span>
                  </h5>
                  <p className="sm">
                    Body length: 170 - 175 cm <br />
                    Frame size: 49 - 53 cm
                  </p>
                </div>
              </div>
            </div>
            <div className="spec-item">
              <h3 className="section-header">
                METRIX
                <br />
                DISPLAY
              </h3>
              <div className="spec-grid">
                <div className="spec-grid-item">
                  <h4>SPORT Mode</h4>
                  <p>Default: anti-glare, sport fashion digital display</p>
                </div>

                <div className="spec-grid-item">
                  <h4>
                    <span className="tx-red">SMART</span> Mode
                  </h4>
                  <p>
                    Add-on: full-colour{" "}
                    <span className="tx-red">LED screen display</span> for an
                    addtional CAD100
                  </p>
                  <p>Easy replace and install</p>
                </div>
              </div>
            </div>
            <div className="spec-item">
              <h3 className="section-header">
                BRAKES | DISC BRAKES | CHAINS | SADDLES
              </h3>
              <div className="spec-grid">
                <div className="spec-grid-item">
                  <h4>Brakes</h4>
                  <p>Front and rear hydraulic disc brakes</p>
                </div>

                <div className="spec-grid-item">
                  <h4>Chains</h4>
                  <p>Automatic chain-tensioning system</p>
                </div>

                <div className="spec-grid-item">
                  <h4>Disc Brakes</h4>
                  <p>
                    Offers superior brake performance without the annoying howls
                    or vibration
                  </p>
                </div>
                <div className="spec-grid-item">
                  <h4>Saddles</h4>
                  <p>Easy adjustable height</p>
                </div>
              </div>
            </div>
            <div className="spec-item">
              <h3 className="section-header">BATTERY</h3>
              <div className="spec-grid">
                <div className="spec-grid-item">
                  <h4>BATTERY</h4>
                  <p>
                    Greenway 36V 14AH-40pcs cell
                    <br />
                    Battery shell: Greenway
                    <br />
                    Samsung LG battery
                  </p>
                </div>

                <div className="spec-grid-item">
                  <h4>Battery life</h4>
                  <p>
                    Fully charged within 5 hours
                    <br />
                    Range: 120 - 160 km
                  </p>
                </div>
                <div className="spec-grid-item">
                  <h4>Protection</h4>
                  <p>
                    Overvoltage protection
                    <br />
                    Short circuit protection
                    <br />
                    Temperature protection
                  </p>
                </div>
              </div>
            </div>

            <div className="spec-item">
              <h3 className="section-header">TORQUE SENSOR SYSTEM</h3>
              <div className="spec-grid">
                <div className="spec-grid-item">
                  <h4>Magnetic sensing system</h4>
                  <p>
                    Introducing the principle of magnetostriction into our
                    e-bikes, our technology therefore, does not require gauges
                    or telemetry. The magneto strictive sensors provide you with
                    very accurate real-time data - even in extreme environments.
                  </p>
                </div>

                <div className="spec-grid-item">
                  <h4>Uphill and long distance friendly</h4>
                  <p>
                    Enjoy climbing uphill or long distance rides without a
                    worry.
                  </p>
                  <p>
                    Our torque sensor system helps preserve battery consumption.
                    We want to make healthy living a lifestyle for you!
                  </p>
                </div>
              </div>
            </div>

            <div className="spec-item">
              <h3 className="section-header">MOTOR</h3>
              <div className="spec-grid">
                <div className="spec-grid-item">
                  <h4>Mivice M080</h4>
                  <p>
                    36V 350W
                    <br />
                    Max torque: &gt;40Nm
                    <br />
                    Weight: 2.5Kg
                    <br />
                    Waterproof grade: IP65
                  </p>
                </div>

                <div className="spec-grid-item">
                  <h4>Powerful, light and quiet</h4>
                  <p>
                    The motor can achieve a maximum power of 600W with the
                    highest efficiency up to 80%.
                  </p>
                  <p>
                    With our unique gear set technology, we are able to obtain
                    the no-load noise of less than 55dB.
                  </p>
                </div>
              </div>
            </div>

            <div className="spec-item">
              <h3 className="section-header">SHIFTER</h3>
              <div className="spec-grid">
                <div className="spec-grid-item">
                  <h4>Shimano Tourney SL-RS35</h4>
                  <p>
                    Dimensions‎: 9.4 x 9.12 x 6.1 cm
                    <br />
                    Weight‎: 91 g<br /> Material: high-quality plastic
                    <br /> and durable metal{" "}
                  </p>
                </div>

                <div className="spec-grid-item">
                  <h4>Easy twist and adjustments</h4>
                  <p>
                    The REVOSHIFT shifter allows riders to maintain a secure and
                    stable grip on the handlebar.
                  </p>
                  <p>Easy, steady, secure and smooth shifting.</p>
                </div>
              </div>
            </div>

            <div className="spec-item">
              <h3 className="section-header">DERAILLEUR</h3>
              <div className="spec-grid">
                <div className="spec-grid-item">
                  <h4>Shimano RD-TY300-SGS</h4>
                  <p>
                    Dimensions: 12.29 x 11.91 x 10.11cm
                    <br />
                    Weight: ‎259 g<br />
                    Material: high-quality aluminum alloy
                  </p>
                </div>

                <div className="spec-grid-item">
                  <h4>Double tension rear derailleur</h4>
                  <p>
                    Made to last with high-quality aluminium alloy to provide
                    stability during sudden speed change.
                  </p>
                </div>
              </div>
            </div>

            <div className="spec-item">
              <h3 className="section-header">SUSPENSION FORK</h3>
              <div className="spec-grid">
                <div className="spec-grid-item">
                  <h4>Trama CTZ</h4>
                  <p>
                    Wheel: 700C
                    <br />
                    Stanchion: 28.6
                    <br />
                    Pitch: 107
                    <br />
                    Travel: 40mm
                  </p>
                </div>

                <div className="spec-grid-item">
                  <h4>Impact proof</h4>
                  <p>
                    The front fork offers support and absorbs impact caused by
                    uneven terrain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeaturedProducts />
      </div>
    );
  }
}

export default ProductPage;
