import { map } from "jquery";
import React from "react";

import "../assets/styles/Grid.css";

const Grid = (props) => {
  return (
    <div className="component-grid" style={props.style}>
      {props.items.map((item) => (
        <div className="component-grid-item">
          <div className="icon">{item.icon ? <img src={item.icon} /> : ""}</div>
          <h5 className="title">{item.title}</h5>
          <p className="content">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
