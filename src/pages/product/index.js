import React from "react";

import "./index.css";

import setTitle from "../../tools.js";
import Product from "../../components/Product";
import Collapse from "../../components/Collapse";

import FeaturedProducts from "../../components/FeaturedProducts";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import sectionBatteryImage from "../../assets/images/3d_5_battery.png";
import sectionImage1 from "../../assets/images/homepage-image.png";
import torqueVideo from "../../assets/movies/3d_1_torque.mp4";
import motorVideo from "../../assets/movies/3d_4_motor.mp4";

class ProductPage extends React.Component {
  constructor() {
    super();

    this.state = {
      displayAllSections: false,
    };
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ video1IsLoading: true });
  }

  componentDidUpdate() {
    setTitle("Product");
  }

  getVideo1 = (elem) => {
    this.video1 = elem;
  };

  playVideo1 = (elm) => {
    this.video1.play();
  };

  getVideo2 = (elem) => {
    this.video2 = elem;
  };

  playVideo2 = (elm) => {
    this.video2.play();
  };

  getVideo3 = (elem) => {
    this.video3 = elem;
  };

  playVideo3 = (elm) => {
    this.video3.play();
  };

  getVideo4 = (elem) => {
    this.video4 = elem;
  };

  playVideo4 = (elm) => {
    this.video4.play();
  };

  displayAllSectionsHandler = () => {
    this.setState({
      displayAllSections: !this.state.displayAllSections,
    });
  };

  render() {
    const { video1IsLoading } = this.state;

    return (
      <div className="product-page">
        <div className="top-message">
          <p>
            LIMITED BLACK FRIDAY OFFER FIRST 10 BIKES FOR ONLY CA$ 1,899 !
          </p>
        </div>
        <Product />

        <div className="section-wrapper">
          <div className="section-1">
            <div
              className="product-section-desc"
              onMouseEnter={this.playVideo1}
            >
              <div>
                <h4>Mivice dual-sided torque sensor</h4>
                <p>
                  Our fast responsive dual-sided torque sensor provides seamless
                  power support and gives you the smoothest riding experience.
                </p>
              </div>
            </div>
            <div
              className="product-section-image"
              onMouseEnter={this.playVideo1}
            >
              <React.Fragment>
                {video1IsLoading}

                <video
                  ref={this.getVideo1}
                  src={torqueVideo}
                  muted
                  loop
                  autoPlay
                  playsInline
                  webkit-playsinline
                ></video>
              </React.Fragment>
            </div>
          </div>

          <div className="section-2">
            <div
              className="product-section-desc"
              onMouseEnter={this.playVideo2}
            >
              <div>
                <h4>Shock absorbing system</h4>
                <p>
                  Our front suspension fork allows you to adjust shock absorbing
                  levels according to terrains, provides comfort in any
                  conditions.
                </p>
              </div>
            </div>
            <div
              className="product-section-image"
              onMouseEnter={this.playVideo2}
            >
              <video
                ref={this.getVideo2}
                src={
                  "https://amplify-amplify6164c245e3204-staging-204824-deployment.s3.us-east-2.amazonaws.com/movies/3d_2_shocklock.mp4"
                }
                muted
                loop
                autoPlay
                playsInline
                webkit-playsinline
              ></video>
            </div>
          </div>
          <div className="section-1" onMouseEnter={this.playVideo3}>
            <div className="product-section-desc">
              <div>
                <h4>7-speed level for maximum support</h4>
                <p>
                  SHIMANO TOURNEY shift lever delivers easy and reliable
                  shifting for all riders.
                </p>
              </div>
            </div>
            <div
              className="product-section-image"
              onMouseEnter={this.playVideo3}
            >
              <video
                ref={this.getVideo3}
                src={
                  "https://amplify-amplify6164c245e3204-staging-204824-deployment.s3.us-east-2.amazonaws.com/movies/3d_3_shifter.mp4"
                }
                muted
                loop
                autoPlay
                playsInline
                webkit-playsinline
              ></video>
            </div>
          </div>

          <div className="section-2">
            <div
              className="product-section-desc"
              onMouseEnter={this.playVideo4}
            >
              <div>
                <h4>Powerful, light and quiet. </h4>
                <p>
                  With IP65 protection level, our motors are protected against
                  water jets at any angle.
                </p>
              </div>
            </div>

            <div
              className="product-section-image"
              onMouseEnter={this.playVideo4}
              onFocus={this.playVideo4}
            >
              <video
                ref={this.getVideo4}
                src={motorVideo}
                muted
                loop
                autoPlay
                playsInline
                webkit-playsinline
              ></video>
            </div>
          </div>

          <div className="section-1">
            <div className="product-section-desc">
              <div>
                <h4>SHIMANO 7-Speed Freewheel</h4>
                <p>
                  Ride anywhere with trustworthy Shimano TZ500 7-Speed 14-34t
                  Freewheel.
                </p>
              </div>
            </div>

            <div className="product-section-image">
              <img src={sectionImage1} />
            </div>
          </div>

          <div className="section-2">
            <div className="product-section-desc">
              <div>
                <h4>High Capacity Battery</h4>
                <p>
                  High Capacity Battery Detachable &amp; long lasting
                  battery(36V, 14AH) provides convenient charging experience
                  (fully charged within 5hrs) and allows riding up to 120km.
                </p>
              </div>
            </div>
            <div className="product-section-image">
              <img src={sectionBatteryImage} />
            </div>
          </div>
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
                    ROVER <strong>X</strong>
                  </h5>
                  <p className="sm">
                    Body length: 165 - 170 cm
                    <br />
                    Frame size: 45 - 49 cm
                  </p>
                  <h5>
                    ROVER <strong>Y</strong>
                  </h5>
                  <p className="sm">
                    Body length: 170 - 175 cm <br />
                    Frame size: 49 - 53 cm
                  </p>
                </div>
              </div>
            </div>
            <div className="spec-item">
              <h3 className="section-header collapse-start">METRIX DISPLAY</h3>
              <div className="spec-grid">
                <div className="spec-grid-item">
                  <h4>SPORT Mode</h4>
                  <p>Default: anti-glare, sport fashion digital display</p>
                </div>

                <div className="spec-grid-item">
                  <h4>SMART Mode</h4>
                  <p>
                    Add-on: full-colour full-color IPS screen display for an
                    addtional CAD100
                  </p>
                  <p>Easy replace and install</p>
                </div>
              </div>
            </div>

            <Collapse open={this.state.displayAllSections}>
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
                      Offers superior brake performance without the annoying
                      howls or vibration
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
                      Range: 80 - 120 km
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
                      or telemetry. The magneto strictive sensors provide you
                      with very accurate real-time data - even in extreme
                      environments.
                    </p>
                  </div>

                  <div className="spec-grid-item">
                    <h4>Uphill and long distance friendly</h4>
                    <p>
                      Enjoy climbing uphill or long distance rides without a
                      worry.
                    </p>
                    <p>
                      Our torque sensor system helps preserve battery
                      consumption. We want to make healthy living a lifestyle
                      for you!
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
                      The REVOSHIFT shifter allows riders to maintain a secure
                      and stable grip on the handlebar.
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
            </Collapse>
          </div>
          <div
            className="collapse-start-button"
            onClick={() => this.displayAllSectionsHandler()}
          >
            {this.state.displayAllSections == false ? (
              <AddCircleOutlineIcon fontSize="large" />
            ) : (
              <RemoveCircleOutlineIcon fontSize="large" />
            )}
          </div>
        </div>

      </div>
    );
  }
}

export default ProductPage;
