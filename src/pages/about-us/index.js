import React from "react";

import "./index.css";
import setTitle from "../../tools.js";
import headerImage from "../../assets/images/about-page-header.png";

class AboutUsPage extends React.Component {
  constructor() {
    super();

    setTitle("Rover E-Bike | ", true);

    this.state = {};
  }

  render() {
    return (
      <div className="about-page">
      <div className="main-content">
        <div
          className="main-content-bg"
          style={{
            backgroundImage: "url(" + headerImage + ")",
          }}
          alt="Main Content Asset"
        />

    </div>
    </div>
  );
  }
}

export default AboutUsPage;
