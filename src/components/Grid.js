import { map } from "jquery";
import React from "react";

import "../assets/styles/Grid.css";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Grid = (props) => {
  const zoomOutProperties = {
    indicators: true,
    arrows: false,
    duration: 3000,
    pauseOnHover: false,
    transitionDuration: 500,
    indicators: (i) => <span href="#" className="grid-pager"></span>,
  };

  return (
    <div className="component-grid">
      <div className="component-grid-desktop" style={props.style}>
        {props.items.map((item, index) => (
          <div key={"grid-item-" + index} className="component-grid-item">
            <div className="icon">
              {item.icon ? <img src={item.icon} /> : ""}
            </div>
            <h5 className="title">{item.title}</h5>
            <p className="content">{item.content}</p>
          </div>
        ))}
      </div>
      <div className="component-grid-mobile" style={props.mobileStyle}>
        <Slide {...zoomOutProperties}>
          {props.items.map((item, index) => (
            <div
              key={"grid-item-mobile-" + index}
              className="component-grid-item"
            >
              <div className="icon">
                {item.icon ? <img src={item.icon} /> : ""}
              </div>
              <h5 className="title">{item.title}</h5>
              <p className="content">{item.content}</p>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Grid;
