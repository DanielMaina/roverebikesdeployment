import React from "react";

import "./index.css";
import setTitle from "../../tools.js";
import promoVideo from "../../assets/movies/rover-e-Bike-short.mp4";
import componentImage from "../../assets/images/home_product_component.svg";
import FindStore from "components/FindStore";
import HomeProduct from "components/HomeProduct";
import Brands from "components/Brands";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    setTitle("Rover E-Bike | Home", true);

    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <div className="main-content">
          <video src={promoVideo} muted loop autoPlay></video>
        </div>

        <div className="offer-text">
          <p>
            EXCLUSIVE OFFER FOR A <span>LIMITED TIME ONLY</span> - FIRST 50
            ROVER E-BIKES ARE NOW ON SALE FOR <span>1,899 CAD!</span>
          </p>
        </div>
        <HomeProduct />

        <div
          className="product-component"
          style={{
            backgroundImage: "url(" + componentImage + ")",
          }}
        >
          <div className="product-component-description">
            <h4>Make it smart</h4>
            <p>
              Accessorize your ROVER e-bike with a full-colour{" "}
              <span>LED screen display</span>.
            </p>
          </div>
        </div>

        <FindStore />
        <Brands />
      </div>
    );
  }
}

export default HomePage;
