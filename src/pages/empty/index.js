import React from "react";

import "./empty.css";
import setTitle from "../../tools.js";

class EmptyPage extends React.Component {
  constructor() {
    super();

    setTitle("Rover E-Bike | ", true);

    this.state = {};
  }

  render() {
    return <div className="EMPTY-page"></div>;
  }
}

export default EmptyPage;

