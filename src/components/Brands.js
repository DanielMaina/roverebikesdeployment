import React from "react";
import Marquee from "react-fast-marquee";

import "../assets/styles/Brands.css";
import brandLogo1 from "assets/images/brands/mivice_logo.svg";
import brandLogo2 from "assets/images/brands/bdc_logo.svg";
import brandLogo3 from "assets/images/brands/vancity_logo.svg";
import brandLogo4 from "assets/images/brands/shimano_logo.svg";
import brandLogo5 from "assets/images/brands/greenway_logo.svg";
import brandLogo6 from "assets/images/brands/yong_logo.svg";

class Brands extends React.Component {
  render() {
    return (
      <div className="brands">
        <Marquee speed={80} pauseOnHover={true}>
          <div className="brand-logo">
            <img src={brandLogo1} alt="Brand Logo 1" />
          </div>
          <div className="brand-logo">
            <img src={brandLogo2} alt="Brand Logo 2" />
          </div>
          <div className="brand-logo">
            <img src={brandLogo3} alt="Brand Logo 3" />
          </div>
          <div className="brand-logo">
            <img src={brandLogo4} alt="Brand Logo 4" />
          </div>
          <div className="brand-logo">
            <img src={brandLogo5} alt="Brand Logo 5" />
          </div>
          <div className="brand-logo">
            <img src={brandLogo6} alt="Brand Logo 6" />
          </div>
        </Marquee>
      </div>
    );
  }
}

export default Brands;
