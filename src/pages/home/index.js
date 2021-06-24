import React from "react";

import "./index.css";
import setTitle from "../../tools.js";
import promoVideo from "../../assets/movies/rover-e-Bike-short.mp4";
import HomeProduct from "components/HomeProduct";

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

        <div className="center-seperator">
          <h5>Free shipping and 7 days free return Canada wide.</h5>
          <p>
            Different rates will be applied for US. Head to UPS website for more
            an estimated delivery fee.
          </p>
        </div> 

      </div>
    );
  }
}

export default HomePage;
