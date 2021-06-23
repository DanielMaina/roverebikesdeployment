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
          <a
            href="http://www.mivice.com/"
            className="brand-logo"
            target="_blank"
          >
            <img src={brandLogo1} alt="Brand Logo 1" />
          </a>
          <a
            href="https://www.bdc.ca/en"
            className="brand-logo"
            target="_blank"
          >
            <img src={brandLogo2} alt="Brand Logo 2" />
          </a>
          <a
            href="https://www.vancity.com/"
            className="brand-logo"
            target="_blank"
          >
            <img src={brandLogo3} alt="Brand Logo 3" />
          </a>
          <a
            href="https://www.shimano.com/en/"
            className="brand-logo"
            target="_blank"
          >
            <img src={brandLogo4} alt="Brand Logo 4" />
          </a>
          <a
            href="https://www.greenway-battery.com/"
            className="brand-logo"
            target="_blank"
          >
            <img src={brandLogo5} alt="Brand Logo 5" />
          </a>
          <a
            href="http://www.yongqi.bike/"
            className="brand-logo"
            target="_blank"
          >
            <img src={brandLogo6} alt="Brand Logo 6" />
          </a>
        </Marquee>
      </div>
    );
  }
}

export default Brands;
