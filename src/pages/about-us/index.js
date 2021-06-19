import React from "react";

import "./index.css";
import setTitle from "../../tools.js";

class AboutUsPage extends React.Component {
  constructor() {
    super();

    setTitle("Rover E-Bike | ", true);

    this.state = {};
  }

  render() {
    return <div className="EMPTY-page"></div>;
  }
}

export default AboutUsPage;
